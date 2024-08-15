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
 * @fileoverview Functions that get simple help text for physical material.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */

const getColumnDescriptionMaterialDefinition = switchAlternative({

  'action': 'A deed.',
  'catalog_number_notinhouse_item': 'A key that refers to an item.',
  'lot_number_reference': 'A key that refers to a physical material.',
  'lot_number': 'Information content that identifies a physical material.',
  'inhouse_material_registration_type': 'A classification for the recorded provenance of a material.',
  'catalog_number_noninhouse_item': 'A key that refers to an item.',
  'catalog_number_inhouse_item': 'A key that refers to an item.',//createForeignKeyFromMaterialDefinitionValidationSpecifications(['item'],'material_supplier','in-house'),
  'helper_is_mini_table_header': 'This is a helper column that is not intended for you to manually edit. Column specifies if the current row is the first row of a mini table, given the presence of a mini table',
  'helper_mini_table_guid': 'This is a helper column that is not intended for you to manually edit. Column specifies the GUID of a mini table, given the presence of a mini table',
  'derived_from_lot_number_reference': 'A key that refers to a derived physical material.', //update orphan or summarized
  'composed_from_lot_number_reference': 'A key that refers to a composed physical material.', //update orphan or summarized
  'summary_of_provenance_reference': 'A key that refers to a summary of provenance for a physical materail.',
  'comment': 'Information that provides additional detail, observation, or explanation.',
  'barcode': 'A machine-readable visualization of information.'

  // 'lot_number_reference': createRangeValidationSpecifications(2,'materialDefinition','lot_number'),
  // 'alias': createVarChar255ValidationSpecifications()


})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentColumnDescriptionMaterialDefinition = (entity) =>
  getColumnDescriptionMaterialDefinition(entity)


const getOntologyTermMaterialDefinition = switchAlternative({

  'action': 'TBD',
  'catalog_number_notinhouse_item': 'TBD',
  'lot_number': 'TBD',
  'lot_number_reference': 'TBD',
  'inhouse_material_registration_type': 'TBD',
  'catalog_number_inhouse_item': 'TBD',
  'catalog_number_noninhouse_item': 'TBD',
  //createForeignKeyFromMaterialDefinitionValidationSpecifications(['item'],'material_supplier','in-house'),
  'helper_is_mini_table_header': 'TBD',
  'helper_mini_table_guid': 'TBD',
  'derived_from_lot_number_reference': 'TBD',
  'composed_from_lot_number_reference': 'TBD',
  'summary_of_provenance_reference': 'TBD',
  'comment': 'TBD',
  'barcode': 'TBD'
  // 'lot_number_reference': createRangeValidationSpecifications(2,'materialDefinition','lot_number'),
  // 'alias': createVarChar255ValidationSpecifications()


})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentOntologyTermMaterialDefinition = (entity) =>
  getOntologyTermMaterialDefinition(entity)

