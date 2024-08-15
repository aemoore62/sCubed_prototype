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
 * @fileoverview Create add-on menu.
 * @author Abigail Elizabeth
 */

/**
 * Install add-on.
 * @description WARNING! Must be "onInstall()".
 * @see https://developers.google.com/apps-script/add-ons/concepts/editor-auth-lifecycle
*/
function onInstall() {
  onOpen()
}

/**
 * Display add-on upon opening Sheets.
 * @description WARNING! Must be "onOpen()".
 * @see https://developers.google.com/apps-script/add-ons/concepts/editor-auth-lifecycle
*/
function onOpen() {
  var ui = SpreadsheetApp.getUi()
  var menu = ui.createAddonMenu()

  // Create menu for add-on
  menu
    .addItem('Change view', 'changeVisibilityOfColumns')
    .addItem('Refresh data validation', 'refreshDataValidation')
    .addItem('Add mini table row', 'startMiniTable') 
    .addItem('Populate reporting workflow', 'openPopulateReportingWorkflowForm') 
    .addItem('Output','openOutputForm')
    //.addItem('Check records', 'unavailMsg') 
    //.addItem('Enter reporting workflow', 'openWorkflowForm')
    //.addSeparator()     
    //.addItem('Refresh conditional formatting', 'testApplyConditionalFormattingConceptDefinition')
    //.addItem('Display all columns', 'unavailMsg')
    //.addItem('Clear entries current form', 'clearSheet')
    //.addSeparator() 
    //.addItem('Import from protocols.io', 'unavailMsg')
    .addSeparator()      
    .addItem('About', 'openAbout')
    .addItem('Explore controlled terms', 'openControlledTerms')
    .addSeparator()
    .addItem('Configure forms', 'displayPackageOptionsSidebar')
    .addItem('Install onEdit trigger', 'createTriggerOnEditForm') 
    .addItem('Delete spreadsheet properties', 'deleteSpreadsheetProperties')
    .addToUi();

  // Add menu to UI
  menu.addToUi()
}