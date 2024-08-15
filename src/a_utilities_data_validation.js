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
 * @fileoverview Utilities for data validation.
 * @author Abigail Elizabeth 
 */

/**
 * Apply data validation to form
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {array} scubedPackages - The packages (not provenance)
 * that are selected during configuration and set as a property of the sheet.
 * @param {array} columnNames - The names of columns for which validation
 * should be applied.
 * @param {array} provenanceType - The provenance that is configured.
 * during configuration and set as a property of the sheet.
 * @param {Object} rangeToValidateObject - The details of what range should be validated.
 * @param {string} formName - The name of the form that will be validated.
 * @param {string} currentColumnName - The name of the column that will be validated.
 * @param {Range} formulaRange - The Range to use within the value formatting formula.
 * @param {Array.<*[]>} searchValuesConDef - The values in the conceptDefinition sheet.
 * @param {Array.<*[]>} searchValuesMatDef - The values in the materialDefinition sheet.  
 * @param {Array.<*[]>} searchValuesConDef - The values in the dataValidation sheet. 
 * @param {Array.<*[]>} searchValuesWrkflwMgmt - The values in the workflowManagment sheet. 
 * @param {Array.<*[]>} searchValuesProcDef - The values in the processDefinition sheet. 
 * @param {Array.<*[]>} searchValuesProcExec - The values in the processExecution sheet. 
 * @return {} rule - The data validation rule.
 * @todo Remove unused args.
 * @todo Replace hard-coded form names and packages with global vars.
 * 
*/

const applyDataValidationForm = (sheet, scubedPackages, columnNames, provenanceType, rangeToValidateObject, formName, currentColumnName, formulaRange, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt, searchValuesProcDef, searchValuesProcExec) => {

  // Get info for data validation
  if (formName == 'processExecution') {
    var dataValidationCharacterstics = getCurrentDataValidationProcessExecution(currentColumnName, searchValuesProcDef);

  } else if (formName === 'conceptDefinition') {
    var dataValidationCharacterstics = getCurrentDataValidationConceptDefinitionCore(currentColumnName, searchValuesConDef);

    // TODO Need better methods to handle packages
    if (dataValidationCharacterstics === 'none') {
      var dataValidationCharacterstics = getCurrentDataValidationConceptDefinitionOrganismPackage(currentColumnName, searchValuesConDef);

    }

  } else if (formName == 'workflowManagement') {
    var dataValidationCharacterstics = getCurrentDataValidationWorkflowManagement(currentColumnName, searchValuesProcDef);

  } else if (formName == 'materialDefinition') {
    var dataValidationCharacterstics = getCurrentDataValidationMaterialDefinition(currentColumnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt);

  } else if (formName == 'processDefinition') {
    var dataValidationCharacterstics = getCurrentDataValidationProcessDefinitionCore(currentColumnName, searchValuesProcDef);

    // TODO Need better methods to handle packages
    if (dataValidationCharacterstics === 'none' && scubedPackages.indexOf('CIDC') > -1) {
      var dataValidationCharacterstics = getCurrentDataValidationProcessDefinitionCIDC(currentColumnName, searchValuesProcDef);
    }

  }

  if (dataValidationCharacterstics !== 'none') {
    var dataValidationType = dataValidationCharacterstics.dataValidationType;
    var specifications = Object.values(dataValidationCharacterstics.specifications);
  } // TODO handle no dataValidationCharacteristics

  // Create data validation rule
  //var formulaRange = rangeListA1[columnNamesIndex];
  let lastRow = sheet.getLastRow();
  var rule = setDataValidationCharactersticsByDatatype(sheet, rangeToValidateObject, dataValidationType, specifications, formulaRange, lastRow);

  if (rule === undefined) {
    var rule = null;
  }

  return rule;

}

/**
 * Apply data validation to sheet given the datatype
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToValidateObject - The details about the range to apply 
 * validation to.
 * @param {string} dataValidationType - The datatype.
 * @param {[string|number]} validationArguments - The datatype.
 * @param {Range} formulaRange - The Range to use within the value formatting formula.
 * @param {number} lastRow - The index of the last row in the sheet where validation will be applied.
 * @return {} rule - The data validation rule.
 * @todo Sort out list, list filtered not lot number, list not from range and list range. You also do this
 * in a simple helpt text function setNoteForSimpleHelpTextByDatatype.
 * 
*/
const setDataValidationCharactersticsByDatatype = (sheet, rangeToValidateObject, dataValidationType, validationArguments, formulaRange, lastRow) => {
  //var rule = '';
  if (dataValidationType == 'text') {
    var rule = setTextDataValidation(sheet, rangeToValidateObject, ...validationArguments, formulaRange) //...operator to expand array of args

  } else if (dataValidationType == 'integer') {
    var rule = setIntegerDataValidation(sheet, rangeToValidateObject, ...validationArguments)

  } else if (dataValidationType == 'float no min/max') {
    var rule = setFloatNoMinMaxDataValidation(sheet, rangeToValidateObject, ...validationArguments, formulaRange)

  } else if (dataValidationType == 'float with min/max') {
    var rule = setFloatWithMinMaxDataValidation(sheet, rangeToValidateObject, ...validationArguments, formulaRange)

  } else if (dataValidationType == 'phone') {
    var rule = setPhoneNumberDataValidation(sheet, rangeToValidateObject, ...validationArguments, formulaRange)

  } else if (dataValidationType == 'date') {
    var rule = setRequireDateDataValidation(sheet, rangeToValidateObject)

  } else if (dataValidationType == 'email') {
    var rule = setRequireTextIsEmailDataValidation(sheet, rangeToValidateObject, ...validationArguments)

  } else if (dataValidationType == 'url') {
    var rule = setRequireTextIsUrlDataValidation(sheet, rangeToValidateObject, ...validationArguments)

  } else if (dataValidationType == 'time') {
    var rule = setTimeDataValidation(sheet, rangeToValidateObject, formulaRange)

  } else if (dataValidationType == 'duration') {

  } else if (dataValidationType == 'list' || dataValidationType == 'list filtered lot number' || dataValidationType == 'list not from range') { // TODO remove just 'list'; it's now list not from range
    //var rule = setDataValidationCharactersticsByDatatype(sheet, rangeToValidateObject, ...validationArguments)
    var rule = setRequireValueInListDataValidation(sheet, rangeToValidateObject, ...validationArguments)
  } else if (dataValidationType == 'list range') {
    //HERE need to pass range below
    var rule = setRequireValueInRangeDataValidation(sheet, rangeToValidateObject, ...validationArguments, lastRow)

  }

  return rule;

}


/**
 * Create object with data validation type and specifications
 * @param {string} dataValidationType - The type of data validation.
 * @param {Object} specifications - The validation specifications. 
 * @return {Object} columnDataValidationCharacteristics - The type of data validation and specifications.
*/
const createColumnDataValidationCharacteristics = (dataValidationType, specifications) => {
  const columnDataValidationCharacteristics = {
    dataValidationType: dataValidationType,
    specifications: specifications
  }
  return columnDataValidationCharacteristics;
}

/**
 * Create object with text validation specifications
 * @param {number} maxCharacterLength - The maximum number of characters.
 * @return {Object} specifications - The validation specifications.
*/

const createTextValidationSpecifications = (maxCharacterLength) => {
  const specifications = {
    maxCharacterLength: maxCharacterLength
  }
  return specifications;

}

/**
 * Create object with integer validation specifications
 * @param {number} minValue - The minimum value.
 * @param {number} maxValue - The maximum value.
 * @return {Object} specifications - The validation specifications.
*/

const createIntegerValidationSpecifications = (minValue, maxValue) => {
  const specifications = {
    minValue: minValue,
    maxValue: maxValue
  }
  return specifications;

}

/**
 * Create object with float with no mininmum/maximum validation specifications
 * @param {number} maxTotalDigits - The maximum digits in total.
 * @param {number} maxDecimalPlaces - The maximum digits after the decimal point.
 * @return {Object} specifications - The validation specifications.
*/

const createFloatNoMinNoMaxValidationSpecifications = (maxTotalDigits, maxDecimalPlaces) => {
  const specifications = {
    maxTotalDigits: maxTotalDigits,
    maxDecimalPlaces: maxDecimalPlaces
  }
  return specifications;

}

/**
 * Create object with float with mininmum/maximum validation specifications
 * @param {number} maxTotalDigits - The maximum digits in total.
 * @param {number} maxDecimalPlaces - The maximum digits after the decimal point.
 * @param {number} minValue - The minimum value.
 * @param {number} maxValue - The maximum value.
 * @return {Object} specifications - The validation specifications.
*/

const createFloatValidationSpecifications = (maxTotalDigits, maxDecimalPlaces, minValue, maxValue) => {
  const specifications = {
    maxTotalDigits: maxTotalDigits,
    maxDecimalPlaces: maxDecimalPlaces,
    minValue: minValue,
    maxValue: maxValue
  }
  return specifications;

}

/**
 * Create object with values in list validation specifications
 * @param {[string]]} options - The options to appear in the drop-down list.
 * @return {Object} specifications - The validation specifications.
 * @todo Replace hard-coded form name with global var.
*/

// TODO Rename this funct to specify value in a range!
const createValueInControlledVocabListValidationSpecifications = (equalsValue) => {
  let validationListsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('validationLists');
  let lastRow = validationListsSheet.getLastRow();
  const rangeToSearch = validationListsSheet.getRange(2, 1, lastRow, 1).getValues();
  const rangeToSelect = validationListsSheet.getRange(2, 2, lastRow, 1).getValues();
  const listOptions = selectFromWhere(equalsValue, rangeToSearch, rangeToSelect);

  const specifications = {
    listOptions: listOptions
  }
  return specifications;

}

/**
 * Create object with values for validation list
 * @param {array} listOptions - The values to appear in te list.
 * @return {Object} specification - The validation specifications.
*/

createListNotFromRangeSpecifications = (listOptions) => {

  const specifications = {
    listOptions: listOptions
  }
  return specifications;

}

createUrlSpecifications = () => {

  const specifications = {

  }
  return specifications;

}


/*
 createValueInListValidationSpecifications = (databaseTableName,databaseAttributeName) => {
  const specifications = {
    databaseTableName: databaseTableName,
    databaseAttributeName: databaseAttributeName
  }
  return specifications;

}
*/

/**
 * Query for values where no filter (WHERE) is required.
 * @param {string} columnNames - The names of column in the sheet that contains the values to be queried.
 * @param {Array.<*[]>} searchSheet - The values in the sheet that will be queried.
 * @return {array} listOptions The values that resulted from the query. 
 */

const getListOptionsWithoutFilter = (columnNames, searchSheet) => {
  var listOptions = [];

  // Handle instances where NO CONDITION (filter) is required to fetch values and
  // only one column contains the values that need to be fetched
  if (columnNames.length == 1) {
    let columnNumber = searchSheet[0].indexOf(columnNames);
    var listOptions2D = getColumnValues(searchSheet, columnNumber);
    var listOptions = [].concat(...listOptions2D);

  } else {
    // Handle instances where NO CONDITION (filter) is required to fetch values and
    // multiple columns contain the values that need to be fetched

    // Loop over all of the columns that contain values that s/b fetched and
    // gather them into one value, e.g. if column A1 contains "cat" and column
    // B1 contains "mouse", then create value "cat\tmouse"
    for (let columnIndex = 0; columnIndex < columnNames.length; columnIndex++) {
      let columnNumber = searchSheet[0].indexOf(columnNames[columnIndex][0]);
      const valuesColumn1D = getColumnValues(searchSheet, columnNumber);

      if (columnIndex != 0) {
        var listOptions = listOptions.map((d, i) => `${d}\t${valuesColumn1D[i]}`)

      } else if (columnIndex == 0) {
        var listOptions = valuesColumn1D;

      }

    }

  }

  return listOptions;

}

/**
 * Query for values where a filter (WHERE) is required and the match criteria is within the values being queried.
 * @param {string} columnNames - The names of column in the sheet that contains the values to be queried.
 * @param {Array.<*[]>} searchSheet - The values in the sheet that will be queried.
 * @param {string} filterValue - The value that should be match to select values.
 * @param {boolean} equalsFilterValue - Select values related to instances where the value matches the filter value.
 * @return {array} listOptions The values that resulted from the query. 
 */

const getListOptionsFilterInPlace = (columnNames, searchSheet, filterValue, equalsFilterValue) => {
  var listOptions = getListOptionsWithoutFilter(columnNames, searchSheet);

  if (filterValue != undefined && equalsFilterValue === true) {
    listOptions = listOptions.filter((listOption) => listOption.startsWith(filterValue));

    // Handle instances where filter is required and where the filter value should NOT match a value in the list
    // of values to be fetched
    // CASE getListOptionsFilterInPlace
  } else if (filterValue != undefined && equalsFilterValue === false) {
    listOptions = listOptions.filter((listOption) => !listOption.startsWith(filterValue));

    // Handle instances where the filter values should not be evaluated for in the values that are to be fetched
    // CASE getListOptionsFilterNotInPlace
  }

  return listOptions;

}

/**
 * Query for values where a filter (WHERE) is required and the match criteria is not within the values being queried.
 * @param {string} columnNames - The names of column in the sheet that contains the values to be queried.
 * @param {Array.<*[]>} searchSheet - The values in the sheet that will be queried.
 * @param {string} filterValue - The value that should be match to select values.
 * @param {boolean} equalsFilterValue - Select values related to instances where the value matches the filter value.
 * @return {array} listOptions The values that resulted from the query. 
 */

const getListOptionsFilterNotInPlace = (columnNames, searchSheet, filterColumnName, filterValue, equalsFilterValue) => {
  // FIRST HANDLE PRESENCE OF FILTER COLUMN AND ONLY ONE COLUMN TO FETCH VALUE
  if (filterColumnName != undefined && columnNames.length === 1) {
    let columnNumber = searchSheet[0].indexOf(columnNames[0]);
    let filterColumnNumber = searchSheet[0].indexOf(filterColumnName);
    const rangeToSearch = getColumnValues(searchSheet, filterColumnNumber);
    const rangeToSelect = getColumnValues(searchSheet, columnNumber);
    var listOptions = selectFromWhere(filterValue, rangeToSearch, rangeToSelect, equalsFilterValue);

  } else {
    // Handle instances where the filter values should not be evaluated for in the values that are to be fetched
    var listOptions = getListOptionsWithoutFilter(columnNames, searchSheet);
    let filterColumnNumber = searchSheet[0].indexOf(filterColumnName);
    const rangeToSearch = getColumnValues(searchSheet, filterColumnNumber);

    // find positions of rows where filter value is present
    var indexesOfFitlerValue = []
    var i = -1;

    while ((i = rangeToSearch[0].indexOf(filterValue, i + 1)) != -1) {
      indexesOfFitlerValue.push(i);

    }

    var tempListOptions = [];
    for (var valueInSearchColumnIndex in rangeToSearch) {
      if (rangeToSearch[valueInSearchColumnIndex][0] == filterValue) {
        tempListOptions.push(listOptions[valueInSearchColumnIndex]);

      }

    }

    var listOptions = tempListOptions;

  }

  return listOptions;
}

/**
 * Create object with values in list validation specifications
 * @param {[string]]} columnNames - The names of columns that contain values to be queried.
 * @param {string} filterColumnName - The name of the column that contains values to be filtered against.
 * @param {string} filterValue - The value to filter by (WHERE columnName = filterValue).
 * @param {boolean} equalsFilterValue - The desired values are related to a value that is equal the filter value.
 * @param {boolean} filterValueNotinOptionList - The filter value is not in the list of values to be queried for return.
 * @param {Object} searchSheet - The sheet to be searched.
 * @return {Object} specifications - The validation specifications.
 * @todo Re-write this function. It got out-of-hand as I added new types of 
 * drop-down lists.
*/

const createValueInForeignKeyListValidationSpecifications = (searchSheetName, columnNames, filterColumnName, filterValue, equalsFilterValue, filterValueNotinOptionList, searchSheet) => {


  if (filterColumnName === undefined) {
    var listOptions = getListOptionsWithoutFilter(columnNames, searchSheet)

  } else if (filterColumnName != undefined && columnNames.length === 1) {
    var listOptions = getListOptionsFilterNotInPlace(columnNames, searchSheet, filterColumnName, filterValue, equalsFilterValue);

  } else if (filterValue != undefined && equalsFilterValue === true && filterValueNotinOptionList != true) {
    listOptions = getListOptionsFilterInPlace(columnNames, searchSheet, filterValue, equalsFilterValue);

  } else if (filterValue != undefined && equalsFilterValue === false && filterValueNotinOptionList != true) {
    listOptions = getListOptionsFilterInPlace(columnNames, searchSheet, filterValue, equalsFilterValue);

  } else if (filterValueNotinOptionList === true) {
    listOptions = getListOptionsFilterNotInPlace(columnNames, searchSheet, filterColumnName, filterValue, equalsFilterValue);

  }

  const specifications = {
    listOptions: listOptions
  }
  return specifications;

}

function testMultiItemDrown() {
  let spreadsheet = SpreadsheetApp.openById('1P9QKbwVJBjD0CHrD63obAEa__1lx64_KjaQCFDhgg-E');
  let sheet = spreadsheet.getSheetByName('conceptDefinition');
  let res = createValueInForeignKeyListValidationSpecifications(sheet, [['material_supplier'], ['catalog_number']], 'material_supplier', 'in-house')

}

/**

*/

/**
 * Create object with values in list validation specifications
 * @param {integer} startRow - The row to begin validation.
 * @param {string} sheetName - The name of the sheet where validation
 * is to be set.
 * @param {string} columnName - The name of the column that should
 * contain the validation.
 * @return {Object} specifications - The validation specifications.
*/

const createItemInRangeValidationSpecifications = (startRow, sheetName, columnName) => {
  const specifications = {
    startRow: startRow,
    sheetName: sheetName,
    columnName: columnName
  }
  return specifications;

}


/**
 * 
 * FUNCTIONS TO SET FKS IN FK SHEET
 * 
 */

/**
 * Split tab-separated values.
 * @param {[string]} noninhouseCatalogNumbersInMatDef - Tab-separated string(s).
 * @return {[string]} noninhouseCatalogNumbersInMatDef - Strings without tab-separation.
 */
const splitTabSeparatedValues = (noninhouseCatalogNumbersInMatDef) => {
  for (let catNoIndex = 1; catNoIndex < noninhouseCatalogNumbersInMatDef.length; catNoIndex++) {
    if (noninhouseCatalogNumbersInMatDef[catNoIndex] != '') {
      var values = noninhouseCatalogNumbersInMatDef[catNoIndex].toString().split('\t');
      noninhouseCatalogNumbersInMatDef[catNoIndex] = values[1].toString().trim();

    } else {
      values = '';
    }

  }

  return noninhouseCatalogNumbersInMatDef;
}

// CAN YOU USE EXISTING FUNCTION FOR THIS?
const getLotNumbersForCatalogNumber = (lotNumbers, filteredLotNumbers, inhouseCatalogNumbersInMatDef, noninhouseCatalogNumbersInMatDef, filteredCatalogNumbers, inhouseRegistrationTypeInMatDef) => {
  for (let lotNumbersIndex = 1; lotNumbersIndex < lotNumbers.length; lotNumbersIndex++) {
    var currentInhouseMatDefCatalogNumbers = inhouseCatalogNumbersInMatDef[lotNumbersIndex]//.toString().trim();

    var currentNotInHouseMatDefCatalogNumber = noninhouseCatalogNumbersInMatDef[lotNumbersIndex]//.toString().trim();

    // get registrationtype
    var currentInhouseRegistrationType = inhouseRegistrationTypeInMatDef[lotNumbersIndex][0];

    if (filteredCatalogNumbers.indexOf(currentInhouseMatDefCatalogNumbers) > -1 ||
      filteredCatalogNumbers.indexOf(currentNotInHouseMatDefCatalogNumber) > -1 ||
      (currentInhouseRegistrationType === 'derived' && materialLotTypes.indexOf('derived') > -1)) {
      filteredLotNumbers.push(lotNumbers[lotNumbersIndex])

    }

  }
  return filteredLotNumbers;
}

// CAN YOU USE EXISTING FUNCTION FORTHIS?
const getLotNumbersForMaterialSubtype = (filteredLotNumbers, lotNumbers, inhouseRegistrationTypeInMatDef, actionInMatDef, materialLotTypes) => {
  for (let lotNumbersIndex = 0; lotNumbersIndex < filteredLotNumbers.length; lotNumbersIndex++) {
    var currentLotNumber = filteredLotNumbers[lotNumbersIndex];
    // get index of lot number in all lots
    var currentLotIndexAmongAllLots = lotNumbers.indexOf(currentLotNumber);
    // get registrationtype
    var currentInhouseRegistrationType = inhouseRegistrationTypeInMatDef[currentLotIndexAmongAllLots];//[0];
    // get action
    var action = actionInMatDef[currentLotIndexAmongAllLots];//[0];

    if (materialLotTypes.indexOf(currentInhouseRegistrationType) === -1 ||
      (materialLotTypes.indexOf(action) === -1 && action === 'Register externally sourced material')) { // action === ... b/c we don't specify interal in materialTypes
      filteredLotNumbers.splice(lotNumbersIndex, 1) // remove the lot number
    }

  }

  return filteredLotNumbers;
}

/**
 * Get lot numbers with specific provenances.
 * @param {[string]} lotNumbers - The lot numbers to be queried.
 * @param {[]} inhouseRegistrationTypeInMatDef - The types of in-house material (e.g. orphan, composed, derived) for the lot numbers to be quereied.
 * @param {[]} provenanceSummaryMatDef - The provenance summaries for the lot numbers to be queried.
 * @todo Replace hard-coded types of internal material with global vars.
 */
const filterForLotNumbersWithProvenance = (lotNumbers, inhouseRegistrationTypeInMatDef, provenanceSummaryMatDef) => {
  var materialTypesThatRequireFilterForProvenance = ['derived', 'composed'];
  for (let lotNumbersIndex = 0; lotNumbersIndex < lotNumbers.length; lotNumbersIndex++) {
    var currentLotNumber = lotNumbers[lotNumbersIndex]; // you don't want the filtered lot numbers here TODO

    // get index of lot number in all lots--redundant
    //var currentLotIndexAmongAllLots = lotNumbers.indexOf(currentLotNumber);

    // get registrationtype
    var currentInhouseRegistrationType = inhouseRegistrationTypeInMatDef[lotNumbersIndex][0]; // currentLotIndexAmongAllLots

    // get summary of provenance
    var currentProvenanceSummaryMatDef = provenanceSummaryMatDef[lotNumbersIndex][0]; // currentLotIndexAmongAllLots
    if (filterForPresenseOfProvenance === true && currentProvenanceSummaryMatDef === '' &&
      materialTypesThatRequireFilterForProvenance.indexOf(currentInhouseRegistrationType) > -1) { // action === ... b/c we don't specify interal in materialTypes
      lotNumbers.splice(lotNumbersIndex, 1) // remove the lot number

    }

  }
  filteredLotNumbers = lotNumbers;

  return filteredLotNumbers;
}

/**
 * Create object with values in list validation specifications
 * @param {string} subtypeColumnName - The name of the column that
 * includes the subtype value.
 * @param {string} subtypeColumnValue - The value for subtype to filter by.
 * @param {string} materialLotTypes - The type of physical material.
 * @param {boolean} filterForPresenseOfProvenance - Whether to filter based on
 * the presence of provenance.
 * @param {string} provenanceType - The type of provenance that's configured.
 * @return {[string]} filteredLotNumbers - The lot numbers.
 * @todo Replace hard-coded columnNames and provenance types with global vars.
*/

const getLotNumberOptionsByMaterialSubtype = (subtypeColumnName, subtypeColumnValue, materialLotTypes, filterForPresenseOfProvenance, provenanceType, allValuesConDef, allValuesMatDef) => {
  let columnNamesMatDef = allValuesMatDef[0];
  let columnNamesConDef = allValuesConDef[0];
  let lotNumberColumnNumber = columnNamesMatDef.indexOf('lot_number');
  let actionColumnNumber = columnNamesMatDef.indexOf('action');
  let inhouseRegistrationTypeColumnNumber = columnNamesMatDef.indexOf('inhouse_material_registration_type');

  // get values to help filter by type of physical material, e.g. internal vs external and orphan,derived,composed
  let actionInMatDef = getColumnValues(allValuesMatDef, actionColumnNumber);
  let inhouseRegistrationTypeInMatDef = getColumnValues(allValuesMatDef, inhouseRegistrationTypeColumnNumber);

  // get all catalog numbers in con def
  let catalogNumberColumnConDef = columnNamesConDef.indexOf('catalog_number');
  let allCatalogNumbersInConDef = getColumnValues(allValuesConDef, catalogNumberColumnConDef);

  // get in-house catalog numbers in mat def
  let inhouseCatNoColumnNumber = columnNamesMatDef.indexOf('catalog_number_inhouse_item');
  let inhouseCatalogNumbersInMatDef = getColumnValues(allValuesMatDef, inhouseCatNoColumnNumber);

  // get non—in-house catalog numbers in mat def
  let noninhouseCatalogNumberColumn = columnNamesMatDef.indexOf('catalog_number_noninhouse_item');
  let noninhouseCatalogNumbersInMatDef = getColumnValues(allValuesMatDef, noninhouseCatalogNumberColumn);

  // get summary of provenance
  if (provenanceType === 'summary') {
    let provenanceColumnNumberMatDef = columnNameToColumnNumber(materialDefinition, ['summary_of_provenance_reference']);
    var provenanceSummaryMatDef = materialDefinition.getRange(2, provenanceColumnNumberMatDef, lastRowMatDef, 1).getValues();

  }

  // For non—in-house items, split tab-separated column, material_supplier_catalog_number
  if (noninhouseCatalogNumbersInMatDef.length >= 1) {
    noninhouseCatalogNumbersInMatDef = splitTabSeparatedValues(noninhouseCatalogNumbersInMatDef);

  } else {
    noninhouseCatalogNumbersInMatDef = [];
  }

  // For in-house items, split tab-separated column, material_supplier_catalog_number 
  if (inhouseCatalogNumbersInMatDef.length >= 1) {
    inhouseCatalogNumbersInMatDef = splitTabSeparatedValues(inhouseCatalogNumbersInMatDef);

  } else {
    inhouseCatalogNumbersInMatDef = [];
  }

  // get subtype values from con def
  let discriminatorColumnNumber = columnNamesConDef.indexOf(subtypeColumnName);
  let discriminatorValues = getColumnValues(allValuesConDef, discriminatorColumnNumber);

  // filter to get only the desired catalog numbers
  var filteredCatalogNumbers = [];

  allCatalogNumbersInConDef.slice(1).forEach((catNo, index) => {
    if (discriminatorValues[index + 1] == subtypeColumnValue && catNo != undefined) {
      filteredCatalogNumbers.push(catNo);
    }
  });

  // check if arry
  if (!(Array.isArray(inhouseCatalogNumbersInMatDef))) {
    inhouseCatalogNumbersInMatDef = [inhouseCatalogNumbersInMatDef]

  }

  // get lot numbers that have the desired catalog numbers
  let lotNumbers = getColumnValues(allValuesMatDef, lotNumberColumnNumber);
  let filteredLotNumbers = [];
  filteredLotNumbers = getLotNumbersForCatalogNumber(lotNumbers, filteredLotNumbers, inhouseCatalogNumbersInMatDef, noninhouseCatalogNumbersInMatDef, filteredCatalogNumbers, inhouseRegistrationTypeInMatDef);

  // get lot numbers that have desired material types
  if (materialLotTypes != null) {
    filteredLotNumbers = getLotNumbersForMaterialSubtype(filteredLotNumbers, lotNumbers, inhouseRegistrationTypeInMatDef, actionInMatDef, materialLotTypes)

  }

  // remove lot numbers for derived and composed that don't have provenance
  // TODO s/b it's own funct
  // lotNumbers = materialDefinition.getRange(2, lotNumberColumnNumber, lastRowMatDef, 1).getValues();
  //SpreadsheetApp.getUi().alert('lotNumbers: '+lotNumbers)
  if (provenanceType === 'summary' && filterForPresenseOfProvenance != null) {
    filteredLotNumbers = filterForLotNumbersWithProvenance(lotNumbers, inhouseRegistrationTypeInMatDef, provenanceSummaryMatDef);

  }
  return filteredLotNumbers;

}

/**
 * Set lot numbers in drop-down lists.
*/

const setLotNumberOptionsInSheet = () => {

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  //const spreadsheet = SpreadsheetApp.openById('1P9QKbwVJBjD0CHrD63obAEa__1lx64_KjaQCFDhgg-E');
  const provenanceType = getValueFromSpreadsheetProperty('scubed_provenance_type');
  // [[columnNameInFKSheet,subtypeColumnNameInCatNoSheet,subtypeValueToFilterBy,[firstFilterMaterialTypeLikeComposed,secondFilterMaterialTypeLikeDerived]],filterForPresenseOfProvenance]

  // infoToCreateOptionLists = [['organismal_entity_lot_number', 'material_type', 'organismal entity', ['composed', 'derived', 'orphan', 'Register externally sourced material']]]; //'parent_for_provenance_summary','summary_of_provenance_reference'

  // TODO use objects for infoToCreateOptionLists
  const infoToCreateOptionLists = [['organismal_entity_lot_number', 'material_type', 'organismal entity', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['material_lot_number', 'concept_type', 'item', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['media_lot_number', 'material_type', 'substance', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['growth_environment_lot_number', 'material_type', 'growth environment', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['substance_lot_number', 'material_type', 'substance', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['homogenizer_lot_number', 'material_type', 'device', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['autoclave_lot_number', 'material_type', 'device', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['centrifuge_lot_number', 'material_type', 'device', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['lyophilizer_lot_number', 'material_type', 'device', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['container_lot_number', 'material_type', 'device', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['pooled_specimen_lot_number', 'material_type', 'organismal entity', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['solution_lot_number', 'material_type', 'substance', ['composed', 'derived', 'orphan', 'Register externally sourced material']],
  ['output_organismal_entity_lot_number', 'material_type', 'organismal entity', ['composed', 'derived']],
  ['output_growth_environment_lot_number', 'material_type', 'growth environment', ['composed', 'derived']],
  ['output_substance_lot_number', 'material_type', 'substance', ['composed', 'derived']],
  ['output_pooled_specimen_lot_number', 'organismal_entity_type', 'collection of organisms', ['composed']],
  ['material_lot_number_available_as_parent', 'concept_type', 'item', ['orphan', 'derived', 'composed', 'Register externally sourced material'], true]]; //'parent_for_provenance_summary','summary_of_provenance_reference'

  const fkSheet = spreadsheet.getSheetByName('dataValidation');
  const fkSheetValues = fkSheet.getDataRange().getValues();
  // create empty 2d array with appropriate # of columns
  let totalColumns = fkSheet.getLastColumn();
  let valuesToSet = [Array(totalColumns).fill(null)]; // one row w/ empty values for each column

  let materialDefinition = spreadsheet.getSheetByName('materialDefinition');
  let conceptDefinition = spreadsheet.getSheetByName('conceptDefinition');

  let totalRowsMatDef = materialDefinition.getMaxRows();
  let totalRowsConDef = materialDefinition.getMaxRows();
  let lastRowMatDef = materialDefinition.getLastRow();
  let totalColumnsMatDef = materialDefinition.getLastColumn();
  let totalColumnsConDef = conceptDefinition.getLastColumn();
  let allValuesMatDef = materialDefinition.getRange(1, 1, totalRowsMatDef, totalColumnsMatDef).getValues();
  let allValuesConDef = conceptDefinition.getRange(1, 1, totalRowsConDef, totalColumnsConDef).getValues();

  for (let fkListIndex = 0; fkListIndex < infoToCreateOptionLists.length; fkListIndex++) {
    let subtypeColumnName = infoToCreateOptionLists[fkListIndex][1];
    let subtypeValue = infoToCreateOptionLists[fkListIndex][2];
    if (infoToCreateOptionLists[fkListIndex].length === 4) {
      var materialLotTypes = infoToCreateOptionLists[fkListIndex][3];

    } else {
      var materialLotTypes = [];
    }
    if (infoToCreateOptionLists[fkListIndex].length === 5) {
      var filterForPresenseOfProvenance = infoToCreateOptionLists[fkListIndex][4];

    } else {
      var filterForPresenseOfProvenance = null;
    }

    // TODO handle instances where user doesn't configure context packages
    //try {
    let listOptions = getLotNumberOptionsByMaterialSubtype(subtypeColumnName, subtypeValue, materialLotTypes, filterForPresenseOfProvenance, provenanceType, allValuesConDef, allValuesMatDef);
    let columnName = infoToCreateOptionLists[fkListIndex][0];
    let columnNumber = fkSheetValues[0].indexOf(columnName); //let columnNumber = fkSheetValues[0].indexOf(columnName);
    let listLen = listOptions.length;
    if (listLen > 0) {
      // check if valuesToSet has sufficient number of rows
      if (valuesToSet.length < listLen) {
        // need to get sufficient # rows into valuesToSet
        let numberRowsToAdd = listLen - valuesToSet.length + 1;
        for (let rowIndex = 0; rowIndex < numberRowsToAdd; rowIndex++) {
          valuesToSet = valuesToSet.concat([Array(totalColumns).fill(null)]);

        }

      }
      // loop over options and push to array
      for (let listOptionIndex = 0; listOptionIndex < listLen; listOptionIndex++) {
        valuesToSet[listOptionIndex][columnNumber] = listOptions[listOptionIndex];

      }

    }

  }

  fkSheet.getRange(2, 1, valuesToSet.length, valuesToSet[0].length).setValues(valuesToSet);

}

/**
 * Get the strain.
 * @param {string} strainType - The type of strain of interest.
 * @return {[string]} listOptions - The strains affiliated with the strain type of interest.
*/
const getStrain = (strainType) => {
  let spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let conceptDefinition = spreadsheet.getSheetByName('conceptDefinition');
  let strainTypeColumnNumber = columnNameToColumnNumber(conceptDefinition, ['strain_type']);
  let lastRow = conceptDefinition.getLastRow();
  let strainTypes = conceptDefinition.getRange(2, strainTypeColumnNumber, lastRow).getValues();
  let speciesRefColumnNumber = columnNameToColumnNumber(conceptDefinition, ['species_reference']);
  let species = conceptDefinition.getRange(2, speciesRefColumnNumber, lastRow, 1).getValues();
  let sourceStrainColumnNumber = columnNameToColumnNumber(conceptDefinition, ['source_strain'])
  let strain = conceptDefinition.getRange(2, sourceStrainColumnNumber, lastRow, 1).getValues();
  let nonSourceStrainColumnNumber = columnNameToColumnNumber(conceptDefinition, ['non_source_strain'])
  let nonSourceStrain = conceptDefinition.getRange(2, nonSourceStrainColumnNumber, lastRow, 1).getValues();
  let listOptions = [];

  for (let strainIndex = 0; strainIndex < strain.length; strainIndex++) {
    if (strainTypes[strainIndex] == strainType && strainType == 'source strain' && strain != '' && strain != undefined) {
      var currentStrain = strain[strainIndex];
      let currentSpecies = species[strainIndex];
      let option = currentSpecies + '\t' + currentStrain;

      listOptions.push([option]);

    } else if (strainTypes[strainIndex] == strainType && strainType == 'non-source strain' && nonSourceStrain != '' && nonSourceStrain != undefined) {
      var currentStrain = nonSourceStrain[strainIndex];
      let currentSpecies = species[strainIndex];
      let option = currentSpecies + '\t' + currentStrain;

      listOptions.push([option]);

    }

  }

  return listOptions;

}

/**
 * Set values in the drop-down lists for source strains.
 */

const setSourceStrainOptionsInSheet = () => {

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const infoToCreateOptionLists = [['source_strain']];
  const fkSheet = spreadsheet.getSheetByName('foreignKeys');

  for (let fkListIndex = 0; fkListIndex < infoToCreateOptionLists.length; fkListIndex++) {

    // get options
    if (infoToCreateOptionLists[fkListIndex] == 'source_strain') {
      var listOptions = getStrain('source strain');
    }

    let columnName = infoToCreateOptionLists[fkListIndex][0];
    let columnNumber = columnNameToColumnNumber(fkSheet, [columnName]);
    let listLen = listOptions.length;
    fkSheet.getRange(2, columnNumber, listLen, 1).setValues(listOptions);

  }

}

/**
 * Set values in the drop-down lists for non-source strains.
 */

const setNonSourceStrainOptionsInSheet = () => {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let conceptDefinition = spreadsheet.getSheetByName('conceptDefinition');
  const nonSourceStrainColumnNumber = columnNameToColumnNumber(conceptDefinition, ['non_source_strain']);
  const conceptDefintion = spreadsheet.getSheetByName('conceptDefinition');
  const lastRow = conceptDefintion.getLastRow();
  const listOptions = conceptDefintion.getRange(2, nonSourceStrainColumnNumber, lastRow, 1).getValues();
  const fkSheet = spreadsheet.getSheetByName('foreignKeys');
  let columnName = 'non_source_strain';
  let columnNumber = columnNameToColumnNumber(fkSheet, [columnName]);
  let listLen = listOptions.length;
  fkSheet.getRange(2, columnNumber, listLen, 1).setValues(listOptions);

}

/**
 * Applies custom formula data validation to range to validate integers
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply 
 * validation to.
 * @param {number} maxCharacterLength - The maximum number of characters.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @param {} rule - The data validation rule.
*/

const setTextDataValidation = (sheet, rangeValidationObject, maxCharacterLength, formulaRange) => {
  const helpText = getHelpTextForTextDataValidation(maxCharacterLength) //'You must specify text with no more than '+maxCharacterLength+' characters.'
  const formula = '=LTE(LEN(' + formulaRange + '),' + maxCharacterLength + ')'
  const rule = SpreadsheetApp.newDataValidation()
    .requireFormulaSatisfied(formula)
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;
}

/**
 * Applies custom formula data validation to range to validate integers
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply 
 * validation to.
 * @param {number} minValue - The minimum value.
 * @param {number} maxValue - The maximum value.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setIntegerDataValidation = (sheet, rangeValidationObject, minValue, maxValue) => {

  const helpText = getHelpTextForIntegerDataValidation(minValue, maxValue);
  const rule = SpreadsheetApp.newDataValidation()
    .requireNumberBetween(minValue, maxValue)
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}

/**
 * Applies custom formula data validation to range to validate decimal withough minimum
 * and maximum values
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply 
 * validation to.
 * @param {number} maxTotalDigits - The maximum digits in total.
 * @param {number} maxDecimalPlaces - The maximum digits after the decimal point.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setFloatNoMinMaxDataValidation = (sheet, rangeValidationObject, maxTotalDigits, maxDecimalPlaces, formulaRange) => {
  const helpText = getHelpTextForFloatNoMinMaxDataValidation(maxTotalDigits, maxDecimalPlaces);
  const formula = '=AND(LTE(LEN(' + formulaRange + '-TRUNC(' + formulaRange + ',0))-2,' + maxDecimalPlaces + '),LTE(LEN(' + formulaRange + ')-1,' + maxTotalDigits + '),ISNUMBER(' + formulaRange + '))'
  const rule = SpreadsheetApp.newDataValidation()
    .requireFormulaSatisfied(formula)
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}

/**
 * Applies custom formula data validation to range to validate time
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply 
 * validation to.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setTimeDataValidation = (sheet, rangeValidationObject, formulaRange) => {
  const helpText = getHelpTextForTimeDataValidation();
  const formula = '=REGEXMATCH(TO_TEXT(' + formulaRange + '),"^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")'
  const rule = SpreadsheetApp.newDataValidation()
    .requireFormulaSatisfied(formula)
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}

/**
 * Applies custom formula data validation to range to validate decimal with minimum
 * and maximum values
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply 
 * validation to.
 * @param {number} maxTotalDigits - The maximum digits in total.
 * @param {number} maxTotalDigits - The maximum digits after the decimal point.
 * @param {number} minValue - The minimum value.
 * @param {number} maxValue - The maximum value.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setFloatWithMinMaxDataValidation = (sheet, rangeValidationObject, maxTotalDigits, maxDecimalPlaces, minValue, maxValue, formulaRange) => {
  const helpText = getHelpTextForFloatWithMinMaxDataValidation(maxTotalDigits, maxDecimalPlaces, minValue, maxValue)
  const formula = '=AND(LTE(LEN(' + formulaRange + '-TRUNC(' + formulaRange + ',0))-2,' + maxDecimalPlaces + '),LTE(LEN(' + formulaRange + ')-1,' + maxTotalDigits + '),ISNUMBER(' + formulaRange + '),LTE(' + formulaRange + ',' + maxValue + '),GTE(' + formulaRange + ',' + minValue + '))'
  const rule = SpreadsheetApp.newDataValidation()
    .requireFormulaSatisfied(formula)
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}

/**
 * Applies custom formula data validation to range to validate 15 digit number
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply validation to.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setPhoneNumberDataValidation = (sheet, rangeValidationObject, formulaRange) => {
  const helpText = getHelpTextForPhoneNumberDataValidation();
  const formula = '=AND(ISNUMBER(' + formulaRange + '),LTE(LEN(' + formulaRange + '),15))'
  const rule = SpreadsheetApp.newDataValidation()
    .requireFormulaSatisfied(formula)
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}

/**
 * Applies require date data validation to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply validation to.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setRequireDateDataValidation = (sheet, rangeValidationObject) => {
  const helpText = getHelpTextForDateDataValidation();
  const rule = SpreadsheetApp.newDataValidation()
    .requireDate()
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}

/**
 * Applies require text is email data validation to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply validation to.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setRequireTextIsEmailDataValidation = (sheet, rangeValidationObject) => {

  const helpText = getHelpTextForEmailDataValidation();
  const rule = SpreadsheetApp.newDataValidation()
    .requireTextIsEmail()
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();
  //rangeToBeValidated.setDataValidation(rule)
  return rule;

}

/**
 * Applies require text is URL data validation to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply validation to.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setRequireTextIsUrlDataValidation = (sheet, rangeValidationObject) => {

  const helpText = getHelpTextForUrlDataValidation();
  const rule = SpreadsheetApp.newDataValidation()
    .requireTextIsUrl()
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}


/**
 * Applies drop-down list data validation to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeValidationObject - The details about the range to apply validation to.
 * @param {[string]} options - The options that should appear in the drop-down list.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @return {} rule - The data validation rule.
*/

const setRequireValueInListDataValidation = (sheet, rangeValidationObject, options) => {
  const helpText = getHelpTextForRequireValueInListDataValidation();
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInList(options, true)
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}

/**
 * Applies drop-down list data validation to range.
 * @param {string} sheetName - The name of the sheet with values to be queried.
 * @param {string} columnName - The name of the column that contains the values to be queried.
 * @return {} rule - The data validation rule. 
*/

const setRequireValueInRangeDataValidation = (sheet, rangeToValidateObject, startRow, sheetName, columnName) => {
  let sheetWithOptions = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  let lastRow = sheetWithOptions.getLastRow();
  if (lastRow < 3) {
    lastRow = 50;
  }

  let columnNumber = columnNameToColumnNumber(sheetWithOptions, [columnName])
  let a1RangeWithOptions = sheetWithOptions.getRange(2, columnNumber, lastRow, 1)
  const helpText = getHelpTextForRequireValueInListDataValidation();
  const rule = SpreadsheetApp.newDataValidation()
    .requireValueInRange(a1RangeWithOptions)
    .setAllowInvalid(false)
    .setHelpText(helpText)
    .build();

  return rule;

}

/**
 * Working on updateDataValidationFromRange
 * @todo Determine if this is used.
 */
const updateDataValidationFromRange = (dataValidationSheet, targetSheetName, targetColumnName) => {
  let sheetName = 'materialDefinition';

  if (sheetName == 'materialDefinition') {

    // need to write this as separate switch statement
    if (targetSheetName == 'materialDefinition' && targetColumnName == 'catalog_number_inhouse_item')
      var valuesForListToSet = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', [['material_supplier'], ['catalog_number']], 'material_supplier', 'in-house');

  }

  // get all rows from datavalidation
  let dataValidationLastRow = dataValidationSheet.getLastRow();
  let valuesInDataValidation = dataValidationSheet.getRange(2, 1, dataValidationLastRow, 3).getValues();

  // get all values to set into one 2D array
  var lengthOfValues = valuesForListToSet.length;
  var targetSheetValuesToSet = Array(lengthOfValues).fill(targetSheetName);
  var targetColumnNameToSet = Array(lengthOfValues).fill(targetColumnName);

  let allValuesToSet = [];
  allValuesToSet.push(targetSheetValuesToSet)
  allValuesToSet.push(targetColumnNameToSet)
  allValuesToSet.push(valuesForListToSet)

  let filteredValuesToSet = [];
  // find values that don't already exist in dataValidation sheet
  for (let i = 0; i < allValuesToSet.length - 1; i++) {
    var row = allValuesToSet[i];
    //var duplicate = false;

    for (let j = 0; j < valuesInDataValidation.length; j++) {
      if (row.join() != valuesInDataValidation[j].join()) {
        // duplicate = false;
        filteredValuesToSet.push(row)
      }
    }
  }

  // set the missing values to dataValidation
  dataValidationSheet.getRange(dataValidationLastRow + 1, 1, filteredValuesToSet.length, filteredValuesToSet[0].length).setValues(filteredValuesToSet);

}

function testUpdateDataValidationFromRange() {
  let dataValidationSheet = SpreadsheetApp.openById('1P9QKbwVJBjD0CHrD63obAEa__1lx64_KjaQCFDhgg-E').getSheetByName('dataValidation');
  updateDataValidationFromRange(dataValidationSheet, 'materialDefinition', 'catalog_number_inhouse_item')

}

/**
 * Refresh the drop-down lists.
 */

const refreshDataValidation = () => {
  let activeSheet = SpreadsheetApp.getActiveSheet();
  let activeSheetName = activeSheet.getSheetName();

  var scubedPackages = getValueFromSpreadsheetProperty('scubed_packages');
  var provenanceType = getValueFromSpreadsheetProperty('scubed_provenance_type');

  if ((scubedPackages.indexOf('CIDC') > -1 && provenanceType.indexOf('activity') > -1) || (scubedPackages.indexOf('CIDC') > -1 && provenanceType === 'activity')) { // todo ||

    var searchValuesProcExec = getSheetValues('processExecution');

  } else {
    var searchValuesProcExec = undefined;

  }

  // use get values function
  var searchValuesConDef = getSheetValues('conceptDefinition');
  var searchValuesMatDef = getSheetValues('materialDefinition');
  var searchValuesDatVal = getSheetValues('dataValidation');
  var searchValuesWrkflwMgmt = getSheetValues('workflowManagement');
  var searchValuesProcDef = getSheetValues('processDefinition');

  showInProgressDialog('Updating drop-down lists.');

  if (activeSheetName === 'processExecution') { //(activeSheetName === 'materialDefinition' || activeSheetName === 'processExecution')
    setLotNumberOptionsInSheet();
  } //else {

  let sheet = activeSheet;
  let totalRows = sheet.getMaxRows();
  let totalColumns = sheet.getLastColumn();
  let columnNames = sheet.getRange(1, 1, 1, totalColumns).getValues()[0];
  let formName = sheet.getName();
  var formatsDestinationRange = sheet.getRange(2, 1, totalRows, totalColumns);
  let rangeList = createRangeList(sheet, totalColumns, totalRows);
  let rangeListA1 = rangeList.map(range => range.getA1Notation());
  var rules = formatsDestinationRange.getDataValidations();

  for (let columnNamesIndex = 0; columnNamesIndex < columnNames.length; columnNamesIndex++) {
    let currentColumnName = columnNames[columnNamesIndex];
    let currentColumnNumber = columnNameToColumnNumber(sheet, [currentColumnName]);

    const rangeToFormatObject = {
      startRowNumber: 2,
      startColumnNumber: currentColumnNumber,
      totalRows: totalRows,
      totalColumns: 1
    }


    // handle data valiation
    var formulaRange = rangeListA1[columnNamesIndex];
    //var searchSheet = sheet.getRange(1, 1, totalRows, totalColumns).getValues();
    let rule = applyDataValidationForm(sheet, scubedPackages, columnNames, provenanceType, rangeToFormatObject, formName, currentColumnName, formulaRange, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt, searchValuesProcDef, searchValuesProcExec)

    // Add new rule to existing rules
    for (var rowIndex = 0; rowIndex < rules.length; rowIndex++) {
      //for (var columnIndex = 0; columnIndex < rules[rowIndex].length; columnIndex++) {
      if (currentColumnName != 'helper_is_mini_table_header') { //TODO FIGURE OUT HOW TO CREATE TRUE BOOLEAN IN SHEET
        rules[rowIndex][columnNamesIndex] = rule;

      } else {
        rules[rowIndex][columnNamesIndex] = null; // for mini table conditional formatting to work needs to be boolean (automatica)

      }

      //}
    }

  }

  formatsDestinationRange.setDataValidations(rules);

  closeCeleganDialog('Done updating drop-down lists')

}