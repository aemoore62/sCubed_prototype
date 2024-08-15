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
 * @fileoverview Utilities for generally working with sheets.
 * @author Abigail Elizabeth 
 */

/**
 * Create object that contains range information.
 * @param {number} currentColumnNumber - The index of the column that will be operated against.
 * @param {number} totalRows - The total number of rows in the sheet that contains the target range.
 * @return {Object} rangeToFormatObject - The range info.
 */
const createRangeParameters = (currentColumnNumber, totalRows) => {
  var rangeToFormatObject = {
    startRowNumber: 2,
    startColumnNumber: currentColumnNumber,
    totalRows: totalRows,
    totalColumns: 1
  }

  return rangeToFormatObject;
}

/**
 * Create a data validation rule.
 * @param {Object} sheet - The sheet to which the data validation will be applied.
 * @param {[string]} columnNames - The names of columns in the sheet to which validation will be applied.
 * @param {string} columnName - The name of the column to which the data validation will be applied.
 * @param {number} totalRows - The number of rows in the sheet that will receive validation.
 * @param {Range} formulaRange - The Range to use within the value formatting formula.
 * @param {functionToFetchDataValidation} functionToFetchDataValidation - Callback to function that fetches the data validation info.
 * @return {} rule - The data validation rule.
 */
const createDataValidationRule = (sheet, columnNames, columnName, totalRows, formulaRange, functionToFetchDataValidation) => {
  let columnNumber = columnNames.indexOf(columnName);
  const rangeToValidateObject = createRangeParameters(columnNumber, totalRows);

  var dataValidationCharacterstics = functionToFetchDataValidation(columnName);
  var dataValidationType = dataValidationCharacterstics.dataValidationType;
  var specifications = Object.values(dataValidationCharacterstics.specifications);

  var rule = setDataValidationCharactersticsByDatatype(sheet, rangeToValidateObject, dataValidationType, specifications, formulaRange);

  return rule;

}

/**
 * Get the state of the spreadsheet.
 * @return {Object} spreadsheetState - The state of the spreadsheet, including
 * configuration packages, type of provenance, and values of each sheet.
 * @todo Replace hard-coded form names with global vars.
 */
const getSpreadsheetState = () => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const spreadsheetState = {
    spreadsheet: spreadsheet,
    spreadsheetID: spreadsheet.getId(),
    packages: getValueFromSpreadsheetProperty('scubed_packages'),
    provenance: getValueFromSpreadsheetProperty('scubed_provenance_type'),
    conceptDefinition: getSheetState(spreadsheet, 'conceptDefinition'),
    materialDefinition: getSheetState(spreadsheet, 'materialDefinition'),
    processDefinition: getSheetState(spreadsheet, 'processDefinition'),
    workflowManagement: getSheetState(spreadsheet, 'workflowManagement'),
    dataValidation: getSheetState(spreadsheet, 'dataValidation'),
    processExecution: getSheetState(spreadsheet, 'processExecution')
  }

  return spreadsheetState;

}

/**
 * Get the state of the sheet.
 * @param {Object} spreadsheet - The spreadsheet of interest.
 * @param {string} sheetName - Name of sheet for which state should be returned.
 * @return {Object} sheetState - State of the sheet.
 */
const getSheetState = (spreadsheet, sheetName) => {
  const sheet = spreadsheet.getSheetByName(sheetName);
  const allValues = sheet.getDataRange().getValues()

  const sheetState = {
    sheet: sheet,
    formName: sheetName,
    allValues: allValues,
    columnNames: allValues[0],
    lastColumn: sheet.getLastColumn(),
    lastRow: sheet.getLastRow(),
    maxColumn: sheet.getMaxColumns(),
    maxRow: sheet.getMaxRows()

  }

  return sheetState;

}

/**
 * Gets information
 * @example
 * // returns Big Sur
 * var holidayPlan = switchAlternative({
 * "summer vacation": "Big Sur"
 * })('none')
 * holidayPlan("summer vacation")
 * @param {Object} cases - The object that contains cases and their information.
 * @param {string} defaultCase - The default information.
 * @param {string} key - The case being evaluated.
 * @return {*} - The information.
*/
const switchAlternative = cases => defaultCase => key =>
  cases.hasOwnProperty(key) ? cases[key] : defaultCase


/**
 * Combines objects within objects by the common key of the objects to be combined
 * @param {Object} objectWithFunctions - An object with functions.
 * @param {string} keyToCombineBy - The name of the key whose allValues are objects and by which objects should be combined.
 * @return {Object} objectsCombinedByKey - An object of objects.
*/
const getObjectsFromObjectFunctionsByKey = (objectWithFunctions, keyToCombineBy) => {
  let objectsCombinedByKey = {};
  Object.entries(objectWithFunctions).forEach(entry => {
    const [key, value] = entry;

    if (typeof value === 'function') {
      let currentObject = value()[keyToCombineBy];
      Object.assign(objectsCombinedByKey, currentObject);

    }

  });
  return objectsCombinedByKey;

};

/**  
 * Gets column numbers
 * @param {sheet} sheet - The sheet.
 * @param {[string]} columnNames - The column names.
 * @return {[integer]} columnNumbers - The column numbers.
 * 
 */
const columnNameToColumnNumber = (sheet, columnNames, allColumnNames) => {
  if (Array.isArray(columnNames)) {
    const lastColumn = sheet.getLastColumn();

    if (allColumnNames == null) {
      var allColumnNames = sheet.getRange(1, 1, 1, lastColumn).getValues(); // get all column names

    }

    let columnNumbers = [];

    Array.from(columnNames).forEach((columnName) => {
      let currentColumnNumber = allColumnNames[0].indexOf(columnName); // get
      columnNumbers.push(currentColumnNumber + 1); // add one since column numbers start at one and array starts at zero
    });

    return columnNumbers;

  } else {

  }
};

/**  
 * Get value(s) based on criteria
 * @param {string} equalsValue - The the value to filter by.
 * @param {range} rangeToSearch - The range to search for the value.
 * @param {range} rangeToSelect - The range to fetch the target value from.
 * @param {bollean} equalsFilterValue - Whether the filter value should be a match.
 * @return {[string]} - The filtered values.
 */
//Update the inputs here. range is deceiving b/c it's an array, not getting array from a range
function selectFromWhere(equalsValue, rangeToSearch, rangeToSelect, equalsFilterValue) {
  var result = [];

  if (rangeToSearch.constructor == Array) {

    for (var searchIndex = 0; searchIndex < rangeToSearch.length; searchIndex++) {
      if (rangeToSearch[searchIndex].length > 0) { //rangeToSearch[searchIndex].constructor == Array &&

        if (rangeToSearch[searchIndex] == equalsValue && equalsFilterValue === true) { //rangeToSearch[searchIndex][0]
          result.push(rangeToSelect[searchIndex]) //rangeToSelect[searchIndex][0]

        } else if (rangeToSearch[searchIndex] !== equalsValue && equalsFilterValue === false) { //rangeToSearch[searchIndex][0]
          result.push(rangeToSelect[searchIndex]) //rangeToSelect[searchIndex][0]

        }
      }
    }
  }
  //result.sort()
  return result;
}

/**  
 * Get the names of all sheets.
 * @return {[string]} - The names of sheets.
 */
function getAllSheetNames() {
  var sheetsName = [];
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for (var i = 0; i < sheets.length; i++) {
    sheetsName.push(sheets[i].getName())
  };
  return sheetsName;
}

/**  
 * Enforce maximum number of rows.
 * @param {sheet} sheet - The sheet to enforce maximum rows on.
 * @param {number} maxNumberRows - The maximum number of rows permitted.
 */
function limitRowNumbersTo(sheet, maxNumberRows) {
  var lastRow = sheet.getMaxRows();

  if (lastRow > maxNumberRows) {
    let numberOfRowsToDelete = lastRow - maxNumberRows;
    sheet.deleteRows(maxNumberRows, numberOfRowsToDelete);

  }
}

/**  
 * Hide all columns execept the first n.
 * @param {sheet} sheet - The sheet in which columns should be hidden.
 * @param {number} firstN - The number of columns, from the left of the sheet,
 * that should NOT be hidden.
 */
const hideAllColumnsExceptFirstN = (sheet, firstN) => {
  var firstN = firstN + 1
  const columnsToHide = [];
  const lastColumnNumber = sheet.getLastColumn();

  for (let i = firstN; i <= lastColumnNumber; i++) {
    columnsToHide.push(i)
  }

  hideManyColumns(sheet, columnsToHide)
}

/**  
 * Hide many columns
 * @param {sheet} sheet - The sheet.
 * @param {range} rangeToHide - The columns that should be hidden.
 */
const hideManyColumns = (sheet, rangeToHide) => {
  for (let rangeIndex = 0; rangeIndex < rangeToHide.length; rangeIndex++) {
    sheet.hideColumns(rangeToHide[rangeIndex]);
  }
};

/**  
 * Show many columns
 * @param {sheet} sheet - The sheet.
 * @param {range} rangeToShow - The columns that should be shown.
 */
const showManyColumns = (sheet, rangeToShow) => {
  for (var rangeIndex = 0; rangeIndex < rangeToShow.length; rangeIndex++) {
    sheet.showColumns(rangeToShow[rangeIndex]);

  }
}

/**
 * Create a range list.
 * @param {Object} sheet - The sheet from which a range list will be created.
 * @param {number} totalColumns - The number of columns in the sheet.
 * @param {number} totalRows - The number of rows in the sheet.
 * @return {} rangeList The range list.
 */
const createRangeList = (sheet, totalColumns, totalRows) => {
  // Get A1 notation for sheet using first row
  const alphabet = [...Array(26).keys()].map((n) => String.fromCharCode(65 + n));
  let lastCellA1Notation = sheet.getRange(1, 1, totalColumns, 1).getA1Notation();
  let lastCellA1NotationLetter = lastCellA1Notation.replace(/[^a-zA-Z]+/g, '');
  let maxA1NotationPositions = lastCellA1NotationLetter.length;
  let maxAlphabetLetterInFirstPosition = alphabet.indexOf(lastCellA1Notation.charAt(0));
  //console.log('lastCellA1Notation.charAt(0): '+lastCellA1Notation.charAt(0))
  //console.log('maxA1NotationPositions: '+maxA1NotationPositions)

  // Iterate over alphabet to create A1 notation for each range
  let allA1Notations = [];
  var columnIterFlag = 0;

  for (var currentA1NotationPositionIndex = 0; currentA1NotationPositionIndex <= maxA1NotationPositions; currentA1NotationPositionIndex++) {
    //console.log('currentA1NotationPositionIndex: '+currentA1NotationPositionIndex)

    if (currentA1NotationPositionIndex == 0) {
      var letterPrefix = alphabet[currentA1NotationPositionIndex];

    } else if (currentA1NotationPositionIndex >= 1) {
      var letterPrefix = alphabet[currentA1NotationPositionIndex - 1]//+letterPrefix
    }

    for (let currentAlphabetLetterInFirstPositionIndex = 0; currentAlphabetLetterInFirstPositionIndex <= maxAlphabetLetterInFirstPosition; currentAlphabetLetterInFirstPositionIndex++) {

      for (let alphabetLetterIndex = 0; alphabetLetterIndex < alphabet.length; alphabetLetterIndex++) {
        var currentLetter = alphabet[alphabetLetterIndex];

        if (currentA1NotationPositionIndex > 0) {
          var currentLetters = letterPrefix + currentLetter

        } else {
          var currentLetters = currentLetter;

        }

        var currentA1Notation = currentLetters + 2 + ':' + currentLetters + totalRows;
        allA1Notations.push(currentA1Notation);
        //console.log(allA1Notations);
        var columnIterFlag = ++columnIterFlag;
        //console.log('columnIterFlag'+columnIterFlag)
        if (columnIterFlag == totalColumns) { break; }

      }

    }

  }
  let rangeList = sheet.getRangeList(allA1Notations).getRanges();

  return rangeList;
}

/**
 * Get the values in a column.
 * @param {[]} values - Values from a sheet.
 * @param {number} columnIndex - The column that contains values of interest.
 * @return {[]} columnValues - The values from a column. 
 */

function getColumnValues(values, columnIndex) {
  let columnValues = [];

  for (let rowIndex = 0; rowIndex < values.length; rowIndex++) {
    let currentValue = values[rowIndex][columnIndex];
    columnValues.push(currentValue)

  }

  return columnValues;

}

function testCreateRangeList() {
  let sheet = SpreadsheetApp.openById("1P9QKbwVJBjD0CHrD63obAEa__1lx64_KjaQCFDhgg-E").getSheetByName("oldprocessDefinition");
  let totalRows = sheet.getMaxRows();
  let totalColumns = sheet.getLastColumn();
  console.log("totalColumns: " + totalColumns)
  let result = createRangeList(sheet, totalColumns, totalRows);
  let rangeListA1 = result.map(range => range.getA1Notation());
  //console.log(rangeListA1[72])
  //console.log(result[72])
  ///console.log(rangeListA1)
  console.log(result.getValues())


}

function testState() {
  const STATE = getSpreadsheetState();
  console.log(STATE.conceptDefinition.sheet)
}
