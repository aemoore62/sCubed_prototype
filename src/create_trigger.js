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
 * @fileoverview Manages functions used to create triggers.
 * IMPORTANT: Triggers cannot be set when testing an add-on. You can only tell if they work via the add-on
 * after publishing the add-on. For testing purposes, you need to set the trigger from the editor.
 * @author Abigail Elizabeth 
 */

/**  
 * Apply onEdit trigger.
 */

const createTriggerOnEditForm = () => {
  var spreadsheet = SpreadsheetApp.getActive()
  ScriptApp.newTrigger('sCubedOnEdit')
    .forSpreadsheet(spreadsheet)
    .onEdit()
    .create();
}

function testTrigger() {
  createTriggerOnEditFormManual("id")
}

/**  
 * Apply onEdit trigger
 * @param {string} spreadSheetID - The spreadsheet to apply the trigger to.
 */

function createTriggerOnEditFormManual(spreadsheetID) {
  const ss = SpreadsheetApp.openById(spreadsheetID)
  
  ScriptApp.newTrigger('sCubedOnEdit')//showCurrentView
    .forSpreadsheet(ss)
    .onEdit()
    .create();
}
