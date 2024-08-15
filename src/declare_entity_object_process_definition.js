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
 * @fileoverview Function to compose objects that are affiliated with planned processes.
 * @author Abigail Elizabeth 
 * 
 */

/**  
 * Creates a function to generate an object, describing the characteristics of an attribute given an entity
 * @example
 * // returns {createEntityAttributeCharacteristics=() => ({
 * // createAttributeCharacteristics(true,false,"Sequoia")
 * @return {function} createEntityAttributeCharacteristics() - Function that generates object, 
 * including attributes and their characteristics
 */

const hasProcessAttributesCore = () => ({
  defineProcessAttributeRequirementsCore: () => ({
    attributes: {
      //process_type: createAttributeCharacteristics(true,false),
      process_id: createAttributeCharacteristics(true, false)
    }

  })

});

const hasMediumAttributes = () => ({
  defineMediumAttributeRequirements: () => ({
    attributes: {
      medium_total_volume: createAttributeCharacteristics(true, false),
      medium_total_volume_uom: createAttributeCharacteristics(true, false)
    }

  })

});

const hasSeedProcessAttributes = () => ({
  defineSeedProcessAttributeRequirements: () => ({
    attributes: {
      has_fixed_seed_amount: createAttributeCharacteristics(true, false)
    }

  })

});

const hasFixedSeedProcessAttributes = () => ({
  defineFixedSeedProcessAttributeRequirements: () => ({
    attributes: {
      seed_amount_type: createAttributeCharacteristics(true, false)
    }

  })

});

const hasSeedRatioProcessAttributes = () => ({
  defineSeedRatioProcessAttributeRequirements: () => ({
    attributes: {
      seed_amount_ratio: createAttributeCharacteristics(true, false),
      seed_amount_ratio_uom: createAttributeCharacteristics(true, false),
      ratio_result_type: createAttributeCharacteristics(true, false)
    }

  })

});

const hasSeedCountProcessAttributes = () => ({
  defineSeedCountProcessAttributeRequirements: () => ({
    attributes: {
      seed_amount_count: createAttributeCharacteristics(true, false)
    }

  })

});

// next two just for nan
const hasNANSeedRatioProcessAttributes = () => ({
  defineSeedRatioProcessAttributeRequirements: () => ({
    attributes: {
      seed_amount_ratio: createAttributeCharacteristics(false, false),
      seed_amount_ratio_uom: createAttributeCharacteristics(false, false),
      ratio_result_type: createAttributeCharacteristics(false, false)
    }

  })

});

const hasNANSeedCountProcessAttributes = () => ({
  defineSeedCountProcessAttributeRequirements: () => ({
    attributes: {
      seed_amount_count: createAttributeCharacteristics(false, false)
    }

  })

});

const hasFixedPhProcessAttributes = () => ({
  defineFixedPhProcessAttributeRequirements: () => ({
    attributes: {
      pH: createAttributeCharacteristics(true, false)
    }

  })

});

const hasFermentationProcessAttributes = () => ({
  defineFermentationProcessAttributeRequirements: () => ({
    attributes: {
      has_fixed_growth_rate: createAttributeCharacteristics(true, false),
      has_fixed_pH: createAttributeCharacteristics(true, false),
      has_fixed_gas_composition: createAttributeCharacteristics(true, false),
      has_fixed_humidity: createAttributeCharacteristics(true, false),
      has_fixed_stirring: createAttributeCharacteristics(true, false),
      has_fixed_temperature: createAttributeCharacteristics(true, false)

    }

  })

});

const hasFixedGasCompositionProcessAttributes = () => ({
  defineFixedGasCompositionProcessAttributeRequirements: () => ({
    attributes: {
      gas_component_common_name: createAttributeCharacteristics(true, true),
      gas_composition_unit_type: createAttributeCharacteristics(true, true),

    }

  })

});

const hasFixedGasCompositionPercentProcessAttributes = () => ({
  defineFixedGasCompositionPercentProcessAttributeRequirements: () => ({
    attributes: {
      gas_composition_percent_amount: createAttributeCharacteristics(true, true)//,
      //gas_component_common_name: createAttributeCharacteristics(true, true)
      //gas_composition_amount_percent_uom: createAttributeCharacteristics(true,true)

    }

  })

});




const hasFixedStirringProcessAttributes = () => ({
  defineFixedStirringProcessAttributeRequirements: () => ({
    attributes: {
      stirring_amount: createAttributeCharacteristics(true, false),
      stirring_amount_uom: createAttributeCharacteristics(true, false)
    }

  })

});

const hasFixedTemperatureProcessAttributes = () => ({
  defineFixedTemperatureProcessAttributeRequirements: () => ({
    attributes: {
      temperature_type: createAttributeCharacteristics(true, false)
    }

  })

});

const hasFixedTemperatureNumericalProcessAttributes = () => ({
  defineFixedTemperatureNumericalProcessAttributeRequirements: () => ({
    attributes: {
      temperature_amount_numerical: createAttributeCharacteristics(true, false),
      temperature_amount_uom_numerical: createAttributeCharacteristics(true, false)
    }

  })

});

const hasFixedTemperatureTextualProcessAttributes = () => ({
  defineFixedTemperatureTextualProcessAttributeRequirements: () => ({
    attributes: {
      temperature_amount_textual: createAttributeCharacteristics(true, false)
    }

  })

});

const hasOptionalTemperatureNumericalProcessAttributes = () => ({
  defineOptionalTemperatureNumericalProcessAttributeRequirements: () => ({
    attributes: {
      temperature_type: createAttributeCharacteristics(true, false),
      temperature_amount_numerical: createAttributeCharacteristics(true, false),
      temperature_amount_uom_numerical: createAttributeCharacteristics(true, false)
    }

  })

});

////
const hasNANFixedGasCompositionProcessAttributes = () => ({
  defineNANFixedGasCompositionProcessAttributeRequirements: () => ({
    attributes: {
      gas_component_common_name: createAttributeCharacteristics(false, true),
      gas_composition_unit_type: createAttributeCharacteristics(false, true),

    }

  })

});

const hasNANFixedGasCompositionPercentProcessAttributes = () => ({
  defineNANFixedGasCompositionPercentProcessAttributeRequirements: () => ({
    attributes: {
      gas_composition_percent_amount: createAttributeCharacteristics(false, true),
      gas_composition_amount_percent_uom: createAttributeCharacteristics(false, true)

    }

  })

});




const hasNANFixedStirringProcessAttributes = () => ({
  defineNANFixedStirringProcessAttributeRequirements: () => ({
    attributes: {
      stirring_amount: createAttributeCharacteristics(false, false),
      stirring_amount_uom: createAttributeCharacteristics(false, false)
    }

  })

});

const hasNANFixedTemperatureProcessAttributes = () => ({
  defineNANFixedTemperatureProcessAttributeRequirements: () => ({
    attributes: {
      temperature_type: createAttributeCharacteristics(false, false)
    }

  })

});

const hasNANFixedTemperatureNumericalProcessAttributes = () => ({
  defineNANFixedTemperatureNumericalProcessAttributeRequirements: () => ({
    attributes: {
      temperature_amount_numerical: createAttributeCharacteristics(false, false),
      temperature_amount_uom_numerical: createAttributeCharacteristics(false, false)
    }

  })

});

// growth rate, ph, humidity
const hasNANFixedGrowthRateProcessAttributes = () => ({
  defineNANFixedGrowthRateProcessAttributeRequirements: () => ({
    attributes: {
      growth_rate_type: createAttributeCharacteristics(true, true)

    }

  })

});

const hasNANFixedNumericalGrowthRateProcessAttributes = () => ({
  defineNANFixedNumericalGrowthRateProcessAttributeRequirements: () => ({
    attributes: {
      growth_rate_amount_numerical: createAttributeCharacteristics(true, true),
      growth_rate_amount_uom_numerical: createAttributeCharacteristics(true, true)
    }

  })

});

const hasNANFixedTextualGrowthRateProcessAttributes = () => ({
  defineNANFixedTextualGrowthRateProcessAttributeRequirements: () => ({
    attributes: {
      growth_rate_amount_textual: createAttributeCharacteristics(true, true)
    }

  })

});

const hasNANFixedPhProcessAttributes = () => ({
  defineNANFixedPhProcessAttributeRequirements: () => ({
    attributes: {
      pH: createAttributeCharacteristics(true, false)
    }

  })

});

const hasNANFixedHumidityProcessAttributes = () => ({
  defineNANFixedHumidityProcessAttributeRequirements: () => ({
    attributes: {
      humidity_type: createAttributeCharacteristics(true, false)
      //relative_humidity_amount_individual_number: createAttributeCharacteristics(false,false),
      //relative_humidity_amount_uom: createAttributeCharacteristics(false,false)
    }

  })

});

const hasFixedHumidityRelativeProcessAttributes = () => ({
  defineFixedHumidityRelativeProcessAttributeRequirements: () => ({
    attributes: {
      relative_humidity_amount_uom: createAttributeCharacteristics(true, false)
    }

  })

});

const hasNANFixedHumidityIndividualNumberProcessAttributes = () => ({
  defineNANFixedHumidityIndividualNumberProcessAttributeRequirements: () => ({
    attributes: {
      relative_humidity_amount_individual_number: createAttributeCharacteristics(true, false)
    }

  })

});

const hasHarvestProcessAttributes = () => ({
  defineHarvestProcessAttributeRequirements: () => ({
    attributes: {
      has_fixed_harvest_criteria: createAttributeCharacteristics(true, false)
    }

  })

});

const hasFixedHarvestCriteriaProcessAttributes = () => ({
  defineFixedHarvestCriteriaProcessAttributeRequirements: () => ({
    attributes: {
      harvest_criteria_relationship: createAttributeCharacteristics(true, false),
      harvest_criteria_amount_type: createAttributeCharacteristics(true, true),

    }

  })

});

const hasFixedHarvestCriteriaRatioProcessAttributes = () => ({
  defineFixedHarvestCriteriaRatioProcessAttributeRequirements: () => ({
    attributes: {
      harvest_criteria_amount_ratio: createAttributeCharacteristics(true, true),
      harvest_criteria_amount_uom_ratio: createAttributeCharacteristics(true, true),
      ratio_result_type: createAttributeCharacteristics(true, true)


    }

  })

});

const hasNANFixedHarvestCriteriaProcessAttributes = () => ({
  defineNANFixedHarvestCriteriaProcessAttributeRequirements: () => ({
    attributes: {
      harvest_criteria_relationship: createAttributeCharacteristics(false, false),
      harvest_criteria_amount_type: createAttributeCharacteristics(false, true),

    }

  })

});

const hasNANFixedHarvestCriteriaRatioProcessAttributes = () => ({
  defineNANFixedHarvestCriteriaRatioProcessAttributeRequirements: () => ({
    attributes: {
      harvest_criteria_amount_ratio: createAttributeCharacteristics(false, true),
      ratio_result_type: createAttributeCharacteristics(false, true),
      harvest_criteria_amount_uom_ratio: createAttributeCharacteristics(false, true)


    }

  })

});

const hasWashProcessAttributes = () => ({
  defineWashProcessAttributeRequirements: () => ({
    attributes: {
      per_wash_solution_volume_amount: createAttributeCharacteristics(true, false),
      per_wash_solution_volume_amount_uom: createAttributeCharacteristics(true, false)


    }

  })

});

const hasOpticalDensityProcessAttributes = () => ({
  defineOpticalDensityProcessAttributeRequirements: () => ({
    attributes: {
      optical_density: createAttributeCharacteristics(true, false)


    }

  })

});



const hasSpotBleachProcessAttributes = () => ({
  defineSpotBleachProcessAttributeRequirements: () => ({
    attributes: {
      has_fixed_seed_amount: createAttributeCharacteristics(true, false)
      //seed_amount_type: createAttributeCharacteristics(false,false),
      // seed_amount_count: createAttributeCharacteristics(false,false)


    }

  })

});
//REWORK TO ACCOMODATE CONDITIONAL DEPENDENCIES
const hasMicrobialCultureProcessAttributes = () => ({
  defineMicrobialCultureProcessAttributeRequirements: () => ({
    attributes: {
      has_fixed_growth_rate: createAttributeCharacteristics(true, false),
      //growth_rate_amount: createAttributeCharacteristics(false,false),
      //growth_rate_amount_uom: createAttributeCharacteristics(false,false),
      has_fixed_temperature: createAttributeCharacteristics(true, false)
      //temperature_type: createAttributeCharacteristics(false,false),	
      //temperature_amount_numerical: createAttributeCharacteristics(false,false),	
      //temperature_amount_uom_numerical: createAttributeCharacteristics(false,false)     

    }

  })

});

const hasAutoclaveProcessAttributes = () => ({
  defineAutoclaveProcessAttributeRequirements: () => ({
    attributes: {
      //temperature_type: createAttributeCharacteristics(true,false),
      temperature_amount_numerical: createAttributeCharacteristics(true, false),
      temperature_amount_uom_numerical: createAttributeCharacteristics(true, false),
      pressure_amount: createAttributeCharacteristics(true, false),
      pressure_amount_uom: createAttributeCharacteristics(true, false),
      autoclave_cycle_type: createAttributeCharacteristics(true, false)


    }

  })

});

const hasCentrifugationProcessAttributes = () => ({
  defineCentrifugationProcessAttributeRequirements: () => ({
    attributes: {
      temperature_type: createAttributeCharacteristics(true, false),
      //temperature_amount_numerical: createAttributeCharacteristics(true,false),
      //temperature_amount_uom_numerical: createAttributeCharacteristics(true,false),
      speed_amount: createAttributeCharacteristics(true, false),
      speed_amount_uom: createAttributeCharacteristics(true, false)


    }

  })

});

const hasSolventExtractionProcessAttributes = () => ({
  defineSolventExtractionProcessAttributeRequirements: () => ({
    attributes: {
      solution_volume_amount: createAttributeCharacteristics(true, false),
      solution_volume_amount_uom: createAttributeCharacteristics(true, false),
      solvent_prep_process_id: createAttributeCharacteristics(true, false)


    }

  })

});








/**
 * Composes an object with functions for each component
 * @return {Object} entityObject - The composed description of an entity or object.
*/

const createProcessEntityObjectCore = () => {
  const processStatesCore = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('', '', processStatesCore);

  return entityObject;
}

const createEstablishingCultureGrowthEnvironmentProcessEntityObject = () => {
  const establishingCultureGrowthEnvironmentProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasMediumAttributes());
  var entityObject = createEntityObject('establishing culture growth environment', 'process_type', establishingCultureGrowthEnvironmentProcessStates);

  return entityObject;
}

const createSeedProcessEntityObject = () => {
  const seedProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasSeedProcessAttributes());
  var entityObject = createEntityObject('seed', 'process_type', seedProcessStates);

  return entityObject;
}

const createFixedSeedProcessEntityObject = () => {
  const seedFixedProcessStates = () => Object.assign({}, hasFixedSeedProcessAttributes());
  var entityObject = createEntityObject('true', 'has_fixed_seed_amount', seedFixedProcessStates);

  return entityObject;
}

const createSeedRatioProcessEntityObject = () => {
  const seedRatioProcessStates = () => Object.assign({}, hasSeedRatioProcessAttributes());
  var entityObject = createEntityObject('ratio', 'seed_amount_type', seedRatioProcessStates);

  return entityObject;
}

const createSeedCountProcessEntityObject = () => {
  const seedCountProcessStates = () => Object.assign({}, hasSeedCountProcessAttributes());
  var entityObject = createEntityObject('count', 'seed_amount_type', seedCountProcessStates);

  return entityObject;
}
// this obj is just for relaying content within nan
const createNANSeedCountProcessEntityObject = () => {
  const seedCountProcessStates = () => Object.assign({}, hasFixedSeedProcessAttributes(), hasNANSeedCountProcessAttributes(),
    hasNANSeedRatioProcessAttributes());
  var entityObject = createEntityObject('seed', 'process_type', seedCountProcessStates);

  return entityObject;
}

const createSolventPreparationProcessEntityObject = () => {
  const solventPreparationProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasFixedTemperatureProcessAttributes());
  var entityObject = createEntityObject('solvent preparation', 'process_type', solventPreparationProcessStates);

  return entityObject;
}

const createSolventExtractionProcessEntityObject = () => {
  const solventExtractionProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasSolventExtractionProcessAttributes());
  var entityObject = createEntityObject('solvent extraction', 'process_type', solventExtractionProcessStates);

  return entityObject;
}

const createNANFermentationProcessEntityObject = () => {
  const nanfermentationProcessStates = () => Object.assign({}, hasFermentationProcessAttributes(),
    hasNANFixedGasCompositionProcessAttributes(), hasNANFixedGasCompositionPercentProcessAttributes(),
    hasNANFixedStirringProcessAttributes(), hasNANFixedTemperatureProcessAttributes(),
    hasNANFixedTemperatureNumericalProcessAttributes(), hasNANFixedGrowthRateProcessAttributes(), hasNANFixedPhProcessAttributes(), hasNANFixedHumidityProcessAttributes());
  var entityObject = createEntityObject('fermentation', 'process_type', nanfermentationProcessStates);

  return entityObject;
}

const createFixedGrowthRateProcessEntityObject = () => {
  const fixedGrowthRatProcessStates = () => Object.assign({}, hasNANFixedGrowthRateProcessAttributes());
  var entityObject = createEntityObject('true', 'has_fixed_growth_rate', fixedGrowthRatProcessStates);

  return entityObject;
}

const createFixedGrowthRateNumericalProcessEntityObject = () => {
  const fixedGrowthRateNumericalProcessStates = () => Object.assign({}, hasNANFixedNumericalGrowthRateProcessAttributes());
  var entityObject = createEntityObject('numerical', 'growth_rate_type', fixedGrowthRateNumericalProcessStates);

  return entityObject;
}

const createFixedGrowthRateTextualProcessEntityObject = () => {
  const fixedGrowthRateTextualProcessStates = () => Object.assign({}, hasNANFixedTextualGrowthRateProcessAttributes());
  var entityObject = createEntityObject('textual', 'growth_rate_type', fixedGrowthRateTextualProcessStates);

  return entityObject;
}

const createFixedHumidityProcessEntityObject = () => {
  const fixedHumidityProcessStates = () => Object.assign({}, hasNANFixedHumidityProcessAttributes());
  var entityObject = createEntityObject('true', 'has_fixed_humidity', fixedHumidityProcessStates);

  return entityObject;
}

const createFixedHumidityPercentageProcessEntityObject = () => {
  const fixedHumidityIndividualNumberPercentageProcessStates = () => Object.assign({}, hasNANFixedHumidityIndividualNumberProcessAttributes());
  var entityObject = createEntityObject('percentage unit', 'relative_humidity_amount_uom', fixedHumidityIndividualNumberPercentageProcessStates);

  return entityObject;
}

const createFixedHumidityRelativeProcessEntityObject = () => {
  const fixedHumidityRelativeProcessStates = () => Object.assign({}, hasFixedHumidityRelativeProcessAttributes());
  var entityObject = createEntityObject('relative humidity', 'humidity_type', fixedHumidityRelativeProcessStates);

  return entityObject;
}




const createFermentationProcessEntityObject = () => {
  const fermentationProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasFermentationProcessAttributes());
  var entityObject = createEntityObject('fermentation', 'process_type', fermentationProcessStates);

  return entityObject;
}

const createPhProcessEntityObject = () => {
  const phProcessStates = () => Object.assign({}, hasFixedPhProcessAttributes());
  var entityObject = createEntityObject('true', 'has_fixed_pH', phProcessStates);

  return entityObject;
}

const createGasCompositionProcessEntityObject = () => {
  const gasCompositionProcessStates = () => Object.assign({}, hasFixedGasCompositionProcessAttributes());
  var entityObject = createEntityObject('true', 'has_fixed_gas_composition', gasCompositionProcessStates);

  return entityObject;
}

const createGasCompositionPercentProcessEntityObject = () => {
  const gasCompositionPercentProcessStates = () => Object.assign({}, hasFixedGasCompositionPercentProcessAttributes());
  var entityObject = createEntityObject('percent', 'gas_composition_unit_type', gasCompositionPercentProcessStates);

  return entityObject;
}

const createStirringProcessEntityObject = () => {
  const stirringProcessStates = () => Object.assign({}, hasFixedStirringProcessAttributes());
  var entityObject = createEntityObject('true', 'has_fixed_stirring', stirringProcessStates);

  return entityObject;
}

const createTemperatureProcessEntityObject = () => {
  const temperatureProcessStates = () => Object.assign({}, hasFixedTemperatureProcessAttributes());
  var entityObject = createEntityObject('true', 'has_fixed_temperature', temperatureProcessStates);

  return entityObject;
}

const createTemperatureNumericalProcessEntityObject = () => {
  const temperatureNumericalProcessStates = () => Object.assign({}, hasFixedTemperatureNumericalProcessAttributes());
  var entityObject = createEntityObject('numerical', 'temperature_type', temperatureNumericalProcessStates);

  return entityObject;
}

const createTemperatureTextualProcessEntityObject = () => {
  const temperatureTextualProcessStates = () => Object.assign({}, hasFixedTemperatureTextualProcessAttributes());
  var entityObject = createEntityObject('textual', 'temperature_type', temperatureTextualProcessStates);

  return entityObject;
}

const createHarvestProcessEntityObject = () => {
  const harvestProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasHarvestProcessAttributes());
  var entityObject = createEntityObject('harvest culture growth environment', 'process_type', harvestProcessStates);

  return entityObject;
}

const createFixedHarvestProcessEntityObject = () => {
  const fixedHarvestProcessStates = () => Object.assign({}, hasFixedHarvestCriteriaProcessAttributes());
  var entityObject = createEntityObject('true', 'has_fixed_harvest_criteria', fixedHarvestProcessStates);

  return entityObject;
}

const createFixedHarvestRatioProcessEntityObject = () => {
  const fixedHarvestRatioProcessStates = () => Object.assign({}, hasFixedHarvestCriteriaRatioProcessAttributes());
  var entityObject = createEntityObject('ratio', 'harvest_criteria_amount_type', fixedHarvestRatioProcessStates);

  return entityObject;
}

const createNANHarvestProcessEntityObject = () => {
  const nanharvestProcessStates = () => Object.assign({}, hasHarvestProcessAttributes(), hasNANFixedHarvestCriteriaProcessAttributes(), hasNANFixedHarvestCriteriaRatioProcessAttributes());
  var entityObject = createEntityObject('harvest culture growth environment', 'process_type', nanharvestProcessStates);

  return entityObject;
}

const createStorageProcessEntityObject = () => {
  const storageProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasFixedTemperatureProcessAttributes());
  var entityObject = createEntityObject('storage', 'process_type', storageProcessStates);

  return entityObject;
}

const createNANStorageProcessEntityObject = () => {
  const nanstorageProcessStates = () => Object.assign({}, hasFixedTemperatureProcessAttributes(), hasOptionalTemperatureNumericalProcessAttributes());
  var entityObject = createEntityObject('storage', 'process_type', nanstorageProcessStates);

  return entityObject;
}

const createWashProcessEntityObject = () => {
  const washProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasWashProcessAttributes());
  var entityObject = createEntityObject('wash', 'process_type', washProcessStates);

  return entityObject;
}

const createPassageProcessEntityObject = () => {
  const passageProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('passage', 'process_type', passageProcessStates);

  return entityObject;
}

const createOpticalDensityMeasurementProcessEntityObject = () => {
  const opticalDensityMeasurementProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasOpticalDensityProcessAttributes());
  var entityObject = createEntityObject('optical density measurement', 'process_type', opticalDensityMeasurementProcessStates);

  return entityObject;
}

const createContaminationMeasurementProcessEntityObject = () => {
  const contaminationMeasurementProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('contamination measurement', 'process_type', contaminationMeasurementProcessStates);

  return entityObject;
}

const createWeightMeasurementProcessEntityObject = () => {
  const weightMeasurementProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('weight measurement', 'process_type', weightMeasurementProcessStates);

  return entityObject;
}

const createResuspensionProcessEntityObject = () => {
  const resuspensionProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('resuspension', 'process_type', resuspensionProcessStates);

  return entityObject;
}

const createAliquottingProcessEntityObject = () => {
  const aliquotingProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('aliquoting', 'process_type', aliquotingProcessStates);

  return entityObject;
}

const createSnapFreezeProcessEntityObject = () => {
  const snapFreezeProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('snap freeze', 'process_type', snapFreezeProcessStates);

  return entityObject;
}

const createSpecimenPoolingProcessEntityObject = () => {
  const specimenPoolingProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('specimen pooling', 'process_type', specimenPoolingProcessStates);

  return entityObject;
}

const createCountingProcessEntityObject = () => {
  const countingProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('counting', 'process_type', countingProcessStates);

  return entityObject;
}

const createFreezeDryingProcessEntityObject = () => {
  const freezeDryingProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('Freeze-Drying', 'process_type', freezeDryingProcessStates);

  return entityObject;
}

const createSubstanceCombinationProcessEntityObject = () => {
  const substanceCombinationProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('substance combination', 'process_type', substanceCombinationProcessStates);

  return entityObject;
}

const createOpenProcessEntityObject = () => {
  const openProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('open', 'process_type', openProcessStates);

  return entityObject;
}

const createVolumeMeasurementProcessEntityObject = () => {
  const volumeMeasurementProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('volume measurement', 'process_type', volumeMeasurementProcessStates);

  return entityObject;
}

const createTransferProcessEntityObject = () => {
  const transferProcessStates = () => Object.assign({}, hasProcessAttributesCore());
  var entityObject = createEntityObject('transfer', 'process_type', transferProcessStates);

  return entityObject;
}

const createSpotBleachProcessEntityObject = () => {
  const spotBleachProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasSpotBleachProcessAttributes());
  var entityObject = createEntityObject('spot bleach', 'process_type', spotBleachProcessStates);

  return entityObject;
}

const createMicrobialCultureProcedureProcessEntityObject = () => {
  const microbialCultureProcedureProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasMicrobialCultureProcessAttributes());
  var entityObject = createEntityObject('microbial culture procedure', 'process_type', microbialCultureProcedureProcessStates);

  return entityObject;
}

const createAutoclaveProcessEntityObject = () => {
  const autoclaveProcedureProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasAutoclaveProcessAttributes());
  var entityObject = createEntityObject('autoclave', 'process_type', autoclaveProcedureProcessStates);

  return entityObject;
}

const createCentrifugationProcessEntityObject = () => {
  const centrifugationProcedureProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasCentrifugationProcessAttributes());
  var entityObject = createEntityObject('centrifugation', 'process_type', centrifugationProcedureProcessStates);

  return entityObject;
}

const createBeadBasedHomogenizationProcessEntityObject = () => {
  const beadBasedHomogenizationProcedureProcessStates = () => Object.assign({}, hasProcessAttributesCore(), hasCentrifugationProcessAttributes());
  var entityObject = createEntityObject('bead-based homogenization', 'process_type', beadBasedHomogenizationProcedureProcessStates);

  return entityObject;
}



