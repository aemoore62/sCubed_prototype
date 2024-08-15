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
 * @fileoverview Functions to handle mini tables.
 * @author Abigail Elizabeth 
 */

/**  
 * Begin process of generating a mini table via onEdit.
 * @todo Refactor if/else madness.
 */
const startMiniTable = () => {

  var activeSheet = SpreadsheetApp.getActiveSheet();
  var sheetName = activeSheet.getName();
  var activeRange = activeSheet.getActiveRange();
  var currentColumnNumber = activeRange.getColumn();
  var currentColumnName = activeSheet.getRange(1, currentColumnNumber, 1, 1).getValue();
  var currentRowNumber = activeRange.getRow();
  var firstColumnValue = activeSheet.getRange(currentRowNumber, 1, 1, 1).getValue();

  // Check if there's a vale in the first column
  if (firstColumnValue != '') {
    var firstColumnContainsValue = true;

  } else {
    var firstColumnContainsValue = false;

  }

  // Generate mini table
  if (currentColumnNumber != 1) {
    // FUNCTION FOR PROCESS EXECUTION
    if (sheetName == 'processExecution') {
      var currentEntityType = activeSheet.getRange(currentRowNumber, 4, 1, 1).getValue(); // ONLY FOR PROC EXEC!

      var guidColumnNumber = columnNameToColumnNumber(activeSheet, ['helper_mini_table_guid']);
      var currentGuid = activeSheet.getRange(currentRowNumber, guidColumnNumber, 1, 1).getValue();

      if (currentEntityType == '' && currentGuid == '') {
        var output = HtmlService.createHtmlOutputFromFile('on_edit_form_splash')
          .setHeight(5)
          .setWidth(40);
        var previousEntityType = activeSheet.getRange(currentRowNumber - 1, 4, 1, 1).getValue(); // ONLY FOR PROC EXEC!    
        var toShowEntityObject = getCurrentEntityObjectColumnVisibilityProcessExecution(previousEntityType) // ONLY FOR PROC EXEC!  
      }

      // FUNCTION FOR WORKFLOW MGMT--HEADER ROW
    } else if (sheetName == 'workflowManagement' && firstColumnValue !== '') {
      var currentEntityType = activeSheet.getRange(currentRowNumber, 1, 1, 1).getValue(); // ONLY FOR WORKFLOWMGMT!

      var guidColumnNumber = columnNameToColumnNumber(activeSheet, ['helper_mini_table_guid']);
      var currentGuid = activeSheet.getRange(currentRowNumber, guidColumnNumber, 1, 1).getValue();

      if (currentEntityType == '' && currentGuid == '') {
        var output = HtmlService.createHtmlOutputFromFile('on_edit_form_splash')
          .setHeight(5)
          .setWidth(40);

        var previousEntityType = activeSheet.getRange(currentRowNumber - 1, 1, 1, 1).getValue(); // ONLY FOR PROC EXEC!  
        if (previousEntityType == "") { // handle instances where previous row is child in minitable
          var previousRowGuid = activeSheet.getRange(currentRowNumber - 1, guidColumnNumber, 1, 1).getValue();
          // find all rows with the guid, i.e. find mini table
          var allGuid = activeSheet.getRange(2, guidColumnNumber).getValues();
          var miniTableIndexes = allGuid.indexOf([previousRowGuid]);

          // find header row of mini table

        }

        var toShowEntityObject = getCurrentEntityObjectColumnVisibilityWorkflowManagement(previousEntityType) // ONLY FOR PROC EXEC! 

      }

    }

    // FUNCTION FOR WORKFLOW MGMT--CHILD ROW
    if (sheetName == 'workflowManagement' && currentColumnNumber != 1 && currentGuid != '') {

      var previousEntityType = activeSheet.getRange(currentRowNumber - 1, 1, 1, 1).getValue(); // ONLY FOR PROC EXEC! 
      var previousEntityTypeWithColumnName = 'workflow_entity_type ' + previousEntityType;
      var toShowEntityObject = getCurrentEntityObjectColumnVisibilityWorkflowManagement(previousEntityTypeWithColumnName)

      var attributeObjects = getObjectsFromObjectFunctionsByKey(toShowEntityObject, 'attributes');

      var supportsMultipleValues = attributeObjects[currentColumnName].supportsMultipleValues

      // FUNCTION FOR PROCESS DEFINITION
    } else if (sheetName == 'processDefinition') {
      //TODO need to establish way to handle instances where mulitple values are supported for "subtype" columns, e.g.
      // has_fixed_xxx. Below is quick, dirty solution
      var previousEntityType = activeSheet.getRange(currentRowNumber - 1, 1, 1, 1).getValue(); // ONLY FOR PROC EXEC!
      var harvestColumnsSupportMultiValues = ['harvest_criteria_amount_type', 'harvest_criteria_amount_ratio', 'harvest_criteria_amount_uom_ratio'];
      var fermentationColumnsSupportMultiValues = ['growth_rate_type', 'growth_rate_amount_numerical', 'growth_rate_amount_uom_numerical', 'growth_rate_amount_textual'];
      // FUNCTION FOR PROCESS DEFINITION--HARVEST
      if (previousEntityType === 'harvest culture growth environment' && harvestColumnsSupportMultiValues.indexOf(currentColumnName) > -1) {
        var columnNumberForMultiValueDeterminer = columnNameToColumnNumber(activeSheet, ['has_fixed_harvest_criteria']);
        var valueForMultiValueDeterminer = activeSheet.getRange(currentRowNumber - 1, columnNumberForMultiValueDeterminer, 1, 1).getValue();
        var previousEntityTypeWithColumnName = 'has_fixed_harvest_criteria ' + valueForMultiValueDeterminer;

        var toShowEntityObject = getEntityObjectColumnVisibilityProcessDefinitionCore(previousEntityTypeWithColumnName)

        var attributeObjects = getObjectsFromObjectFunctionsByKey(toShowEntityObject, 'attributes');

        var supportsMultipleValues = attributeObjects[currentColumnName].supportsMultipleValues

        // FUNCTION FOR PROCESS DEFINITION--FERMENTATION
      } else if (previousEntityType === 'fermentation' && fermentationColumnsSupportMultiValues.indexOf(currentColumnName) > -1) {
        var columnNumberForMultiValueDeterminer = columnNameToColumnNumber(activeSheet, ['has_fixed_growth_rate']);
        var valueForMultiValueDeterminer = activeSheet.getRange(currentRowNumber - 1, columnNumberForMultiValueDeterminer, 1, 1).getValue();
        var previousEntityTypeWithColumnName = 'has_fixed_growth_rate ' + valueForMultiValueDeterminer;

        var toShowEntityObject = getEntityObjectColumnVisibilityProcessDefinitionCore(previousEntityTypeWithColumnName)

        var attributeObjects = getObjectsFromObjectFunctionsByKey(toShowEntityObject, 'attributes');

        // sneaky way to prevent more than two growth rates
        // TODO still need to prevent multiple growths of same type, e.g. only one textual and one numerical s/b permitted
        try {
          var supportsMultipleValues = attributeObjects[currentColumnName].supportsMultipleValues

        } catch {
          SpreadsheetApp.getUi().alert("Cannot add multiple items in this column. Deleting entries in row.")
          var currentRowRange = activeSheet.getRange(currentRowNumber, 1, 1, activeSheet.getLastColumn())
          currentRowRange.clearContent();

        }

      }

    } else {
      //attributeObjects = getObjectsFromObjectFunctionsByKey(toShowEntityObject,'attributes'); 
      var supportsMultipleValues = false;

    }
    // FUNCTION SUPPORTS MULTIPLE VLAUES
    if (supportsMultipleValues) {

      if (sheetName !== 'processExecution') {
        activeSheet.getRange(currentRowNumber, 1, 1, 1).setValue(previousEntityType); // ONLY FOR PROC EXEC! 
        //activeSheet.getRange(currentRowNumber,1,1,1).setBackground('#d7d2e4'); // ONLY FOR PROC EXEC!
        // get font color
        if (sheetName === 'workflowManagement') {
          var fontColor = '#d7d2e4';
          var backgroundColor = '#d7d2e4';
          activeSheet.getRange(currentRowNumber, 1, 1, 1).setBackground(backgroundColor); // todo need to setbackground for other sheets

        } else if (sheetName === 'processDefinition') {
          var fontColor = getHexFromColorPalette('bright caterpillar');

        } else if (sheetName === 'materialDefinition') {
          var fontColor = getHexFromColorPalette('clear water');

        } else if (sheetName === 'conceptDefinition') {
          var fontColor = getHexFromColorPalette('sand dollar');

        }
        activeSheet.getRange(currentRowNumber, 1, 1, 1).setFontColor(fontColor); // ONLY FOR PROC EXEC! 
      } else {
        activeSheet.getRange(currentRowNumber, 4, 1, 1).setValue(previousEntityType); // ONLY FOR PROC EXEC! 
        activeSheet.getRange(currentRowNumber, 4, 1, 1).setBackground('#d7d2e4'); // ONLY FOR PROC EXEC! 
        //activeSheet.getRange(currentRowNumber,4,1,1).setFontColor('#56d876'); // ONLY FOR PROC EXEC! 

      }


      // Check if the user is beginning a new mini table or continuing an existing mini table
      var guidColumnNumber = columnNameToColumnNumber(activeSheet, ['helper_mini_table_guid']);
      var previousGuid = activeSheet.getRange(currentRowNumber - 1, guidColumnNumber, 1, 1).getValue();
      if (previousGuid == '') {
        startOfMiniTable = true;

      } else if (previousGuid != '') {
        startOfMiniTable = false;

      }

      var isMiniTableHeaderColumnNumber = columnNameToColumnNumber(activeSheet, ['helper_is_mini_table_header']);
      miniTable(activeSheet, currentRowNumber, startOfMiniTable, isMiniTableHeaderColumnNumber, guidColumnNumber)
      var output = HtmlService.createHtmlOutput('<script>google.script.host.close();</script>')
        .setHeight(5)
        .setWidth(300);
      SpreadsheetApp.getUi().showModalDialog(output, 'Working on mini table');

    } else if (firstColumnContainsValue === false || (firstColumnContainsValue === true && supportsMultipleValues === false && currentGuid != '')) { // firstColumnContainsValue === false // current column doesn't support multiple values
      SpreadsheetApp.getUi().alert("Cannot add multiple items in this column. Deleting entry.")
      activeRange.clearContent();

    };

    return;

  }


}

/**  
 * Begin process of generating a mini table onClick from add-on.
 */
const onClickGenerateMiniTable = () => {
  const activeRange = SpreadsheetApp.getActiveRange();
  const activeRowIndex = activeRange.getRowIndex();
  const activeSheet = SpreadsheetApp.getActiveSheet()
  const activeSheetName = activeSheet.getSheetName();
  const lastColumn = activeSheet.getLastColumn();
  const activeRowRange = SpreadsheetApp.getActiveSheet().getRange(activeRowIndex, 1, 1, lastColumn)

  // Check if supports multiple values
  if (activeSheetName == 'conceptDefinition') {
    //WORKING HERE need to determine entity
    var toShowEntityObject = getCurrentEntityObjectColumnVisibilityConceptDefinitionCore(currentValue);

    if (toShowEntityObject === 'none') {
      var toShowEntityObject = getCurrentEntityObjectColumnVisibilityConceptDefinitionOrganismPackag(currentValue);

    }

  } //... refactor from other mini table code

  var attributeObjects = getObjectsFromObjectFunctionsByKey(toShowEntityObject, 'attributes');

  var supportsMultipleValues = attributeObjects[currentColumnName].supportsMultipleValues;

  if (supportsMultipleValues) {

    if (activeRowRange.isBlank()) {
      // Check if the user is beginning a new mini table or continuing an existing mini table
      var guidColumnNumber = columnNameToColumnNumber(activeSheet, ['helper_mini_table_guid']);
      var isMiniTableHeaderColumnNumber = columnNameToColumnNumber(activeSheet, ['helper_is_mini_table_header']);
      var previousGuid = activeSheet.getRange(activeRowIndex - 1, guidColumnNumber, 1, 1).getValue();
      if (previousGuid == '') {
        startOfMiniTable = true;

      } else if (previousGuid != '') {
        startOfMiniTable = false;

      }

      miniTable(activeSheet, activeRowIndex, startOfMiniTable, isMiniTableHeaderColumnNumber, guidColumnNumber)

    } else {
      SpreadsheetApp.getUi().alert('This column does not support multiples values. No mini table generated.')

    }

  } else {
    SpreadsheetApp.getUi().alert('This column does not support multiples values. No mini table generated.')
  }

}

/**  
 * Create the mini table.
 * @param {sheet} activeSheet - The sheet in which the mini table should be created.
 * @param {number} currentRow - The number of the current row.
 */
function miniTable(activeSheet, currentRow, startOfMiniTable, isMiniTableRowCol, guidColumnNumber) {

  if (startOfMiniTable == true) {
    var uuid = Utilities.getUuid(); // generate uuid
    // Set uuid for header row and active row
    activeSheet.getRange(currentRow - 1, guidColumnNumber, 1, 1).setValue(uuid);
    activeSheet.getRange(currentRow, guidColumnNumber, 1, 1).setValue(uuid);
    // Flag mini tabl header row as true          
    activeSheet.getRange(currentRow - 1, isMiniTableRowCol, 1, 1).setValue("TRUE");
    activeSheet.getRange(currentRow, isMiniTableRowCol, 1, 1).setValue("FALSE");
  } else if (startOfMiniTable == false) {
    var existingGuid = activeSheet.getRange(currentRow - 1, guidColumnNumber, 1, 1).getValue();
    activeSheet.getRange(currentRow, guidColumnNumber, 1, 1).setValue(existingGuid);
    activeSheet.getRange(currentRow, isMiniTableRowCol, 1, 1).setValue("FALSE");
  };

}