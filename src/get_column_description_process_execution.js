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
 * @fileoverview Functions that get simple help text for executed processes.
 * @author Abigail Elizabeth  
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */

const getColumnDescriptionProcessExecution = switchAlternative({

  'workflow_instance_id': 'A key that refers to a reporting workflow.',
  'workflow_instance_step_number': 'A key that refers to a step in a reporting workflow',
  'repitition_number': 'A number that identifies the order of events in a sequence of a repeated event.',
  'process_type': 'A key that refers to a planned process.',
  'person_id': 'A key that refers to a person.',
  'start_date': 'The year, month, and day that an event started.',
  'start_time': 'The hour and minute that an event started.',
  'end_date': 'The year, month, and day that an event ended.',
  'end_time': 'The hour and minute that an event ended.',
  'passage_id': 'A key that refers to a planned process.',
  'establishing_growth_environment_id': 'A key that refers to a planned process.',
  'optical_density_measurement_id': 'A key that refers to a planned process.',
  'contamination_measurement_id': 'A key that refers to a planned process.',
  'seed_id': 'A key that refers to a planned process.',
  'fermentation_id': 'A key that refers to a planned process.',
  'harvest_culture_growth_environment_id': 'A key that refers to a planned process.',
  'wash_id': 'A key that refers to a planned process.',
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
  'autoclave_id': 'A key that refers to a planned process.',
  'bead_based_homogenization_id': 'A key that refers to a planned process.',
  'solvent_preparation_id': 'A key that refers to a planned process.',
  'solvent_extraction_id': 'A key that refers to a planned process.',
  'centrifugation_id': 'A key that refers to a planned process.',
  'autoclave_id': 'A key that refers to a planned process.',
  'input_material_lot_number': 'A key that refers to a physical material.',
  'input_container_lot_number': 'A key that refers to a physical material.',
  'input_substance_lot_number': 'A key that refers to a physical material.',
  'input_media_lot_number': 'A key that refers to a physical material.',
  'input_solution_lot_number': 'A key that refers to a physical material.',
  'input_organismal_entity_lot_number': 'A key that refers to a physical material.',
  'input_growth_environment_lot_number': 'A key that refers to a physical material.',
  'support_growth_environment_lot_number': 'A key that refers to a physical material.',
  'support_lyophilizer_lot_number': 'A key that refers to a physical material.',
  'support_autoclave_lot_number': 'A key that refers to a physical material.',
  'support_centrifuge_lot_number': 'A key that refers to a physical material.',
  'support_homogenizer_lot_number': 'A key that refers to a physical material.',
  'output_organismal_entity_lot_number': 'A key that refers to a physical material.',
  'output_pooled_specimen_lot_number': 'A key that refers to a physical material.',
  'output_growth_environment_lot_number': 'A key that refers to a physical material.',
  'output_substance_lot_number': 'A key that refers to a physical material.',
  'optical_density_result': 'The result of an optical density measurement.',
  'contamination_result': 'The result of contamination measurement.',
  'weight_result_type': 'A classification for a weight measurement.',
  'weight_result_amount': 'The resulting amount of a weight measurement.',
  'weight_result_uom': 'The unit of measure used to detail the result of a weight measurement',
  'solution_volume_amount': 'The amount of space within an object that is filled by material acting as a solution.',
  'solution_volume_uom': 'The unit of measure used to describe a volume.',
  'ambient_temperature_amount': 'A numerical expression of the thermal energy of an entity.',
  'ambient_temperature_uom': 'The unit of measure used to describe a numerical tempature.',
  'condensor_temperature_amount': 'A numerical expression of the thermal energy of an entity.',
  'condensor_temperature_uom': 'The unit of measure used to describe a numerical tempature.',
  'compressor_pressure_amount': 'The amount of force per unit area that is exerted.',
  'compressor_pressure_uom': 'The unit of measure used to describe a pressure.',
  'comment': 'Information that provides additional detail, observation, or explanation.',
  'helper_is_mini_table_header': 'This is a helper column that is not intended for you to manually edit. Column specifies if the current row is the first row of a mini table, given the presence of a mini table',
  'helper_mini_table_guid': 'This is a helper column that is not intended for you to manually edit. Column specifies the GUID of a mini table, given the presence of a mini table',
  'volume_result_amount': 'The amount of space within an object that is filled by material acting as a solution.',
  'volume_result_uom': 'The unit of measure used to describe a volume.',
  'optical_density': 'The amount of light transmitted through an object for a certain wavelength.',
  'volume_result_type': 'A classification for the result of volume measurement.',
  'optical_density_uom': 'The unit ofmeasure used to describe optical density.',
  'count_result_amount': 'The number of instances of an entity.'


})('none');


/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentColumnDescriptionProcessExecution = (entity) =>
  getColumnDescriptionProcessExecution(entity)


/**  
* Determines a value given a case
* @return {Object} - A description of data validation characteristics
*/

const getOntologyTermProcessExecution = switchAlternative({

  'workflow_instance_id': 'TBD',
  'workflow_instance_step_number': 'TBD',
  'repitition_number': 'TBD',
  'process_type': 'TBD',
  'person_id': 'TBD',
  'start_date': 'TBD',
  'end_date': 'TBD',
  'start_time': 'TBD',
  'end_time': 'TBD',
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
  'transfer_id': 'TBD',
  'autoclave_id': 'TBD',
  'bead_based_homogenization_id': 'TBD',
  'solvent_preparation_id': 'TBD',
  'solvent_extraction_id': 'TBD',
  'centrifugation_id': 'TBD',
  'autoclave_id': 'TBD',
  'volume_measurement_id': 'TBD',
  'input_material_lot_number': 'TBD',
  'input_container_lot_number': 'TBD',
  'input_substance_lot_number': 'TBD',
  'input_media_lot_number': 'TBD',
  'input_solution_lot_number': 'TBD',
  'input_organismal_entity_lot_number': 'TBD',
  'input_growth_environment_lot_number': 'TBD',
  'support_growth_environment_lot_number': 'TBD',
  'support_lyophilizer_lot_number': 'TBD',
  'support_autoclave_lot_number': 'TBD',
  'support_centrifuge_lot_number': 'TBD',
  'support_homogenizer_lot_number': 'TBD',
  'output_organismal_entity_lot_number': 'TBD',
  'output_pooled_specimen_lot_number': 'TBD',
  'output_growth_environment_lot_number': 'TBD',
  'output_substance_lot_number': 'TBD',
  'optical_density_result': 'TBD',
  'contamination_result': 'TBD',
  'weight_result_type': 'TBD',
  'weight_result_amount': 'TBD',
  'weight_result_uom': 'TBD',
  'solution_volume_amount': 'TBD',
  'solution_volume_uom': 'TBD',
  'ambient_temperature_amount': 'TBD',
  'ambient_temperature_uom': 'TBD',
  'condensor_temperature_amount': 'TBD',
  'condensor_temperature_uom': 'TBD',
  'compressor_pressure_amount': 'TBD',
  'compressor_pressure_uom': 'TBD',
  'comment': 'TBD',
  'helper_is_mini_table_header': 'TBD',
  'helper_mini_table_guid': 'TBD',
  'volume_result_amount': 'TBD',
  'volume_result_uom': 'TBD',
  'volume_result_type': 'TBD',
  'optical_density_uom': 'TBD',
  'count_result_amount': 'TBD'

})('none');


/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentOntologyTermProcessExecution = (entity) =>
  getOntologyTermProcessExecution(entity)

