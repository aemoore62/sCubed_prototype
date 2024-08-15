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
 * @fileoverview Data validation specific to conceptDefinition.
 * @author Abigail Elizabeth 
 */

/**
 * Fetch values.
 * @param {string} searchSheetName - The name of the sheet that will be queried.
 * @param {[string]} columnNames - The name of the columns in the sheet that will be quereied.
 * @param {string} filterColumnName - The name of the column that contains the value by which to filter 
 * (WHERE filterColumnName = someValue)
 * @param {string} filterValue - The value by which to filter (WHERE filterColumnName = filterValue)
 * @param {boolean} equalsFitlerValue  - The value in filterColumnName should match filterValue 
 * (FALSE means WHERE filterColumnName != filterValue).
 * @param {[]} searchSheet - Values in the sheet to be queried. 
 * @return {Object} characteristics - The values.
 * @todo Handle error.
 * @todo You don't just use this for concept definition. Rethink this function along with the function 
 * selectFromWhere and the data validation functions for lists.
 */

function createForeignKeyFromConceptDefinitionValidationSpecifications(searchSheetName, columnNames, filterColumnName, filterValue, equalsFilterValue, searchSheet) {

  try {
    let valuesInListSpecifications = createValueInForeignKeyListValidationSpecifications(searchSheetName, columnNames, filterColumnName, filterValue, equalsFilterValue, undefined, searchSheet);
    const characteristics = createColumnDataValidationCharacteristics('list', valuesInListSpecifications);

    return characteristics;

  } catch (error) { // this will error when the user configures the spreadsheets b/c there's no spreadsheet to get vals from
    //SpreadsheetApp.getUi().alert('error for createForeignKeyFromConceptDefinitionValidationSpecifications'+error)

  }

}