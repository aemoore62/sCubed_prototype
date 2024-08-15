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
 * @fileoverview Functions that get simple help text for workflow management entities.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */

const getColumnDescriptionWorkflowManagement = switchAlternative({

  'workflow_entity_type': 'A classification for a workflow management entity.',
  'workflow_name': 'An identifying name for a reporting workflow.',
  'process_type': 'A classification for a planned process.',
  'process_type_reference': 'A key that refers to a planned process.',
  'workflow_sequence_number': 'A number that identifies the order of events in a sequence of events.',
  'helper_is_mini_table_header': 'This is a helper column that is not intended for you to manually edit. Column specifies if the current row is the first row of a mini table, given the presence of a mini table',
  'helper_mini_table_guid': 'This is a helper column that is not intended for you to manually edit. Column specifies the GUID of a mini table, given the presence of a mini table',
  'process_specification_reference': 'A key that refers to a process specification.',
  //'process_specification_reference': createForeignKeyFromConceptDefinitionValidationSpecifications('workflowManagement',[['workflow_name'],['process_specification']]),
  'workflow_name_reference': 'A key that refers to a reporting workflow.',
  //'process_id_reference': createForeignKeyFromConceptDefinitionValidationSpecifications('processDefinition',[['process_type'],['process_id']])
  'process_id_reference': 'A key that refers to a planned process.',
  'process_specification_name': 'An identifying name for a process specification.',
  'summary_of_provenance_name': 'An identifying name for a summary of provenance.',
  'passage_id': 'A key that refers to a planned process.',
  'establishing_culture_growth_environment_id': 'A key that refers to a planned process.',
  'optical_density_measurement_id': 'A key that refers to a planned process.',
  'contamination_measurement_id': 'A key that refers to a planned process.',
  'seed_id': 'A key that refers to a planned process.',
  'fermentation_id': 'A key that refers to a planned process.',
  'harvest_culture_growth_environment_id': 'A key that refers to a planned process.',
  'wash_id': 'A key that refers to a planned process..',
  'weight_measurement_id': 'A key that refers to a planned process.',
  'contamination_measurement': 'A key that refers to a planned process.',
  'resuspension_id': 'A key that refers to a planned process.',
  'substance_combination_id': 'A key that refers to a planned process.',
  'aliquoting_id': 'A key that refers to a planned process.',
  'spot_bleach_id': 'A key that refers to a planned process.',
  'snap_freeze_id': 'A key that refers to a planned process.',
  'freeze_drying_id': 'A key that refers to a planned process.',
  'storage_id': 'A key that refers to a planned process.',
  'microbial_culture_procedure_id': 'A key that refers to a planned process.',
  'open_id': 'A key that refers to a planned process.',
  'counting_id': 'A key that refers to a planned process.',
  'specimen_pooling_id': 'A key that refers to a planned process.',
  'volume_measurement_id': 'A key that refers to a planned process.',
  'transfer_id': 'A key that refers to a planned process.',
  'centrifugation_id': 'A key that refers to a planned process.',
  'bead_based_homogenization_id': 'A key that refers to a planned process.',
  'solvent_preparation_id': 'A key that refers to a planned process.',
  'solvent_extraction_id': 'A key that refers to a planned process.',
  'autoclave_id': 'A key that refers to a planned process.'


})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentColumnDescriptionWorkflowManagement = (entity) =>
  getColumnDescriptionWorkflowManagement(entity)


const getOntologyTermWorkflowManagement = switchAlternative({

  'workflow_entity_type': 'TBD',
  'workflow_name': 'TBD',
  'process_type': 'TBD',
  'process_type_reference': 'TBD',
  'workflow_sequence_number': 'TBD',
  'helper_is_mini_table_header': 'TBD',
  'helper_mini_table_guid': 'TBD',
  'process_specification_reference': 'TBD',
  //'process_specification_reference': createForeignKeyFromConceptDefinitionValidationSpecifications('workflowManagement',[['workflow_name'],['process_specification']]),
  'workflow_name_reference': 'TBD',
  //'process_id_reference': createForeignKeyFromConceptDefinitionValidationSpecifications('processDefinition',[['process_type'],['process_id']])
  'process_id_reference': 'TBD',
  'process_specification_name': 'TBD',
  'summary_of_provenance_name': 'TBD',
  'passage_id': 'TBD',
  'establishing_growth_environment_id': 'TBD',
  'optical_density_measurement_id': 'TBD',
  'contamination_measurement_id': 'TBD',
  'seed_id': 'TBD',
  'fermentation_id': 'TBD',
  'harvest_culture_growth_environment_id': 'TBD',
  'wash_id': 'TBD',
  'weight_measurement_id': 'TBD',
  'contamination_measurement': 'TBD',
  'resuspension_id': 'TBD',
  'substance_combination_id': 'TBD',
  'aliquoting_id': 'TBD',
  'spot_bleach_id': 'TBD',
  'snap_freeze_id': 'TBD',
  'freeze_drying_id': 'TBD',
  'storage_id': 'TBD',
  'microbial_culture_procedure_id': 'TBD',
  'open_id': 'TBD',
  'counting_id': 'TBD',
  'specimen_pooling_id': 'TBD',
  'volume_measurement_id': 'TBD',
  'transfer_id': 'TBD',
  'centrifugation_id': 'TBD',
  'bead_based_homogenization_id': 'TBD',
  'solvent_preparation_id': 'TBD',
  'solvent_extraction_id': 'TBD',
  'autoclave_id': 'TBD'



})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentOntologyTermWorkflowManagement = (entity) =>
  getOntologyTermWorkflowManagement(entity)   