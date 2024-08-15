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
 * @fileoverview Test general utilities.
 * @author Abigail Elizabeth <abigailelizabeth@share-science.com>
 */

function testSelectFromWhere() {
  let equalsValue = 'concept type';
  let lastRow = globalVariables.VALIDATION_LISTS_SHEET.getLastRow();
  let rangeToSearch = globalVariables.VALIDATION_LISTS_SHEET.getRange(2, 1, lastRow, 1).getValues();
  let rangeToSelect = globalVariables.VALIDATION_LISTS_SHEET.getRange(2, 2, lastRow, 1).getValues();
  let result = selectFromWhere(equalsValue, rangeToSearch, rangeToSelect)
  Logger.log(rangeToSearch.length)
  Logger.log(result)

}
