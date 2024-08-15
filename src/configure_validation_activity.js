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
 * for activity-level provenance, which builds on data validation for the core.
 * @author Abigail Elizabeth 
 */

/**
 * Configure validation in the processExecution and dataValidation sheets 
 * for activity-level provenance.
 * @param {Object} spreadsheetState - The state of the spreadsheet.
 * @todo Replace hard-coded provenance type with global var.
*/
const mainCreateFormsSheetsActivity = (spreadsheetState) => {
  const provenanceType = spreadsheetState.provenance;
  SpreadsheetApp.flush();

  if (provenanceType === 'activity') {
    createTemplateProcessExecution(spreadsheetState);

  } else {
    SpreadsheetApp.getUi().alert("You didn't enable activities so you don't need to complete this step.")
  }

}

/**
 * Configure conditional formatting, value formatting, and help text in the
 * processExecution sheet.
 * @param {Object} spreadsheetState - The state of the spreadsheet.
 * @todo Replace hard-coded spreadsheet name with global var.
*/
const createTemplateProcessExecution = (spreadsheetState) => {
  const scubedPackages = spreadsheetState.packages;
  const provenanceType = spreadsheetState.provenance;

  var sheet = spreadsheetState.processExecution.sheet//formsSpreadsheet.getSheetByName("processExecution");
  const totalRows = 50//spreadsheetState.processExecution.maxRow //sheet.getMaxRows();
  const totalColumns = spreadsheetState.processExecution.maxColumn //sheet.getMaxColumns();

  limitRowNumbersTo(sheet, 50, totalRows)

  setBasicFormattingForm(sheet, totalRows, totalColumns)

  // Change background color for first column
  sheet.getRange(2, 1, totalRows, 1).setBackground('#d9d9d9');
  const secondColumnRange = sheet.getRange(2, 4, totalRows, 1);
  const firstColumnBackgroundColor = getCurrentHexFromColorPalette('green algae');
  secondColumnRange.setBackground(firstColumnBackgroundColor);


  // Apply conditional formatting
  applyConditionalFormattingProcessExecutionForm(sheet, scubedPackages, provenanceType);

  // Apply value formatting
    // Apply simple help text
  let columnNames = sheet.getRange(1, 1, 1, totalColumns).getValues()[0];
  applyValueFormatHelpTextToForm(spreadsheetState, "processExecution");
  setAdditionalFormattingForm(sheet, totalRows, totalColumns, columnNames, "processExecution");
  const conceptDefintionFormTabColor = getHexFromColorPalette('swamp');
  sheet.setTabColor(conceptDefintionFormTabColor);

}

/**
 * Apply data validation to the processExecution sheet.
*/
const addDataValidtionToTemplateActivity = () => {
  var scubedConfigPackages = getValueFromSpreadsheetProperty('scubed_packages')
  var provenanceType = getValueFromSpreadsheetProperty('scubed_provenance_type')

  if (provenanceType === 'activity') {
    var sheet = spreadsheetState.processExecution.sheet//formsSpreadsheet.getSheetByName('processExecution');
    applyDataValidationForm(sheet, scubedConfigPackages);

  } else {
    SpreadsheetApp.getUi().alert("You didn't enable actvities so you don't need to execute this step. Go to the next step in configuration.")
  }

}

const testConf = () => {
  createEmptySCubedSheets();
  configureActivityProvenance();
  displayPackageOptionsSidebar();
  mainCreateFormsSheetsCore();
  mainCreateFormsSheetsActivity();
}