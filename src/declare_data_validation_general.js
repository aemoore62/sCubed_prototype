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
 * @fileoverview Functions that generate objects to describe data validation
 * for use across many types of entities.
 * @author Abigail Elizabeth 
 * 
 */

/**  
 * Creates functions that generate objects to describe data validation type and specifications
 * @return {Object} characteristics - The data validation type and specifications.
 */

const createVarChar255ValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('text', createTextValidationSpecifications(255))

  return characteristics;
}

const createVarChar19ValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('text', createTextValidationSpecifications(19))

  return characteristics;
}

const createVarChar30ValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('text', createTextValidationSpecifications(30))

  return characteristics;
}

const createVarChar36ValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('text', createTextValidationSpecifications(36))

  return characteristics;
}

const createFermenterCapacityValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('float no min/max', createFloatNoMinNoMaxValidationSpecifications(10, 2))

  return characteristics;
}

const createGoogleSheetsMaxTextSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('text', createTextValidationSpecifications(50000))

  return characteristics;
}

const createDateValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('date', 'none')

  return characteristics;
}

const createSubstanceNoMinNoMaxGenericValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('float no min/max', createFloatNoMinNoMaxValidationSpecifications(10, 2))

  return characteristics;
}

const createIntegerZeroMinNoMaxGenericValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('integer', createIntegerValidationSpecifications(0, 1000000000000))

  return characteristics;
}

const createIntegerNegativeMinNoMaxGenericValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('integer', createIntegerValidationSpecifications(-1000000000000, 1000000000000))

  return characteristics;
}

const createPHValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('float with min/max', createFloatValidationSpecifications(4, 2, 0, 14))

  return characteristics;
}

const createFloatZeroMinNoMaxGenericValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('float with min/max', createFloatValidationSpecifications(12, 2, 0, 1000000000000))

  return characteristics;
}

const createTimeValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('time', 'none')

  return characteristics;
}

const createListNotFromRange = (listOptions) => {
  const characteristics = createColumnDataValidationCharacteristics('list not from range', createListNotFromRangeSpecifications(listOptions))

  return characteristics;

}

const createUrlValidationSpecifications = () => {
  const characteristics = createColumnDataValidationCharacteristics('url', createUrlSpecifications)

  return characteristics;

}