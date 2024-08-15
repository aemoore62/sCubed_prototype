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
 * @fileoverview Functions that compose objects affiliated with conceptual entities.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of the entity object
 */

const getEntityObjectColumnVisibilityConceptDefinitionCore = switchAlternative({
  'concept_type person': createPersonEntityObjectCore(),
  'concept_type organization': createOrganizationEntityObjectCore(),
  'concept_type contact': createContactEntityObjectCore(),
  'concept_type investigation': createInvestigationEntityObjectCore(),
  'concept_type study': createStudyEntityObjectCore(),
  'concept_type item': createItemEntityObjectCore(),
  'concept_type funding source': createFundingSourceEntityObjectCore(),
  'concept_type accession': createAccessionEntityObjectCore(),
  'concept_type url': createUrlEntityObjectCore(),
  'concept_type digital data repository': createDigitalDataRepositoryEntityObjectCore(),
  'catalog number external material': createExternalMaterialCatalogNumberEntityObject()
})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentEntityObjectColumnVisibilityConceptDefinitionCore = (entity) =>
  getEntityObjectColumnVisibilityConceptDefinitionCore(entity)

const getCurrentEntityObjectColumnVisibilityConceptDefinitionNAN = (entity) =>
  getEntityObjectColumnVisibilityConceptDefinitionNAN(entity)


const getEntityObjectColumnVisibilityConceptDefinitionOrganismPackage = switchAlternative({
  'concept_type item': createItemEntityObjectOrganismPackage(),
  'concept_type biological taxon': createBiologicalTaxonObject(),
  //' taxonomic rank strain': createStrainTaxonomyIdentifierEntityObject(),
  //'taxonomic rank species': createSpeciesTaxonomyIdentifierEntityObject(),
  'concept_type other organism groupings': createOrganismGroupingObject(),
  'biological_taxon_type species': createSpeciesEntityObject(),
  'biological_taxon_type strain': createStrainEntityObject(),
  'other_organism_grouping breed': createBreedEntityObject(),
  'other_organism_grouping cultivar': createCultivarEntityObject(),
  'other_organism_grouping ecotype': createEcotypeEntityObject(),
  'other_organism_grouping strain': createStrainOtherOrgEntityObject(),
  'other_organism_grouping isolate': createIsolateEntityObject(),
  'material_type organismal entity': createOrganismalEntityObject(),
  'other_organism_grouping_reference breed': createPopulationWithBreedEntityObject(),
  'other_organism_grouping_reference cultivar': createPopulationWithCultivarEntityObject(),
  'other_organism_grouping_reference ecotype': createPopulationWithEcotypeEntityObject(),
  'other_organism_grouping_reference strain': createPopulationWithStrainEntityObject(),
  'biological_taxon_type_reference species': createSpeciesEntityObject(),
  'biological_taxon_type_reference strain': createStrainEntityObject(),
  'organismal_entity_type collection of organisms': createCollectionOfOrganismsObject(),
  //'has taxonomy identifier species': createSpeciesEntityObject(),
  'has_taxonomy_identifier true': createBiologicalTaxonObject(),
  'has taxonomy identifier strain': createStrainEntityObject(),
  'has_taxonomy_identifier_as_reference TRUE': createBiologicalTaxonReferenceObject(),//createTaxonomyIDStrainReferenceEntityObject()
  'has_other_organism_grouping TRUE': createOrganismalEntityWithOtherOrganismGroupingObject(),
  'biological_taxon_as_reference strain': createTaxonomyIDStrainReferenceEntityObject(),
  'biological_taxon_as_reference species': createTaxonomyIDSpeciesReferenceEntityObject(),
  'has_species_taxonomy_id TRUE': createOtherOrganismGroupingSpeciesTaxonomyIdentifierEntityObject()

})('none');

/**  
* Determines a value given an entity
* @return {Object} - A description of the entity object
*/

const getCurrentEntityObjectColumnVisibilityConceptDefinitionOrganismPackag = (entity) =>
  getEntityObjectColumnVisibilityConceptDefinitionOrganismPackage(entity)


