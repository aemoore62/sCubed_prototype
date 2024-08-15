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
 * @fileoverview Functions to configure data validation (not value formatting!)
 * for the core, which can be built upon by configuring data validation for
 * activity-level provenance.
 * @author Abigail Elizabeth 
 * See configure_core_validation for behavior.
 */

/**
 * Configure validation in the core sheets.
 * @param {Object} spreadsheetState - The state of the spreadsheet.
 * @todo Replace hard-coded form names and packages with global var.
*/

const mainCreateFormsSheetsCore = (spreadsheetState) => {
  var existingPackages = spreadsheetState.packages;

  const formNames = ['conceptDefinition', 'materialDefinition', 'processDefinition', 'workflowManagement']; //

  // Check if sCubed sheets already exist
  const existingSheets = getAllSheetNames();
  const sCubedSheetsExist = existingSheets.some(r => formNames.indexOf(r) >= 0);

  if (sCubedSheetsExist === true) {
    // Create the five sheets as empty tabs
    SpreadsheetApp.flush();

    if (existingPackages === null) {
      var existingPackages = ['core'];
      setSpreadsheetProperty('scubed_packages', ['core'])

    } else if (existingPackages.indexOf('core') === -1) {
      var existingPackages = ['core'];
      setSpreadsheetProperty('scubed_packages', ['core'])

    }

    // NEED TO CREATE DATA VALIDATION SHEET

    createTemplateConceptDefinitionCore(spreadsheetState);
    createTemplateMaterialDefinitionCore(spreadsheetState);
    createTemplateProcessDefinitionCore(spreadsheetState);
    createTemplateWorkflowManagementCore(spreadsheetState);

  } else {
    SpreadsheetApp.getUi().alert("I don't see all of the sCubed forms. Did you already run Configure forms > 1. Create blank forms?")
  }

}

/**
 * Configure conditional formatting, value formatting, and help text in the
 * conceptDefinition sheet.
 * @param {Object} spreadsheetState - The state of the spreadsheet.
*/
const createTemplateConceptDefinitionCore = (spreadsheetState) => {
  const scubedConfigPackages = spreadsheetState.packages;
  var sheet = spreadsheetState.conceptDefinition.sheet//formsSpreadsheet.getSheetByName("conceptDefinition");

  const totalRows = 50//spreadsheetState.conceptDefinition.maxRow //sheet.getMaxRows();
  const totalColumns = spreadsheetState.conceptDefinition.maxColumn //sheet.getMaxColumns();
  limitRowNumbersTo(sheet, 50, totalRows);
  setBasicFormattingForm(sheet, totalRows, totalColumns);

  // Change background color for first column
  const firstColumnRange = sheet.getRange(2, 1, totalRows, 1);
  const firstColumnBackgroundColor = getCurrentHexFromColorPalette('sand dollar');
  firstColumnRange.setBackground(firstColumnBackgroundColor);

  // Apply conditional formatting
  applyConditionalFormattingConceptDefinitionForm(sheet, scubedConfigPackages);

  // Apply value formatting
  // Apply simple help text
  let columnNames = sheet.getRange(1, 1, 1, totalColumns).getValues()[0];
  applyValueFormatHelpTextToForm(spreadsheetState, 'conceptDefinition');

  setAdditionalFormattingForm(sheet, totalRows, totalColumns, columnNames, "conceptDefinition");

  const conceptDefintionFormTabColor = getHexFromColorPalette('black sand')
  sheet.setTabColor(conceptDefintionFormTabColor);

}

/**
 * Configure conditional formatting, value formatting, and help text in the
 * materialDefinition.
 * @param {Object} spreadsheetState - The state of the spreadsheet.
 * @todo Replace hard-coded form names with global var.
*/
const createTemplateMaterialDefinitionCore = (spreadsheetState) => {
  const scubedPackages = spreadsheetState.packages;

  var sheet = spreadsheetState.materialDefinition.sheet

  //const sheet = formsSpreadsheet.getSheetByName("materialDefinition");
  const totalRows = 50//spreadsheetState.materialDefinition.maxRow  //sheet.getMaxRows();
  const totalColumns = spreadsheetState.materialDefinition.maxColumn //sheet.getMaxColumns();
  let totalColumns2 = spreadsheetState.materialDefinition.lastColumn //sheet.getLastColumn();
  limitRowNumbersTo(sheet, 50, totalRows);
  setBasicFormattingForm(sheet, totalRows, totalColumns);

  // Change background color for first column
  const firstColumnRange = sheet.getRange(2, 1, totalRows, 1);
  const firstColumnBackgroundColor = getCurrentHexFromColorPalette('clear water');
  firstColumnRange.setBackground(firstColumnBackgroundColor);

  // Apply conditional formatting
  applyConditionalFormattingMaterialDefinitionForm(sheet, scubedPackages);

  // Apply value formatting
  // Apply helpt text
  let columnNames = sheet.getRange(1, 1, 1, totalColumns2).getValues()[0];
  applyValueFormatHelpTextToForm(spreadsheetState, "materialDefinition");

  setAdditionalFormattingForm(sheet, totalRows, totalColumns, columnNames, "materialDefinition");

  const conceptDefintionFormTabColor = getHexFromColorPalette('aqua shadow')
  sheet.setTabColor(conceptDefintionFormTabColor);

}

/**
 * Configure conditional formatting, value formatting, and help text in the
 * processDefinition.
 * @param {Object} spreadsheetState - The state of the spreadsheet.
 * @todo Replace hard-coded form names with global vars.
*/
const createTemplateProcessDefinitionCore = (spreadsheetState) => {
  const scubedPackages = spreadsheetState.packages;
  var sheet = spreadsheetState.processDefinition.sheet

  //const sheet = formsSpreadsheet.getSheetByName("processDefinition");
  const totalRows = 50 //spreadsheetState.processDefinition.maxRow //sheet.getMaxRows();
  const totalColumns = spreadsheetState.processDefinition.maxColumn //sheet.getMaxColumns();

  limitRowNumbersTo(sheet, 50, totalRows);

  setBasicFormattingForm(sheet, totalRows, totalColumns);

  // Change background color for first column
  const firstColumnRange = sheet.getRange(2, 1, totalRows, 1);
  let firstColumnBackgroundColor = '';
  firstColumnBackgroundColor = getCurrentHexFromColorPalette('bright caterpillar');
  firstColumnRange.setBackground(firstColumnBackgroundColor);

  // Apply conditional formatting
  applyConditionalFormattingProcessDefinitionForm(sheet, scubedPackages);

  // Apply value formatting
  // Apply helpt text
  let columnNames = sheet.getRange(1, 1, 1, totalColumns).getValues()[0];

  applyValueFormatHelpTextToForm(spreadsheetState, "processDefinition");

  setAdditionalFormattingForm(sheet, totalRows, totalColumns, columnNames, "processDefinition");

  const conceptDefintionFormTabColor = getHexFromColorPalette('leaf')
  sheet.setTabColor(conceptDefintionFormTabColor);

}

/**
 * Configure conditional formatting, value formatting, and help text in the
 * workflowManagement.
 * @param {Object} spreadsheetState - The state of the spreadsheet.
 * @todo Replace hard-coded form names with global vars.
*/
const createTemplateWorkflowManagementCore = (spreadsheetState) => {
  const scubedPackages = spreadsheetState.packages;
  var sheet = spreadsheetState.workflowManagement.sheet
  const totalRows = 50 //spreadsheetState.workflowManagement.maxRow //sheet.getMaxRows();
  const totalColumns = spreadsheetState.workflowManagement.maxColumn //sheet.getMaxColumns();
  limitRowNumbersTo(sheet, 50, totalRows);
  setBasicFormattingForm(sheet, totalRows, totalColumns);

  // Change background color for first column
  const firstColumnRange = sheet.getRange(2, 1, totalRows, 1);
  const firstColumnBackgroundColor = getCurrentHexFromColorPalette('lilac');
  firstColumnRange.setBackground(firstColumnBackgroundColor);

  // Apply conditional formatting
  applyConditionalFormattingWorkflowManagementForm(sheet, scubedPackages);

  // Apply value formatting
  // Apply simple help text
  let columnNames = sheet.getRange(1, 1, 1, totalColumns).getValues()[0];
  applyValueFormatHelpTextToForm(spreadsheetState, "workflowManagement")

  setAdditionalFormattingForm(sheet, totalRows, totalColumns, columnNames, "workflowManagement");

  const conceptDefintionFormTabColor = getHexFromColorPalette('mauve')
  sheet.setTabColor(conceptDefintionFormTabColor);

}

/**
 * Configure data validation for core sheets.
 * @todo Replace hard-coded form names with global vars.
*/

const addDataValidtionToTemplateCore = () => {
  var scubedConfigPackages = getValueFromSpreadsheetProperty('scubed_packages')

  // handle instances where user skips adding context packages
  // TODO auto add 'core' as property for scubed_packages when core is initiated
  if (scubedConfigPackages === null) {
    var scubedConfigPackages = 'core';

  }

  const formNames = ['materialDefinition', 'workflowManagement', 'processDefinition', 'conceptDefinition']; //  UNCOMMENT

  for (var formIndex = 0; formIndex < formNames.length; formIndex++) {

    var sheet = spreadsheetState[formNames[formIndex]].sheet//formsSpreadsheet.getSheetByName(formNames[formIndex]);
    applyDataValidationForm(sheet, scubedConfigPackages);


  }


}
