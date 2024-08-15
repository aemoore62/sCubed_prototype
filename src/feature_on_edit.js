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
 * @fileoverview Function for onEdit trigger.
 * @author Abigail Elizabeth
 */

/**
 * Orchestrate onEdit features.
 */
const sCubedOnEdit = () => {

  var activeSheet = SpreadsheetApp.getActiveSheet();
  var sheetName = activeSheet.getName();
  var activeRange = activeSheet.getActiveRange();
  var currentValue = activeRange.getValue();
  var currentColumnNumber = activeRange.getColumn();
  var currentColumnName = activeSheet.getRange(1, currentColumnNumber, 1, 1).getValue();
  var currentRowNumber = activeRange.getRow();
  var firstColumnValue = activeSheet.getRange(currentRowNumber, 1, 1, 1).getValue();
  var thirdColumnValue = activeSheet.getRange(currentRowNumber, 3, 1, 1).getValue();

  changeVisibilityOfColumns();

  // handle mini tables
  if ((firstColumnValue === '' && sheetName !== 'processExecution') || (thirdColumnValue === '' && sheetName === 'processExecution' ||
    (sheetName === 'workflowManagement' && currentColumnName != 'workflow_name_reference'))) {
    startMiniTable();

  }

  // handle auto-populating reporting workflows for process specifications
  if (sheetName === 'workflowManagement' && currentColumnName === 'workflow_name_reference' && firstColumnValue === 'process specification') {
    showInProgressDialog('Populating reporting workflow');

    let workflowEntityTypeColumnNumber = columnNameToColumnNumber(activeSheet, ['workflow_entity_type']);
    let workflowSequenceColumnNumber = columnNameToColumnNumber(activeSheet, ['workflow_sequence_number']);
    let processTypeColumnNumber = columnNameToColumnNumber(activeSheet, ['process_type_reference']);
    var guidColumnNumber = columnNameToColumnNumber(activeSheet, ['helper_mini_table_guid']);
    var miniTableHeaderColumnNumber = columnNameToColumnNumber(activeSheet, ['helper_is_mini_table_header']);
    let reportingWorkflowInfo = getReportingWorkflow(currentValue);
    let lengthOfReportingWorkflow = reportingWorkflowInfo[0].length;

    // handle creating mini table
    let uuid = Utilities.getUuid();
    let uuidsToSet = Array(lengthOfReportingWorkflow).fill([uuid]);
    let entityTypeToSet = Array(lengthOfReportingWorkflow).fill(['process specification']);
    let miniTableHeaderHelperValuesToSet = [['TRUE']];
    let miniTableHeaderHelperAdditionalValuesToSet = Array(lengthOfReportingWorkflow - 1).fill(['FALSE']);
    miniTableHeaderHelperValuesToSet = miniTableHeaderHelperValuesToSet.concat(miniTableHeaderHelperAdditionalValuesToSet);


    activeSheet.getRange(currentRowNumber + 1, workflowEntityTypeColumnNumber, lengthOfReportingWorkflow - 1, 1).setFontColor('#d7d2e4')
    activeSheet.getRange(currentRowNumber, workflowEntityTypeColumnNumber, lengthOfReportingWorkflow, 1).setValues(entityTypeToSet);
    activeSheet.getRange(currentRowNumber, workflowSequenceColumnNumber, lengthOfReportingWorkflow, 1).setValues(reportingWorkflowInfo[0]);
    activeSheet.getRange(currentRowNumber, processTypeColumnNumber, lengthOfReportingWorkflow, 1).setValues(reportingWorkflowInfo[1]);
    activeSheet.getRange(currentRowNumber, guidColumnNumber, lengthOfReportingWorkflow, 1).setValues(uuidsToSet);
    activeSheet.getRange(currentRowNumber, miniTableHeaderColumnNumber, lengthOfReportingWorkflow, 1).setValues(miniTableHeaderHelperValuesToSet);
    activeSheet.getRange(currentRowNumber + 1, 1, lengthOfReportingWorkflow - 1, 1).setBackground('#d7d2e4') // don't shade first row

    closeCeleganDialog('Populating reporting workflow')

  }

}
