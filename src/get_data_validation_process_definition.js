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
 * @fileoverview Functions that get data validation affiliated with attributes 
 * for physical material.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */

const getDataValidationProcessDefinitionCore = (columnName) => {
  switch (columnName) {
    case 'process_type':
      var dataValidationInfo = createListNotFromRange(['establishing culture growth environment', 'seed', 'fermentation', 'weight measurement', 'contamination measurement', 'resuspension', 'aliquoting', 'passage',
        'snap freeze', 'storage', 'wash', 'specimen pooling', 'counting', 'Freeze-Drying', 'substance combination', 'open', 'volume measurement', 'transfer',
        'spot bleach', 'microbial culture procedure', 'autoclave', 'centrifugation', 'bead-based homogenization', 'solvent preparation', 'solvent extraction', 'harvest culture growth environment', 'optical density measurement']);
      break;
    case 'process_id':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'helper_is_mini_table_header':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'helper_mini_table_guid':
      var dataValidationInfo = createVarChar36ValidationSpecifications();
      break;

    default:
      var dataValidationInfo = "none";
  }
  return dataValidationInfo;

}

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */
const getCurrentDataValidationProcessDefinitionCore = (entity) =>
  getDataValidationProcessDefinitionCore(entity)


const getDataValidationProcessDefinitionCIDC = (columnName, searchValues) => {
  switch (columnName) {
    case 'medium_total_volume':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'medium_total_volume_uom':
      var dataValidationInfo = createListNotFromRange(['liter', 'milliliter', 'microliter']);
      break;
    case 'has_fixed_seed_amount':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'seed_amount_type':
      var dataValidationInfo = createListNotFromRange(['count', 'ratio']);
      break;
    case 'seed_amount_ratio':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'seed_amount_count':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'seed_amount_ratio_uom':
      var dataValidationInfo = createListNotFromRange(['percent (w/v)', 'count/mL']);
      break;
    case 'has_fixed_growth_rate':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'has_fixed_pH':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'pH':
      var dataValidationInfo = createPHValidationSpecifications();
      break;
    case 'has_fixed_gas_composition':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'gas_component_common_name':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'gas_composition_percent_amount':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'has_fixed_humidity':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'humidity_type':
      var dataValidationInfo = createListNotFromRange(['relative humidity']);
      break;
    case 'relative_humidity_amount_individual_number':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'relative_humidity_amount_uom':
      var dataValidationInfo = createListNotFromRange(['percentage unit']);
      break;
    case 'gas_composition_unit_type':
      var dataValidationInfo = createListNotFromRange(['percent']);
      break;
    case 'has_fixed_stirring':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'stirring_amount':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'stirring_amount_uom':
      var dataValidationInfo = createListNotFromRange(['revolutions per minute']);
      break;
    case 'has_fixed_temperature':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'has_fixed_harvest_criteria':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'harvest_criteria_relationship':
      var dataValidationInfo = createListNotFromRange(['must meet one of', 'must meet all of', 'should meet one of', 'should meet all of']);
      break;
    case 'harvest_criteria_amount_type':
      var dataValidationInfo = createListNotFromRange(['ratio']);
      break;
    case 'harvest_criteria_amount_ratio':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'ratio_result_type':
      var dataValidationInfo = createListNotFromRange(['of substrate to volume of media', 'of individuals to volume of media']);
      break;
    case 'temperature_type':
      var dataValidationInfo = createListNotFromRange(['numerical', 'textual']);
      break;
    case 'temperature_amount_numerical':
      var dataValidationInfo = createIntegerNegativeMinNoMaxGenericValidationSpecifications();
      break;
    case 'temperature_amount_uom_numerical':
      var dataValidationInfo = createListNotFromRange(['degree Celsius', 'degree Fahrenheit', 'kelvin']);
      break;
    case 'temperature_amount_textual':
      var dataValidationInfo = createListNotFromRange(['ambient temperature', 'room temperature', 'on dry ice']);
      break;
    case 'per_wash_solution_volume_amount':
      var dataValidationInfo = createFloatZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'per_wash_solution_volume_amount_uom':
      var dataValidationInfo = createListNotFromRange(['liter', 'milliliter', 'microliter']);
      break;
    case 'solvent_prep_process_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'solvent preparation', true, undefined, searchValues);
      break;
    case 'growth_rate_type':
      var dataValidationInfo = createListNotFromRange(['numerical', 'textual']);
      break;
    case 'growth_rate_amount_numerical':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'growth_rate_amount_uom_numerical':
      var dataValidationInfo = createListNotFromRange(['h^-1']);
      break;
    case 'growth_rate_amount_textual':
      var dataValidationInfo = createListNotFromRange(['exponential', 'geometric', 'logarithmic']);
      break;
    case 'pressure_amount':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'pressure_amount_uom':
      var dataValidationInfo = createListNotFromRange(['pounds per square inch']);
      break;
    case 'autoclave_cycle_type':
      var dataValidationInfo = createListNotFromRange(['liquid', 'gravity']);
      break;
    case 'speed_amount':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'speed_amount_uom':
      var dataValidationInfo = createListNotFromRange(['revolutions per minute', 'relative centrifugal field']);
      break;
    case 'solution_volume_amount':
      var dataValidationInfo = createFloatZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'solution_volume_amount_uom':
      var dataValidationInfo = createListNotFromRange(['liter', 'milliliter', 'microliter']);
      break;
    case 'harvest_criteria_amount_uom_ratio':
      var dataValidationInfo = createListNotFromRange(['percent (w/v)', 'count/mL']);
      break;
    case 'optical_density':
      var dataValidationInfo = createListNotFromRange(['OD536', 'OD550', 'OD600', 'OD650', 'OD660']);
      break;

    default:
      var dataValidationInfo = "none";
  }
  return dataValidationInfo;

}

/*

  const getDataValidationProcessDefinitionCIDC = switchAlternative({

   'medium_total_volume':createSubstanceNoMinNoMaxGenericValidationSpecifications(),	
   'medium_total_volume_uom': createListNotFromRange(['volume unit']),	
   'has_fixed_seed_amount': createListNotFromRange(['TRUE,FALSE']),	
   'seed_amount_type':  createListNotFromRange(['unit type']), 	
   'seed_amount_ratio': createSubstanceNoMinNoMaxGenericValidationSpecifications(),	
   'seed_amount_count': createIntegerZeroMinNoMaxGenericValidationSpecifications(),	
   'seed_amount_ratio_uom': createListNotFromRange(['ratio unit']),	
   'has_fixed_growth_rate': createListNotFromRange(['TRUE,FALSE']),	
   //'growth_rate_amount': createSubstanceNoMinNoMaxGenericValidationSpecifications(),	
   //'growth_rate_amount_uom': 	
   'has_fixed_pH': createListNotFromRange(['TRUE,FALSE']),	
   'pH': createPHValidationSpecifications(),	
   'has_fixed_gas_composition': createListNotFromRange(['TRUE,FALSE']),	
   'gas_component_common_name': createVarChar255ValidationSpecifications(),	
   'gas_composition_percent_amount': createSubstanceNoMinNoMaxGenericValidationSpecifications(),	
   'gas_composition_amount_percent_uom': createListNotFromRange(['percent unit']),	
   'has_fixed_humidity': createListNotFromRange(['TRUE,FALSE']),	
   'gas_composition_unit_type': createListNotFromRange(['gas composition unit type']),
   //'relative_humidity_amount': createSubstanceNoMinNoMaxGenericValidationSpecifications(),	
   //'relative_humidity_amount_uom':	
   'has_fixed_stirring': createListNotFromRange(['TRUE,FALSE']),	
   'stirring_amount': createIntegerZeroMinNoMaxGenericValidationSpecifications(),	
   'stirring_amount_uom': createListNotFromRange(['speed unit']),
   'has_fixed_temperature': createListNotFromRange(['TRUE,FALSE']),		
   'has_fixed_harvest_criteria': createListNotFromRange(['TRUE,FALSE']),		
   'harvest_criteria_relationship': createListNotFromRange(['criteria relatioships']), 	
   'harvest_criteria_amount_type': createListNotFromRange(['harvest criteria amount type']),  
   'harvest_criteria_amount_ratio': createSubstanceNoMinNoMaxGenericValidationSpecifications(),	
   'harvest_criteria_amount_uom_ratio': createListNotFromRange(['ratio unit']),	
   'ratio_result_type': createListNotFromRange(['ratio result type']), 
   'temperature_type': createListNotFromRange(['data type categorye']), 
   'temperature_amount': createSubstanceNoMinNoMaxGenericValidationSpecifications(),	
   'temperature_amount_uom': createListNotFromRange(['temperature unit']), 
   'per_wash_solution_volume_amount': createFloatZeroMinNoMaxGenericValidationSpecifications(),	
   'per_wash_solution_volume_amount_uom': createListNotFromRange(['volume unit'])



    })('none');
    
*/

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentDataValidationProcessDefinitionCIDC = (entity, searchValues) =>
  getDataValidationProcessDefinitionCIDC(entity, searchValues)


