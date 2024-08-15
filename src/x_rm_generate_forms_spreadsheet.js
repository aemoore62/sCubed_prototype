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
 * @fileoverview Manages utilities for handling HTML forms.
 * @author Abigail Elizabeth 
 */

/**
 * Create empty forms sheets
 * @param {string} formsSpreadsheetID - The ID of the user's instance of the forms spreadsheet.
*/
const createSCubedFormsSheets = formsSpreadsheetID => {
  const formsSpreadsheet = SpreadsheetApp.openById(formsSpreadsheetID);
  /*
    // Name each sheet
    const formNames = ['conceptDefinition','materialDefinition','processDefinition','workflowManagement','processExecution']
    for ( let formNameIndex = 0; formNameIndex < formNames.length; formNameIndex++) {
      let currentSheetName = formNames[formNameIndex];
      formsSpreadsheet.insertSheet(currentSheetName) 
      
    } 
  
    // Delete default sheet
    const defaultSheet = formsSpreadsheet.getSheetByName("Sheet1");
    formsSpreadsheet.setActiveSheet(defaultSheet);
    formsSpreadsheet.deleteActiveSheet();  
  
    // Setup each sheet form
    // conceptDefinition
    const conceptDefinitionSheet = formsSpreadsheet.getSheetByName('conceptDefinition');
    createTemplateConceptDefinition(conceptDefinitionSheet);
    const conceptDefintionFormTabColor = getHexFromColorPalette('black sand')
    conceptDefinitionSheet.setTabColor(conceptDefintionFormTabColor);
  
    // materialDefinition
    const materialDefinitionSheet = formsSpreadsheet.getSheetByName('materialDefinition');
    createTemplateMaterialDefinition(materialDefinitionSheet);
    const materialDefintionFormTabColor = getHexFromColorPalette('aqua shadow');
    materialDefinitionSheet.setTabColor(materialDefintionFormTabColor);
   
  
    // processDefinition
    const processDefinitionSheet = formsSpreadsheet.getSheetByName('processDefinition');
    createTemplateProcessDefinition(processDefinitionSheet);
    const processDefintionFormTabColor = getHexFromColorPalette('leaf');
    processDefinitionSheet.setTabColor(processDefintionFormTabColor);
   
    // workflowManagement
    const workflowManagementSheet = formsSpreadsheet.getSheetByName('workflowManagement');
    createTemplateWorkflowManagement(workflowManagementSheet);
    const workflowManagementFormTabColor = getHexFromColorPalette('mauve');
    workflowManagementSheet.setTabColor(workflowManagementFormTabColor);
    */
  // processExecution
  const processExecutionSheet = formsSpreadsheet.getSheetByName('processExecution');
  createTemplateProcessExecution(processExecutionSheet);
  const processExecutionFormTabColor = getHexFromColorPalette('swamp');
  processExecutionSheet.setTabColor(processExecutionFormTabColor);


};

/**
 * @fileoverview Manages function to create the template for the concepDefintion form.
 * @author Abigail Moore <AbigailEMoore@uga.edu>
 */

const createTemplateConceptDefinition = sheet => {

  // Establish column names
  let columnNames = [['concept_type', 'organization_id', 'organization_title', 'orcid', 'first_name', 'last_name', 'source_strain', 'non_source_strain', 'biological_taxon_type', 'species', 'strain', 'has_taxonomy_identifier', 'has_taxonomy_identifier_as_reference', 'has_other_organism_grouping', 'biological_taxon_as_reference', 'curator_organization_taxonomy_reference', 'taxonomic_rank', 'taxonomy_id', 'material_supplier', 'material_type', 'catalog_number', 'is_external_catalog_number', 'substance_type', 'organismal_entity_type', 'has_taxonomy_id', 'biological_taxon_for_organismal_entity', 'has_strain_taxonomy_id', 'type_of_collection_of_organisms', 'strain_taxonomy_reference', 'device_type', 'container_type', 'is_mixed_organism_group', 'substance_name', 'organism_group', 'other_organism_grouping_reference', 'strain_type', 'species_reference', 'strain_reference', 'strain', 'taxonomy_id_strain_reference', 'planned_growth_configuration', 'volume_amount', 'volume_unit', 'comment', 'helper_is_mini_table_header', 'helper_mini_table_guid']];

  const columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
  columnNamesRange.setValues(columnNames)

  setBasicFormattingForm(sheet)

  // Change background color for first column
  const totalRows = sheet.getMaxRows();
  const firstColumnRange = sheet.getRange(2, 1, totalRows, 1);
  const firstColumnBackgroundColor = getCurrentHexFromColorPalette('sand dollar');
  firstColumnRange.setBackground(firstColumnBackgroundColor);

  // Apply conditional formatting
  //applyConditionalFormattingConceptDefintionForm(sheet);

  // Apply data validation
  //applyDataValidationForm(sheet);

  // Apply value formatting
  //applyValueFormattingForm(sheet);

}

/**
 * @fileoverview Manages function to create the template for the materialDefintion form.
 * @author Abigail Moore <AbigailEMoore@uga.edu>
 */

const createTemplateMaterialDefinition = sheet => {

  // Establish column names
  let columnNames = [['action', 'inhouse_material_registration_type', 'inhouse_catalog_number', 'material_supplier_catalog_number', 'lot_number', 'lot_number_reference', 'barcode', 'helper_is_mini_table_header', 'helper_mini_table_guid']];

  const columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
  columnNamesRange.setValues(columnNames)

  setBasicFormattingForm(sheet)

  // Change background color for first column
  const totalRows = sheet.getMaxRows();
  const firstColumnRange = sheet.getRange(2, 1, totalRows, 1);
  const firstColumnBackgroundColor = getCurrentHexFromColorPalette('clear water');
  firstColumnRange.setBackground(firstColumnBackgroundColor);

  // Apply conditional formatting
  applyConditionalFormattingMaterialDefintionForm(sheet);

  // Apply data validation
  applyDataValidationForm(sheet);

  // Apply value formatting
  applyValueFormattingForm(sheet);

  // Apply simple help text
  applyHelpTextToForm(sheet);

}

/**
 * @fileoverview Manages function to create the template for the processDefintion form.
 * @author Abigail Moore <AbigailEMoore@uga.edu>
 */

const createTemplateProcessDefinition = sheet => {

  // Establish column names
  let columnNames = [['process_type', 'process_id', 'medium_total_volume', 'medium_total_volume_uom', 'has_fixed_seed_amount', 'seed_amount_type', 'seed_amount_ratio', 'seed_amount_count', 'seed_amount_ratio_uom', 'has_fixed_growth_rate', 'growth_rate_amount_numerical', 'growth_rate_amount_uom', 'growth_rate_amount_textual', 'has_fixed_pH', 'pH', 'has_fixed_gas_composition', 'gas_composition_unit_type', 'gas_composition_amount', 'gas_composition_percent_amount', 'gas_composition_amount_percent_uom', 'has_fixed_humidity', 'humidity_type', 'relative_humidity_amount_individual_number', 'relative_humidity_amount_uom', 'has_fixed_stirring', 'stirring_amount', 'stirring_amount_uom', 'has_fixed_temperature', 'temperature_type', 'temperature_amount', 'temperature_amount_uom', 'has_fixed_harvest_criteria', 'has_multiple_harvest_criteria', 'harvest_criteria_relationship', 'harvest_criteria_amount_type', 'harvest_criteria_amount_ratio', 'harvest_criteria_amount_uom_ratio', 'ratio_result_type', 'temperature_type', 'temperature_amount', 'temperature_amount_uom', 'per_wash_solution_volume_amount', 'per_wash_solution_volume_amount_uom', 'optical_density', 'helper_mini_table_guid', 'helper_is_mini_table_header']];
  const columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
  columnNamesRange.setValues(columnNames)

  setBasicFormattingForm(sheet)

  // Change background color for first column
  const totalRows = sheet.getMaxRows();
  const firstColumnRange = sheet.getRange(2, 1, totalRows, 1);
  const firstColumnBackgroundColor = getCurrentHexFromColorPalette('bright caterpillar');
  firstColumnRange.setBackground(firstColumnBackgroundColor);

  // Apply conditional formatting
  applyConditionalFormattingProcessDefintionForm(sheet);

  // Apply data validation
  applyDataValidationForm(sheet);

  // Apply value formatting
  applyValueFormattingForm(sheet);

  // Apply simple help text
  applyHelpTextToForm(sheet);

}

/**
 * @fileoverview Manages function to create the template for the workflowManagement form.
 * @author Abigail Moore <AbigailEMoore@uga.edu>
 */

const createTemplateWorkflowManagement = sheet => {

  // Establish column names
  let columnNames = [['workflow_entity_type', 'workflow_name', 'workflow_sequence_number', 'process_specification_name', 'workflow_name_reference', 'process_type', 'process_type_reference', 'passage_id', 'optical_density_measurement_id', 'contamination_measurement_id', 'seed_id', 'fermentation_id', 'harvest_culture_growth_environment_id', 'weight_measurement_id', 'contamination_measurement_id', 'resuspension_id', 'aliquoting_id', 'snap_freeze_id', 'spot_bleach_id', 'wash_id', 'counting_id', 'helper_is_mini_table_header', 'helper_mini_table_guid']];

  const columnNamesRange = sheet.getRange(1, 1, 1, columnNames[0].length);
  columnNamesRange.setValues(columnNames)

  setBasicFormattingForm(sheet)

  // Change background color for first column
  const totalRows = sheet.getMaxRows();
  const firstColumnRange = sheet.getRange(2, 1, totalRows, 1);
  const firstColumnBackgroundColor = getCurrentHexFromColorPalette('lilac');
  firstColumnRange.setBackground(firstColumnBackgroundColor);

  // Apply conditional formatting
  applyConditionalFormattingWorkflowManagementForm(sheet);

  // Apply data validation
  applyDataValidationForm(sheet);

  // Apply value formatting
  applyValueFormattingForm(sheet);

  // Apply simple help text
  applyHelpTextToForm(sheet);

}

