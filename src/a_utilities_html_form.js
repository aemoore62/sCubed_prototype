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
 * Open HTML form for populating reporting workflows.
 * @param {string} htmlFileName - The name of the HTML file to render.
 * @param {string} formTitle - The title to display in the form.
 * @param {number} formHeight - The height of the form.
 * @return {modal dialog} - The form.
 * @todo Replace hard-coded form names with global vars.
*/

const openWorkflowForm = () => {
  let sheet = SpreadsheetApp.getActiveSheet().getSheetName();
  if (sheet === 'processExecution') {
    openForm('feature_reporting_workflows_page', 'Enter a reporting workflow', 500);

  } else {
    var html = HtmlService.createHtmlOutput("<p>Activate the processExecution sheet (tab) in order to populate a reporting workflow.</p>")
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .setHeight(100);;
    SpreadsheetApp.getUi().showModalDialog(html, "Error!");

  }

}

/**
 * Open an HTML form.
 * @param {string} htmlFileName - The name of the HTML file to render.
 * @param {string} formTitle - The title to display in the form.
 * @param {number} formHeight - The height of the form.
 * @return {modal dialog} - The form.
*/
const openForm = (htmlFileName, formTitle, formHeight) => {
  const html = HtmlService.createHtmlOutputFromFile(htmlFileName)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setHeight(formHeight)
    .evaluate()

  SpreadsheetApp.getUi()
    .showModalDialog(html, formTitle);
  return;

};

/**
 * Get available reporting workflow names.
 * @return {[string] filteredWorkflowNames - Names of reporting workflows.}
 * @todo Replace hard-coded form names and column names with global vars.
 * @todo Update function name to reflect fetching reporting workflows.
 */

function getList() {
  //let sheet = SpreadsheetApp.openById("1P9QKbwVJBjD0CHrD63obAEa__1lx64_KjaQCFDhgg-E").getSheetByName("workflowManagement");
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('workflowManagement');
  let workflowNameColumnNumber = columnNameToColumnNumber(sheet, ['workflow_name']);
  let lastRow = sheet.getDataRange().getLastRow();
  let workflowNamesRaw = sheet.getRange(2, workflowNameColumnNumber, lastRow, 1).getValues();
  let workflowNames1d = [].concat(...workflowNamesRaw);

  var workflowNames = [...new Set(workflowNames1d)];

  var filteredWorkflowNames = workflowNames.filter(function (item) {
    return item != null;

  });

  return filteredWorkflowNames;

};

/**
 * Open HTML form for outputting content.
 * @return {modal dialog} - The form.
*/

const openOutputForm = () => {
  //openForm('feature_output', 'Output', 500);
  var template = HtmlService.createTemplateFromFile('feature_output_page');
  var interface = template.evaluate().setTitle('Output')
  SpreadsheetApp.getUi().showSidebar(interface);


}

/**
 * Open HTML form for populating reporting workflows.
 * @return {modal dialog} - The form.
*/

const openPopulateReportingWorkflowForm = () => {
  //openForm('feature_output', 'Output', 500);
  var template = HtmlService.createTemplateFromFile('feature_populate_reporting_workflow_page');
  var interface = template.evaluate().setTitle('Populate reporting workflow')
  SpreadsheetApp.getUi().showSidebar(interface);

}

/**
 * Open HTML form for About page.
 * @return {modal dialog} - The About page.
*/

const openAbout = () => {
  //openForm('feature_output', 'Output', 500);
  var template = HtmlService.createTemplateFromFile('feature_about_page');
  var interface = template.evaluate().setTitle('About sCubed')
  SpreadsheetApp.getUi().showSidebar(interface);


}

/**
 * Open HTML form for controlled terms.
 * @return {modal dialog} - The controlled terms page.
*/

const openControlledTerms = () => {
  //openForm('feature_output', 'Output', 500);
  var template = HtmlService.createTemplateFromFile('feature_controlled_terms_page');
  var interface = template.evaluate().setTitle('Explore controlled terms')
  SpreadsheetApp.getUi().showSidebar(interface);


}

/**
 * Open HTML form for loading page.
 * @return {modal dialog} - The loading page.
*/

const openLoadingConfigure = () => {
  //openForm('feature_output', 'Output', 500);
  var template = HtmlService.createTemplateFromFile('configure_loading_page');
  var interface = template.evaluate().setTitle('Congifure sCubed')
  SpreadsheetApp.getUi().showSidebar(interface);


}
