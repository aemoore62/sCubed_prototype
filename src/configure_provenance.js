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
 * @fileoverview Functions to configure provenance.
 * @author Abigail Elizabeth 
 */

/**
 * Check if provenance has been configured in sheet.
 * @return {[string]} provenanceType - The type of provenance that's configured.
 * @todo Replace hard-coded spreadsheet property name with global vars.
*/
const checkIfProvenanceIsConfigured = () => {
  const provenanceType = getValueFromSpreadsheetProperty('scubed_provenance_type');

  return provenanceType;
}

/**
 * Configure summary-level provenance.
 * @param {Object} formsSpreadsheet - The spreadsheet with the sCubed forms.
 * @todo Replace hard-coded provenance type with global var.
*/
const configureSummaryProvenance = (formsSpreadsheet) => {

  const existingProvenanceType = checkIfProvenanceIsConfigured();

  if (existingProvenanceType !== null) {
    SpreadsheetApp.getUi().alert('You already configured provenance!');
    return;

  } else {
    const provenanceType = 'summary';

    configureProvenance(provenanceType, formsSpreadsheet)

  }
}

/**
 * Configure activity-level provenance.
 * @param {Object} formsSpreadsheet - The spreadsheet with the sCubed forms.
 * @todo Replace hard-coded provenance type with global var.
*/
const configureActivityProvenance = (formsSpreadsheet) => {
  const existingProvenanceType = checkIfProvenanceIsConfigured();

  if (existingProvenanceType != null) {
    SpreadsheetApp.getUi().alert('You already configured provenance!');
    return;

  } else {
    const provenanceType = 'activity';
    formsSpreadsheet.insertSheet('processExecution');
    configureProvenance(provenanceType, formsSpreadsheet);

  }
}

/**
 * Configure provenance.
 * @param {array} provenanceType - The provenance that is configured.
 * @param {Object} formsSpreadsheet - The spreadsheet with the sCubed forms.
 * @todo Replace hard-coded provenance type with global var.
*/
const configureProvenance = (provenanceType, formsSpreadsheet) => {
  setSpreadsheetProperty('scubed_provenance_type', provenanceType);
  addProvenanceColumns(provenanceType, formsSpreadsheet);

  var provenanceType = getValueFromSpreadsheetProperty('scubed_provenance_type');

}


/**
 * Add columns that are specific to the level of provenance selected for configuration.
 * @todo Determine if you're using this function. If so, clean up.
*/
const addProvenanceColumns = (provenanceType, formsSpreadsheet) => {

  // Name each relevant sheet
  const formNames = ['materialDefinition', 'workflowManagement', 'dataValidation'];

  if (provenanceType === 'activity') {
    formNames.push('processExecution')

  }

  for (let formNameIndex = 0; formNameIndex < formNames.length; formNameIndex++) {
    let sheet = formsSpreadsheet.getSheetByName(formNames[formNameIndex])
    let lastColumnNumber = sheet.getLastColumn();

    if (formNames[formNameIndex] === 'materialDefinition' && provenanceType === 'summary') {
      let columnNames = [['derived_from_lot_number_reference', 'composed_from_lot_number_reference', 'summary_of_provenance_reference']];
      let columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames);

    } else if (formNames[formNameIndex] === 'workflowManagement' && provenanceType === 'summary') {
      let columnNames = [['summary_of_provenance_name', 'process_specification_reference']];
      let columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames);

      // order the columns
      let orderedColumnNames = ['workflow_entity_type', 'summary_of_provenance_name', 'workflow_name', 'process_specification_name', 'workflow_name_reference', 'process_type', 'process_type_reference', 'workflow_sequence_number', 'process_specification_reference', 'workflow_name_reference', 'helper_is_mini_table_header', 'helper_mini_table_guid'];
      sortColumns(orderedColumnNames, sheet)



    } else if (formNames[formNameIndex] === 'processExecution' && provenanceType === 'activity') {

      let columnNames = [['workflow_instance_id', 'workflow_instance_step_number', 'repitition_number', 'process_type', 'person_id', 'start_date', 'start_time', 'end_date', 'end_time', 'helper_is_mini_table_header', 'helper_mini_table_guid']];
      let columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames);

    } else if (formNames[formNameIndex] === 'dataValidation' && provenanceType === 'summary') {

      let columnNames = [['material_lot_number_available_as_parent']];

      const columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    } else if (formNames[formNameIndex] === 'dataValidation' && provenanceType === 'activity') {
      let columnNames = [['material_lot_number', 'organismal_entity_lot_number', 'media_lot_number', 'growth_environment_lot_number', 'substance_lot_number', 'homogenizer_lot_number',
        'autoclave_lot_number', 'centrifuge_lot_number', 'lyophilizer_lot_number', 'container_lot_number', 'pooled_specimen_lot_number', 'solution_lot_number', 'output_organismal_entity_lot_number', 'output_growth_environment_lot_number', 'output_substance_lot_number', 'output_pooled_specimen_lot_number', 'parent_for_provenance_summary']]
      const columnNamesRange = sheet.getRange(1, lastColumnNumber + 1, 1, columnNames[0].length);
      columnNamesRange.setValues(columnNames)

    }

  }

}