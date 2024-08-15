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
 * @fileoverview Test conditional formatting.
 * @author Abigail Elizabeth <abigailelizabeth@share-science.com>
 */

const testApplyConditionalFormattingConceptDefinition = () => {
  let spreadsheet = SpreadsheetApp.openById('1YHHLkiqYNodYFijEyDaaSlwWPlt2fy1O_68YDcqsnSM');
  let sheet = spreadsheet.getSheetByName('processExecution');
  let activeSheetName = sheet.getSheetName()
  var output = HtmlService.createHtmlOutput('Updating the conditional formatting for ' + activeSheetName + '.');
  SpreadsheetApp.getUi().showModalDialog(output, 'Hold the horses');
  applyConditionalFormattingProcessExecutionForm(sheet)

  var output = HtmlService.createHtmlOutput('<script>google.script.host.close();</script>');
  SpreadsheetApp.getUi().showModalDialog(output, 'Updating the conditional formatting for ' + activeSheetName + '.');
}

