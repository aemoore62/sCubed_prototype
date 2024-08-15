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
 * @fileoverview Function to compose objects that are that are affiliated with executed processes.
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

const hasProcessExecutionAttributes = () => ({
  defineProcessExecutionAttributeRequirements: () => ({
    attributes: {
      process_type: createAttributeCharacteristics(true, false),
      person_id: createAttributeCharacteristics(true, true),
      start_date: createAttributeCharacteristics(true, false),
      start_time: createAttributeCharacteristics(false, false),
      end_date: createAttributeCharacteristics(false, false),
      end_time: createAttributeCharacteristics(false, false)

    }

  })

});

const hasCommentProcessExecutionAttributes = () => ({
  defineCommentProcessExecutionAttributeRequirements: () => ({
    attributes: {
      comment: createAttributeCharacteristics(false, false)

    }

  })

});

const hasPassageProcessExecutionAttributes = () => ({
  definePassageProcessExecutionAttributeRequirements: () => ({
    attributes: {
      passage_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasOpenProcessExecutionAttributes = () => ({
  defineOpenProcessExecutionAttributeRequirements: () => ({
    attributes: {
      open_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasMicrobialCultureProcProcessExecutionAttributes = () => ({
  defineMicrobialCultureProcProcessExecutionAttributeRequirements: () => ({
    attributes: {
      microbial_culture_procedure_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasOpticalDensityProcessExecutionAttributes = () => ({
  defineOpticalDensityProcessExecutionAttributeRequirements: () => ({
    attributes: {
      optical_density_measurement_id: createAttributeCharacteristics(true, false),
      optical_density_result: createAttributeCharacteristics(true, false),
      optical_density_uom: createAttributeCharacteristics(true, false)

    }

  })

});

const hasContaminationMeasurementProcessExecutionAttributes = () => ({
  defineContaminationMeasurementProcessExecutionAttributeRequirements: () => ({
    attributes: {
      contamination_measurement_id: createAttributeCharacteristics(true, false),
      contamination_result: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSeedProcessExecutionAttributes = () => ({
  defineSeedProcessExecutionAttributeRequirements: () => ({
    attributes: {
      seed_id: createAttributeCharacteristics(true, false),


    }

  })

});

const hasEstablishingGrowthEnvironmentProcessExecutionAttributes = () => ({
  defineEstablishingGrowthEnvironmentProcessExecutionAttributeRequirements: () => ({
    attributes: {
      establishing_culture_growth_environment_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasFermentationProcessExecutionAttributes = () => ({
  defineFermentationProcessExecutionAttributeRequirements: () => ({
    attributes: {
      fermentation_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasHarvestProcessExecutionAttributes = () => ({
  defineHarvestProcessExecutionAttributeRequirements: () => ({
    attributes: {
      harvest_culture_growth_environment_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasWeightMeasurementProcessExecutionAttributes = () => ({
  defineWeightMeasurementProcessExecutionAttributeRequirements: () => ({
    attributes: {
      weight_measurement_id: createAttributeCharacteristics(true, false),
      weight_result_amount: createAttributeCharacteristics(true, false),
      weight_result_uom: createAttributeCharacteristics(true, false),
      weight_result_type: createAttributeCharacteristics(true, false)

    }

  })

});

const hasVolumeMeasurementProcessExecutionAttributes = () => ({
  defineVolumeMeasurementProcessExecutionAttributeRequirements: () => ({
    attributes: {
      volume_measurement_id: createAttributeCharacteristics(true, false),
      volume_result_amount: createAttributeCharacteristics(true, false),
      volume_result_uom: createAttributeCharacteristics(true, false),
      volume_result_type: createAttributeCharacteristics(true, false)

    }

  })

});

const hasResuspensionProcessExecutionAttributes = () => ({
  defineResuspensionProcessExecutionAttributeRequirements: () => ({
    attributes: {
      resuspension_id: createAttributeCharacteristics(true, false),
      solution_volume_amount: createAttributeCharacteristics(true, false),
      solution_volume_uom: createAttributeCharacteristics(true, false)

    }

  })

});

const hasAliquottingProcessExecutionAttributes = () => ({
  defineAliquottingProcessExecutionAttributeRequirements: () => ({
    attributes: {
      aliquoting_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSnapFreezeProcessExecutionAttributes = () => ({
  defineSnapFreezeProcessExecutionAttributeRequirements: () => ({
    attributes: {
      snap_freeze_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasStorageProcessExecutionAttributes = () => ({
  defineStorageProcessExecutionAttributeRequirements: () => ({
    attributes: {
      storage_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSamplePoolingProcessExecutionAttributes = () => ({
  defineSamplePoolingProcessExecutionAttributeRequirements: () => ({
    attributes: {
      sample_pooling_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSpotBleachProcessExecutionAttributes = () => ({
  defineSpotBleachProcessExecutionAttributeRequirements: () => ({
    attributes: {
      spot_bleach_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasWashProcessExecutionAttributes = () => ({
  defineWashProcessExecutionAttributeRequirements: () => ({
    attributes: {
      wash_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasCountingProcessExecutionAttributes = () => ({
  defineCountingProcessExecutionAttributeRequirements: () => ({
    attributes: {
      counting_id: createAttributeCharacteristics(true, false),
      count_result_amount: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSolventExtractionProcessExecutionAttributes = () => ({
  defineSolventExtractionProcessExecutionAttributeRequirements: () => ({
    attributes: {
      solvent_extraction_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSolventPreparationProcessExecutionAttributes = () => ({
  defineSolventPreparationProcessExecutionAttributeRequirements: () => ({
    attributes: {
      solvent_preparation_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasCentrifugationProcessExecutionAttributes = () => ({
  defineCentrifugationProcessExecutionAttributeRequirements: () => ({
    attributes: {
      centrifugation_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasFreezeDryingProcessExecutionAttributes = () => ({
  defineFreezeDryingProcessExecutionAttributeRequirements: () => ({
    attributes: {
      freeze_drying_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasHomogenizationProcessExecutionAttributes = () => ({
  defineHomogenizationProcessExecutionAttributeRequirements: () => ({
    attributes: {
      bead_based_homogenization_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasTransferProcessExecutionAttributes = () => ({
  defineTransferProcessExecutionAttributeRequirements: () => ({
    attributes: {
      transfer_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSpecimenPoolingProcessExecutionAttributes = () => ({
  defineSpecimenPoolingProcessExecutionAttributeRequirements: () => ({
    attributes: {
      specimen_pooling_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSubstanceCombinationProcessExecutionAttributes = () => ({
  defineSubstanceCombinationProcessExecutionAttributeRequirements: () => ({
    attributes: {
      substance_combination_id: createAttributeCharacteristics(true, false)

    }

  })

});


const hasOrganismalEntityInputAttributes = () => ({
  defineOrganismalEntityInputAttributeRequirements: () => ({
    attributes: {
      input_organismal_entity_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasManySubstanceInputAttributes = () => ({
  defineSubstanceInputAttributeRequirements: () => ({
    attributes: {
      input_substance_lot_number: createAttributeCharacteristics(true, true)

    }

  })

});

const hasMediaInputAttributes = () => ({
  defineMediaInputAttributeRequirements: () => ({
    attributes: {
      input_media_lot_number: createAttributeCharacteristics(true, true)

    }

  })

});

const hasManyOrganismalEntityInputAttributes = () => ({
  defineManyOrganismalEntityInputAttributeRequirements: () => ({
    attributes: {
      input_organismal_entity_lot_number: createAttributeCharacteristics(true, true)

    }

  })

});

const hasOrganismalEntityOutputAttributes = () => ({
  defineOrganismalEntityOutputAttributeRequirements: () => ({
    attributes: {
      output_organismal_entity_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});


const hasPooledSpecimenOutputAttributes = () => ({
  defineOrganismalEntityOutputAttributeRequirements: () => ({
    attributes: {
      output_pooled_specimen_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasManyOrganismalEntityOutputAttributes = () => ({
  defineManyOrganismalEntityOutputAttributeRequirements: () => ({
    attributes: {
      output_organismal_entity_lot_number: createAttributeCharacteristics(true, true)

    }

  })

});

const hasContainerInputAttributes = () => ({
  defineContainerInputAttributeRequirements: () => ({
    attributes: {
      input_container_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasLyophilizerSupportAttributes = () => ({
  defineLyophilizerSupportAttributeRequirements: () => ({
    attributes: {
      support_lyophilizer_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasHomogenizerSupportAttributes = () => ({
  defineHomogenizerSupportAttributeRequirements: () => ({
    attributes: {
      support_homogenizer_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasCentrifugeSupportAttributes = () => ({
  defineCentrifugeSupportAttributeRequirements: () => ({
    attributes: {
      support_centrifuge_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasAutoclaveSupportAttributes = () => ({
  defineAutoclaveSupportAttributeRequirements: () => ({
    attributes: {
      autoclave_id: createAttributeCharacteristics(true, false),
      support_autoclave_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasSubstanceOutputAttributes = () => ({
  defineSubstanceOutputInputAttributeRequirements: () => ({
    attributes: {
      output_substance_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasGrowthEnvironmentOutputAttributes = () => ({
  defineGrowthEnvironmentOutputInputAttributeRequirements: () => ({
    attributes: {
      output_growth_environment_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasGrowthEnvironmentInputAttributes = () => ({
  defineGrowthEnvironmentInputInputAttributeRequirements: () => ({
    attributes: {
      input_growth_environment_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasGrowthEnvironmentSupportAttributes = () => ({
  defineGrowthEnvironmentSupportAttributeRequirements: () => ({
    attributes: {
      support_growth_environment_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasMaterialInputAttributes = () => ({
  defineMaterialInputAttributeRequirements: () => ({
    attributes: {
      input_material_lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasManyMaterialInputAttributes = () => ({
  defineMaterialInputAttributeRequirements: () => ({
    attributes: {
      input_material_lot_number: createAttributeCharacteristics(true, true)

    }

  })

});

const hasSolutionInputAttributes = () => ({
  defineSolutionInputAttributeRequirements: () => ({
    attributes: {
      input_solution_lot_number: createAttributeCharacteristics(false, false)

    }

  })

});

const hasSolutionVolumeAttributes = () => ({
  defineSolutionVolumeAttributeRequirements: () => ({
    attributes: {
      solution_volume_amount: createAttributeCharacteristics(true, false),
      solution_volume_uom: createAttributeCharacteristics(true, false)

    }

  })

});

const hasLyophilizationAttributes = () => ({
  defineLyophilizationAttributeRequirements: () => ({
    attributes: {
      ambient_temperature_amount: createAttributeCharacteristics(true, false),
      ambient_temperature_uom: createAttributeCharacteristics(true, false),
      condensor_temperature_amount: createAttributeCharacteristics(true, false),
      condensor_temperature_uom: createAttributeCharacteristics(true, false),
      compressor_pressure_amount: createAttributeCharacteristics(true, false),
      compressor_pressure_uom: createAttributeCharacteristics(true, false)

    }

  })

});

const hasAutoclavingAttributes = () => ({
  defineAutoclavingAttributeRequirements: () => ({
    attributes: {
      autoclaving_id: createAttributeCharacteristics(true, false)

    }

  })

});

const hasAliasProcessExecutionAttributes = () => ({
  defineAliasProcessExecutionAttributeRequirements: () => ({
    attributes: {
      alias: createAttributeCharacteristics(false, false)

    }

  })

});

const hasManyAliasProcessExecutionAttributes = () => ({
  defineManyAliasProcessExecutionAttributeRequirements: () => ({
    attributes: {
      alias: createAttributeCharacteristics(false, true)

    }

  })

});


/**
 * Composes an object with functions for each component
 * @return {Object} entityObject - The composed description of an entity or object.
*/
//hasProcessExecutionAttributes(),hasCommentProcessExecutionAttributes()
const createPassageExecutionEntityObject = () => {
  const passageExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasPassageProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasOrganismalEntityOutputAttributes(), hasCommentProcessExecutionAttributes());
  var entityObject = createEntityObject('passage', 'process_type', passageExecutionStates);

  return entityObject;
}

function test() {
  console.log(hasProcessExecutionAttributes().defineProcessExecutionAttributeRequirements())
}



const createOpticalDensityExecutionEntityObject = () => {
  const opticalDensityExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasOpticalDensityProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('optical density measurement', 'process_type', opticalDensityExecutionStates);

  return entityObject;
}

const createContaminationMeasurementExecutionEntityObject = () => {
  const contaminationMeasurementExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasContaminationMeasurementProcessExecutionAttributes(), hasOrganismalEntityInputAttributes());
  var entityObject = createEntityObject('contamination measurement', 'process_type', contaminationMeasurementExecutionStates);

  return entityObject;
}

const createEstablishCultureGrowthEnvironmentExecutionEntityObject = () => {
  const establishCultureGrowthEnvironmentExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasEstablishingGrowthEnvironmentProcessExecutionAttributes(), hasContainerInputAttributes(), hasMediaInputAttributes(), hasGrowthEnvironmentOutputAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('establishing culture growth environment', 'process_type', establishCultureGrowthEnvironmentExecutionStates);

  return entityObject;
}


const createSeedExecutionEntityObject = () => {
  const seedExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasSeedProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasGrowthEnvironmentSupportAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('seed', 'process_type', seedExecutionStates);

  return entityObject;
}
//  hasSeedProcessExecutionAttributes(),hasOrganismalEntityInputAttributes(),

const createFermentationExecutionEntityObject = () => {
  const fermentationExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasFermentationProcessExecutionAttributes(), hasGrowthEnvironmentInputAttributes(), hasOrganismalEntityOutputAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('fermentation', 'process_type', fermentationExecutionStates);

  return entityObject;
}

const createMicrobialCultureProcedureExecutionEntityObject = () => {
  const microbialCultureProcedureExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasMicrobialCultureProcProcessExecutionAttributes(), hasGrowthEnvironmentInputAttributes(), hasOrganismalEntityOutputAttributes(), hasCommentProcessExecutionAttributes());
  var entityObject = createEntityObject('microbial culture procedure', 'process_type', microbialCultureProcedureExecutionStates);

  return entityObject;
}

//hasProcessExecutionAttributes(), , hasCommentProcessExecutionAttributes()
const createHarvestExecutionEntityObject = () => {
  const harvestExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasHarvestProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasCommentProcessExecutionAttributes());//hasAliasAttributes(),
  var entityObject = createEntityObject('harvest culture growth environment', 'process_type', harvestExecutionStates);

  return entityObject;
}

const createWeightMeasurementExecutionEntityObject = () => {
  const weightMeasurementExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasWeightMeasurementProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasCommentProcessExecutionAttributes()); //,hasAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('weight measurement', 'process_type', weightMeasurementExecutionStates);

  return entityObject;
}

const createVolumeMeasurementExecutionEntityObject = () => {
  const volumeMeasurementExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasVolumeMeasurementProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasCommentOptionalAttributes()); //,hasAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('volume measurement', 'process_type', volumeMeasurementExecutionStates);

  return entityObject;
}

const createResuspensionExecutionEntityObject = () => {
  const resupsensionExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasResuspensionProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasSolutionVolumeAttributes(), hasCommentProcessExecutionAttributes()); //,hasAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('resuspension', 'process_type', resupsensionExecutionStates);

  return entityObject;
}

const createAliquottingExecutionEntityObject = () => {
  const aliquotingExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasAliquottingProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasManyOrganismalEntityOutputAttributes(), hasCommentProcessExecutionAttributes());
  var entityObject = createEntityObject('aliquoting', 'process_type', aliquotingExecutionStates);

  return entityObject;
}

const createSnapFreezeExecutionEntityObject = () => {
  const snapFreezeExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasSnapFreezeProcessExecutionAttributes(), hasManyOrganismalEntityInputAttributes(), hasCommentOptionalAttributes()); //,hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('snap freeze', 'process_type', snapFreezeExecutionStates);

  return entityObject;
}

const createFreezeDryingExecutionEntityObject = () => {
  const freezeDryingExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasFreezeDryingProcessExecutionAttributes(), hasLyophilizerSupportAttributes(), hasLyophilizationAttributes(), hasCommentOptionalAttributes()); //,hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('Freeze-Drying', 'process_type', freezeDryingExecutionStates);

  return entityObject;
} //hasManyOrganismalEntityInputAttributes(),

const createStorageExecutionEntityObject = () => {
  const storageExecutionStates = () => Object.assign({}, hasStorageProcessExecutionAttributes(), hasProcessExecutionAttributes(), hasManyMaterialInputAttributes(), hasCommentOptionalAttributes()); //, hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('storage', 'process_type', storageExecutionStates);

  return entityObject;
}

const createOpenExecutionEntityObject = () => {
  const openExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasOpenProcessExecutionAttributes(), hasManyMaterialInputAttributes(), hasCommentOptionalAttributes()); //,hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('open', 'process_type', openExecutionStates);

  return entityObject;
}

const createSamplePoolingExecutionEntityObject = () => {
  const samplePoolingExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasSpecimenPoolingProcessExecutionAttributes(), hasManyOrganismalEntityInputAttributes(), hasPooledSpecimenOutputAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('specimen pooling', 'process_type', samplePoolingExecutionStates);

  return entityObject;
}

const createSpotBleachExecutionEntityObject = () => {
  const spotBleachExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasSpotBleachProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasSolutionVolumeAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('spot bleach', 'process_type', spotBleachExecutionStates);

  return entityObject;
}

const createWashExecutionEntityObject = () => {
  const washExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasWashProcessExecutionAttributes(), hasOrganismalEntityInputAttributes(), hasSolutionVolumeAttributes(), hasCommentOptionalAttributes()); //,hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('wash', 'process_type', washExecutionStates);

  return entityObject;
}

const createCountingExecutionEntityObject = () => {
  const countingExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasCountingProcessExecutionAttributes(), hasMaterialInputAttributes(), hasCommentOptionalAttributes()); //,hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('counting', 'process_type', countingExecutionStates);

  return entityObject;
}

const createSubstanceCombinationExecutionEntityObject = () => {
  const substanceCombinationExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasSubstanceCombinationProcessExecutionAttributes(), hasManySubstanceInputAttributes(), hasSubstanceOutputAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('substance combination', 'process_type', substanceCombinationExecutionStates);

  return entityObject;
}

const createAutoclaveExecutionEntityObject = () => {
  const autoclaveExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasAutoclaveSupportAttributes(), hasManySubstanceInputAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('autoclave', 'process_type', autoclaveExecutionStates);

  return entityObject;
}

const createSolventExtractionExecutionEntityObject = () => {
  const solventExtractionExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasSolventExtractionProcessExecutionAttributes(), hasManyOrganismalEntityInputAttributes(), hasManySubstanceInputAttributes(), hasCommentOptionalAttributes()); //,hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('solvent extraction', 'process_type', solventExtractionExecutionStates);

  return entityObject;
}

const createSolventPreparationExecutionEntityObject = () => {
  const solventPreparationExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasSolventPreparationProcessExecutionAttributes(), hasSolutionInputAttributes(), hasManySubstanceInputAttributes(), hasSolventPreparationProcessExecutionAttributes(), hasCommentProcessExecutionAttributes()); //,hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('solvent preparation', 'process_type', solventPreparationExecutionStates);

  return entityObject;
}

const createCentrifugeExecutionEntityObject = () => {
  const centrifugeExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasCentrifugationProcessExecutionAttributes(), hasManyOrganismalEntityInputAttributes(), hasCentrifugeSupportAttributes(), hasCommentOptionalAttributes()); //,hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('centrifugation', 'process_type', centrifugeExecutionStates);

  return entityObject;
}

const createHomogenizationExecutionEntityObject = () => {
  const homogenizationExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasHomogenizationProcessExecutionAttributes(), hasManyOrganismalEntityInputAttributes(), hasHomogenizerSupportAttributes(), hasCommentOptionalAttributes()); //, hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('bead-based homogenization', 'process_type', homogenizationExecutionStates);

  return entityObject;
}

const createTransferExecutionEntityObject = () => {
  const transferExecutionStates = () => Object.assign({}, hasProcessExecutionAttributes(), hasTransferProcessExecutionAttributes(), hasManyOrganismalEntityInputAttributes(), hasCommentOptionalAttributes()); //, hasManyAliasProcessExecutionAttributes()
  var entityObject = createEntityObject('transfer', 'process_type', transferExecutionStates);

  return entityObject;
}





/*
const createSubstanceCombinationExecutionEntityObject = () => {
  const countingExecutionStates = () => Object.assign({}, hasManySubstanceInputAttributes());
  var entityObject = createEntityObject('substance combination','process_type',countingExecutionStates);

  return entityObject;
}
*/


