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
 * @fileoverview Functions that get simple help text for planned processes.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */

const getColumnDescriptionProcessDefinition = switchAlternative({

  'process_type': 'A classification for a planned process.',
  'process_id': 'Information content that identifies a planned process.',
  'helper_is_mini_table_header': 'This is a helper column that is not intended for you to manually edit. Column specifies if the current row is the first row of a mini table, given the presence of a mini table',
  'helper_mini_table_guid': 'This is a helper column that is not intended for you to manually edit. Column specifies the GUID of a mini table, given the presence of a mini table',
  'medium_total_volume': 'The amount of space within an object that is filled by material acting as media.',
  'medium_total_volume_uom': 'The unit of measure used to describe a volume.',
  'has_fixed_seed_amount': 'Information that indicates if an entity has a fixed amount of another entity that is seeded.',
  'seed_amount_type': 'A classification for the amount of an entity that will be seeded.',
  'seed_amount_ratio': 'The proporation of two entities.',
  'seed_amount_count': 'The number of instances of an entity.',
  'seed_amount_ratio_uom': 'The unit of measure used to describe a ratio.',
  'has_fixed_growth_rate': 'Information that indicates if an entity has a fixed growth rate.',
  'growth_rate_type': 'A classification for rate of growth.',
  'growth_rate_amount_numerical': 'The numerical rate of growth.',
  'growth_rate_amount_uom_numerical': 'The unit of measure used to describe a growth rate.',
  'growth_rate_amount_textual': 'The textual rate of growth.',
  'has_fixed_pH': 'Information that indicates if an entity has a fixed pH.',
  'pH': 'An expression for theacidity or basicity of an entity.',
  'has_fixed_gas_composition': 'Information that indicates if an entity has a fixed gas composition.',
  'gas_component_common_name': 'A title for a gas.',
  'gas_composition_percent_amount': 'A fraction of one hundred that describes the presence of a gas.',
  'gas_composition_amount_percent_uom': 'A unit that describes the presence of a gas.',
  'has_fixed_humidity': 'Information that indicates if an entity has a fixed humidity.',
  'gas_composition_unit_type': 'A classification for the unit of measure used to characterize gas composition.',
  'humidity_type': 'A classification for humidity.',
  'relative_humidity_amount_individual_number': 'A value, not a range, that describes humidity.',
  'relative_humidity_amount_uom': 'The unit of measure used to describe a relative humidity.',
  'has_fixed_stirring': 'Information that indicates if an entity has a fixed stirring rate.',
  'stirring_amount': 'A value that describe the rate of stirring',
  'stirring_amount_uom': 'The unit of measure used to describe stirring.',
  'has_fixed_temperature': 'Information that indicates if an entity has a fixed temperature.',
  'has_fixed_harvest_criteria': 'Information that indicates if an entity has fixed crieria for harvesting.',
  'harvest_criteria_relationship': 'The connections among criteria for harvesting.',
  'harvest_criteria_amount_type': 'A classification for criteria for harvesting.',
  'harvest_criteria_amount_ratio': 'The proporation of two entities.',
  'harvest_criteria_amount_uom_ratio': 'The unit of measure used to describe a ratio for harvest.',
  'ratio_result_type': 'A classification for ratio.',
  'temperature_type': 'A classification for temperature.',
  'temperature_amount_numerical': 'A numerical expression of the thermal energy of an entity.',
  'temperature_amount_textual': 'A textual expression of the thermal energy of an entity.',
  'temperature_amount_uom_numerical': 'The unit of measure used to describe a numerical tempature.',
  'per_wash_solution_volume_amount': 'The amount of space within an object that is filled by material acting as a wash solution.',
  'per_wash_solution_volume_amount_uom': 'The unit of measure used to describe a volume.',
  'has_multiple_harvest_criteria': 'Information that indicates if an entity has multiple criteria for harvest.',
  'solvent_prep_process_id': 'Information content that identifies a .',
  'pressure_amount': 'The amount of force per unit area that is exerted.',
  'pressure_amount_uom': 'The unit of measure used to describe a pressure.',
  'autoclave_cycle_type': 'A classification for conditions of an autoclave.',
  'speed_amount': "A scalar rate of change in the position of an object.",
  'speed_amount_uom': 'The unit of measure used to describe a speed.',
  'solution_volume_amount': 'The amount of space within an object that is filled by material acting as a solution.',
  'solution_volume_amount_uom': 'The unit of measure used to describe a volume.',
  'optical_density': 'The amount of light transmitted through an object for a certain wavelength.'




})('none');


/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentColumnDescriptionProcessDefinition = (entity) =>
  getColumnDescriptionProcessDefinition(entity)


/**  
* Determines a value given a case
* @return {Object} - A description of data validation characteristics
*/

const getOntologyTermProcessDefinition = switchAlternative({

  'process_type': 'TBD',
  'process_id': 'TBD',
  'helper_is_mini_table_header': 'TBD',
  'helper_mini_table_guid': 'TBD',
  'medium_total_volume': 'TBD',
  'medium_total_volume_uom': 'TBD',
  'has_fixed_seed_amount': 'TBD',
  'seed_amount_type': 'TBD',
  'seed_amount_ratio': 'TBD',
  'seed_amount_count': 'TBD',
  'seed_amount_ratio_uom': 'TBD',
  'has_fixed_growth_rate': 'TBD',
  'growth_rate_type': 'TBD',
  'growth_rate_amount_numerical': 'TBD',
  'growth_rate_amount_uom_numerical': 'TBD',
  'growth_rate_amount_textual': 'TBD',
  'has_fixed_pH': 'TBD',
  'pH': 'TBD',
  'has_fixed_gas_composition': 'TBD',
  'gas_component_common_name': 'TBD',
  'gas_composition_percent_amount': 'TBD',
  'gas_composition_amount_percent_uom': 'TBD',
  'has_fixed_humidity': 'TBD',
  'gas_composition_unit_type': 'TBD',
  'humidity_type': 'TBD',
  'relative_humidity_amount_individual_number': 'TBD',
  'relative_humidity_amount_uom': 'TBD',
  'has_fixed_stirring': 'TBD',
  'stirring_amount': 'TBD',
  'stirring_amount_uom': 'TBD',
  'has_fixed_temperature': 'TBD',
  'has_fixed_harvest_criteria': 'TBD',
  'harvest_criteria_relationship': 'TBD',
  'harvest_criteria_amount_type': 'TBD',
  'harvest_criteria_amount_ratio': 'TBD',
  'harvest_criteria_amount_uom_ratio': 'TBD',
  'ratio_result_type': 'TBD',
  'temperature_type': 'TBD',
  'temperature_amount_numerical': 'TBD',
  'temperature_amount_textual': 'TBD',
  'temperature_amount_uom_numerical': 'TBD',
  'per_wash_solution_volume_amount': 'TBD',
  'per_wash_solution_volume_amount_uom': 'TBD',
  'has_multiple_harvest_criteria': 'TBD',
  'solvent_prep_process_id': 'TBD',
  'pressure_amount': 'TBD',
  'pressure_amount_uom': 'TBD',
  'autoclave_cycle_type': 'TBD',
  'speed_amount': 'TBD',
  'speed_amount_uom': 'TBD',
  'solution_volume_amount': 'TBD',
  'solution_volume_amount_uom': 'TBD',
  'optical_density': 'TBD'




})('none');


/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentOntologyTermProcessDefinition = (entity) =>
  getOntologyTermProcessDefinition(entity)   
