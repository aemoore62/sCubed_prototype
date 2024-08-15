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
 * @fileoverview Manages functions that get composed objects related to conceptual entities.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of the entity object
 */
/*
  const getEntityObjectColumnVisibilityConceptDefinition = switchAlternative({

    'organization': createOrganizationEntityObject(),
    'person': createPersonEntityObject(),
    'species': createSpeciesEntityObject(),
    'strain': createOrganismStrainEntityObject(),
    'source strain': createSourceStrainEntityObject(),
    'non-source strain': createNonSourceStrainEntityObject(),
    'taxonomy identifier': createTaxonomyIdentifierEntityObject(),
    'taxonomic rank strain': createStrainTaxonomyIdentifierEntityObject(),
    'taxonomic rank species': createSpeciesTaxonomyIdentifierEntityObject(),
    'catalog number': createCatalogNumberEntityObject(),
    'organismal entity': createOrganismalEntityObject(),
    'organism group strain': createStrainOrganismGroupEntityObject(),
    'has strain taxonomy TRUE': createTaxonomyIDStrainReferenceEntityObject(),
    //'has strain taxonomy false': createNoTaxonomyIDStrainReferenceEntityObject(),
    'has strain taxonomy false': createOrganismalEntityStrainNoTaxnomyIDObject(),
    'substance': createSubstanceEntityObject(),
    'growth environment': createGrowthEnvironmentEntityObject(),
    'catalog number external material': createExternalMaterialCatalogNumberEntityObject(),
    'device': createDeviceEntityObject(),
    'container': createContainerEntityObject(),
    'fermenter': createFermenterEntityObject(),
    'organismal entity non-source strain': createOrganismalEntityNonSourceStrainObject()

    })('none');
*/
/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */
/*
  const getCurrentEntityObjectColumnVisibilityConceptDefinition  = (entity) =>
  getEntityObjectColumnVisibilityConceptDefinition(entity)   
 */