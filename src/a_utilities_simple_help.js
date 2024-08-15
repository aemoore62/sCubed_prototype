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
 * @fileoverview Utilities for simple help text (notes).
 * @author Abigail Elizabeth 
 */

/**
 * Apply help text to form
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {string} formName - The name of the form to which simple help will be applied.
 * @param {currentColumnName} - The name of the column to which simple help will be applied.
 * @param {Array.<*[]>} searchValuesConDef - The values in the conceptDefinition sheet.
 * @param {Array.<*[]>} searchValuesMatDef - The values in the materialDefinition sheet.  
 * @param {Array.<*[]>} searchValuesConDef - The values in the dataValidation sheet. 
 * @param {Array.<*[]>} searchValuesWrkflwMgmt - The values in the workflowManagment sheet. 
 * @param {Array.<*[]>} searchValuesProcDef - The values in the processDefinition sheet. 
 * @param {Array.<*[]>} searchValuesProcExec - The values in the processExecution sheet.
 * @return {string} helpText - The help text.
 * @todo Replace hard-coded form names, column names and spreadsheet property names. You repeat this
 * in another function getProcessIDsAndProcessTypesForSpecification.
 * @todo Consolodate hard-coded text (e.g. DESCRIPTION and ONTOLOGY TERM) to one variable each.
*/

const applyHelpTextToForm = (sheet, formName, currentColumnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt, searchValuesProcDef, searchValuesProcExec) => {

  if (formName == 'conceptDefinition') {
    //getDataValidationConceptDefinitionCore();

    var dataValidationCharacterstics = getCurrentDataValidationConceptDefinitionCore(currentColumnName, searchValuesConDef);
    if (dataValidationCharacterstics === 'none') {
      var dataValidationCharacterstics = getCurrentDataValidationConceptDefinitionOrganismPackage(currentColumnName, searchValuesConDef)

    }
    var columnDescriptionHelpText = 'DESCRIPTION \n ' + getCurrentColumnDescriptionTermConceptDefinitionCore(currentColumnName, searchValuesConDef);
    var ontologyTermHelpText = 'ONTOLOGY TERM ' + getColumnOntologyTermConceptDefinitionCore(currentColumnName);

  } else if (formName == 'workflowManagement') {
    var dataValidationCharacterstics = getCurrentDataValidationWorkflowManagement(currentColumnName, searchValuesProcDef);
    var columnDescriptionHelpText = 'DESCRIPTION \n ' + getCurrentColumnDescriptionWorkflowManagement(currentColumnName);
    var ontologyTermHelpText = 'ONTOLOGY TERM ' + getCurrentOntologyTermWorkflowManagement(currentColumnName);

  } else if (formName == 'processExecution') {
    var dataValidationCharacterstics = getCurrentDataValidationProcessExecution(currentColumnName, searchValuesProcDef);
    var columnDescriptionHelpText = 'DESCRIPTION \n ' + getCurrentColumnDescriptionProcessExecution(currentColumnName);
    var ontologyTermHelpText = 'ONTOLOGY TERM ' + getCurrentOntologyTermProcessExecution(currentColumnName);


  } else if (formName == 'materialDefinition') {
    var dataValidationCharacterstics = getCurrentDataValidationMaterialDefinition(currentColumnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt);
    var columnDescriptionHelpText = 'DESCRIPTION \n ' + getCurrentColumnDescriptionMaterialDefinition(currentColumnName);
    var ontologyTermHelpText = 'ONTOLOGY TERM ' + getCurrentOntologyTermMaterialDefinition(currentColumnName);


  } else if (formName == 'processDefinition') {
    var dataValidationCharacterstics = getCurrentDataValidationProcessDefinitionCore(currentColumnName, searchValuesProcDef);
    var columnDescriptionHelpText = 'DESCRIPTION \n ' + getCurrentColumnDescriptionProcessDefinition(currentColumnName);
    var ontologyTermHelpText = 'ONTOLOGY TERM ' + getCurrentOntologyTermProcessDefinition(currentColumnName);

    if (dataValidationCharacterstics === 'none') {
      var dataValidationCharacterstics = getCurrentDataValidationProcessDefinitionCIDC(currentColumnName, searchValuesProcDef)

    }

  }

  var dataValidationType = dataValidationCharacterstics.dataValidationType;

  if (dataValidationCharacterstics != 'none') {

    var specifications = dataValidationCharacterstics.specifications//Object.values(dataValidationCharacterstics.specifications);

  }

  var helpText = setNoteForSimpleHelpTextByDatatype(sheet, "DROP", dataValidationType, columnDescriptionHelpText, ontologyTermHelpText, specifications)

  return helpText;
}

/**
 * Apply data validation to sheet given the datatype
 * @param {Object} sheet - The sheet to apply validation to.
 * @param {Object} rangeToValidateObject - The details about the range to apply 
 * validation to.
 * @param {string} dataValidationType - The datatype.
 * @param {string} columnDescriptionHelpText - The description of the column.
 * @param {string} ontologyTermHelpText - The ontology term.
 * @param {[]} specification - The data validation specifications.
 * @return {string} helpText - The help text.
 * @todo Consolodate hard-coded text (e.g. DATA VALIDATION and ONTOLOGY TERM) to one variable each.
 * @todo Remove unused args.
 * @todo Sort out list, list filtered not lot number, list not from range and list range. You also do 
 * this in data validation function setDataValidationCharactersticsByDatatype
*/

const setNoteForSimpleHelpTextByDatatype = (sheet, currentColumnNumber, dataValidationType, columnDescriptionHelpText, ontologyTermHelpText, specifications) => {

  if (dataValidationType == 'text') {
    const { maxCharacterLength } = specifications;
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForTextDataValidation(maxCharacterLength);
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createTextFormat();


  } else if (dataValidationType == 'integer') {
    const { minValue, maxValue } = specifications;
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForIntegerDataValidation(minValue, maxValue)
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createIntegerFormat();

  } else if (dataValidationType == 'float no min/max') {
    const { maxTotalDigits, maxDecimalPlaces, decimalPlaces } = specifications;
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForFloatNoMinMaxDataValidation(maxTotalDigits, maxDecimalPlaces)
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createDecimalFormat(decimalPlaces);

  } else if (dataValidationType == 'float with min/max') {
    const { maxTotalDigits, maxDecimalPlaces, minValue, maxValue, decimalPlaces } = specifications;
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForFloatWithMinMaxDataValidation(maxTotalDigits, maxDecimalPlaces, minValue, maxValue)
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createDecimalFormat(decimalPlaces);

  } else if (dataValidationType == 'phone') {
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForPhoneNumberDataValidation();
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createPhoneFormat();

  } else if (dataValidationType == 'date') {
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForDateDataValidation();
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createDateFormat();

  } else if (dataValidationType == 'email') {
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForEmailDataValidation();
    var valueFormattingHelpText = 'VALUE FORMATTING \n '

  } else if (dataValidationType == 'url') {
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForUrlDataValidation();
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createPlainTextFormat();

  } else if (dataValidationType == 'time') {
    var dataValidationHelpText = 'DATA VALIDATION \n ' + getHelpTextForTimeDataValidation();
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createTimeFormat();

  } else if (dataValidationType == 'duration') {
    var valueFormattingHelpText = createDurationFormat();

  } else if (dataValidationType == 'list' || dataValidationType == 'list filtered lot number' || dataValidationType == 'list not from range') { // TODO remove just 'list'; it's now list not from range
    var dataValidationHelpText = 'DATA VALIDATION \n' + getHelpTextForRequireValueInListDataValidation();
    var valueFormattingHelpText = 'VALUE FORMATTING \n ' + createPlainTextFormat();
  } else if (dataValidationType == 'list range') {
    //setRequireValueInRangeDataValidation(sheet,rangeToValidateObject,...validationArguments)

  }

  let helpText = columnDescriptionHelpText + '\n\n' + ontologyTermHelpText + '\n\n' + dataValidationHelpText + '\n\n' + valueFormattingHelpText
  return helpText;
  //const rangeToBeValidated = sheet.getRange(1,currentColumnNumber,1,1);
  //rangeToBeValidated.setNote(helpText);

}

/**  
 * Get help text for text data validation.
 * @param {number} maxCharacterLength - The maximum character length permitted.
 * @return {string} helpText - The help text.
 */
const getHelpTextForTextDataValidation = (maxCharacterLength) => {
  const helpText = 'You must specify text with no more than ' + maxCharacterLength + ' characters.'

  return helpText;

}

/**  
 * Get help text for integer data validation.
 * @param {number} minValue - The minimum value permitted.
 * @param {number} maxValue - The maximum value permitted.
 * @return {string} helpText - The help text.
 */
const getHelpTextForIntegerDataValidation = (minValue, maxValue) => {
  const helpText = 'You must specify an integer between ' + minValue + ' and ' + maxValue + '.'

  return helpText;

}

/**  
 * Get help text for float without min/max data validation.
 * @param {number} maxTotalDigits - The maximum total digits permitted.
 * @param {number} maxDecimalPlaces - The maximum decimal places permitted.
 * @return {string} helpText - The help text.
 */
const getHelpTextForFloatNoMinMaxDataValidation = (maxTotalDigits, maxDecimalPlaces) => {
  const helpText = 'You must specify a number with no more than ' + maxTotalDigits +
    ' digits total and no more than ' + maxDecimalPlaces + ' decimal places.'

  return helpText;

}

/**  
 * Get help text for float with min/max data validation.
 * @param {number} maxTotalDigits - The maximum total digits permitted.
 * @param {number} maxDecimalPlaces - The maximum decimal places permitted.
 * @param {number} minValue - The minimum value permitted.
 * @param {number} maxValue - The maximum value permitted.
 * @return {string} helpText - The help text.
 */
const getHelpTextForFloatWithMinMaxDataValidation = (maxTotalDigits, maxDecimalPlaces, minValue, maxValue) => {
  const helpText = 'You must specify a value that meets four criteria: 1) no more than ' + maxTotalDigits +
    ' digits total, 2) no more than ' + maxDecimalPlaces + ' decimal places, 3) a minimum value of ' + minValue + ' and 4) a maximum value of ' + maxValue + '.'

  return helpText;

}

/**  
 * Get help text for phone number.
 * @return {string} helpText - The help text.
 */
const getHelpTextForPhoneNumberDataValidation = () => {
  const helpText = 'Non-digit values are not accepted. You must specify a number with no more than 15 digits.'

  return helpText;


}

/**  
 * Get help text for date.
 * @return {string} helpText - The help text.
 */
const getHelpTextForDateDataValidation = () => {
  const helpText = 'You must specify a valid date.';

  return helpText;

}

/**  
 * Get help text for time.
 * @return {string} helpText - The help text.
 */
const getHelpTextForTimeDataValidation = () => {
  const helpText = 'You must specify a valid time.';

  return helpText;

}

/**  
 * Get help text for email.
 * @return {string} helpText - The help text.
 */
const getHelpTextForEmailDataValidation = () => {
  const helpText = 'You must specify a valid email address.';

  return helpText;

}

/**  
 * Get help text for url.
 * @return {string} helpText - The help text.
 */
const getHelpTextForUrlDataValidation = () => {
  const helpText = 'You must specify a valid url.';

  return helpText;


}

/**  
 * Get help text for drop-down list.
 * @return {string} helpText - The help text.
 */
const getHelpTextForRequireValueInListDataValidation = () => {
  const helpText = 'You must select an option in the drop-down list.';

  return helpText;

}


