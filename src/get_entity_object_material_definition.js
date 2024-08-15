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
 * @fileoverview Functions that compose objects affiliated with physical material.
 * @author Abigail Elizabeth  
 */

/**  
 * Determines a value given a case
 * @return {Object} - A description of the entity object
 */

const getEntityObjectColumnVisibilityMaterialDefinitionCore = switchAlternative({
  'action Register externally sourced material': createExternallySourcedMaterialEntityObject(),
  'action Register internally generated material': createInternallyGeneratedMaterialEntityObject(),
  'inhouse_material_registration_type derived': createInternallyGeneratedMaterialEntityObject(),
  'inhouse_material_registration_type composed': createInternallyComposedMaterialEntityObject(),
  'inhouse_material_registration_type orphan': createInternallyOrphanMaterialEntityObject(),
  //'Alias registered material': createAliasMaterialEntityObject(),
  //'externally manufactured material': createExternallySourcedMaterialEntityObject(),
  //'internally derived material': createInternallyDerivedMaterialEntityObject(),
  //'internally composed material': createInternallyComposedMaterialEntityObject(),
  //'internally orphaned material': createInternallyOrphanMaterialEntityObject(),
  'alias': createAliasMaterialEntityObject()


})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentEntityObjectColumnVisibilityMaterialDefinitionCore = (entity) =>
  getEntityObjectColumnVisibilityMaterialDefinitionCore(entity)

const getEntityObjectColumnVisibilityMaterialDefinitionProvenanceSummary = switchAlternative({
  'inhouse_material_registration_type derived': createInternallyDerivedMaterialSummaryProvenanceEntityObject(),
  'inhouse_material_registration_type composed': createInternallyComposedMaterialSummaryProvenanceEntityObject()



})('none');

/**  
 * Determines a value given an entity
 * @return {Object} - A description of the entity object
 */

const getCurrentEntityObjectColumnVisibilityMaterialDefinitionProvenanceSummary = (entity) =>
  getEntityObjectColumnVisibilityMaterialDefinitionProvenanceSummary(entity)



