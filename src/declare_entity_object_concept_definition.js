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
 * @fileoverview Functions to compose objects that are affiliated with conceptual entities.
 * @author Abigail Elizabeth 
 * 
 */

/**  
 * Creates a function to generate an object, describing the characteristics of an attribute given an entity
 * @example
 * // returns {createEntityAttributeCharacteristics=() => ({
 * // createAttributeCharacteristics(true,false,"Sequoia")
 * @return {function} createEntityAttributeCharacteristics() - Function that generates object, including attributes and their characteristics
 */

const hasInvestigationAttributesCore = () => ({
  defineInvestigationAttributeRequirementsCore: () => ({
    attributes: {
      investigation_title: createAttributeCharacteristics(true, false)

    }

  })

})

const hasInvestigationAttributes = () => ({
  defineInvestigationAttributeRequirements: () => ({
    attributes: {
      investigation_title: createAttributeCharacteristics(true, false),
      summary: createAttributeCharacteristics(true, false)

    }

  })

})

const hasStudyAttributesCore = () => ({
  defineStudyAttributeRequirementsCore: () => ({
    attributes: {
      investigation_reference: createAttributeCharacteristics(true, false),
      study_title: createAttributeCharacteristics(true, false)

    }

  })

})

const hasStudyAttributes = () => ({
  defineStudyAttributeRequirements: () => ({
    attributes: {
      investigation_title_reference: createAttributeCharacteristics(true, false),
      study_title: createAttributeCharacteristics(true, false),
      study_type: createAttributeCharacteristics(true, true),
      digital_object_reference: createAttributeCharacteristics(true, true)

    }

  })

})

const hasDepartmentAttributes = () => ({
  defineDepartmentAttributeRequirements: () => ({
    attributes: {
      organization_id_reference: createAttributeCharacteristics(true, false),
      department_title: createAttributeCharacteristics(true, false)

    }

  })

})

const hasResearchGroupAttributes = () => ({
  defineResearchGroupAttributeRequirements: () => ({
    attributes: {
      department_reference: createAttributeCharacteristics(true, false),
      research_group_title: createAttributeCharacteristics(true, false)

    }

  })

})

const hasDigitalDataRepositoryAttributesCore = () => ({
  defineDigitalDataRepositoryAttributeRequirementsCore: () => ({
    attributes: {
      digital_data_repository_name: createAttributeCharacteristics(true, false)

    }

  })

})

const hasAccessionAttributesCore = () => ({
  defineAccesionAttributeRequirementsCore: () => ({
    attributes: {
      digital_data_repository_reference: createAttributeCharacteristics(true, false),
      accession: createAttributeCharacteristics(true, false)

    }

  })

})

const hasUrlAttributesCore = () => ({
  defineUrlAttributeRequirementsCore: () => ({
    attributes: {
      url: createAttributeCharacteristics(true, false)

    }

  })

})

const hasDigitalResourceAttributes = () => ({
  defineAccesionAttributeRequirements: () => ({
    attributes: {
      digital_object_id: createAttributeCharacteristics(true, false),
      resource_coverage: createAttributeCharacteristics(true, true)

    }

  })

})


const hasCommentOptionalAttributes = () => ({
  defineCommentAttributeRequirements: () => ({
    attributes: {
      comment: createAttributeCharacteristics(false, false)
    }

  })

});

const hasOrganizationAttributes = () => ({
  defineOrganizationAttributeRequirements: () => ({
    attributes: {
      organization_id: createAttributeCharacteristics(true, false),
      organization_title: createAttributeCharacteristics(true, false)
    }

  })

})

const hasOrcidAttributes = () => ({
  defineOrcidAttributeRequirements: () => ({
    attributes: {
      orcid: createAttributeCharacteristics(true, false)
    }

  })

})

const hasPersonAttributes = () => ({
  definePersonAttributeRequirements: () => ({
    attributes: {
      orcid: createAttributeCharacteristics(true, false),
      first_name: createAttributeCharacteristics(true, false),
      last_name: createAttributeCharacteristics(true, false)
    }

  })

})

const hasContactAttributesCore = () => ({
  definContactAttributeRequirementsCore: () => ({
    attributes: {
      person_reference: createAttributeCharacteristics(true, false)

    }

  })

})

const hasContactAttributes = () => ({
  definContactAttributeRequirements: () => ({
    attributes: {
      person_reference: createAttributeCharacteristics(true, false),
      address: createAttributeCharacteristics(true, false),
      email: createAttributeCharacteristics(true, false),
      phone: createAttributeCharacteristics(true, false),
      organization_id_reference: createAttributeCharacteristics(false, false),
      department_reference: createAttributeCharacteristics(false, false),
      research_group_reference: createAttributeCharacteristics(false, false)
    }

  })

})

const hasFundingSourceAttributesCore = () => ({
  defineFundingSourceAttributeRequirementsCore: () => ({
    attributes: {
      funding_organization_id: createAttributeCharacteristics(true, false),
      funding_id: createAttributeCharacteristics(true, false)

    }

  })

})

const hasBiologicalTaxonAttributes = () => ({
  defineBiologicalTaxonAttributeRequirements: () => ({
    attributes: {
      biological_taxon_type: createAttributeCharacteristics(true, false)
    }

  })

})


const hasSpeciesAttributes = () => ({
  defineSpeciesAttributeRequirements: () => ({
    attributes: {
      species: createAttributeCharacteristics(true, false),
      curator_organization_taxonomy_reference: createAttributeCharacteristics(true, false),
      taxonomy_id: createAttributeCharacteristics(true, false)
    }

  })

})



const hasOrganismStrainAttributes = () => ({
  defineOrganismStrainAttributeRequirements: () => ({
    attributes: {
      strain_type: createAttributeCharacteristics(true, false)
    }

  })

});

const hasSourceStrainAttributes = () => ({
  defineSourceStrainAttributeRequirements: () => ({
    attributes: {
      species_reference: createAttributeCharacteristics(true, false),
      source_strain: createAttributeCharacteristics(true, false),
      genotype: createAttributeCharacteristics(false, false),
      description: createAttributeCharacteristics(false, false),
      mutation_method: createAttributeCharacteristics(false, false),
      number_times_outcrossed: createAttributeCharacteristics(false, false),
      mutant_status: createAttributeCharacteristics(false, false),
      strain_type: createAttributeCharacteristics(false, false)
    }

  })

});

const hasNonSourceStrainAttributes = () => ({
  defineNonSourceStrainAttributeRequirements: () => ({
    attributes: {
      non_source_strain: createAttributeCharacteristics(true, false),
      source_strain_reference: createAttributeCharacteristics(true, false)
    }

  })

});

const hasNonSourceStrainReferenceAttributes = () => ({
  defineNonSourceStrainReferenceAttributeRequirements: () => ({
    attributes: {
      non_source_strain_reference: createAttributeCharacteristics(true, false)

    }

  })

});
///
const hasNANSourceStrainAttributes = () => ({
  defineNANSourceStrainAttributeRequirements: () => ({
    attributes: {
      species_reference: createAttributeCharacteristics(false, false),
      source_strain: createAttributeCharacteristics(false, false),
      genotype: createAttributeCharacteristics(false, false),
      description: createAttributeCharacteristics(false, false),
      mutation_method: createAttributeCharacteristics(false, false),
      number_times_outcrossed: createAttributeCharacteristics(false, false),
      mutant_status: createAttributeCharacteristics(false, false),
      strain_type: createAttributeCharacteristics(false, false)
    }

  })

});

const hasNANNonSourceStrainAttributes = () => ({
  defineNANNonSourceStrainAttributeRequirements: () => ({
    attributes: {
      non_source_strain: createAttributeCharacteristics(false, false),
      source_strain_reference: createAttributeCharacteristics(false, false)
    }

  })

});

const hasNANNonSourceStrainReferenceAttributes = () => ({
  defineNANNonSourceStrainReferenceAttributeRequirements: () => ({
    attributes: {
      non_source_strain_reference: createAttributeCharacteristics(false, false)

    }

  })

});
///

const hasOptNonSourceStrainReferenceAttributes = () => ({
  defineOptNonSourceStrainReferenceAttributeRequirements: () => ({
    attributes: {
      non_source_strain_reference: createAttributeCharacteristics(false, false)

    }

  })

});



const hasTaxonomyIdentifierAttributes = () => ({
  defineTaxonomyIdentifierAttributeRequirements: () => ({
    attributes: {
      curator_organization_taxonomy_reference: createAttributeCharacteristics(true, false),
      taxonomy_id: createAttributeCharacteristics(true, false)
      //taxonomic_rank: createAttributeCharacteristics(true,false)

    }

  })

});

const hasCheckTaxonomyIdentifierReferenceAttributes = () => ({
  defineTaxonomyIdentifierReferenceAttributeRequirements: () => ({
    attributes: {
      has_taxonomy_identifier_as_reference: createAttributeCharacteristics(true, false)
    }

  })

});

const hasCheckOtherOrganismGroupingReferenceAttributes = () => ({
  defineCheckOtherOrganismGroupinReferenceAttributeRequirements: () => ({
    attributes: {
      has_other_organism_grouping: createAttributeCharacteristics(true, false)
    }

  })

});

const hasOtherOrganismGroupingReferenceAttributes = () => ({
  defineOtherOrganismGroupingReferenceAttributeRequirements: () => ({
    attributes: {
      other_organism_grouping_reference: createAttributeCharacteristics(true, false)
    }

  })

});


const hasBiologicalTaxonReferenceAttributes = () => ({
  defineBiologicalTaxonReferencReferenceAttributeRequirements: () => ({
    attributes: {
      biological_taxon_as_reference: createAttributeCharacteristics(true, false)
    }

  })

});

const hasStrainReference = () => ({
  defineStrainReferenceAttributeRequirements: () => ({
    attributes: {
      strain_reference: createAttributeCharacteristics(true, false)

    }

  })

});

const hasOptStrainTaxonomyIdentifier = () => ({
  defineOptStrainTaxonomyIdentifierAttributeRequirements: () => ({
    attributes: {
      strain_reference: createAttributeCharacteristics(false, false)

    }

  })

});

const hasStrainTaxonomyIdentifier = () => ({
  defineStrainTaxonomyIdentifierAttributeRequirements: () => ({
    attributes: {
      strain_taxonomy_reference: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSpeciesTaxonomyIdentifier = () => ({
  defineStrainTaxonomyIdentifierAttributeRequirements: () => ({
    attributes: {
      species_reference: createAttributeCharacteristics(true, false)

    }

  })

});

const hasOrganismGroupingAttributes = () => ({
  defineOrganismGroupingAttributeRequirements: () => ({
    attributes: {
      other_organism_grouping: createAttributeCharacteristics(true, false)

    }

  })

});

const hasOptSpeciesTaxonomyIdentifier = () => ({
  defineOptStrainTaxonomyIdentifierAttributeRequirements: () => ({
    attributes: {
      species_reference: createAttributeCharacteristics(false, false)

    }

  })

});

const hasItemAttributesCore = () => ({
  defineItemAttributeRequirementCores: () => ({
    attributes: {
      material_supplier: createAttributeCharacteristics(true, false),
      catalog_number: createAttributeCharacteristics(true, false)
    }

  })

})

const hasItemAttributesOrganismPackage = () => ({
  defineItemAttributeRequirementOrganismPackage: () => ({
    attributes: {
      material_type: createAttributeCharacteristics(true, false)
    }

  })

})

const hasCatalogNumberBaseAttributes = () => ({
  defineCatalogNumberAttributeRequirements: () => ({
    attributes: {
      material_supplier: createAttributeCharacteristics(true, false),
      material_type: createAttributeCharacteristics(true, false),
      catalog_number: createAttributeCharacteristics(true, false)
    }

  })

})

const hasOrganismalEntityAttributes = () => ({
  defineOrganismalEntityAttributeRequirements: () => ({
    attributes: {
      organismal_entity_type: createAttributeCharacteristics(true, false)
      //population_type: createAttributeCharacteristics(true,false)
      //accession_organismal_entity_reference: createAttributeCharacteristics(false,false)
    }

  })

});

const hasCollectionOfOrganismsAttributes = () => ({
  defineCollectionOfOrganismsAttributeRequirements: () => ({
    attributes: {
      type_of_collection_of_organisms: createAttributeCharacteristics(true, false)
      //population_type: createAttributeCharacteristics(true,false)
      //accession_organismal_entity_reference: createAttributeCharacteristics(false,false)
    }

  })

});





const hasStrainAttributes = () => ({
  defineStrainAttributeRequirements: () => ({
    attributes: {
      strain: createAttributeCharacteristics(true, false),
      has_species_taxonomy_id: createAttributeCharacteristics(true, false)
      //curator_organization_taxonomy_reference: createAttributeCharacteristics(true,false),
      //taxonomy_id: createAttributeCharacteristics(true,false)
    }

  })

});

const hasStrainOtherOrganismAttributes = () => ({
  defineStrainOtherOrganismAttributeRequirements: () => ({
    attributes: {
      strain: createAttributeCharacteristics(true, false),
      has_species_taxonomy_id: createAttributeCharacteristics(true, false)
    }

  })

});

const hasStrainTaxonAttributes = () => ({
  defineStrainTaxonAttributeRequirements: () => ({
    attributes: {
      strain: createAttributeCharacteristics(true, false),
      //has_species_taxonomy_id: createAttributeCharacteristics(true,false)
      curator_organization_taxonomy_reference: createAttributeCharacteristics(true, false),
      taxonomy_id: createAttributeCharacteristics(true, false)
    }

  })

});

const hasBreedAttributes = () => ({
  defineBreedAttributeRequirements: () => ({
    attributes: {
      breed: createAttributeCharacteristics(true, false),
      has_species_taxonomy_id: createAttributeCharacteristics(true, false)
    }

  })

});

const hasBreedReferenceAttributes = () => ({
  defineBreedReferenceAttributeRequirements: () => ({
    attributes: {
      breed_reference: createAttributeCharacteristics(true, false)
    }

  })

});

const hasCultivarAttributes = () => ({
  defineCultivarAttributeRequirements: () => ({
    attributes: {
      cultivar: createAttributeCharacteristics(true, false),
      has_species_taxonomy_id: createAttributeCharacteristics(true, false)
    }

  })

});

const hasCultivarReferenceAttributes = () => ({
  defineCultivarReferenceAttributeRequirements: () => ({
    attributes: {
      cultivar_reference: createAttributeCharacteristics(true, false)
    }

  })

});

const hasEcotypeAttributes = () => ({
  defineEcotypeAttributeRequirements: () => ({
    attributes: {
      ecotype: createAttributeCharacteristics(true, false),
      has_species_taxonomy_id: createAttributeCharacteristics(true, false)
    }

  })

});

const hasEcotypeReferenceAttributes = () => ({
  defineEcotypeReferenceAttributeRequirements: () => ({
    attributes: {
      ecotype_reference: createAttributeCharacteristics(true, false)
    }

  })

});

const hasIsolateAttributes = () => ({
  defineIsolateAttributeRequirements: () => ({
    attributes: {
      isolate: createAttributeCharacteristics(true, false),
      has_species_taxonomy_id: createAttributeCharacteristics(true, false)
    }

  })

});

const hasIsolateOtherOrganismAttributes = () => ({
  defineIsolateOtherOrganismAttributeRequirements: () => ({
    attributes: {
      isolate: createAttributeCharacteristics(true, false),
    }

  })

});


const hasIsolateReferenceAttributes = () => ({
  defineIsolateReferenceAttributeRequirements: () => ({
    attributes: {
      isolate_reference: createAttributeCharacteristics(true, false)
    }

  })

});


const hasOptStrainOrganismGroupAttributes = () => ({
  defineOptStrainOrganismGroupAttributeRequirements: () => ({
    attributes: {
      has_strain_taxonomy_id: createAttributeCharacteristics(false, false)
    }

  })

});

const hasStrainTypeAttributes = () => ({
  defineStrainTypeAttributeRequirements: () => ({
    attributes: {
      strain_type: createAttributeCharacteristics(true, false)
    }

  })

});

const hasOptStrainTypeAttributes = () => ({
  defineOptStrainTypeAttributeRequirements: () => ({
    attributes: {
      strain_type: createAttributeCharacteristics(false, false)
    }

  })

});


const hasTaxonomyIDStrainReferenceAttributes = () => ({
  defineTaxonomyIDStrainReferenAttributeRequirements: () => ({
    attributes: {
      taxonomy_id_strain_reference: createAttributeCharacteristics(true, false)
    }

  })

});

const hasOptTaxonomyIDStrainReferenceAttributes = () => ({
  defineOptTaxonomyIDStrainReferenAttributeRequirements: () => ({
    attributes: {
      taxonomy_id_strain_reference: createAttributeCharacteristics(false, false)
    }

  })

});


const hasSubstanceEntityAttributes = () => ({
  defineSubstanceAttributeRequirements: () => ({
    attributes: {
      substance_type: createAttributeCharacteristics(true, false),
      substance_name: createAttributeCharacteristics(true, false),
      chemical_substance_cas: createAttributeCharacteristics(false, false)
    }

  })

});

const hasGrowthEnvironmentEntityAttributes = () => ({
  defineGrowthEnvironmentAttributeRequirements: () => ({
    attributes: {
      planned_growth_configuration: createAttributeCharacteristics(true, false)
    }

  })

});

const hasExternalMaterialCatalogNumberEntityAttributes = () => ({
  defineExternalMaterialCatalogNumberAttributeRequirements: () => ({
    attributes: {
      is_external_catalog_number: createAttributeCharacteristics(true, false)
    }

  })

});

const hasDeviceEntityAttributes = () => ({
  defineDeviceAttributeRequirements: () => ({
    attributes: {
      device_type: createAttributeCharacteristics(true, false)
    }

  })

});

const hasContainerEntityAttributes = () => ({
  defineContainerAttributeRequirements: () => ({
    attributes: {
      container_type: createAttributeCharacteristics(true, false)
    }

  })

});

const hasFermenterEntityAttributes = () => ({
  defineFermenterAttributeRequirements: () => ({
    attributes: {
      volume_amount: createAttributeCharacteristics(false, false, 'volume_unit'),
      volume_unit: createAttributeCharacteristics(false, false, 'volume_amount')
    }

  })

});

const hasComponentEntityAttributes = () => ({
  defineComponentAttributeRequirements: () => ({
    attributes: {
      substance_name: createAttributeCharacteristics(true, false),
      component_cas: createAttributeCharacteristics(false, true, 'component_amount'),
      // dup'd to handle double dependency req'd for conditional formatting:
      component_amount: createAttributeCharacteristics(false, true, 'component_amount_uom'),
      component_amount_uom: createAttributeCharacteristics(false, true, 'component_amount'),
      component_common_name: createAttributeCharacteristics(false, true, 'component_amount'),
      // dup'd to handle double dependency req'd for conditional formatting:
      component_common_name: createAttributeCharacteristics(false, true, 'component_amount_uom')
    }

  })

});

const hasPhEntityAttributes = () => ({
  definePhAttributeRequirements: () => ({
    attributes: {
      pH: createAttributeCharacteristics(false, false)
    }

  })

});

const hasIonicStrengthEntityAttributes = () => ({
  defineIonicStrengthAttributeRequirements: () => ({
    attributes: {
      ionic_strength_amount: createAttributeCharacteristics(false, false, 'ionic_strength_uom'),
      ionic_strength_uom: createAttributeCharacteristics(false, false, 'ionic_strength_amount')
    }

  })

});

/**
 * Composes an object with functions for each component
 * @return {Object} entityObject - The composed description of an entity or object.
*/

// BEGIN CORE
const createPersonEntityObjectCore = () => {
  const personStates = () => Object.assign({}, hasOrcidAttributes());
  var entityObject = createEntityObject('person', 'concept_type', personStates);

  return entityObject;
}



// END CORE

const createOrganizationEntityObjectCore = () => {
  const organizationStates = () => Object.assign({}, hasOrganizationAttributes());
  var entityObject = createEntityObject('organization', 'concept_type', organizationStates);

  return entityObject;
}

const createPersonEntityObject = () => {
  const personStates = () => Object.assign({}, hasPersonAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('person', 'concept_type', personStates);

  return entityObject;
}

const createSpeciesEntityObject = () => {
  const speciesStates = () => Object.assign({}, hasSpeciesAttributes());
  var entityObject = createEntityObject('species', 'biological_taxon_type', speciesStates);

  return entityObject;
}

const createOrganismStrainEntityObject = () => {
  const organismStrainStates = () => Object.assign({}, hasOrganismStrainAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('strain', 'concept_type', organismStrainStates);

  return entityObject;
}
const createNANOrganismStrainEntityObject = () => {
  const nanorganismStrainStates = () => Object.assign({}, hasOrganismStrainAttributes(), hasCommentOptionalAttributes(), hasNANSourceStrainAttributes(), hasNANNonSourceStrainAttributes(), hasNANNonSourceStrainReferenceAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('strain', 'concept_type', nanorganismStrainStates);

  return entityObject;
}

const createSourceStrainEntityObject = () => {
  const organismStrainStates = () => Object.assign({}, hasSourceStrainAttributes());
  var entityObject = createEntityObject('source strain', 'strain_type', organismStrainStates);

  return entityObject;
}

const createNonSourceStrainEntityObject = () => {
  const nonSourceStrainStates = () => Object.assign({}, hasNonSourceStrainAttributes());
  var entityObject = createEntityObject('non-source strain', 'strain_type', nonSourceStrainStates);

  return entityObject;
}

const createTaxonomyIdentifierEntityObject = () => {
  const taxonomyIdentifierStates = () => Object.assign({}, hasTaxonomyIdentifierAttributes());
  var entityObject = createEntityObject('TRUE', 'has_taxonomy_identifier', taxonomyIdentifierStates);

  return entityObject;
}

const createNANTaxonomyIdentifierEntityObject = () => {
  const taxonomyIdentifierStates = () => Object.assign({}, hasTaxonomyIdentifierAttributes(), hasCommentOptionalAttributes(),
    hasOptSpeciesTaxonomyIdentifier(), hasOptStrainTaxonomyIdentifier(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('taxonomy identifier', 'concept_type', taxonomyIdentifierStates);

  return entityObject;
}

const createStrainTaxonomyIdentifierEntityObject = () => {
  const strainTaxonomyIdentifierStates = () => Object.assign({}, hasStrainReference());
  var entityObject = createEntityObject('strain', 'taxonomic_rank', strainTaxonomyIdentifierStates);

  return entityObject;
}


const createSpeciesTaxonomyIdentifierEntityObject = () => {
  const speciesTaxonomyIdentifierStates = () => Object.assign({}, hasSpeciesTaxonomyIdentifier());
  var entityObject = createEntityObject('species', 'taxonomic_rank', speciesTaxonomyIdentifierStates);

  return entityObject;
}

const createOtherOrganismGroupingSpeciesTaxonomyIdentifierEntityObject = () => {
  const speciesOtherOrganismGroupingTaxonomyIdentifierStates = () => Object.assign({}, hasSpeciesTaxonomyIdentifier());
  var entityObject = createEntityObject('TRUE', 'has_species_taxonomy_id', speciesOtherOrganismGroupingTaxonomyIdentifierStates);

  return entityObject;
}

const createItemEntityObjectCore = () => {
  const itemStatesCore = () => Object.assign({}, hasItemAttributesCore());
  var entityObject = createEntityObject('item', 'concept_type', itemStatesCore);

  return entityObject;
}

const createItemEntityObjectOrganismPackage = () => {
  const itemStatesOrganismPackage = () => Object.assign({}, hasItemAttributesOrganismPackage());
  var entityObject = createEntityObject('item', 'concept_type', itemStatesOrganismPackage);

  return entityObject;
}

const createBiologicalTaxonObject = () => {
  const biologicalTaxonEntityStates = () => Object.assign({}, hasBiologicalTaxonAttributes());
  var entityObject = createEntityObject('biological taxon', 'concept_type', biologicalTaxonEntityStates);

  return entityObject;
}

const createOrganismGroupingObject = () => {
  const organismGroupingEntityStates = () => Object.assign({}, hasOrganismGroupingAttributes());
  var entityObject = createEntityObject('other organism groupings', 'concept_type', organismGroupingEntityStates);

  return entityObject;
}


const createCatalogNumberEntityObject = () => {
  const catalogNumberStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('catalog number', 'concept_type', catalogNumberStates);

  return entityObject;
}

const createOrganismalEntityObject = () => {
  const organismalEntityStates = () => Object.assign({}, hasOrganismalEntityAttributes(), hasCheckTaxonomyIdentifierReferenceAttributes(), hasCheckOtherOrganismGroupingReferenceAttributes());
  var entityObject = createEntityObject('organismal entity', 'material_type', organismalEntityStates);

  return entityObject;
}

const createOrganismalEntityWithOtherOrganismGroupingObject = () => {
  const organismalEntityStates = () => Object.assign({}, hasOtherOrganismGroupingReferenceAttributes());
  var entityObject = createEntityObject('TRUE', 'has_other_organism_grouping', organismalEntityStates);

  return entityObject;
}



const createBiologicalTaxonReferenceObject = () => {
  const biologicalTaxonStates = () => Object.assign({}, hasBiologicalTaxonReferenceAttributes());
  var entityObject = createEntityObject(true, 'has_taxonomy_identifier_as_reference', biologicalTaxonStates);

  return entityObject;
}

const createStrainEntityObject = () => {
  const strainEntityStates = () => Object.assign({}, hasStrainTaxonAttributes());
  var entityObject = createEntityObject('strain', 'biological_taxon_type', strainEntityStates);

  return entityObject;
}

const createStrainOtherOrgEntityObject = () => {
  const strainEntityStates = () => Object.assign({}, hasStrainAttributes());
  var entityObject = createEntityObject('strain', 'other_organism_grouping', strainEntityStates);

  return entityObject;
}

const createBreedEntityObject = () => {
  const breedEntityStates = () => Object.assign({}, hasBreedAttributes());
  var entityObject = createEntityObject('breed', 'other_organism_grouping', breedEntityStates);

  return entityObject;
}

const createPopulationWithBreedEntityObject = () => {
  const breedPopulationEntityStates = () => Object.assign({}, hasBreedReferenceAttributes());
  var entityObject = createEntityObject('breed', 'other_organism_grouping', breedPopulationEntityStates);

  return entityObject;
}

const createCultivarEntityObject = () => {
  const cultivarEntityStates = () => Object.assign({}, hasCultivarAttributes());
  var entityObject = createEntityObject('cultivar', 'other_organism_grouping', cultivarEntityStates);

  return entityObject;
}

const createPopulationWithCultivarEntityObject = () => {
  const cultivarPopulationEntityStates = () => Object.assign({}, hasCultivarReferenceAttributes());
  var entityObject = createEntityObject('cultivar', 'other_organism_grouping_reference', cultivarPopulationEntityStates);

  return entityObject;
}

const createIsolateEntityObject = () => {
  const isolateEntityStates = () => Object.assign({}, hasIsolateAttributes());
  var entityObject = createEntityObject('isolate', 'other_organism_grouping', isolateEntityStates);

  return entityObject;
}

const createPopulationWithIsolateEntityObject = () => {
  const isolatePopulationEntityStates = () => Object.assign({}, hasIsolateReferenceAttributes());
  var entityObject = createEntityObject('isolate', 'other_organism_grouping_reference', isolatePopulationEntityStates);

  return entityObject;
}

const createPopulationWithStrainEntityObject = () => {
  const strainPopulationEntityStates = () => Object.assign({}, hasStrainAttributes());
  var entityObject = createEntityObject('strain', 'other_organism_grouping_reference', strainPopulationEntityStates);

  return entityObject;
}

const createEcotypeEntityObject = () => {
  const ecotypeEntityStates = () => Object.assign({}, hasEcotypeAttributes());
  var entityObject = createEntityObject('ecotype', 'other_organism_grouping', ecotypeEntityStates);

  return entityObject;
}

const createPopulationWithEcotypeEntityObject = () => {
  const ecotypePopulationEntityStates = () => Object.assign({}, hasEcotypeReferenceAttributes());
  var entityObject = createEntityObject('ecotype', 'other_organism_grouping_reference', ecotypePopulationEntityStates);

  return entityObject;
}

const createOrganismalEntityStrainNoTaxnomyIDObject = () => {
  const organismalEntityStates = () => Object.assign({}, hasStrainTypeAttributes());
  var entityObject = createEntityObject('false', 'has_strain_taxonomy_id', organismalEntityStates);

  return entityObject;
}

const createOrganismalEntityNonSourceStrainObject = () => {
  const organismalEntityStates = () => Object.assign({}, hasNonSourceStrainReferenceAttributes());
  var entityObject = createEntityObject('non-source strain', 'strain_type', organismalEntityStates);

  return entityObject;
}

const createCollectionOfOrganismsObject = () => {
  const collectionOfOrganismsEntityStates = () => Object.assign({}, hasCollectionOfOrganismsAttributes());
  var entityObject = createEntityObject('collection of organisms', 'organismal_entity_type', collectionOfOrganismsEntityStates);

  return entityObject;
}


const createTaxonomyIDStrainReferenceEntityObject = () => {
  const taxonomyIDStrainReferenceEntityStates = () => Object.assign({}, hasStrainTaxonomyIdentifier());
  var entityObject = createEntityObject('strain', 'biological_taxon_as_reference', taxonomyIDStrainReferenceEntityStates);

  return entityObject;
}

const createTaxonomyIDSpeciesReferenceEntityObject = () => {
  const taxonomyIDSpeciesReferenceEntityStates = () => Object.assign({}, hasSpeciesTaxonomyIdentifier());
  var entityObject = createEntityObject('species', 'biological_taxon_as_reference', taxonomyIDSpeciesReferenceEntityStates);

  return entityObject;
}


const createNoTaxonomyIDStrainReferenceEntityObject = () => {
  const noTaxonomyIDStrainReferenceEntityStates = () => Object.assign({}, hasStrainReference());
  var entityObject = createEntityObject('false', 'has_strain_taxonomy_id', noTaxonomyIDStrainReferenceEntityStates);

  return entityObject;
}

const createSubstanceEntityObject = () => {
  const substanceStates = () => Object.assign({}, hasSubstanceEntityAttributes());
  var entityObject = createEntityObject('substance', 'material_type', substanceStates);

  return entityObject;
}

const createPureSubstanceEntityObject = () => {
  const pureSubstanceStates = () => Object.assign({}, hasSubstanceEntityAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('pure substance', 'substance_type', pureSubstanceStates);

  return entityObject;
}

const createCultureMediumEntityObject = () => {
  const cultureMediumStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasSubstanceEntityAttributes(), hasComponentEntityAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('culture medium', 'substance_type', cultureMediumStates);

  return entityObject;
}

const createSolutionEntityObject = () => {
  const solutionStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasSubstanceEntityAttributes(), hasComponentEntityAttributes(), hasPhEntityAttributes(), hasIonicStrengthEntityAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('chemical solution', 'substance_type', solutionStates);

  return entityObject;
}

const createGrowthEnvironmentEntityObject = () => {
  const growthEnvironmentStates = () => Object.assign({}, hasGrowthEnvironmentEntityAttributes());
  var entityObject = createEntityObject('growth environment', 'material_type', growthEnvironmentStates);

  return entityObject;
}

const createNANGrowthEnvironmentEntityObject = () => {
  const growthEnvironmentStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasGrowthEnvironmentEntityAttributes());
  var entityObject = createEntityObject('growth environment', 'material_type', growthEnvironmentStates);

  return entityObject;
}

const createExternalMaterialCatalogNumberEntityObject = () => {
  const externalMaterialCatalogNumberStates = () => Object.assign({}, hasExternalMaterialCatalogNumberEntityAttributes());
  var entityObject = createEntityObject('in-house', 'material_supplier', externalMaterialCatalogNumberStates);

  return entityObject;
}

const createDeviceEntityObject = () => {
  const deviceStates = () => Object.assign({}, hasDeviceEntityAttributes());
  var entityObject = createEntityObject('device', 'material_type', deviceStates);

  return entityObject;
}

const createContainerEntityObject = () => {
  const containerStates = () => Object.assign({}, hasContainerEntityAttributes());
  var entityObject = createEntityObject('container', 'device_type', containerStates);

  return entityObject;
}

const createNANContainerEntityObject = () => {
  const nancontainerStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasDeviceEntityAttributes(), hasContainerEntityAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('container', 'device_type', nancontainerStates);

  return entityObject;
}

const createFermenterEntityObject = () => {
  const fermenterStates = () => Object.assign({}, hasFermenterEntityAttributes());
  var entityObject = createEntityObject('fermenter', 'container_type', fermenterStates);

  return entityObject;
}

const createNANFermenterEntityObject = () => {
  const nanfermenterStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasDeviceEntityAttributes(), hasContainerEntityAttributes(), hasFermenterEntityAttributes());
  var entityObject = createEntityObject('fermenter', 'container_type', nanfermenterStates);

  return entityObject;
}

const createNANAutoclaveEntityObject = () => {
  const nanautoclaveStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasDeviceEntityAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('autoclave', 'device_type', nanautoclaveStates);

  return entityObject;
}

const createNANLyophilizerEntityObject = () => {
  const nanLyophilizerStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasDeviceEntityAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('lyophilizer', 'device_type', nanLyophilizerStates);

  return entityObject;
}

const createNANCentrifugeEntityObject = () => {
  const nanCentrifugeStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasDeviceEntityAttributes());
  var entityObject = createEntityObject('centrifuge', 'device_type', nanCentrifugeStates);

  return entityObject;
}

const createNANHomogenizerObject = () => {
  const nanHomogenizerStates = () => Object.assign({}, hasCatalogNumberBaseAttributes(), hasDeviceEntityAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('homogenizer', 'device_type', nanHomogenizerStates);

  return entityObject;
}

const createInvestigationEntityObjectCore = () => {
  const investigationCoreStates = () => Object.assign({}, hasInvestigationAttributesCore());
  var entityObject = createEntityObject('investigation', 'concept_type', investigationCoreStates);

  return entityObject;
}

const createInvestigationEntityObject = () => {
  const investigationStates = () => Object.assign({}, hasInvestigationAttributes(), hasInvestigationAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('investigation', 'concept_type', investigationStates);

  return entityObject;
}

const createStudyEntityObjectCore = () => {
  const studyStatesCore = () => Object.assign({}, hasStudyAttributesCore());
  var entityObject = createEntityObject('study', 'concept_type', studyStatesCore);

  return entityObject;
}

const createStudyEntityObject = () => {
  const studyStates = () => Object.assign({}, hasStudyAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('study', 'concept_type', studyStates);

  return entityObject;
}


const createDepartmentEntityObject = () => {
  const departmentStates = () => Object.assign({}, hasDepartmentAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('department', 'concept_type', departmentStates);

  return entityObject;
}

const createResearchGroupEntityObject = () => {
  const researchGroupStates = () => Object.assign({}, hasResearchGroupAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('research group', 'concept_type', researchGroupStates);

  return entityObject;
}

const createContactEntityObjectCore = () => {
  const contactStatesCore = () => Object.assign({}, hasContactAttributesCore());
  var entityObject = createEntityObject('contact', 'concept_type', contactStatesCore);

  return entityObject;
}

const createContactEntityObject = () => {
  const contactStates = () => Object.assign({}, hasContactAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('contact', 'concept_type', contactStates);

  return entityObject;
}

const createFundingSourceEntityObjectCore = () => {
  const fundingSourceStatesCore = () => Object.assign({}, hasFundingSourceAttributesCore());
  var entityObject = createEntityObject('funding source', 'concept_type', fundingSourceStatesCore);

  return entityObject;
}

const createDigitalDataRepositoryEntityObjectCore = () => {
  const digitalDataRepositoryStatesCore = () => Object.assign({}, hasDigitalDataRepositoryAttributesCore());
  var entityObject = createEntityObject('digital data repository', 'concept_type', digitalDataRepositoryStatesCore);

  return entityObject;
}

const createDigitalResourceEntityObject = () => {
  const digitalResourceStates = () => Object.assign({}, hasDigitalResourceAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('digital resource', 'concept_type', digitalResourceStates);

  return entityObject;
}

const createAccessionEntityObjectCore = () => {
  const accessionStatesCore = () => Object.assign({}, hasAccessionAttributesCore());
  var entityObject = createEntityObject('accession', 'concept_type', accessionStatesCore);

  return entityObject;
}

const createUrlEntityObjectCore = () => {
  const urlStatesCore = () => Object.assign({}, hasUrlAttributesCore());
  var entityObject = createEntityObject('url', 'concept_type', urlStatesCore);

  return entityObject;
}

