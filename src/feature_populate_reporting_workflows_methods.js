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
 * @fileoverview Functions for handling reporting workflows.
 * @author Abigail Elizabeth
 */

/**
 * Get reporting workflow information given name of reporting workflow.
 * @param {string} reportingWorkflowName - Name of reporting workflow.
 * @return {[[string][number]]} results - Process types and step numbers.
 * @todo Replace hard-coded form names with global vars.
 */
function getReportingWorkflow(reportingWorkflowName) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('workflowManagement');
  const workflowNameColumnNumber = columnNameToColumnNumber(sheet, ['workflow_name']);
  const workflowProcessColumnNumber = columnNameToColumnNumber(sheet, ['process_type']);
  const workflowStepColumnNumber = columnNameToColumnNumber(sheet, ['workflow_sequence_number']);
  const guidColumnNumber = columnNameToColumnNumber(sheet, ['helper_mini_table_guid']);
  const lastRow = sheet.getDataRange().getLastRow();
  const workflowNames = sheet.getRange(2, workflowNameColumnNumber, lastRow, 1).getValues();
  const workflowNames1d = [].concat(...workflowNames);
  const workflowProcesses = sheet.getRange(2, workflowProcessColumnNumber, lastRow, 1).getValues();
  const guids = sheet.getRange(2, guidColumnNumber, lastRow, 1).getValues();
  const workflowSteps = sheet.getRange(2, workflowStepColumnNumber, lastRow, 1).getValues();

  const startWorkflowRow = workflowNames1d.indexOf(reportingWorkflowName);
  const guid = guids[startWorkflowRow];
  const guids1d = [].concat(...guids);
  const endWorkflowRow = guids1d.lastIndexOf(guid[0]) + 1

  // Find last row of current reporting workflow
  var startIter = startWorkflowRow + 1;
  for (let rptWrkflwIndex = 0; rptWrkflwIndex < lastRow; rptWrkflwIndex++) {

    var currentWorkflowProcesses = workflowProcesses.slice(startWorkflowRow, endWorkflowRow);
    var currentWorkflowSteps = workflowSteps.slice(startWorkflowRow, endWorkflowRow);
    var results = [[], []]; //[[[step 1],[step 2]],[[process type 1],[process type 2]]]

    // get into comma separated 2d array, e.g. [[1,process1],[2,process2]]
    for (let idx = 0; idx < currentWorkflowProcesses.length; idx++) {
      results[0].push(currentWorkflowSteps[idx]);
      results[1].push(currentWorkflowProcesses[idx]);

      //results.push(currentValue);

    }

  }

  return results;

}