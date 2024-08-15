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
 * @fileoverview Utilities for handling HTML forms.
 * @author Abigail Elizabeth 
 */

/**
 * Opens an HTML form
 * @param {string} htmlFileName - The name of the HTML file to render.
 * @param {string} formTitle - The title to display in the form.
 * @param {number} formHeight - The height of the form.
 * @return {modal dialog} - The form.
*/

/**  
 * Display modal dialog.
 * @param {string} htmlFileName - The name of the html file to be displayed.
 * @param {string} formTitle - The title to be displayed in the dialog.
 * @param {number} formHeight - The height of the dialog.
 */
const displayHTMLModalDialog = (htmlFileName, formTitle, formHeight) => {
  const html = HtmlService.createHtmlOutputFromFile(htmlFileName)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .setHeight(formHeight);

  SpreadsheetApp.getUi()
    .showModalDialog(html, formTitle);
  return;
};

/**  
 * Display sidebar.
 * @param {string} htmlFileName - The name of the html file to be displayed.
 * @param {string} formTitle - The title to be displayed in the dialog.
 */
const displayHMTLSidebar = (htmlFileName, formTitle) => {
  var html = HtmlService.createHtmlOutputFromFile(htmlFileName)
    .setTitle(formTitle);
  SpreadsheetApp.getUi()
    .showSidebar(html);
}

/**  
 * Diplay sidebar.
 * @param {string} reportingWorkflowName - The name of the reporting workflow.
 * @return {} results - 
 * @todo Replace hard-coded form names and column names with global vars.
 * @todo Sort out using 2D and 1D arrays for guids, e.g. firstRowOfReportingWorkflowIndex
 * and lastRowOfReportingWorkflowIndex.
 */
function passInputData(reportingWorkflowName) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('workflowManagement');
  const workflowNameColumnNumber = columnNameToColumnNumber(sheet, ['workflow_name']);
  const workflowProcessColumnNumber = columnNameToColumnNumber(sheet, ['process_type']);
  const workflowStepColumnNumber = columnNameToColumnNumber(sheet, ['workflow_sequence_number']);
  const guidColumnNumber = columnNameToColumnNumber(sheet, ['helper_mini_table_guid']);
  const lastRow = sheet.getDataRange().getLastRow();
  const workflowNames = sheet.getRange(2, workflowNameColumnNumber, lastRow, 1).getValues();
  const workflowProcesses = sheet.getRange(2, workflowProcessColumnNumber, lastRow, 1).getValues();
  const workflowSteps = sheet.getRange(2, workflowStepColumnNumber, lastRow, 1).getValues();
  const allGuids = sheet.getRange(2, guidColumnNumber, lastRow, 1).getValues();
  const guid1d = [].concat(...allGuids);
  const guidForReportingWorkflow = selectFromWhere(reportingWorkflowName, workflowNames, allGuids, true);
  var firstRowOfReportingWorkflowIndex = allGuids.indexOf(guidForReportingWorkflow[0]);
  var lastRowOfReportingWorkflowIndex = guid1d.lastIndexOf(guidForReportingWorkflow[0][0]) + 1;
  var currentWorkflowProcesses = workflowProcesses.slice(firstRowOfReportingWorkflowIndex, lastRowOfReportingWorkflowIndex);
  var currentWorkflowSteps = workflowSteps.slice(firstRowOfReportingWorkflowIndex, lastRowOfReportingWorkflowIndex);
  var results = [];

  for (let idx = 0; idx < currentWorkflowProcesses.length; idx++) {
    let currentValue = currentWorkflowSteps[idx] + ',' + currentWorkflowProcesses[idx];
    results.push(currentValue);

  }

  return results;

}

function testPastInputData() {

  var cat = 'Goncalo' + "\'" + 's c. elegans expansion in bioreactor';
  var out = passInputData(cat);

}


/**  
 * Populate reporting workflows.
 * @param {[string]} workflowInstanceIDs - The IDs of the instances of reporting workflows
 * to be populated.
 * @param {[number]} instanceSteps - The steps within the reporting workflows to be populated.
 * @param {number} numberInstances - The number of instances to be populated.
 * @param {boolean} populateDate - Whether the start date should be populated.
 * @param {name} processSpecificationName - The name of the process specification to be populated.
 */
function setWorkflowManagementEntitiesInProcessExecution(workflowInstanceIDs, instanceSteps, stepNumbers, numberInstances, populateDate, processSpecificationName) { //,populateInvestigator

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var lastRow = sheet.getLastRow();
  var column = sheet.getRange('A:A');
  var values = column.getValues(); // get all data in one call   

  // Get last filled row
  var lastFilledRowOfWorkflowInstances = 0;
  while (values[lastFilledRowOfWorkflowInstances] && values[lastFilledRowOfWorkflowInstances][0] != "") {
    lastFilledRowOfWorkflowInstances++;
  }

  // Handle background colors
  const numberSteps = instanceSteps.length;
  const columnBackgroundColors = generateBackgroundColorsForWorkflowInstances(sheet, numberSteps, lastFilledRowOfWorkflowInstances);

  var repititionNumbersToSet = [];

  // Handle reporting workflow
  setReportingWorkflowInSheet(sheet, numberInstances, instanceSteps, workflowInstanceIDs, columnBackgroundColors, repititionNumbersToSet, lastRow, stepNumbers)

  // begin handle process specification
  if (processSpecificationName !== null) {
    setProcessSpecificationInSheet(sheet, processSpecificationName, lastRow, numberInstances);

    if (populateDate) {
      var numberOfRowsToSet = instanceSteps.length * numberInstances;
      var dateColumn = columnNameToColumnNumber(sheet, ['start_date']);
      var dateRange = sheet.getRange(lastFilledRowOfWorkflowInstances + 1, dateColumn, numberOfRowsToSet, 1);
      var date = Utilities.formatDate(new Date(), "GMT+1", "yyyy-MM-dd");
      var dateValues = Array(numberOfRowsToSet).fill([date]);
      dateRange.setValues(dateValues);
    }

  }

}

/**
 * Generate background colors to be set for instances of reporting workflows.
 * @param {Object} sheet - The sheet that will be formatted.
 * @param {number} numberSteps - The number of steps in the instance of reporting workflow.
 * @return {[]} columnBackgroundColors - Colors to be set for reporting workflow instances.
 * @todo Consider making file with color palettes and move the colors there.
 * @todo Function doesn't iterate over colors properly. It repeates colors too soon.
 * The function should exhaust all colors before reusingcolors.
 */
const generateBackgroundColorsForWorkflowInstances = (sheet, numberSteps, lastFilledRowOfWorkflowInstances) => {
  let backgroundPalette = ["#68affc", "#b4ddd4", "#36edd3", "#a7d64e", "#c289d4", "#dc5dd8", "#862593", "#208eb7", "#3eeaef", "#96ccfe", "#2580fe", "#daa7e7", "#fa6ca9", "#fa6ca9", "#a1def0", "#528e8c", "#6ceac0", "#214d4e", "#cddb9b", "#86394c", "#d27a4b", "#ba0951", "#848dc5", "#e9c9fa", "#e586fe", "#403996"]

  let numberOfBackgroundColors = backgroundPalette.length;

  var previousRange = sheet.getRange(lastFilledRowOfWorkflowInstances, 1, numberSteps, 1);

  let previousBackground = previousRange.getBackground();

  // get first background color
  var colorsToIndicateStartAtOriginOfPalette = ['#d9d9d9', '#000000', "#403996"];
  if (colorsToIndicateStartAtOriginOfPalette.indexOf(previousBackground) > -1) {
    var currentBackgroundColorIndex = 0;
    var startBackgroundColor = backgroundPalette[0];

  } else if (previousBackground != "#403996") {
    var currentBackgroundColorIndex = backgroundPalette.indexOf(previousBackground);
    var startBackgroundColor = backgroundPalette[currentBackgroundColorIndex + 1]
  }
  var columnBackgroundColors = []; //[[color1],[color1]]; // column

  // get all colors for each instance [color1,color2]
  if (numberSteps > 1) {
    let numberOfColorsAfterCurrentColor = backgroundPalette.length - currentBackgroundColorIndex - 1; // this gives the first n colors
    var firstNColors = backgroundPalette.slice(-numberOfColorsAfterCurrentColor);
    var columnBackgroundColors = firstNColors.slice(currentBackgroundColorIndex); //HERE

    if (numberOfColorsAfterCurrentColor < numberSteps) {
      // first get the colors after the previous rows colors
      let numberOfAdditionalColorsNeeded = numberSteps - numberOfColorsAfterCurrentColor;
      let numberOfTimesToRepeatBackgroundColors = Math.ceil(numberOfAdditionalColorsNeeded / numberOfBackgroundColors);

      // now we have the first n colors we need to create repeated colors
      var additionalColumnBackgroundColors = []; //Array(numberOfTimesToRepeatBackgroundColors).fill(backgroundPalette.toString());  
      for (var numberOfColorRepeatsIndex = 0; numberOfColorRepeatsIndex < numberOfTimesToRepeatBackgroundColors; numberOfColorRepeatsIndex++) {
        var additionalColumnBackgroundColors = additionalColumnBackgroundColors.concat(backgroundPalette)

      }

      var columnBackgroundColors = columnBackgroundColors.concat(additionalColumnBackgroundColors);

    }

  } else {
    columnBackgroundColors.push(startBackgroundColor);

  }

  return columnBackgroundColors;
}

/**
 * Set process specification in sheet.
 * @param {string} processSpecificationName - The name of the process specification to be populated.
 * @param {number} lastRow - The last row of the sheet where the process specification will be populated.
 * @param {number} numberInstances - Number of instances of process specification that will be populated.
 * @todo See if there's a better way to handle setting the process IDs. See comment within code.
 * @todo Create more dynamic way to handle the instances where I rename the process id column due to case 
 * or special characters, e.g. 'Freeze-Drying_id'. Maybe just replace - with _ and toLowerCase. You repeat this
 * in another function getProcessIDsAndProcessTypesForSpecification.
 * @todo Replace hard-coded form names, column names and spreadsheet property names. 
 * */

function setProcessSpecificationInSheet(sheet, processSpecificationName, lastRow, numberInstances) {

  const processTypesAndIDsForProcessSpec = getProcessIDsAndProcessTypesForSpecification(processSpecificationName);

  // prepare each column for each process id to be set
  const processTypesForProcessSpec = processTypesAndIDsForProcessSpec[0];
  const processIDsForProcessSpec = processTypesAndIDsForProcessSpec[1];
  //const uniqueProcessTypes = [... new Set(processTypesForProcessSpec)]  

  /**
   * Tried to do this the smart way by setting values by column instead of individual values but this isn't compatible with the data validtion
   * since some cells in column will be null and data validation will reject the null.
   */
  // for each unique process type in proc spec
  for (var numberInstancesProcSpecIndex = 0; numberInstancesProcSpecIndex < numberInstances; numberInstancesProcSpecIndex++) {
    // for each step in process specification
    for (var stepInProcessSpecIndex = 0; stepInProcessSpecIndex < processTypesForProcessSpec.length; stepInProcessSpecIndex++) {
      let processTypeForCurrentStepInProcessSpec = processTypesForProcessSpec[stepInProcessSpecIndex];
      lastRow += 1
      let processIDForCurrentStepInProcessSpec = processIDsForProcessSpec[stepInProcessSpecIndex];
      var processIDColumnNameDraft = processTypeForCurrentStepInProcessSpec[0].replace(/ /g, "_"); // replace space with underscore
      var processIDColumnName = processIDColumnNameDraft + '_id'

      if (processIDColumnName === 'Freeze-Drying_id') {
        var processIDColumnName = 'freeze_drying_id';

      } else if (processIDColumnName === 'bead-based_homogenization_id') {
        var processIDColumnName = 'bead_based_homogenization_id';

      }

      var processIDColumnNumber = columnNameToColumnNumber(sheet, [processIDColumnName]);
      var rowNumberToSet = lastRow;

      try {
        sheet.getRange(rowNumberToSet, processIDColumnNumber, 1, 1).setValue(processIDForCurrentStepInProcessSpec);
        SpreadsheetApp.flush(); // https://stackoverflow.com/questions/58604400/try-catch-not-working-as-expected-in-google-apps-script  

      } catch (err) {
        // update data validation b/c can't populate proc spec without update drop-down lists
        var scubedPackages = getValueFromSpreadsheetProperty('scubed_packages');
        var provenanceType = getValueFromSpreadsheetProperty('scubed_provenance_type');

        applyDataValidationForm(sheet, scubedPackages, '', provenanceType, '', 'processExection', processIDColumnName)

        SpreadsheetApp.flush();
        sheet.getRange(rowNumberToSet, processIDColumnNumber, 1, 1).setValue(processIDForCurrentStepInProcessSpec);
        SpreadsheetApp.flush();

      }

    }

  }
}

/**
 * Set instances of reporting workflows in sheet.
 * @param {Object} sheet - The sheet in which reporting workflows should be set.
 * @param {number} numberInstances - Number of instances of reporting workflows to be populated.
 * @param {[]} instanceSteps - Steps in the reporting workflow.
 * @param {[]} workflowInstanceIDs - IDs for the reporting workflow instances.
 * @param {[string]} columnBackgroundColors - Colors to set for background of reporting workflow instnaces.
 * @param {[number]} repititionNumbersToSet - The values for the repitition number column.
 * @param {number} lastRow - Last row of the sheet where the reporting workflow instnaces will be set.
 * @param {[number]} stepNumbers - Step numbers of reporting workflow instances.
 */

function setReportingWorkflowInSheet(sheet, numberInstances, instanceSteps, workflowInstanceIDs, columnBackgroundColors, repititionNumbersToSet, lastRow, stepNumbers) {
  // Empty arrays to hold column values
  // IMPORTANT: Set by column not row as this is quicker when the user has many rows
  var workflowInstanceNamesToSet = [];
  var stepNumbersToSet = [];
  var processTypesToSet = [];
  var backgroundColorsToSetOneColumn = [];

  // For each workflow instance
  for (var instanceIndex = 0; instanceIndex < numberInstances; instanceIndex++) {

    // Create arrays with values
    var workflowInstanceNames = Array(instanceSteps.length).fill([workflowInstanceIDs[instanceIndex]])//workflowName.repeat(instanceSteps.length)
    var backgroundColorsForCurrentWorkflowOneColumn = Array(instanceSteps.length).fill([columnBackgroundColors[instanceIndex]])

    // step numbers and process types already defined
    var workflowInstanceNamesToSet = workflowInstanceNamesToSet.concat(workflowInstanceNames);
    var stepNumbersToSet = stepNumbersToSet.concat(stepNumbers);
    var processTypesToSet = processTypesToSet.concat(instanceSteps);
    var backgroundColorsToSetOneColumn = backgroundColorsToSetOneColumn.concat(backgroundColorsForCurrentWorkflowOneColumn);
    var repititionNumbers = Array(instanceSteps.length).fill([0])
    var repititionNumbersToSet = repititionNumbersToSet.concat(repititionNumbers);

  }

  var numberOfRowsToSet = workflowInstanceNamesToSet.length;
  var processRange = sheet.getRange(lastRow + 1, 4, numberOfRowsToSet, 1)
  var stepNumberRange = sheet.getRange(lastRow + 1, 2, numberOfRowsToSet, 1)
  var workflowInstanceNameRange = sheet.getRange(lastRow + 1, 1, numberOfRowsToSet, 1)
  var repititionRange = sheet.getRange(lastRow + 1, 3, numberOfRowsToSet, 1)
  workflowInstanceNameRange.setValues(workflowInstanceNamesToSet);
  stepNumberRange.setValues(stepNumbersToSet);
  processRange.setValues(processTypesToSet);
  workflowInstanceNameRange.setBackgrounds(backgroundColorsToSetOneColumn);
  stepNumberRange.setBackgrounds(backgroundColorsToSetOneColumn);
  repititionRange.setValues(repititionNumbersToSet);
  repititionRange.setBackgrounds(backgroundColorsToSetOneColumn);
}

/**  
 * Get names of process specifications.
 * @param {string} reportingWorkflowName - The name of the reporting workflow for which process
 * specification should be retreived.
 * @param {[number]} instanceSteps - The steps within the reporting workflows to be populated.
 * @return {[]} workflowSteps - The process specifications.
 * @todo Replace hard-coded form names and column names with global vars.
 */
function getProcessSpecificationNames(reportingWorkflowName) {
  let workflowManagmentSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('workflowManagement');
  let columnNumberReportingWorkflowName = columnNameToColumnNumber(workflowManagmentSheet, ['workflow_name_reference']);
  let columnNumberProcessSpecificationName = columnNameToColumnNumber(workflowManagmentSheet, ['process_specification_name']);
  let numberOfRows = workflowManagmentSheet.getLastRow();
  let rangeToSelect = workflowManagmentSheet.getRange(2, columnNumberProcessSpecificationName, numberOfRows, 1).getValues();
  let rangeToSearch = workflowManagmentSheet.getRange(2, columnNumberReportingWorkflowName, numberOfRows, 1).getValues();
  let workflowSteps = selectFromWhere(reportingWorkflowName, rangeToSearch, rangeToSelect, true)

  return workflowSteps;
}

/**  
 * Get the process IDs and types given a process specification.
 * @param {string} processSpecificationName - The name of the process specification for which 
 * process IDs and types should be fetched.
 * @param {[number]} instanceSteps - The steps within the reporting workflows to be populated.
 * @return {[]} results - The process IDs and types.
 * @todo Replace hard-coded form names and column names with global vars.
 * @todo Create more dynamic way to handle the instances where I rename the process id column due to case 
 * or special characters, e.g. 'Freeze-Drying_id'. Maybe just replace - with _ and toLowerCase. You repeat this
 * in another function setProcessSpecificationInSheet.
 */
function getProcessIDsAndProcessTypesForSpecification(processSpecificationName) {
  //const sheet = SpreadsheetApp.openById('1P9QKbwVJBjD0CHrD63obAEa__1lx64_KjaQCFDhgg-E').getSheetByName('workflowManagement');
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('workflowManagement');
  const processSpecColumnNumber = columnNameToColumnNumber(sheet, ['process_specification_name']);
  const processTypeColumnNumber = columnNameToColumnNumber(sheet, ['process_type_reference']);
  const guidColumnNumber = columnNameToColumnNumber(sheet, ['helper_mini_table_guid']);
  const lastRow = sheet.getDataRange().getLastRow();
  const processSpecProcessTypes = sheet.getRange(2, processTypeColumnNumber, lastRow, 1).getValues();
  const processSpecProcessNames = sheet.getRange(2, processSpecColumnNumber, lastRow, 1).getValues();
  const allGuids = sheet.getRange(2, guidColumnNumber, lastRow, 1).getValues();

  // find rows where process spec name = processSpecificationName
  const guidForProcessSpec = selectFromWhere(processSpecificationName, processSpecProcessNames, allGuids, true);
  const guid1d = [].concat(...allGuids);
  var firstRowOfReportingWorkflowIndex = allGuids.indexOf(guidForProcessSpec[0]);
  var lastRowOfReportingWorkflowIndex = guid1d.lastIndexOf(guidForProcessSpec[0][0]) + 1;
  var processTypesForProcessSpec = processSpecProcessTypes.slice(firstRowOfReportingWorkflowIndex, lastRowOfReportingWorkflowIndex);

  // find first instance of guid in sheet
  for (var guidIndex = 0; guidIndex < allGuids.length; guidIndex++) {
    if (allGuids[guidIndex][0] == guidForProcessSpec) {
      var firstRowOfProcessSpecIndex = guidIndex;

      break;

    }
  }

  const numberOfStepsInProcessSpec = processTypesForProcessSpec.length;
  let results = [];

  // get index of rows with guid
  // for each row, get  process id
  let processIDs = [];
  for (let stepsInProcessSpecIndex = 0; stepsInProcessSpecIndex < numberOfStepsInProcessSpec; stepsInProcessSpecIndex++) {
    let currentProcessType = processTypesForProcessSpec[stepsInProcessSpecIndex];
    var processIDColumnNameDraft = currentProcessType[0].replace(/ /g, "_"); // replace space with underscore
    var processIDColumnName = processIDColumnNameDraft + '_id';

    if (processIDColumnName === 'Freeze-Drying_id') {
      var processIDColumnName = 'freeze_drying_id';

    } else if (processIDColumnName === 'bead-based_homogenization_id') {
      var processIDColumnName = 'bead_based_homogenization_id';

    }
    var currentProcessIDColumnNumber = columnNameToColumnNumber(sheet, [processIDColumnName]);
    var currentProcessTypeRow = firstRowOfProcessSpecIndex + stepsInProcessSpecIndex + 2;
    var currentProcessID = sheet.getRange(currentProcessTypeRow, currentProcessIDColumnNumber, 1, 1).getValue();
    processIDs.push(currentProcessID)

  }

  results.push(processTypesForProcessSpec, processIDs);

  return results;

}

function testGetProcIDSProcTypesForSpec() {
  let res = getProcessIDsAndProcessTypesForSpecification('my first proc spec');
  console.log(res)

}