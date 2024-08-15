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
 * for conceptual entities.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */

const getDataValidationConceptDefinitionCore = (columnName, searchValues) => {
  switch (columnName) {
    case 'orcid':
      var dataValidationInfo = createVarChar19ValidationSpecifications();
      break;
    case 'biological_taxon_type':
      var dataValidationInfo = createListNotFromRange(['species', 'strain']);
      break;
    case 'concept_type':
      var dataValidationInfo = createListNotFromRange(['person', 'organization', 'contact', 'investigation', 'study', 'item', 'funding source', 'digital data repository', 'accession', 'url']);
      break;
    case 'organization_id':
      var dataValidationInfo = createVarChar30ValidationSpecifications();
      break;
    case 'organization_title':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'person_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('conceptDefinition', ['orcid'], undefined, undefined, undefined, searchValues);
      break;
    case 'investigation_title':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'study_title':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'investigation_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('conceptDefinition', ['investigation_title'], undefined, undefined, undefined, searchValues);
      break;
    case 'catalog_number':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'material_supplier':
      var dataValidationInfo = createRangeValidationSpecifications(2, 'conceptDefinition', 'organization_id')
      //var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('conceptDefinition', ['organization_id']);
      break;
    case 'is_external_catalog_number':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'funding_organization_id':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('conceptDefinition', ['organization_id'], undefined, undefined, undefined, searchValues);
      break;
    case 'digital_data_repository_name':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'digital_data_repository_reference':
      var dataValidationInfo = createForeignKeyFromConceptDefinitionValidationSpecifications('conceptDefinition', ['digital_data_repository_name'], undefined, undefined, undefined, searchValues);
      break;
    case 'accession':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'url':
      var dataValidationInfo = createUrlValidationSpecifications(); //createVarChar255ValidationSpecifications();
      break;
    case 'funding_id':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'has_other_organism_group':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'has_species_taxonomy_id':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
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

const getCurrentDataValidationConceptDefinitionCore = (entity, searchValues) =>
  getDataValidationConceptDefinitionCore(entity, searchValues)


function testApplyDataValidationConceptDefinition() {
  let res = getCurrentDataValidationConceptDefinitionCore('volume_unit')
  console.log(res)
}

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */

const getDataValidationConceptDefinitionOrganismPackage = (columnName, searchValues) => {
  switch (columnName) {
    case 'concept_type':
      var dataValidationInfo = createListNotFromRange(['person', 'organization', 'contact', 'investigation', 'study', 'item', 'funding source', 'digital data repository', 'accession', 'url', 'biological taxon', 'other organism groupings']);
      break;
    case 'material_type':
      var dataValidationInfo = createListNotFromRange(['organismal entity', 'growth environment', 'device', 'substance']);
      break;
    case 'biological_taxon':
      var dataValidationInfo = createListNotFromRange(['species', 'strain']);
      break;
    case 'biological_taxon_for_organismal_entity':    // TODO remove this case throughout code
      var dataValidationInfo = createListNotFromRange(['species', 'strain']);
      break;
    case 'biological_taxon_as_reference':
      var dataValidationInfo = createListNotFromRange(['species', 'strain']);
      break;
    case 'organismal_entity_type':
      var dataValidationInfo = createListNotFromRange(['collection of organisms', 'organism', 'organ', 'tissue', 'body fluid or substance', 'cell', 'subcellular entity']);//,'molecular entity' 
      break;
    case 'type_of_collection_of_organisms':
      var dataValidationInfo = createListNotFromRange(['single-species collection of organisms', 'pair of interacting organisms', 'multi-species collection of organisms']);
      break;
    case 'other_organism_grouping':
      var dataValidationInfo = createListNotFromRange(['breed', 'cultivar', 'ecotype', 'strain', 'isolate']);
      break;
    case 'species':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'strain':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'breed':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'cultivar':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'ecotype':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'isolate':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;
    case 'species_reference':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', [['curator_organization_taxonomy_reference'], ['taxonomy_id']], 'biological_taxon_type', 'species', true, true, searchValues);

      break;
    case 'breed_reference':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', [['species_reference'], ['breed']], undefined, undefined, undefined, undefined, searchValues);
      break;
    case 'cultivar_reference':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', [['species_reference'], ['cultivar']], undefined, undefined, undefined, undefined, searchValues);
      break;
    case 'ecotype_reference':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', [['species_reference'], ['ecotype']], undefined, undefined, undefined, undefined, searchValues);
      break;
    case 'strain_reference':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', ['strain'], undefined, undefined, undefined, undefined, searchValues);
      break;
    case 'isolate_reference':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', ['isolate'], undefined, undefined, undefined, undefined, searchValues);
      break;
    case 'has_taxonomy_identifier':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'has_strain_taxonomy_id':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'strain_taxonomy_reference':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', [['curator_organization_taxonomy_reference'], ['taxonomy_id']], 'biological_taxon_type', 'strain', true, undefined, searchValues);
      break;
    case 'curator_organization_taxonomy_reference':
      var dataValidationInfo = createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition', ['organization_id'], undefined, undefined, undefined, undefined, searchValues);
      break;
    case 'has_taxonomy_identifier_as_reference':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'has_other_organism_grouping':
      var dataValidationInfo = createListNotFromRange(['TRUE', 'FALSE']);
      break;
    case 'other_organism_grouping_reference':
      var dataValidationInfo = createListNotFromRange(['breed', 'cultivar', 'ecotype', 'strain', 'isolate']);
      break;
    case 'taxonomy_id':
      var dataValidationInfo = createVarChar255ValidationSpecifications();
      break;


    default:
      var dataValidationInfo = "none";
  }
  return dataValidationInfo;

}

/*
  const getDataValidationConceptDefinitionOrganismPackage = switchAlternative({
  
   'concept_type': createListNotFromRange(['person','organization','contact','investigation','study','item','funding source','digital data repository','accession','url','taxonomy identifier','species','strain','breed','cultivar','ecotype']),   
   'material_type': createListNotFromRange(['organismal entity','growth environment','device','substance']),
   'organismal_entity_type':createListNotFromRange(['population','organism','organ','tissue','body fluid or substance','cell','subcellular entity','molecular entity']),
   'population_type':createListNotFromRange(['breed','cultivar','ecotype','strain']),
   'species': createVarChar255ValidationSpecifications(),
   'breed':createVarChar255ValidationSpecifications(),
   'cultivar': createVarChar255ValidationSpecifications(),
   'ecotype': createVarChar255ValidationSpecifications(),
   'strain': createVarChar255ValidationSpecifications(),
   'species_reference': createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition',['species'],undefined,undefined,undefined),
   'breed_reference': createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition',[['species_reference'],['breed']],undefined,undefined,undefined),
   'cultivar_reference': createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition',[['species_reference'],['cultivar']],undefined,undefined,undefined),
   'ecotype_reference': createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition',[['species_reference'],['ecotype']],undefined,undefined,undefined),
   'strain_reference': createForeignKeyFromMaterialDefinitionValidationSpecifications('conceptDefinition',['strain'],undefined,undefined,undefined)

    })('none');
*/
/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentDataValidationConceptDefinitionOrganismPackage = (entity, searchValues) =>
  getDataValidationConceptDefinitionOrganismPackage(entity, searchValues)

