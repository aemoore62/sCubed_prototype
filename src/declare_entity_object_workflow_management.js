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
 * @fileoverview Functions that compose objects that are affiliated with workflow entities.
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

const hasReportingWorkflowAttributes = () => ({
  defineReportingAttributeRequirements: () => ({
    attributes: {
      workflow_name: createAttributeCharacteristics(true, false),
      process_type: createAttributeCharacteristics(true, true),
      workflow_sequence_number: createAttributeCharacteristics(true, true)

    }

  })

});

const hasProcessSpecificationAttributes = () => ({
  defineProcessSpecificationAttributeRequirements: () => ({
    attributes: {
      process_specification_name: createAttributeCharacteristics(true, false),
      workflow_name_reference: createAttributeCharacteristics(true, false),
      process_type_reference: createAttributeCharacteristics(true, true),
      workflow_sequence_number: createAttributeCharacteristics(true, true)
      //process_id_reference: createAttributeCharacteristics(true,true)

    }

  })

});

const hasProvenanceSummaryAttributes = () => ({
  defineProvenanceSummaryAttributeRequirements: () => ({
    attributes: {
      summary_of_provenance_name: createAttributeCharacteristics(true, false),
      workflow_name_reference: createAttributeCharacteristics(true, true),
      process_specification_reference: createAttributeCharacteristics(false, false),
      workflow_sequence_number: createAttributeCharacteristics(true, true)

    }

  })

});

const hasWeightMeasurementPlanProcAttributes = () => ({
  defineWeightMeasurementPlanProcRequirements: () => ({
    attributes: {
      weight_measurement_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasStoragePlanProcAttributes = () => ({
  defineStoragePlanProcRequirements: () => ({
    attributes: {
      storage_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasResuspensionPlanProcAttributes = () => ({
  defineResuspensionPlanProcRequirements: () => ({
    attributes: {
      resuspension_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasEstablishingCultureEnvrionementPlanProcAttributes = () => ({
  defineEstablishingCultureEnvrionementPlanProcRequirements: () => ({
    attributes: {
      establishing_culture_growth_environment_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSeedPlanProcAttributes = () => ({
  defineSeedPlanProcRequirements: () => ({
    attributes: {
      seed_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasPassagePlanProcAttributes = () => ({
  definePassagePlanProcRequirements: () => ({
    attributes: {
      passage_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasFermentationPlanProcAttributes = () => ({
  defineFermentationPlanProcRequirements: () => ({
    attributes: {
      fermentation_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasAliquotingPlanProcAttributes = () => ({
  defineAliquotingPlanProcRequirements: () => ({
    attributes: {
      aliquoting_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasSnapFreezePlanProcAttributes = () => ({
  defineSnapFreezePlanProcRequirements: () => ({
    attributes: {
      snap_freeze_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasWashPlanProcAttributes = () => ({
  defineWashPlanProcRequirements: () => ({
    attributes: {
      wash_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasSpecimenPoolingPlanProcAttributes = () => ({
  defineSpecimenPoolingPlanProcRequirements: () => ({
    attributes: {
      specimen_pooling_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasCountingPlanProcAttributes = () => ({
  defineCountingPlanProcRequirements: () => ({
    attributes: {
      counting_id: createAttributeCharacteristics(true, true)

    }

  })

});


const hasFreezeDryingPlanProcAttributes = () => ({
  defineFreezeDryingPlanProcRequirements: () => ({
    attributes: {
      freeze_drying_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasSubstanceCombinationPlanProcAttributes = () => ({
  defineSubstanceCombinationPlanProcRequirements: () => ({
    attributes: {
      substance_combination_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasOpticalDensityPlanProcAttributes = () => ({
  defineOpticalDensityPlanProcRequirements: () => ({
    attributes: {
      optical_density_measurement_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasOpenPlanProcAttributes = () => ({
  defineOpenPlanProcRequirements: () => ({
    attributes: {
      open_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasVolumeMeasurementPlanProcAttributes = () => ({
  defineVolumeMeasurementPlanProcRequirements: () => ({
    attributes: {
      volume_measurement_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasTransferPlanProcAttributes = () => ({
  defineTransferPlanProcRequirements: () => ({
    attributes: {
      transfer_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasSpotBleachPlanProcAttributes = () => ({
  defineSpotBleachPlanProcRequirements: () => ({
    attributes: {
      spot_bleach_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasMicrobialCultureProcedurePlanProcAttributes = () => ({
  defineMicrobialCultureProcedurePlanProcRequirements: () => ({
    attributes: {
      microbial_culture_procedure_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasAutoclavePlanProcAttributes = () => ({
  defineAutoclavePlanProcRequirements: () => ({
    attributes: {
      autoclave_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasCentrifugationPlanProcAttributes = () => ({
  defineCentrifugationPlanProcRequirements: () => ({
    attributes: {
      centrifugation_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasBeadBasedHomogenizationPlanProcAttributes = () => ({
  defineBeadBasedHomogenizationPlanProcRequirements: () => ({
    attributes: {
      bead_based_homogenization_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasSolventPreparationPlanProcAttributes = () => ({
  defineSolventPreparationPlanProcRequirements: () => ({
    attributes: {
      solvent_preparation_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasSolventExtractionPlanProcAttributes = () => ({
  defineSolventExtractionPlanProcRequirements: () => ({
    attributes: {
      solvent_extraction_id: createAttributeCharacteristics(true, true)

    }

  })

});

const hasHarvestCultureGrowthEnvironmentPlanProcAttributes = () => ({
  defineHarvestCultureGrowthEnvironmentPlanProcRequirements: () => ({
    attributes: {
      harvest_culture_growth_environment_id: createAttributeCharacteristics(true, true)

    }

  })

});







/**
 * Composes an object with functions for each component
 * @return {Object} entityObject - The composed description of an entity or object.
*/

const createReportingWorkflowEntityObject = () => {
  const reportingWorkflowStates = () => Object.assign({}, hasReportingWorkflowAttributes());
  var entityObject = createEntityObject('reporting workflow', 'workflow_entity_type', reportingWorkflowStates);

  return entityObject;
}

const createProcessSpecificationEntityObject = () => {
  const processSpecificationStates = () => Object.assign({}, hasProcessSpecificationAttributes());
  var entityObject = createEntityObject('process specification', 'workflow_entity_type', processSpecificationStates);

  return entityObject;
}

const createProvenanceSummaryEntityObject = () => {
  const provenanceSummaryStates = () => Object.assign({}, hasProvenanceSummaryAttributes());
  var entityObject = createEntityObject('summary of provenance', 'workflow_entity_type', provenanceSummaryStates);

  return entityObject;
}

const createWeightMeasurementEntityObject = () => {
  const weightMeasurementStates = () => Object.assign({}, hasWeightMeasurementPlanProcAttributes());
  var entityObject = createEntityObject('weight measurement', 'process_type_reference', weightMeasurementStates);

  return entityObject;
}

const createStorageEntityObject = () => {
  const storageStates = () => Object.assign({}, hasStoragePlanProcAttributes());
  var entityObject = createEntityObject('storage', 'process_type_reference', storageStates);

  return entityObject;
}

const createResuspensionEntityObject = () => {
  const resuspensionStates = () => Object.assign({}, hasResuspensionPlanProcAttributes());
  var entityObject = createEntityObject('resuspension', 'process_type_reference', resuspensionStates);

  return entityObject;
}

const createEstablishingCultureEnvrionementEntityObject = () => {
  const establishingCultureEnvrionementStates = () => Object.assign({}, hasEstablishingCultureEnvrionementPlanProcAttributes());
  var entityObject = createEntityObject('establishing culture growth environment', 'process_type_reference', establishingCultureEnvrionementStates);

  return entityObject;
}

const createSeedEntityObject = () => {
  const seedStates = () => Object.assign({}, hasSeedPlanProcAttributes());
  var entityObject = createEntityObject('seed', 'process_type_reference', seedStates);

  return entityObject;
}

const createPassageEntityObject = () => {
  const passageStates = () => Object.assign({}, hasPassagePlanProcAttributes());
  var entityObject = createEntityObject('passage', 'process_type_reference', passageStates);

  return entityObject;
}

const createFermentationEntityObject = () => {
  const fermentationStates = () => Object.assign({}, hasFermentationPlanProcAttributes());
  var entityObject = createEntityObject('fermentation', 'process_type_reference', fermentationStates);

  return entityObject;
}

const createOpticalDensityMeasurementEntityObject = () => {
  const opticalDensityMeasurementStates = () => Object.assign({}, hasOpticalDensityPlanProcAttributes());
  var entityObject = createEntityObject('optical density measurement', 'process_type_reference', opticalDensityMeasurementStates);

  return entityObject;
}

const createAliquotingEntityObject = () => {
  const aliquotingStates = () => Object.assign({}, hasAliquotingPlanProcAttributes());
  var entityObject = createEntityObject('aliquoting', 'process_type_reference', aliquotingStates);

  return entityObject;
}

const createSnapFreezeEntityObject = () => {
  const snapFreezeStates = () => Object.assign({}, hasSnapFreezePlanProcAttributes());
  var entityObject = createEntityObject('snap freeze', 'process_type_reference', snapFreezeStates);

  return entityObject;
}

const createWasheEntityObject = () => {
  const washStates = () => Object.assign({}, hasWashPlanProcAttributes());
  var entityObject = createEntityObject('wash', 'process_type_reference', washStates);

  return entityObject;
}

const createSpecimenPoolingEntityObject = () => {
  const specimenPoolingStates = () => Object.assign({}, hasSpecimenPoolingPlanProcAttributes());
  var entityObject = createEntityObject('specimen pooling', 'process_type_reference', specimenPoolingStates);

  return entityObject;
}

const createCountingEntityObject = () => {
  const countingStates = () => Object.assign({}, hasCountingPlanProcAttributes());
  var entityObject = createEntityObject('counting', 'process_type_reference', countingStates);

  return entityObject;
}

const createFreezeDryingEntityObject = () => {
  const freezeDryingStates = () => Object.assign({}, hasFreezeDryingPlanProcAttributes());
  var entityObject = createEntityObject('Freeze-Drying', 'process_type_reference', freezeDryingStates);

  return entityObject;
}

const createSubstanceCombinationEntityObject = () => {
  const substanceCombinationStates = () => Object.assign({}, hasSubstanceCombinationPlanProcAttributes());
  var entityObject = createEntityObject('substance combination', 'process_type_reference', substanceCombinationStates);

  return entityObject;
}

const createOpenEntityObject = () => {
  const openStates = () => Object.assign({}, hasOpenPlanProcAttributes());
  var entityObject = createEntityObject('open', 'process_type_reference', openStates);

  return entityObject;
}

const createVolumeMeasurementEntityObject = () => {
  const volumeMeasurementStates = () => Object.assign({}, hasVolumeMeasurementPlanProcAttributes());
  var entityObject = createEntityObject('volume measurement', 'process_type_reference', volumeMeasurementStates);

  return entityObject;
}

const createTransferEntityObject = () => {
  const transferStates = () => Object.assign({}, hasTransferPlanProcAttributes());
  var entityObject = createEntityObject('transfer', 'process_type_reference', transferStates);

  return entityObject;
}

const createSpotBleachEntityObject = () => {
  const spotBleachStates = () => Object.assign({}, hasSpotBleachPlanProcAttributes());
  var entityObject = createEntityObject('spot bleach', 'process_type_reference', spotBleachStates);

  return entityObject;
}

const createMicrobialCultureProcedureBleachEntityObject = () => {
  const microbialCultureProcedureStates = () => Object.assign({}, hasMicrobialCultureProcedurePlanProcAttributes());
  var entityObject = createEntityObject('microbial culture procedure', 'process_type_reference', microbialCultureProcedureStates);

  return entityObject;
}

const createAutoclaveEntityObject = () => {
  const autoclaveStates = () => Object.assign({}, hasAutoclavePlanProcAttributes());
  var entityObject = createEntityObject('autoclave', 'process_type_reference', autoclaveStates);

  return entityObject;
}

const createCentrifugationEntityObject = () => {
  const centrifugationStates = () => Object.assign({}, hasCentrifugationPlanProcAttributes());
  var entityObject = createEntityObject('centrifugation', 'process_type_reference', centrifugationStates);

  return entityObject;
}

const createBeadBasedHomogenizationEntityObject = () => {
  const beadBasedHomogenizationStates = () => Object.assign({}, hasBeadBasedHomogenizationPlanProcAttributes());
  var entityObject = createEntityObject('bead-based homogenization', 'process_type_reference', beadBasedHomogenizationStates);

  return entityObject;
}

const createSolventPreparationEntityObject = () => {
  const solventPreparationStates = () => Object.assign({}, hasSolventPreparationPlanProcAttributes());
  var entityObject = createEntityObject('solvent preparation', 'process_type_reference', solventPreparationStates);

  return entityObject;
}

const createSolventExtractionEntityObject = () => {
  const solventExtractionStates = () => Object.assign({}, hasSolventExtractionPlanProcAttributes());
  var entityObject = createEntityObject('solvent extraction', 'process_type_reference', solventExtractionStates);

  return entityObject;
}

const createHarvestCultureGrowthEnvironmentEntityObject = () => {
  const harvestCultureGrowthEnvironmentStates = () => Object.assign({}, hasHarvestCultureGrowthEnvironmentPlanProcAttributes());
  var entityObject = createEntityObject('harvest culture growth environment', 'process_type_reference', harvestCultureGrowthEnvironmentStates);

  return entityObject;
}