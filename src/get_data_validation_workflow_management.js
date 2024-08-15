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
 * for workflow management entities.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */

const getDataValidationWorkflowManagement = (columnName, searchValues) => {
  switch (columnName) {
    case 'workflow_entity_type':
      var dataValidationInfo = createListNotFromRange(['reporting workflow', 'process specification']);
      break;
    case 'workflow_name':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'workflow_sequence_number':
      var dataValidationInfo = createVarChar255ValidationSpecifications(); //createIntegerValidationSpecifications(); TODO
      break;
    case 'workflow_name_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('workflowManagement', ['workflow_name'], undefined, undefined, undefined, searchValues);
      break;
    case 'process_specification_name':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'process_specification_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('workflowManagement', ['process_specification_name'], undefined, undefined, undefined, searchValues);
      break;
    case 'summary_of_provenance_name':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'is_repeatable':
      var dataValidationInfo = createIntegerZeroMinNoMaxGenericValidationSpecifications();
      break;
    case 'process_type':
      var dataValidationInfo = createListNotFromRange(['establishing culture growth environment', 'seed', 'fermentation', 'weight measurement', 'resuspension', 'aliquoting', 'passage',
        'snap freeze', 'storage', 'wash', 'specimen pooling', 'counting', 'Freeze-Drying', 'substance combination', 'open', 'volume measurement', 'transfer',
        'spot bleach', 'microbial culture procedure', 'autoclave', 'centrifugation', 'bead-based homogenization', 'solvent preparation', 'solvent extraction', 'harvest culture growth environment', 'optical density measurement', 'contamination_measurement']);
      break;
    case 'process_type_reference':
      var dataValidationInfo = createListNotFromRange(['establishing culture growth environment', 'seed', 'fermentation', 'weight measurement', 'resuspension', 'aliquoting', 'passage',
        'snap freeze', 'storage', 'wash', 'specimen pooling', 'counting', 'Freeze-Drying', 'substance combination', 'open', 'volume measurement', 'transfer',
        'spot bleach', 'microbial culture procedure', 'autoclave', 'centrifugation', 'bead-based homogenization', 'solvent preparation', 'solvent extraction', 'harvest culture growth environment', 'optical density measurement', 'contamination_measurement']);
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
    case 'substance_combination_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'substance combination', true, undefined, searchValues);
      break;
    case 'open_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'open', true, undefined, searchValues);
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
    case 'freeze_drying_id':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('processDefinition', ['process_id'], 'process_type', 'Freeze-Drying', true, undefined, searchValues);
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

const getCurrentDataValidationWorkflowManagement = (entity, searchValues) =>
  getDataValidationWorkflowManagement(entity, searchValues)


const getDataValidationWorkflowManagementSummaryProv = (columnName) => {
  switch (columnName) {
    case 'workflow_entity_type':
      var dataValidationInfo = createListNotFromRange(['reporting workflow', 'process specification', 'summary of provenance']);
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

const getCurrentDataValidationWorkflowManagementSummaryProv = (entity) =>
  getDataValidationWorkflowManagementSummaryProv(entity)



