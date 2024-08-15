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
 * @fileoverview Functions that compose objects affiliated with planned processes.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of the entity object
 */

const getEntityObjectColumnVisibilityProcessDefinitionCore = switchAlternative({
  'planned process': createProcessEntityObjectCore(),

  'process_type establishing culture growth environment': createEstablishingCultureGrowthEnvironmentProcessEntityObject(),
  'process_type seed': createSeedProcessEntityObject(),
  'has_fixed_seed_amount TRUE': createFixedSeedProcessEntityObject(),
  'seed_amount_type ratio': createSeedRatioProcessEntityObject(),
  'seed_amount_type count': createSeedCountProcessEntityObject(),
  'process_type fermentation': createFermentationProcessEntityObject(),
  'has_fixed_growth_rate TRUE': createFixedGrowthRateProcessEntityObject(),
  'growth_rate_type numerical': createFixedGrowthRateNumericalProcessEntityObject(),
  'growth_rate_type textual': createFixedGrowthRateTextualProcessEntityObject(),
  'has_fixed_pH TRUE': createPhProcessEntityObject(),
  'has_fixed_gas_composition TRUE': createGasCompositionProcessEntityObject(),
  'has_fixed_stirring TRUE': createStirringProcessEntityObject(),
  'has_fixed_humidity TRUE': createFixedHumidityProcessEntityObject(),
  'humidity_type relative humidity': createFixedHumidityRelativeProcessEntityObject(),
  'relative_humidity_amount_uom percentage unit': createFixedHumidityPercentageProcessEntityObject(),
  'has_fixed_temperature TRUE': createTemperatureProcessEntityObject(),
  'temperature_type numerical': createTemperatureNumericalProcessEntityObject(),
  'temperature_type textual': createTemperatureTextualProcessEntityObject(),
  'process_type harvest culture growth environment': createHarvestProcessEntityObject(),
  'has_fixed_harvest_criteria TRUE': createFixedHarvestProcessEntityObject(),
  'harvest criteria ratio': createFixedHarvestRatioProcessEntityObject(),
  'process_type storage': createStorageProcessEntityObject(),
  'process_type wash': createWashProcessEntityObject(),
  'gas_composition_unit_type percent': createGasCompositionPercentProcessEntityObject(),
  'process_type passage': createPassageProcessEntityObject(),
  'process_type optical density measurement': createOpticalDensityMeasurementProcessEntityObject(),
  'process_type contamination measurement': createContaminationMeasurementProcessEntityObject(),
  'process_type weight measurement': createWeightMeasurementProcessEntityObject(),
  'process_type resuspension': createResuspensionProcessEntityObject(),
  'process_type aliquoting': createAliquottingProcessEntityObject(),
  'process_type snap freeze': createSnapFreezeProcessEntityObject(),
  'process_type specimen pooling': createSpecimenPoolingProcessEntityObject(),
  'process_type counting': createCountingProcessEntityObject(),
  'process_type Freeze-Drying': createFreezeDryingProcessEntityObject(),
  'process_type substance combination': createSubstanceCombinationProcessEntityObject(),
  'process_type open': createOpenProcessEntityObject(),
  'process_type volume measurement': createVolumeMeasurementProcessEntityObject(),
  'process_type transfer': createTransferProcessEntityObject(),
  'process_type spot bleach': createSpotBleachProcessEntityObject(),
  'process_type microbial culture procedure': createMicrobialCultureProcedureProcessEntityObject(),
  'process_type autoclave': createAutoclaveProcessEntityObject(),
  'process_type centrifugation': createCentrifugationProcessEntityObject(),
  'process_type bead-based homogenization': createBeadBasedHomogenizationProcessEntityObject(),
  //'process_type seed': createNANSeedCountProcessEntityObject(),
  //'process_type fermentation': createNANFermentationProcessEntityObject(),
  //'process_type harvest culture growth environment': createNANHarvestProcessEntityObject(),
  'process_type solvent preparation': createSolventPreparationProcessEntityObject(),
  'process_type solvent extraction': createSolventExtractionProcessEntityObject(),
  'harvest_criteria_amount_type ratio': createFixedHarvestRatioProcessEntityObject()



})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentEntityObjectColumnVisibilityProcessDefinitionCore = (entity) =>
  getEntityObjectColumnVisibilityProcessDefinitionCore(entity)

function testGetEntObjProcDefCore() {
  let res = getCurrentEntityObjectColumnVisibilityProcessDefinitionCore('planned process');
  console.log(res)
}

const getEntityObjectColumnVisibilityProcessDefinitionCIDC = switchAlternative({

  //'passage': createPassageProcessEntityObject(),
  //'optical density measurement': createOpticalDensityMeasurementProcessEntityObject(),
  //'contamination measurement': createContaminationMeasurementProcessEntityObject(),
  'establishing culture growth environment': createEstablishingCultureGrowthEnvironmentProcessEntityObject(),
  'seed': createSeedProcessEntityObject(),
  'fixed seed true': createFixedSeedProcessEntityObject(),
  'seed ratio': createSeedRatioProcessEntityObject(),
  'seed count': createSeedCountProcessEntityObject(),
  'fermentation': createFermentationProcessEntityObject(),
  'fixed ph true': createPhProcessEntityObject(),
  'fixed gas composition true': createGasCompositionProcessEntityObject(),
  'fixed stirring true': createStirringProcessEntityObject(),
  'fixed temperature true': createTemperatureProcessEntityObject(),
  'temperature numerical': createTemperatureNumericalProcessEntityObject(),
  'gas composition unit percent': createGasCompositionPercentProcessEntityObject(),
  'harvest culture growth environment': createHarvestProcessEntityObject(),
  'fixed harvest criteria true': createFixedHarvestProcessEntityObject(),
  'harvest criteria ratio': createFixedHarvestRatioProcessEntityObject(),
  //'weight measurement':  createWeightMeasurementProcessEntityObject(),
  //'resuspension': createResuspensionProcessEntityObject(),
  //'aliquotting': createAliquottingProcessEntityObject(),
  'snap freeze': createSnapFreezeProcessEntityObject(),
  'storage': createStorageProcessEntityObject(),
  'wash': createWashProcessEntityObject(),
  //'specimen pooling': createSpecimenPoolingProcessEntityObject(),
  //'counting': createCountingProcessEntityObject(),
  //'Freeze-Drying': createFreezeDryingProcessEntityObject(),
  'substance combination': createSubstanceCombinationProcessEntityObject(),
  //'open': createOpenProcessEntityObject(),
  //'volume measurement': createVolumeMeasurementProcessEntityObject(),
  //'transfer': createTransferProcessEntityObject(),
  'spot bleach': createSpotBleachProcessEntityObject(),
  'microbial culture procedure': createMicrobialCultureProcedureProcessEntityObject(),
  'autoclave': createAutoclaveProcessEntityObject(),
  'centrifugation': createCentrifugationProcessEntityObject(),
  'bead-based homogenization': createBeadBasedHomogenizationProcessEntityObject(),
  'solvent preparation': createSolventPreparationProcessEntityObject(),
  'solvent extraction': createSolventExtractionProcessEntityObject()

  /*  
  'seed': createNANSeedCountProcessEntityObject(),
  //'fermentation': createNANFermentationProcessEntityObject(),
  'harvest culture growth environment': createNANHarvestProcessEntityObject(),
  //'storage': createNANStorageProcessEntityObject(),
  
*/


})('none');
/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentEntityObjectColumnVisibilityProcessDefinitionCIDC = (entity) =>
  getEntityObjectColumnVisibilityProcessDefinitionCIDC(entity)

