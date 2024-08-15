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
 * @fileoverview Utilities for establishing general formatting (e.g. colors,
 * cell protection, and order of columns).
 * @author Abigail Elizabeth 
 */

/**  
 * Applies basic formatting to forms
 * @param {sheet} sheet - The sheet. 
 */

/**  
 * Set basic formatting in sheet.
 * @param {sheet} sheet - The the sheet to be formatted.
 * @param {number} totalRows - The number of rows in the sheet to be formatted.
 * @param {number} numberColumns - The number of columns in the sheet to be formatted.
 * @todo Replace hard-coded form names with global vars.
 */
const setBasicFormattingForm = (sheet, totalRows, totalColumns) => {
  // Set background colors and font
  const rangeEntireSheet = sheet.getRange(1, 1, totalRows, totalColumns);
  rangeEntireSheet.setFontFamily('Arial');
  rangeEntireSheet.setFontSize(10);

  let rangeBody = '';
  if (totalColumns > 1) {
    rangeBody = sheet.getRange(2, 2, totalRows, totalColumns - 1);
    if (sheet.getName() !== 'processExecution') {
      sheet.setFrozenColumns(1)

    } else if (sheet.getName() === 'processExecution') {
      sheet.setFrozenColumns(9)
    }

  } else {
    rangeBody = sheet.getRange(2, 1, totalRows, 1);
  }

  const bodyBackgroundColor = getCurrentHexFromColorPalette('grey II');
  rangeBody.setBackground(bodyBackgroundColor);

  const bodyFontColor = getCurrentHexFromColorPalette('black');
  rangeBody.setFontColor(bodyFontColor);

  const rangeHeader = sheet.getRange(1, 1, 1, totalColumns);

  const headerBackgroundColor = getCurrentHexFromColorPalette('black');
  rangeHeader.setBackground(headerBackgroundColor);

  const headerFontColor = getCurrentHexFromColorPalette('white');
  rangeHeader.setFontColor(headerFontColor);

  rangeHeader.setFontWeight('bold');

  // Freeze header row and first column
  sheet.setFrozenRows(1);

}

/**  
 * Set additional formatting in sheet.
 * @param {sheet} sheet - The the sheet to be formatted.
 * @param {number} totalRows - The number of rows in the sheet to be formatted.
 * @param {number} numberColumns - The number of columns in the sheet to be formatted.
 * @param {[]} columnNames - The names of columns in the sheet to be formatted.
 * @param {string} sheetName - The name of the sheet to be formatted.
 * @todo Need to clean up the second half where I had trouble with moving the columns
 * and then formatting the moved columns.
 * @todo Replace hard-coded form names and column names with global vars.
 */
const setAdditionalFormattingForm = (sheet, totalRows, totalColumns, columnNames, sheetName) => {
  let miniTableHeaderColumnNumber = columnNames.indexOf('helper_is_mini_table_header');
  let miniTableGuidColumnNumber = columnNames.indexOf('helper_mini_table_guid');
  let rangeMiniTableHeader = sheet.getRange(1, miniTableHeaderColumnNumber, totalRows, 1);
  let rangeMiniTableGuid = sheet.getRange(1, miniTableGuidColumnNumber, totalRows, 1);
  let rangeHeaderRow = sheet.getRange(1, 1, 1, totalColumns);

  // set protection to cells that shouldn't be editted
  rangeHeaderRow.protect().setWarningOnly(true);

  if (sheetName === 'materialDefinition') {
    const miniTableHeaderColumnNumber = columnNames.indexOf('barcode');
    let rangeBarcode = sheet.getRange(1, miniTableHeaderColumnNumber, totalRows, 1);
    rangeBarcode.setFontColor('black');
    rangeBarcode.setBackground('#e0e722');
    rangeBarcode.protect().setWarningOnly(true);
    rangeBarcode = sheet.getRange(2, miniTableHeaderColumnNumber, totalRows, 1);
    rangeBarcode.setFontFamily('Libre Barcode 39')

  }

  let lastColumn = sheet.getLastColumn();
  sheet.insertColumnsAfter(lastColumn, 2)
  // move helper columns to end
  //try {
  // you need to reget range!
  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  lastColumn = sheet.getLastColumn();
  totalColumns = sheet.getMaxColumns();
  columnNames = sheet.getDataRange().getValues()[0]
  miniTableGuidColumnNumber = columnNames.indexOf('helper_mini_table_guid');
  rangeMiniTableGuid = sheet.getRange(1, miniTableGuidColumnNumber + 1, totalRows, 1);
  sheet.moveColumns(rangeMiniTableGuid, lastColumn + 1);

  columnNames = sheet.getDataRange().getValues()[0]
  miniTableGuidColumnNumber = columnNames.indexOf('helper_mini_table_guid');
  rangeMiniTableGuid = sheet.getRange(1, miniTableGuidColumnNumber + 1, totalRows, 1);
  rangeMiniTableGuid.setBackground('#e0e722');
  rangeMiniTableGuid.setFontColor('black');
  rangeMiniTableGuid.protect().setWarningOnly(true);

  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  lastColumn = sheet.getLastColumn();
  totalColumns = sheet.getMaxColumns();
  columnNames = sheet.getDataRange().getValues()[0]
  console.log('after first move: ' + columnNames)
  miniTableHeaderColumnNumber = columnNames.indexOf('helper_is_mini_table_header');
  rangeMiniTableHeader = sheet.getRange(1, miniTableHeaderColumnNumber + 1, totalRows, 1);

  sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  lastColumn = sheet.getLastColumn();
  totalColumns = sheet.getMaxColumns();
  columnNames = sheet.getDataRange().getValues()[0]
  console.log('columnNames after second move: ' + columnNames)
  console.log('AFTER MOVE')
  sheet.moveColumns(rangeMiniTableHeader, lastColumn + 1);

  columnNames = sheet.getDataRange().getValues()[0]
  miniTableHeaderColumnNumber = columnNames.indexOf('helper_is_mini_table_header');
  rangeMiniTableHeader = sheet.getRange(1, miniTableHeaderColumnNumber + 1, totalRows, 1);
  rangeMiniTableHeader.setBackground('#e0e722');
  rangeMiniTableHeader.setFontColor('black');
  rangeMiniTableHeader.protect().setWarningOnly(true);

  removeEmptyColumns(sheet);

  // hide columns
  if (sheetName !== 'processExecution') {
    const allColumnsExceptFirst = []
    for (let i = 2; i <= lastColumn; i++) {
      allColumnsExceptFirst.push(i)
    }

    hideManyColumns(sheet, allColumnsExceptFirst);

  } else {
    const allColumnsExceptFirstFour = []
    for (let i = 5; i <= lastColumn; i++) {
      allColumnsExceptFirstFour.push(i)
    }
    hideManyColumns(sheet, allColumnsExceptFirstFour);

  }


}

/**  
 * Remove empty columns at end of sheet
 * @param {Object} sheet - The sheet in which columns should be removed.
*/
function removeEmptyColumns(sheet) {
  const totalColumns = sheet.getMaxColumns();
  const lastUsedColumn = sheet.getLastColumn();
  const numberColumnsToDelete = totalColumns - lastUsedColumn;

  if (numberColumnsToDelete > 0) {
    sheet.deleteColumns(lastUsedColumn + 1, numberColumnsToDelete)

  }
}

/**  
 * Determines the hex value of a color's common name
 * @return {string} - A hex value
*/
const getHexFromColorPalette = switchAlternative({
  'black sand': '#5c554e',
  'sand dollar': '#c2b280',
  'aqua shadow': '#079bf5',
  'clear water': '#05d0eb',
  'leaf': '#2cb11b',
  'bright caterpillar': '#a6e000',
  'mauve': '#805d91',
  'lilac': '#beafe1',
  'swamp': '#1aa688',
  'green algae': '#56d876',
  'hibiscus': '#e5516b',
  'passion fruit': '#ff829c',
  'construction': '#ef7c12',
  'mango': '#f4b95a',
  'late sun': '#e8c300',
  'early sun': '#ffe357',
  'grey I': '#b7b7b7',
  'grey II': '#d9d9d9',
  'black': '#000000',
  'deep pink': '#99004D',
  'bright pink': '#FF3399',
  'orange': '#F7AA14',
  'air blue': '#cdfff5',
  'black': '#000000',
  'white': '#ffffff'

})('none');

/**  
 * Determines the hex value given an entity
 * @return {string} - A hex value
 */
const getCurrentHexFromColorPalette = (entity) =>
  getHexFromColorPalette(entity)
