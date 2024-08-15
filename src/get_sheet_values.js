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
 * @fileoverview Functions that compose objects affiliated with conceptual entities.
 * @author Abigail Elizabeth 
 */

/**  
 * Get values from sCubed sheets.
 * @param {string} sheetName - The name of the sheet with values of interest.
 * @return {Object} - A description of the entity object
 * @todo Replace hard-coded form names with global vars.
 */

const getSheetValues = (sheetName) => {
  switch (sheetName) {
    case 'conceptDefinition':
      var values = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('conceptDefinition').getDataRange().getValues();
      break;
    case 'materialDefinition':
      var values = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('materialDefinition').getDataRange().getValues();
      break;
    case 'processDefinition':
      var values = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('processDefinition').getDataRange().getValues();
      break;
    case 'workflowManagement':
      var values = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('workflowManagement').getDataRange().getValues();
      break;
    case 'processExecution':
      var values = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('processExecution').getDataRange().getValues();
      break;

    default:
      var values = "none";
  }
  return values;

}


/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentSheetValues = (sheetName) =>
  getSheetValues(sheetName)
