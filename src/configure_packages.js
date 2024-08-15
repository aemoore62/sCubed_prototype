/**
 * @license
 * 
 * Copyright 2023 Abigail Elizabeth (ORCID ID 0000-0001-8627-777X)
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Functions to configure packages (not provenance!).
 * @author Abigail Elizabeth 
 */

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 */

function displayPackageOptionsSidebar() {
  SpreadsheetApp.getUi()
    .showSidebar(HtmlService.createTemplateFromFile('configure_packages_sidebar')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setTitle('Configure sCubed'));
}

/**
 * Opens a sidebar in the document containing the loading message.
 */

function displayLoadingConfigurationSidebar() {
  SpreadsheetApp.getUi()
    .showSidebar(HtmlService.createTemplateFromFile('configure_loading_page')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setTitle('Configure sCubed'));
}

/**
 * Opens a sidebar in the document containing the loading done message.
 */

function displayDoneSidebar() {
  SpreadsheetApp.getUi()
    .showSidebar(HtmlService.createTemplateFromFile('done_page')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setTitle('Done'));
}


/**
 * Add columns for packages
 * @param {string} checkElement - The list of packages.
 * @todo Replace hard-coded form names, provenant types, and spreadsheet property names with global vars.
 */
const addColumnsFromPackage = (checkElement) => {
  // Get active spreadsheet ID
  const formsSpreadsheetID = SpreadsheetApp.getActiveSpreadsheet().getId();
  const formsSpreadsheet = SpreadsheetApp.openById(formsSpreadsheetID);
  const provenanceType = checkElement.provenance;
  displayLoadingConfigurationSidebar();
  createEmptySCubedSheets(formsSpreadsheet, provenanceType);

  var sCubedPackagesToAdd = checkElement.checkBox;
  if (typeof sCubedPackagesToAdd === 'string') {
    var sCubedPackagesToAdd = [sCubedPackagesToAdd];

  }

  if (provenanceType == "activity") {
    configureActivityProvenance(formsSpreadsheet);

  } else if (provenanceType == "summary") {
    configureSummaryProvenance(formsSpreadsheet);

  }

  var existingPackages = getValueFromSpreadsheetProperty('scubed_packages');

  if (existingPackages === null) {
    var existingPackages = ['core'];

  } else if (existingPackages.indexOf('core') === -1) {

    var existingPackages = existingPackages.concat('core');

  }

  var scubedConfigPackages = existingPackages.concat(sCubedPackagesToAdd);
  var scubedConfigPackages = JSON.stringify(scubedConfigPackages);
  setSpreadsheetProperty('scubed_packages', scubedConfigPackages);

  // Name each sheet
  const formNames = ['conceptDefinition', 'materialDefinition', 'processDefinition', 'workflowManagement', 'processExecution', 'dataValidation']; // 'processExecution' not in core!

  // Create each sheet
  for (let formNameIndex = 0; formNameIndex < formNames.length; formNameIndex++) {
    var sheet = formsSpreadsheet.getSheetByName(formNames[formNameIndex]);

    /**
         * WARNING! Adding columns names is in a separate function from adding the data validation, conditional formatting, and value formatting 
         * so that the colnames are present by the time data validation is run. Instantiating data validation relies on the columns names being
         * present to create drop-down lists that are populated from a range.
         */
    if (formNames[formNameIndex] === 'conceptDefinition' && sCubedPackagesToAdd.indexOf('organism items') > -1) {

      let lastColumnNumber = sheet.getLastColumn();
      // Establish column names
      let columnNames = globalCubeOrganismAttributes.conceptDefinition;
      columnNames = [columnNames];

      let columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    } else if (formNames[formNameIndex] === 'materialDefinition') {
      let columnNames = globalCubeCoreAttributes.materialDefinition;
      columnNames = [columnNames];

      let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    } else if (formNames[formNameIndex] === 'processDefinition' && sCubedPackagesToAdd.indexOf('CIDC') > -1) {
      var lastColumnNumber = sheet.getLastColumn();

      let columnNames = globalCubeInVitroCellCultureAttributes.processDefinition;
      columnNames = [columnNames];
      let columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    } else if (formNames[formNameIndex] === 'dataValidation') {
      let columnNames = globalCubeCoreAttributes.dataValidation;
      columnNames = [columnNames];
      let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    } else if (formNames[formNameIndex] === 'workflowManagement') {

      if (provenanceType === 'activity') {
        let columnNames = globalCubeCoreAttributes.workflowManagement.activityLevel;
        columnNames = [columnNames];
        let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
        columnNamesRange.setValues(columnNames)

      } else if (provenanceType === 'summary') {

        let columnNames = globalCubeCoreAttributes.workflowManagement.summaryLevel;
        columnNames = [columnNames];
        let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
        columnNamesRange.setValues(columnNames)

      }

      if (sCubedPackagesToAdd.indexOf('CIDC') > -1) {
        var lastColumnNumber = sheet.getLastColumn();

        let columnNames = globalCubeInVitroCellCultureAttributes.workflowManagement;
        columnNames = [columnNames];

        const columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
        columnNamesRange.setValues(columnNames)

      }

    }

    if (formNames[formNameIndex] === 'processExecution' && sCubedPackagesToAdd.indexOf('CIDC') > -1 && provenanceType === 'activity') {
      // Establish column names
      let lastColumnNumber = sheet.getLastColumn();
      let columnNames = globalCubeInVitroCellCultureAttributes.processExecution;
      columnNames = [columnNames];

      const columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    }

    if (formNames[formNameIndex] === 'workflowManagement' && provenanceType === 'summary') {
      var lastColumnNumber = sheet.getLastColumn();

      let columnNames = [['summary_of_provenance_name', 'process_specification_reference']];

      const columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

      // order the columns
      let orderedColumnNames = ['workflow_entity_type', 'summary_of_provenance_name', 'workflow_name', 'process_specification_name', 'workflow_name_reference', 'process_type', 'process_type_reference', 'workflow_sequence_number', 'process_specification_reference', 'workflow_name_reference', 'helper_is_mini_table_header', 'helper_mini_table_guid'];
      sortColumns(orderedColumnNames, sheet)


    } /*else if (formNames[formNameIndex] === 'materialDefinition' && provenanceType === 'summary') {
          var lastColumnNumber = sheet.getLastColumn();
          let columnNames = [['derived_from_lot_number','composed_from_lot_number','summary_of_provenance_reference']];

  const columnNamesRange = sheet.getRange(1,lastColumnNumber+1,1,columnNames[0].length);
  columnNamesRange.setValues(columnNames) 

        }*/

  }
  SpreadsheetApp.flush();

  let spreadsheetState = getSpreadsheetState();

  mainCreateFormsSheetsCore(spreadsheetState); //new
  mainCreateFormsSheetsActivity(spreadsheetState);//new

  displayDoneSidebar();

}