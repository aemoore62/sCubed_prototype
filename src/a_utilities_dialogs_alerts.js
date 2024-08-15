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
 * @fileoverview Utilities for handling dialogs and alerts.
 * @author Abigail Elizabeth 
 */

/**
 * Display unavailable message
*/
const unavailMsg = () => {
  SpreadsheetApp.getUi().alert('This feature is unavailable.');
}

/**
 * Display in-progress message
*/
function showInProgressDialog(title) {

  var ui = SpreadsheetApp.getUi();

  var htmlOutput = HtmlService
    .createHtmlOutput('Refreshing data validation')
    .setWidth(400)
    .setHeight(200);
  ui.showModalDialog(htmlOutput, title);

}

/**
 * Close in-progress message
*/
function closeCeleganDialog(title) {

  var ui = SpreadsheetApp.getUi();

  var htmlOutput = HtmlService
    .createHtmlOutput('<script>google.script.host.close();</script>')
    .setWidth(300)
    .setHeight(150);
  ui.showModalDialog(htmlOutput, title);

}