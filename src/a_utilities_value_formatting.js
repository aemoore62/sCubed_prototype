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
 * @fileoverview Utilities used for formatting (not validating!) values.
 * @author Abigail Elizabeth  
 */

/**
 * Apply data validation to form
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Array} scubedPackages - The packages used to configure the instance of sCubed.
 * @param {Object} rangeToFormatObject - The object that contains info about what range will be formatted.
 * @param {string} formName - The name of the form to which value formatting will be applied.
 * @param {currentColumnName} - The name of the column to which value formatting will be applied.
 * @param {Array.<*[]>} searchValuesConDef - The values in the conceptDefinition sheet.
 * @param {Array.<*[]>} searchValuesMatDef - The values in the materialDefinition sheet.  
 * @param {Array.<*[]>} searchValuesConDef - The values in the dataValidation sheet. 
 * @param {Array.<*[]>} searchValuesWrkflwMgmt - The values in the workflowManagment sheet. 
 * @param {Array.<*[]>} searchValuesProcDef - The values in the processDefinition sheet. 
 * @param {Array.<*[]>} searchValuesProcExec - The values in the processExecution sheet.
 * @return {Object} format - The info for value formatting.
 * @todo Replace hard-coded form names and packages with global vars.
*/
const applyValueFormattingForm = (sheet, scubedPackages, rangeToFormatObject, formName, currentColumnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt, searchValuesProcDef, searchValuesProcExe) => {

  if (formName == 'conceptDefinition') {
    if (scubedPackages.indexOf('core' > -1)) {
      var dataValidationCharacterstics = getCurrentDataValidationConceptDefinitionCore(currentColumnName, searchValuesConDef);

      if (dataValidationCharacterstics === 'none' && scubedPackages.indexOf('organism items' > -1)) {

        var dataValidationCharacterstics = getCurrentDataValidationConceptDefinitionOrganismPackage(currentColumnName, searchValuesConDef);

      }

    }

  } else if (formName == 'materialDefinition') {
    var dataValidationCharacterstics = getCurrentDataValidationMaterialDefinition(currentColumnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt);
  } else if (formName == 'processDefinition') {

    var dataValidationCharacterstics = getCurrentDataValidationProcessDefinitionCore(currentColumnName, searchValuesProcDef);

    if (dataValidationCharacterstics === 'none' && scubedPackages.indexOf('CIDC') > -1) {

      var dataValidationCharacterstics = getCurrentDataValidationProcessDefinitionCIDC(currentColumnName, searchValuesProcDef);
    }

  } else if (formName == 'workflowManagement') {
    var dataValidationCharacterstics = getCurrentDataValidationWorkflowManagement(currentColumnName, searchValuesProcDef);
  } else if (formName === 'processExecution') {
    var dataValidationCharacterstics = getCurrentDataValidationProcessExecution(currentColumnName, searchValuesProcDef);

  }


  // Get data validation type to guide formatting
  var dataValidationType = dataValidationCharacterstics.dataValidationType;

  if (dataValidationType == 'text' | dataValidationType == 'email' |
    dataValidationType == 'url' | dataValidationType == 'list' | dataValidationType == 'list range' | dataValidationType == 'list not from range') {

    var format = setTextFormat(sheet, rangeToFormatObject)

  } else if (dataValidationType == 'integer') {
    var format = setIntegerFormat(sheet, rangeToFormatObject)

  } else if (dataValidationType == 'decimal') {
    var decimalPlaces = dataValidationCharacterstics.specifications.decimalPlaces;
    var format = setDecimalFormat(sheet, rangeToFormatObject, decimalPlaces)

  } else if (dataValidationType == 'float with min/max') {
    var decimalPlaces = dataValidationCharacterstics.specifications.decimalPlaces;
    var validationArguments = Object.values(dataValidationCharacterstics.specifications)
    var format = setFloatFormat(sheet, rangeToFormatObject, ...validationArguments) // ,...validationArguments

  } else if (dataValidationType == 'phone') {
    var format = setPhoneFormat(sheet, rangeToFormatObject)

  } else if (dataValidationType == 'date') {
    var format = setDateFormat(sheet, rangeToFormatObject)

  } else if (dataValidationType == 'time') {
    var format = setTimeFormat(sheet, rangeToFormatObject)

  } else if (dataValidationType == 'duration') {
    var format = setDurationFormat(sheet, rangeToFormatObject)

  }

  return format;


}

/**
 * Apply text formatting to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToFormatObject - The details about the range to apply 
 * formatting to.
 * @return {Object} format - The info for value formatting.
*/

const setTextFormat = (sheet, rangeToFormatObject) => {
  const format = createTextFormat() // example: hibiscus

  return format;

}

/**
 * Apply integer formatting to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToFormatObject - The details about the range to apply 
 * formatting to.
 * @return {Object} format - The info for value formatting.
*/
const setIntegerFormat = (sheet, rangeToFormatObject) => {
  const format = createIntegerFormat(); // example: 1234

  return format;

}

/**
 * Apply decimal formatting to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToFormatObject - The details about the range to apply 
 * formatting to.
 * @param {number} decimalPlaces - The maximum number of decimalPlaces.
 * @return {Object} format - The info for value formatting.
*/
const setDecimalFormat = (sheet, rangeToFormatObject, decimalPlaces) => {
  const format = createDecimalFormat(decimalPlaces);

  return format;

}

const setFloatFormat = (sheet, rangeToFormatObject, maxTotalDigits, maxDecimalPlaces, minValue, maxValue) => {
  const format = createFloatFormat(maxTotalDigits, maxDecimalPlaces, minValue, maxValue);

  return format;

}

/**
 * Apply phone number formatting to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToFormatObject - The details about the range to apply 
 * formatting to.
 * @return {Object} format - The info for value formatting.
*/
const setPhoneFormat = (sheet, rangeToFormatObject) => {
  const format = createPhoneFormat()

  return format;

}

/**
 * Apply date formatting to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToFormatObject - The details about the range to apply 
 * formatting to.
 * @return {Object} format - The info for value formatting.
*/
const setDateFormat = (sheet, rangeToFormatObject) => {
  const format = createDateFormat();

  return format;

}

/**
 * Apply time formatting to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToFormatObject - The details about the range to apply 
 * formatting to.
 * @return {Object} format - The info for value formatting.
*/
const setTimeFormat = (sheet, rangeToFormatObject) => {
  const format = createTimeFormat();

  return format;

}

/**
 * Apply duration formatting to range
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToFormatObject - The details about the range to apply 
 * formatting to.
 * @return {Object} format - The info for value formatting.
*/
const setDurationFormat = (sheet, rangeToFormatObject) => {
  const format = createDurationFormat();

  return format;

}

/**
 * Create text format.
 * @return {string} format - The format.
*/
const createTextFormat = () => {

  const format = '@STRING@' // example: hibiscus

  return format;

}

/**
 * Create integer format.
 * @return {string} format - The format.
*/
const createIntegerFormat = () => {

  const format = '0'; // example: 1234

  return format;

}

/**
 * Create decimal format.
 * @param {number} decimalPlaces - The maximum number of decimal places.
 * @return {string} format - The format.
*/
const createDecimalFormat = (decimalPlaces) => {
  const value = '#';
  const decimals = value.repeat(decimalPlaces)
  //SpreadsheetApp.getUi().alert('decimals: '+decimals)

  const format = '###0.' + decimals; // example: 1234.56
  //SpreadsheetApp.getUi().alert('format: '+format)
  return format;

}

/**
 * Create decimal format.
 * @param {number} maxTotalDigits - The maximum number of total digits.
 * @param {number} maxDecimalPlaces - The maximum number of decimal places.
 * @return {string} format - The format.
*/
const createFloatFormat = (maxTotalDigits, maxDecimalPlaces, minValue, maxValue) => {
  const value = '#';
  const maxdigits = value.repeat(maxTotalDigits);
  const decimals = value.repeat(maxDecimalPlaces)

  const format = maxdigits + '.' + decimals; // example: 1234.56

  return format;

}

/**
 * Create phone format.
 * @return {string} format - The format.
*/
const createPhoneFormat = () => {

  const format = '0'; // example: 123456

  return format;

}

/**
 * Create date format.
 * @return {string} format - The format.
*/
const createDateFormat = () => {

  const format = 'yyyy-MM-dd'; // example: 2020-12-01

  return format;

}

/**
 * Create time format.
 * @return {string} format - The format.
*/
const createTimeFormat = () => {

  const format = 'HH:mm'; // example: 12:55

  return format;

}

/**
 * Create duration format.
 * @return {string} format - The format.
*/
const createDurationFormat = () => {

  const format = 'HH:mm:ss'; // example: 01:50:22

  return format;

}

/**
 * Create plain text format.
 * @return {string} format - The format.
*/
const createPlainTextFormat = () => {

  const format = 'Plain text'; // example: 01:50:22

  return format;

}