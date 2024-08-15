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
 * for executed processes.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */
const getDataValidationProcessExecution = (columnName, searchValues) => {
  switch (columnName) {
    case 'workflow_instance_id':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'workflow_instance_step_number':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'repitition_number':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'process_type':
      var dataValidationInfo = createListNotFromRange(['establishing culture growth environment', 'seed', 'fermentation', 'weight measurement', 'contamination measurement', 'resuspension', 'aliquoting', 'passage',
        'snap freeze', 'storage', 'wash', 'specimen pooling', 'counting', 'Freeze-Drying', 'substance combination', 'open', 'volume measurement', 'transfer',
        'spot bleach', 'microbial culture procedure', 'autoclave', 'centrifugation', 'bead-based homogenization', 'solvent preparation', 'solvent extraction', 'harvest culture growth environment', 'optical density measurement']);
      break;
    case 'start_date':
      var dataValidationInfo = createDateValidationSpecifications();
      break;
    case 'end_date':
      var dataValidationInfo = createDateValidationSpecifications();
      break;
    case 'end_time':
      var dataValidationInfo = createTimeValidationSpecifications();
      break;
    case 'start_time':
      var dataValidationInfo = createTimeValidationSpecifications();
      break;
    case 'optical_density_result':
      var dataValidationInfo = createFloatZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'contamination_result':
      var dataValidationInfo = createListNotFromRange(['-ve']);
      break;
    case 'count_result_amount':
      var dataValidationInfo = createFloatZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'weight_result_amount':
      var dataValidationInfo = createFloatZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'weight_result_uom':
      var dataValidationInfo = createListNotFromRange(['gram', 'milligram']);
      break;
    case 'weight_result_type':
      var dataValidationInfo = createListNotFromRange(['empty material weight', 'material weight', 'total weight']);
      break;
    case 'comment':
      var dataValidationInfo = createGoogleSheetsMaxTextSpecifications();
      break;
    case 'solution_volume_amount':
      var dataValidationInfo = createFloatZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'solution_volume_uom':
      var dataValidationInfo = createListNotFromRange(['liter', 'milliter', 'microliter']);
      break;
    case 'volume_result_amount':
      var dataValidationInfo = createFloatZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'volume_result_uom':
      var dataValidationInfo = createListNotFromRange(['liter', 'milliliter', 'microliter']);
      break;
    case 'volume_result_type':
      var dataValidationInfo = createListNotFromRange(['amount recovered']);
      break;
    case 'helper_is_mini_table_header':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'helper_mini_table_guid':
      var dataValidationInfo = createVarChar36ValidationSpecifications();
      break;
    case 'ambient_temperature_amount':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'ambient_temperature_uom':
      var dataValidationInfo = createListNotFromRange(['degree Celsius', 'degree Fahrenheit', 'kelvin']);
      break;
    case 'condensor_temperature_amount':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'condensor_temperature_uom':
      var dataValidationInfo = createListNotFromRange(['degree Celsius', 'degree Fahrenheit', 'kelvin']);
      break;
    case 'compressor_pressure_amount':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'compressor_pressure_uom':
      var dataValidationInfo = createListNotFromRange(['pounds per square inch']);
      break;
    case 'passage_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'passage', true, undefined, searchValues);
      break;
    case 'establishing_culture_growth_environment_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'establishing culture growth environment', true, undefined, searchValues);
      break;
    case 'optical_density_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'optical density measurement', true, undefined, searchValues);
      break;
    case 'contamination_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'contamination measurement', true, undefined, searchValues);
      break;
    case 'seed_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'seed', true, undefined, searchValues);
      //(searchSheet, columnNames, filterColumnName, filterValue, equalsFilterValue, filterValueNotinOptionList, searchValues)
      //(searchSheet, columnNames, filterColumnName, filterValue, equalsFilterValue, filterValueNotinOptionList, searchValues)
      break;
    case 'fermentation_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'fermentation', true, undefined, searchValues);
      break;
    case 'harvest_culture_growth_environment_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'harvest culture growth environment', true, undefined, searchValues);
      break;
    case 'weight_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'weight measurement', true, undefined, searchValues);
      break;
    case 'resuspension_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'resuspension', true, undefined, searchValues);
      break;
    case 'aliquoting_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'aliquoting', true, undefined, searchValues);
      break;
    case 'snap_freeze_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'snap freeze', true, undefined, searchValues);
      break;
    case 'storage_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'storage', true, undefined, searchValues);
      break;
    case 'specimen_pooling_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'specimen pooling', true, undefined, searchValues);
      break;
    case 'wash_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'wash', true, undefined, searchValues);
      break;
    case 'spot_bleach_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'spot bleach', true, undefined, searchValues);
      break;
    case 'counting_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'counting', true, undefined, searchValues);
      break;
    case 'freeze_drying_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'Freeze-Drying', true, undefined, searchValues);
      break;
    case 'substance_combination_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'substance combination', true, undefined, searchValues);
      break;
    case 'volume_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'volume measurement', true, undefined, searchValues);
      break;
    case 'transfer_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'transfer', true, undefined, searchValues);
      break;
    case 'microbial_culture_procedure_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'microbial culture procedure', true, undefined, searchValues);
      break;
    case 'autoclave_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'autoclave', true, undefined, searchValues);
      break;
    case 'centrifugation_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'centrifugation', true, undefined, searchValues);
      break;
    case 'bead_based_homogenization_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'bead-based homogenization', true, undefined, searchValues);
      break;
    case 'solvent_preparation_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'solvent preparation', true, undefined, searchValues);
      break;
    case 'solvent_extraction_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'solvent extraction', true, undefined, searchValues);
      break;
    case 'contamination_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'contamination measurement', true, undefined, searchValues);
      break;
    case 'open_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'open', true, undefined, searchValues);
      break;
    case 'person_id':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('conceptDefinition', ['orcid'], undefined, undefined, undefined, searchValues);
      break;
    case 'input_material_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['material_lot_number'], undefined, undefined, undefined, searchValues);
      break;
    case 'input_media_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['solution_lot_number'], undefined, undefined, undefined, searchValues);
      break;
    case 'input_organismal_entity_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['organismal_entity_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'organismal_entity_lot_number');
      break;
    case 'input_growth_environment_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['growth_environment_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'growth_environment_lot_number');
      break;
    case 'input_substance_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['substance_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'substance_lot_number');
      break;
    case 'support_growth_environment_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['growth_environment_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'growth_environment_lot_number');
      break;
    case 'support_homogenizer_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['homogenizer_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'homogenizer_lot_number');
      break;
    case 'support_autoclave_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['autoclave_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'autoclave_lot_number');
      break;
    case 'support_centrifuge_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['centrifuge_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'centrifuge_lot_number');
      break;
    case 'support_lyophilizer_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['lyophilizer_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'lyophilizer_lot_number');
      break;
    case 'input_container_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['container_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'container_lot_number');
      break;
    case 'input_solution_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['solution_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'solution_lot_number');
      break;
    case 'output_organismal_entity_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['output_organismal_entity_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'output_organismal_entity_lot_number');
      break;
    case 'output_pooled_specimen_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['output_pooled_specimen_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'output_pooled_specimen_lot_number');
      break;
    case 'output_growth_environment_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['output_growth_environment_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'output_growth_environment_lot_number');
      break;
    case 'output_substance_lot_number':
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['output_substance_lot_number'], undefined,undefined,undefined, searchValues);
      var dataValidationInfo = createRangeValidationSpecifications(2, 'dataValidation', 'output_substance_lot_number');
      break;
    case 'optical_density_uom':
      var dataValidationInfo = createListNotFromRange(['Absorbance Unit', 'Absorbance Unit per Milliter', 'Absorbance per Minute']);
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

const getCurrentDataValidationProcessExecution = (entity, searchValues) =>
  getDataValidationProcessExecution(entity, searchValues)


const getDataValidationProcessExecutionColumnNameEndsInID = (columnName) => {
  switch (columnName) {


    case 'passage_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'passage', true);
      break;
    case 'establishing_growth_environment_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'establishing culture growth environment', true);
      break;
    case 'optical_density_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'optical density measurement', true);
      break;
    case 'contamination_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'contamination measurement', true);
      break;
    case 'seed_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'seed', true);
      break;
    case 'fermentation_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'fermentation', true);
      break;
    case 'harvest_culture_growth_environment_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'harvest culture growth environment', true);
      break;
    case 'weight_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'weight measurement', true);
      break;
    case 'resuspension_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'resuspension', true);
      break;
    case 'aliquoting_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'aliquoting', true);
      break;
    case 'snap_freeze_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'snap freeze', true);
      break;
    case 'storage_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'storage', true);
      break;
    case 'specimen_pooling_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'specimen pooling', true);
      break;
    case 'wash_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'wash', true);
      break;
    case 'spot_bleach_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'spot bleach', true);
      break;
    case 'counting_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'counting', true);
      break;
    case 'freeze_drying_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'Freeze-Drying', true);
      break;
    case 'substance_combination_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'substance combination', true);
      break;
    case 'volume_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'volume measurement', true);
      break;
    case 'transfer_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'transfer', true);
      break;
    case 'microbial_culture_procedure_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'microbial culture procedure', true);
      break;
    case 'autoclave_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'autoclave', true);
      break;
    case 'centrifugation_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'centrifugation', true);
      break;
    case 'bead_based_homogenization_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'bead-based homogenization', true);
      break;
    case 'solvent_preparation_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'solvent preparation', true);
      break;
    case 'solvent_extraction_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'solvent extraction', true);
      break;
    case 'contamination_measurement_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'contamination measurement', true);
      break;
    case 'open_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'open', true);
      break;
    case 'person_id':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('conceptDefinition', ['orcid']);
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

const getCurrentDataValidationProcessExecutionColumnNameEndsInID = (entity) =>
  getDataValidationProcessExecutionColumnNameEndsInID(entity)


const getDataValidationProcessExecutionColumnNameEndsInLotNumber = (columnName) => {
  switch (columnName) {
    case 'input_material_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['material_lot_number']);
      break;
    case 'input_media_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['solution_lot_number']);
      break;
    case 'input_organismal_entity_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['organismal_entity_lot_number']);
      break;
    case 'input_growth_environment_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['growth_environment_lot_number']);
      break;
    case 'input_substance_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['substance_lot_number']);
      break;
    case 'support_growth_environment_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['growth_environment_lot_number']);
      break;
    case 'support_homogenizer_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['homogenizer_lot_number']);
      break;
    case 'support_autoclave_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['autoclave_lot_number']);
      break;
    case 'support_centrifuge_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['centrifuge_lot_number']);
      break;
    case 'support_lyophilizer_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['lyophilizer_lot_number']);
      break;
    case 'input_container_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['container_lot_number']);
      break;
    case 'input_solution_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['solution_lot_number']);
      break;
    case 'output_organismal_entity_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['output_organismal_entity_lot_number']);
      break;
    case 'output_pooled_specimen_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['output_pooled_specimen_lot_number']);
      break;
    case 'output_growth_environment_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['output_growth_environment_lot_number']);
      break;
    case 'output_substance_lot_number':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['output_substance_lot_number']);
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

const getCurrentDataValidationProcessExecutionColumnNameEndsInLotNumber = (entity) =>
  getDataValidationProcessExecutionColumnNameEndsInLotNumber(entity)

