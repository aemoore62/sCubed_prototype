/**
 * Applies column-based content, namely data validation, value formatting, and help text.
 * @param {Object} spreadsheetState - The object that contains the spreadsheet's state.
 * @param {string} sheetName - The name of the sheet that should be operated against.
 */

function applyValueFormatHelpTextToForm(spreadsheetState, sheetName) {
  const scubedPackages = spreadsheetState.packages;
  const provenanceType = spreadsheetState.provenance;
  const columnNames = spreadsheetState[sheetName].columnNames;
  const totalRows = 50
  const sheet = spreadsheetState[sheetName].sheet;
  let totalColumns = spreadsheetState[sheetName].lastColumn;
  let formName = spreadsheetState[sheetName].formName
  var formatsDestinationRange = sheet.getRange(2, 1, totalRows, totalColumns);
  var formats = formatsDestinationRange.getNumberFormats();
  let notes = [];
  let rangeList = createRangeList(sheet, totalColumns, totalRows);
  let rangeListA1 = rangeList.map(range => range.getA1Notation());
  var rules = formatsDestinationRange.getDataValidations();
  var searchValuesConDef = spreadsheetState.conceptDefinition.allValues
  var searchValuesMatDef = spreadsheetState.materialDefinition.allValues
  var searchValuesDatVal = spreadsheetState.dataValidation.allValues
  var searchValuesWrkflwMgmt = spreadsheetState.workflowManagement.allValues
  var searchValuesProcDef = spreadsheetState.processDefinition.allValues

  if ((scubedPackages.indexOf('CIDC') > -1 && provenanceType.indexOf('activity') > -1) ||
    (scubedPackages.indexOf('CIDC') > -1 && provenanceType === 'activity')) { // todo ||
    var searchValuesProcDef = getSheetValues('processExecution');
  } else {
    var searchValuesProcExec = undefined;
  }

  for (let columnNamesIndex = 0; columnNamesIndex < columnNames.length; columnNamesIndex++) {
    let currentColumnName = columnNames[columnNamesIndex];
    let currentColumnNumber = columnNames.indexOf(currentColumnName);
    const rangeToFormatObject = createRangeParameters(currentColumnNumber, totalRows);

    // handle value formatting
    var formats = addValueFormattingRuleToRules(sheet, scubedPackages, rangeToFormatObject, formName,
      currentColumnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt,
      searchValuesProcDef, searchValuesProcExec, formats, columnNamesIndex)

    // handle data valiation        
    var formulaRange = rangeListA1[columnNamesIndex];
    var rules = addDataValidationRuleToRules(rules, sheet, scubedPackages, columnNames, provenanceType, 
      rangeToFormatObject, formName,
      currentColumnName, formulaRange, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, 
      searchValuesWrkflwMgmt,searchValuesProcDef, searchValuesProcExec, columnNamesIndex)

    // handle notes
    let helpText = applyHelpTextToForm(sheet, formName, currentColumnName, searchValuesConDef, searchValuesMatDef,
      searchValuesDatVal, searchValuesWrkflwMgmt, searchValuesProcDef, searchValuesProcExec)
    notes.push(helpText);

  }

  //SpreadsheetApp.flush();
  formatsDestinationRange.setNumberFormats(formats);
  const rangeToBeValidated = sheet.getRange(1, 1, 1, totalColumns);
  rangeToBeValidated.setNotes([notes]);
  formatsDestinationRange.setDataValidations(rules);

  // Update drop-down list for concept_type if organism items package is selected
  if (scubedPackages.indexOf('organism items') > -1 && sheet.getName() === 'conceptDefinition') {
    var rule = createDataValidationRule(sheet, columnNames, 'concept_type', totalRows, formulaRange, 
    getCurrentDataValidationConceptDefinitionOrganismPackage);
    sheet.getRange(2, 1, totalRows, 1).setDataValidation(rule);

  }

  // Update drop-down list for workflow_entity_type if summary-level provenance is selected
  if (provenanceType === 'summary' && formName == 'workflowManagement') {
    var rule = createDataValidationRule(sheet, columnNames, 'workflow_entity_type', totalRows, formulaRange, getCurrentDataValidationWorkflowManagementSummaryProv);
    sheet.getRange(2, 1, totalRows, 1).setDataValidation(rule);

  }

}

/**
 * Create new data validation rule and add to existing array of rules.
 * @param {Array.<string[]>} rules - The data validation rules of the sheet.
 * @param {Object} sheet - The sheet that contains the data validation rules.
 * @param {Array} scubedPackages - The packages used to configure the instance of sCubed.
 * @param {Array} columnNames - The names of the columns in the sheet that contains the data validation rules.
 * @param {Array} provenanceType - The type of provenance used to configre the instance of sCubed.
 * @param {Object} rangeToFormatObject - The object that contains info about what range will be formatted.
 * @param {string} formName - The name of the form that contains the data validation.
 * @param {string} currentColumnName - The name of the column that validation will be constructed for.
 * @param {Range} formulaRange - The Range to use within the data validation formula.
 * @param {Array.<*[]>} searchValuesConDef - The values in the conceptDefinition sheet.
 * @param {Array.<*[]>} searchValuesMatDef - The values in the materialDefinition sheet.  
 * @param {Array.<*[]>} searchValuesConDef - The values in the dataValidation sheet. 
 * @param {Array.<*[]>} searchValuesWrkflwMgmt - The values in the workflowManagment sheet. 
 * @param {Array.<*[]>} searchValuesProcDef - The values in the processDefinition sheet. 
 * @param {Array.<*[]>} searchValuesProcExec - The values in the processExecution sheet. 
 * @param {number} columnNamesIndex - The index of the column that validation will be applied to.
 * @return {Array.<string[]>} rules - The updated data validation rules of the sheet.
 */
const addDataValidationRuleToRules = (rules, sheet, scubedPackages, columnNames, provenanceType, rangeToFormatObject, 
  formName,currentColumnName, formulaRange, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, 
  searchValuesWrkflwMgmt,searchValuesProcDef, searchValuesProcExec, columnNamesIndex) => {

  let rule = applyDataValidationForm(sheet, scubedPackages, columnNames, provenanceType, rangeToFormatObject, formName,
    currentColumnName, formulaRange, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt,
    searchValuesProcDef, searchValuesProcExec);

  // Add new rule to existing rules
  for (var rowIndex = 0; rowIndex < rules.length; rowIndex++) {
    //console.log("rowIndex: "+rowIndex);
    rules[rowIndex][columnNamesIndex] = rule;
    //console.log('rules: '+rules)

  }

  return rules;
}

/**
 * Create new value formatting rule and add to existing array of rules.
 * @param {Array.<string[]>} rules - The value formatting rules of the sheet.
 * @param {Object} sheet - The sheet that contains the value formatting rules.
 * @param {Array} scubedPackages - The packages used to configure the instance of sCubed.
 * @param {Array} columnNames - The names of the columns in the sheet that contains the value formatting rules.
 * @param {Array} provenanceType - The type of provenance used to configre the instance of sCubed.
 * @param {Object} rangeToFormatObject - The object that contains info about what range will be formatted.
 * @param {string} formName - The name of the form that contains the value formatting.
 * @param {string} currentColumnName - The name of the column that validation will be constructed for.
 * @param {Range} formulaRange - The Range to use within the value formatting formula.
 * @param {Array.<*[]>} searchValuesConDef - The values in the conceptDefinition sheet.
 * @param {Array.<*[]>} searchValuesMatDef - The values in the materialDefinition sheet.  
 * @param {Array.<*[]>} searchValuesConDef - The values in the dataValidation sheet. 
 * @param {Array.<*[]>} searchValuesWrkflwMgmt - The values in the workflowManagment sheet. 
 * @param {Array.<*[]>} searchValuesProcDef - The values in the processDefinition sheet. 
 * @param {Array.<*[]>} searchValuesProcExec - The values in the processExecution sheet. 
 * @param {number} columnNamesIndex - The index of the column that validation will be applied to.
 * @return {Array.<string[]>} formats - The updated value formatting rules of the sheet.
 */
const addValueFormattingRuleToRules = (sheet, scubedPackages, rangeToFormatObject, formName,
  currentColumnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt,
  searchValuesProcDef, searchValuesProcExec, formats, columnNamesIndex) => {

  let format = applyValueFormattingForm(sheet, scubedPackages, rangeToFormatObject, formName,
    currentColumnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt,
    searchValuesProcDef, searchValuesProcExec);

  for (var rowIndex = 0; rowIndex < formats.length; rowIndex++) {
    formats[rowIndex][columnNamesIndex] = format;

  }

  return formats;
}