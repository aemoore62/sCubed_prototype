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
 * @fileoverview Functions that compose objects affiliated with executed processes.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of the entity object
 */

const getEntityObjectColumnVisibilityProcessExecution = switchAlternative({

  'process_type passage': createPassageExecutionEntityObject(),
  'process_type optical density measurement': createOpticalDensityExecutionEntityObject(),
  'process_type contamination measurement': createContaminationMeasurementExecutionEntityObject(),
  'process_type establishing culture growth environment': createEstablishCultureGrowthEnvironmentExecutionEntityObject(),
  'process_type seed': createSeedExecutionEntityObject(),
  'process_type fermentation': createFermentationExecutionEntityObject(),
  'process_type microbial culture procedure': createMicrobialCultureProcedureExecutionEntityObject(),
  'process_type harvest culture growth environment': createHarvestExecutionEntityObject(),
  'process_type weight measurement': createWeightMeasurementExecutionEntityObject(),
  'process_type resuspension': createResuspensionExecutionEntityObject(),
  'process_type aliquoting': createAliquottingExecutionEntityObject(),
  'process_type snap freeze': createSnapFreezeExecutionEntityObject(),
  'process_type storage': createStorageExecutionEntityObject(),
  'process_type specimen pooling': createSamplePoolingExecutionEntityObject(),
  'process_type spot bleach': createSpotBleachExecutionEntityObject(),
  'process_type wash': createWashExecutionEntityObject(),
  'process_type counting': createCountingExecutionEntityObject(),
  'process_type Freeze-Drying': createFreezeDryingExecutionEntityObject(),
  'process_type substance combination': createSubstanceCombinationExecutionEntityObject(),
  'process_type open': createOpenExecutionEntityObject(),
  'process_type autoclave': createAutoclaveExecutionEntityObject(),
  'process_type volume measurement': createVolumeMeasurementExecutionEntityObject(),
  'process_type solvent preparation': createSolventPreparationExecutionEntityObject(),
  'process_type solvent extraction': createSolventExtractionExecutionEntityObject(),
  'process_type centrifugation': createCentrifugeExecutionEntityObject(),
  'process_type bead-based homogenization': createHomogenizationExecutionEntityObject(),
  'process_type transfer': createTransferExecutionEntityObject()


})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentEntityObjectColumnVisibilityProcessExecution = (entity) =>
  getEntityObjectColumnVisibilityProcessExecution(entity)  
