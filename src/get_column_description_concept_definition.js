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
 * @fileoverview Functions that get simple help text for conceptual entities.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of data validation characteristics
 */


const getColumnDescriptionConceptDefinitionCore = switchAlternative({

  'orcid': 'A persistent identifier, typically for researchers and contributors.',
  'concept_type': 'A classification for entities that are primarily abstract.',
  'organization_id': 'Information content that identifies an organization.',
  'organization_title': 'A non-identifying name for an organization.',
  'person_reference': 'A key that refers to a person.',
  'investigation_title': 'An identifying name for an investigation.',
  'study_title': 'An identifying name for a study.',
  'investigation_reference': 'A key that refers to an investigation.',
  'catalog_number': 'Information content that identifies the details or specifications that a material is anticipated to meet.',
  'material_supplier': 'A key that refers to an organization that adopts the role supplier in providing a physical material.',
  'is_external_catalog_number': 'Information that indicates if a catalog number was originated by the organization supplyingthe physical material.',
  'funding_organization_id': 'A key that refers to an organization that supplies funding.',
  'digital_data_repository_name': 'A name for infrastructure that manages storage and access to digital data.',
  'digital_data_repository_reference': 'A key that refers to a digital data repository.',
  'accession': 'A persistant identifier for an object within a collection of objects, often within a database.',
  'url': 'A Uniform Resource Locator (URL) is information content that referes to a resource on the internet.',
  'funding_id': 'Information content that identifies funding, typically within the context of the funding organization.',
  'helper_is_mini_table_header': 'This is a helper column that is not intended for you to manually edit. Column specifies if the current row is the first row of a mini table, given the presence of a mini table',
  'helper_mini_table_guid': 'This is a helper column that is not intended for you to manually edit. Column specifies the GUID of a mini table, given the presence of a mini table',
  'material_type': 'A classification for entities that are physical.',
  'organismal_entity_type': 'A classification for entities that are organismal.',
  'population_type': 'A classification for entities that are a population.',
  'species': 'The largest group of whole organisms that can generate fertile offspring.',
  'breed': 'A group of organisms, typically non-microscopic organisms, that are homogneous in some respect (e.g. appearance or behavior) that distinguishes the organisms from other organisms of the same species.',
  'cultivar': 'A group of cultivated plants that are produced for certain characteristics that distinguish the plants from other of the same species.',
  'ecotype': 'A group of organisms whose adaptation to certain environmental conditions distinguishes the organisms from other organisms of the same species.',
  'strain': 'A group of organisms, typically microscopic organisms, that are homogneous in some respect (e.g. appearance or behavior) that distinguishes the organisms from other organisms of the same species.',
  'species_reference': 'A key that refers to a species.',
  'breed_reference': 'A key that refers to a breed.',
  'cultivar_reference': 'A key that refers to a cultivar.',
  'ecotype_reference': 'A key that refers to a ecotype.',
  'strain_reference': 'A key that refers to a strain.',
  'biological_taxon': 'A classification for organisms',
  'has_taxonomy_identifier': 'Information that indicates if an entity has a taxonomy identifier.',
  'has_taxonomy_identifier_as_reference': 'Information that refers to presence of a taxonomy identifier.',
  'type_of_collection_of_organisms': 'A classification for a collection of organisms.',
  'biological_taxon_for_organismal_entity': 'A key that refers to a biological taxon.',
  'biological_taxon_as_reference': 'A key that refers to a biological taxon.',
  'strain_taxonomy_reference': 'A key that refers to a strain.',
  'other_organism_grouping': 'A group of organisms defined by non-taxonomic means.',
  'isolate': 'A group of organisms, typically microscopic organisms, that were acquired in one event, typically from a culture or host system.',
  'has_strain_taxonomy_id': 'Information that indicates if an entity has a strain.',
  'has_species_taxonomy_id': 'Information that indicates if an entity has a species.',
  'has_other_organism_grouping': 'Information that indicates if an entity has an organism grouping.',
  'other_organism_grouping_reference': 'A key that refers to an other organism grouping.',
  'isolate_reference': 'A key that refers to an isolate.',
  'biological_taxon_type': 'A classification for and biological taxon..',
  'curator_organization_taxonomy_reference': 'A key that refers to an organization that adopts the role curator.',
  'taxonomy_id': 'Information content that identifies a taxonomy.',
  'helper_is_mini_table_header': 'This is a helper column that is not intended for you to manually edit. Column specifies if the current row is the first row of a mini table, given the presence of a mini table',
  'helper_mini_table_guid': 'This is a helper column that is not intended for you to manually edit. Column specifies the GUID of a mini table, given the presence of a mini table'

})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentColumnDescriptionTermConceptDefinitionCore = (entity) =>
  getColumnDescriptionConceptDefinitionCore(entity)

const getColumnOntologyTermConceptDefinitionCore = switchAlternative({

  'orcid': 'TBD',
  'concept_type': 'TBD',
  'organization_id': 'TBD',
  'organization_title': 'TBD',
  'person_reference': 'TBD',
  'investigation_title': 'TBD',
  'study_title': 'TBD',
  'investigation_reference': 'TBD',
  'catalog_number': 'TBD',
  'material_supplier': 'TBD',
  'is_external_catalog_number': 'TBD',
  'funding_organization_id': 'TBD',
  'digital_data_repository_name': 'TBD',
  'digital_data_repository_reference': 'TBD',
  'accession': 'TBD',
  'url': 'TBD',
  'funding_id': 'TBD',
  'helper_is_mini_table_header': 'TBD',
  'helper_mini_table_guid': 'TBD',
  'material_type': 'TBD',
  'organismal_entity_type': 'TBD',
  'population_type': 'TBD',
  'species': 'TBD',
  'breed': 'TBD8',
  'cultivar': 'TBD',
  'ecotype': 'TBD',
  'strain': 'TBD',
  'species_reference': 'TBD',
  'breed_reference': 'TBD8',
  'cultivar_reference': 'TBD',
  'ecotype_reference': 'TBD',
  'strain_reference': 'TBD',
  'biological_taxon': 'TBD',
  'has_taxonomy_identifier': 'TBD',
  'has_taxonomy_identifier_as_reference': 'TBD',
  'type_of_collection_of_organisms': 'TBD',
  'biological_taxon_for_organismal_entity': 'TBD',
  'biological_taxon_as_reference': 'TBD',
  'strain_taxonomy_reference': 'TBD',
  'other_organism_grouping': 'TBD',
  'isolate': 'TBD',
  'has_strain_taxonomy_id': 'TBD',
  'has_species_taxonomy_id': 'TBD',
  'has_other_organism_grouping': 'TBD',
  'other_organism_grouping_reference': 'TBD',
  'isolate_reference': 'TBD',
  'biological_taxon_type': 'TBD',
  'curator_organization_taxonomy_reference': 'TBD',
  'taxonomy_id': 'TBD',
  'helper_is_mini_table_header': 'TBD',
  'helper_mini_table_guid': 'TBD'


})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentColumnOntologyTermConceptDefinitionCore = (entity) =>
  getColumnOntologyTermConceptDefinitionCore(entity)


