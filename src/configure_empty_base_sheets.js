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
 * @fileoverview Functions to configure base sheets.
 * @author Abigail Elizabeth 
 * See configure_empty_base for behavior.
 */

/**
 * Create empty forms sheets, i.e. just make the tabs without any column names, validation, formatting, etc.
 * @param {string} formsSpreadsheetID - The ID of the user's instance of the forms spreadsheet.
 * @param {array} provenanceType - The provenance that is configured.
 * @todo Replace hard-coded form names and provenance types with global vars.
*/
const createEmptySCubedSheets = (formsSpreadsheet, provenanceType) => {

  // Name each sheet
  const formNames = ['conceptDefinition', 'materialDefinition', 'processDefinition', 'workflowManagement', 'dataValidation']; // 'processExecution' not in core!

  // Create each sheet
  for (let formNameIndex = 0; formNameIndex < formNames.length; formNameIndex++) {
    SpreadsheetApp.flush(); // IMPORTANT. Prevents "Exception: Service Spreadsheets timed out while accessing document"
    let currentSheetName = formNames[formNameIndex];
    formsSpreadsheet.insertSheet(currentSheetName)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(currentSheetName);
    limitRowNumbersTo(sheet, 50)

    /**
         * WARNING! Adding columns names is in a separate function from adding the data validation, conditional formatting, and value formatting 
         * so that the colnames are present by the time data validation is run. Instantiating data validation relies on the columns names being
         * present to create drop-down lists that are populated from a range.
         */
    if (formNames[formNameIndex] === 'conceptDefinition') {
      var sheet = formsSpreadsheet.getSheetByName('conceptDefinition');

      // Establish column names
      let columnNames = globalCubeCoreAttributes.conceptDefinition;
      columnNames = [columnNames];
      let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)
    } else if (formNames[formNameIndex] === 'materialDefinition') {

      var sheet = formsSpreadsheet.getSheetByName('materialDefinition');
      let columnNames = globalCubeCoreAttributes.materialDefinition;
      columnNames = [columnNames];

      let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames);

    } else if (formNames[formNameIndex] === 'processDefinition') {
      var sheet = formsSpreadsheet.getSheetByName('processDefinition')
      let columnNames = globalCubeCoreAttributes.processDefinition;
      columnNames = [columnNames];
      let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    } else if (formNames[formNameIndex] === 'dataValidation') {
      var sheet = formsSpreadsheet.getSheetByName('dataValidation');
      let columnNames = globalCubeCoreAttributes.dataValidation;
      columnNames = [columnNames];
      let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)


    } else if (formNames[formNameIndex] === 'workflowManagement') {
      var sheet = formsSpreadsheet.getSheetByName('workflowManagement');

      if (provenanceType === 'activity') {
        var columnNames = globalCubeCoreAttributes.workflowManagement.activityLevel;

      } else if (provenanceType === 'summary') {
        var columnNames = globalCubeCoreAttributes.workflowManagement.summaryLevel;

      }

      columnNames = [columnNames];
      let columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    }

  }

}