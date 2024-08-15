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
 * @fileoverview Utilities for handling entity objects.
 * @author Abigail Elizabeth 
 */

/**
 * Creates an object that describes an entity or object with its name, attributeToFilterBy' characteristics and optionally a stored procedure
 * @example
 * // returns {material_type={supportsMultipleValues=false, isRequired=true}, ...}
 * let statesFunction = catalogNumberStates = cols => Object.assign({},
 * hasCatalogNumberRequiredattributeToFilterBy(),hasCommentOptionalattributeToFilterBy());
 * createCatalogNumberEntityObject("sea horse","ConSeaHorse_Create",statesFunction)
 * @param {string} entityName - The name of the entity.
 * @param {function} statesFunction - The function that creates an object, describing attributeToFilterBy and their characteristics.
 * @param {string} storedProcedureName - The name of the stored procedure.
 * @param {string} entityEnteredInColumnName - The name of the column that the user enters the entity in. Used for conditional formatting.
 * @return {Object}  - The description of an entity or object.
 * @return {string} attributeCharacteristics.entityName - The name of the entity.
 * @return {string} attributeCharacteristics.storedProcedureName- The name of the stored proce.
*/
const createEntityObject = (entityName, entityEnteredInColumnName, statesFunction) => {
  const state = {
    entityName: entityName,
    entityEnteredInColumnName: entityEnteredInColumnName

  };

  return Object.assign(state, statesFunction.call(state));
};

/**
 * Create entity object.
 * @param {[]} functionsToReturnEntityObject - Functions the generate entity objects.
 * @param {string} currentColumnName - Name of the current column.
 * @param {string} currentValue - Value in the range being evaluated.
 * @return {[Object]} entityObjectsToShow - The objects that when composed make the entity.
 */
const determineEntityObjectGivenFunctions = (functionsToReturnEntityObject, currentColumnName, currentValue) => {
  var entityObjectsToShow = [];
  // Iterate over each function to get the entity object; return when entity object is found
  for (var functionToReturnEntityObject in functionsToReturnEntityObject) {
    var termToGetEntityObject = currentColumnName + ' ' + currentValue
    var entityObjectToShow = functionsToReturnEntityObject[functionToReturnEntityObject](termToGetEntityObject); // run the function
    if (entityObjectToShow !== 'none') entityObjectsToShow.push(entityObjectToShow) // keep looping until entity object is returned      

  }
  return entityObjectsToShow;
}

/**
* Creates an object that describes the characteristics of an attribute given an entity
* @example
* // returns {supportsMultipleValues=false, dependsOnColumnName=Sequoia, isRequired=true}
* createAttributeCharacteristics(true,false,"Sequoia")
* @param {boolean} isRequired - Specifies if an attribute is required.
* @param {boolean} supportMultipleallValues - Specifies if an attribute is allowed many allValues.
* @param {string} dependsOnColumnName - The name of the column on which the attribute depends.
* @return {Object} attributeCharacteristics - The characteristics of an attribute.
* @return {boolean} attributeCharacteristics.isRequired - If an attribute is required.
* @return {boolean} attributeCharacteristics.supportsMultipleValues - If an attribute is allowed many allValues.
* @return {string} attributeCharacteristics.dependsOnColumnName - The name of the column on which the attribute depends.
*/
const createAttributeCharacteristics = (isRequired, supportsMultipleValues, dependsOnColumnName) => {
  let flagsupportsMultipleValues = false; // specify if optional property should be used
  if (dependsOnColumnName != null) { flagsupportsMultipleValues = true; }

  let attributeCharacteristics = {

    isRequired: isRequired,
    supportsMultipleValues: supportsMultipleValues,
    ...(flagsupportsMultipleValues && { dependsOnColumnName: dependsOnColumnName }) // optional property
  };

  return attributeCharacteristics;
};
