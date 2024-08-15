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

const getDataValidationMaterialDefinition = (columnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt) => {

  switch (columnName) {
    case 'action':
      var dataValidationInfo = createListNotFromRange(['Register internally generated material', 'Register externally sourced material']); //,'Create alias'
      break;
    case 'catalog_number_noninhouse_item':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', [['material_supplier'], ['catalog_number']], 'material_supplier', 'in-house', false, undefined, searchValuesConDef);
      break;
    case 'lot_number':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'inhouse_material_registration_type':
      var dataValidationInfo = createListNotFromRange(['composed', 'derived', 'orphan']);
      break;
    case 'catalog_number_inhouse_item':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', [['material_supplier'], ['catalog_number']], 'material_supplier', 'in-house', true, undefined, searchValuesConDef);
      break;
    case 'derived_from_lot_number_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['material_lot_number_available_as_parent'], undefined, undefined, undefined, searchValuesDatVal); // any material extnernal material or internal material with summary of provenance plus orphans  

      break;
    case 'composed_from_lot_number_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('dataValidation', ['material_lot_number_available_as_parent'], undefined, undefined, undefined, searchValuesDatVal); // any material extnernal material or internal material with summary of provenance plus orphans 
      break;
    case 'lot_number_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('materialDefinition', ['lot_number'], undefined, undefined, undefined, searchValuesMatDef);
      break;
    case 'barcode':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'summary_of_provenance_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('workflowManagement', ['summary_of_provenance_name'], undefined, undefined, undefined, searchValuesWrkflwMgmt);
      break;
    case 'alias':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'comment':
      var dataValidationInfo = createGoogleSheetsMaxTextSpecifications();
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

const getCurrentDataValidationMaterialDefinition = (columnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt) =>
  getDataValidationMaterialDefinition(columnName, searchValuesConDef, searchValuesMatDef, searchValuesDatVal, searchValuesWrkflwMgmt)


function testApplyDataValidationMaterialDefinition() {
  let res = getCurrentDataValidationMaterialDefinition('volume_unit')
  console.log(res)
}

