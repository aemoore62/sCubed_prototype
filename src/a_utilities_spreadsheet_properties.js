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
 * @fileoverview Utilities for spreadsheet properties.
 * @author Abigail Elizabeth 
 */

/**
 * Set spreadsheet property
 * @example
 * setSpreadsheetProperty(sCubedContext,cidc)
 * @param {string} property - The property to assign value to.
 * @param {string} value - The value to be assigned to property.
 * @todo Handle err.
*/


function setSpreadsheetProperty(property, value) {

  try {
    const documentProperties = PropertiesService.getDocumentProperties();
    documentProperties.setProperty(property,
      value);

  } catch (err) {
    console.log('Error: ', err.message);

  }

}

/**
 * Get value for spreadsheet property
 * @example
 * getValueFromSpreadsheetProperty(sCubedContext)
 * @param {string} property - The property to assign value to.
 * @param {string} value - The value to be assigned to property.
 * @todo Handle error.
*/

function getValueFromSpreadsheetProperty(property) {
  try {

    const documentProperties = PropertiesService.getDocumentProperties();
    const valueForSuppliedProperty = documentProperties.getProperty(property);
    return valueForSuppliedProperty;

  } catch (err) {

    console.log('Error: ', err.message);
  }


}

const deleteSpreadsheetProperties = () => {
  PropertiesService.getDocumentProperties().deleteAllProperties();
}


function testGetSetSpreadsheetProperty() {
  setSpreadsheetProperty("sCubedContext", "cidc");

  const result = getValueFromSpreadsheetProperty("sCubedContext")

  SpreadsheetApp.getUi().alert(result);

}
