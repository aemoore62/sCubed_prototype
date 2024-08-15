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
 * @fileoverview Functions that compose objects affiliated with workflow management.
 * @author Abigail Elizabeth 
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of the entity object
 */

const getEntityObjectColumnVisibilityWorkflowManagement = switchAlternative({
  'workflow_entity_type reporting workflow': createReportingWorkflowEntityObject(),
  'workflow_entity_type process specification': createProcessSpecificationEntityObject(),
  'workflow_entity_type summary of provenance': createProvenanceSummaryEntityObject(),
  'process_type_reference weight measurement': createWeightMeasurementEntityObject(),
  'process_type_reference resuspension': createResuspensionEntityObject(),
  'process_type_reference storage': createStorageEntityObject(),
  'process_type_reference establishing culture growth environment': createEstablishingCultureEnvrionementEntityObject(),
  'process_type_reference seed': createSeedEntityObject(),
  'process_type_reference fermentation': createFermentationEntityObject(),
  'process_type_reference aliquoting': createAliquotingEntityObject(),
  'process_type_reference snap freeze': createSnapFreezeEntityObject(),
  'process_type_reference wash': createWasheEntityObject(),
  'process_type_reference specimen pooling': createSpecimenPoolingEntityObject(),
  'process_type_reference counting': createCountingEntityObject(),
  'process_type_reference Freeze-Drying': createFreezeDryingEntityObject(),
  'process_type_reference open': createOpenEntityObject(),
  'process_type_reference volume measurement': createVolumeMeasurementEntityObject(),
  'process_type_reference transfer': createTransferEntityObject(),
  'process_type_reference spot bleach': createSpotBleachEntityObject(),
  'process_type_reference autoclave': createAutoclaveEntityObject(),
  'process_type_reference centrifugation': createCentrifugationEntityObject(),
  'process_type_reference bead-based homogenization': createBeadBasedHomogenizationEntityObject(),
  'process_type_reference solvent preparation': createSolventPreparationEntityObject(),
  'process_type_reference solvent extraction': createSolventExtractionEntityObject(),
  'process_type_reference harvest culture growth environment': createHarvestCultureGrowthEnvironmentEntityObject(),
  'process_type_reference substance combination': createSubstanceCombinationEntityObject(),
  'process_type_reference microbial culture procedure': createMicrobialCultureProcedureBleachEntityObject(),
  'process_type_reference optical density measurement': createOpticalDensityMeasurementEntityObject(),
  'process_type_reference passage': createPassageEntityObject()


})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentEntityObjectColumnVisibilityWorkflowManagement = (entity) =>
  getEntityObjectColumnVisibilityWorkflowManagement(entity)  
