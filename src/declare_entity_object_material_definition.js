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
 * @fileoverview Functions to compose objects that are affiliated with physical material.
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

const hasExternallySourcedMaterialAttributes = () => ({
  defineExternallySourcedMaterialAttributeRequirements: () => ({
    attributes: {
      catalog_number_noninhouse_item: createAttributeCharacteristics(true, false),
      lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasInternallyGeneratedMaterialAttributes = () => ({
  defineInternallyGeneratedMaterialAttributeRequirements: () => ({
    attributes: {
      //catalog_number_inhouse_item: createAttributeCharacteristics(true,false),
      inhouse_material_registration_type: createAttributeCharacteristics(true, false),
      lot_number: createAttributeCharacteristics(true, false)

    }

  })

});

const hasInternallyOrphanMaterialAttributes = () => ({
  defineInternallyOrphanMaterialAttributeRequirements: () => ({
    attributes: {
      catalog_number_inhouse_item: createAttributeCharacteristics(true, false)

    }

  })

});


const hasInternallyComposedMaterialAttributes = () => ({
  defineInternallyComposedMaterialAttributeRequirements: () => ({
    attributes: {
      catalog_number_inhouse_item: createAttributeCharacteristics(true, false)

    }

  })

});


const hasAliasAttributes = () => ({
  defineAliasAttributeRequirements: () => ({
    attributes: {
      lot_number_reference: createAttributeCharacteristics(true, false),
      alias: createAttributeCharacteristics(true, false)
    }

  })

});

const hasInternallyDerivedMaterialAttributesSummaryProvenance = () => ({
  defineInternallyDerivedMaterialSummaryProvenanceAttributeRequirements: () => ({
    attributes: {
      derived_from_lot_number_reference: createAttributeCharacteristics(true, false),
      summary_of_provenance_reference: createAttributeCharacteristics(true, false)

    }

  })

});


const hasInternallyComposedMaterialAttributesSummaryProvenance = () => ({
  defineInternallyComposedMaterialSummaryProvenanceAttributeRequirements: () => ({
    attributes: {
      composed_from_lot_number_reference: createAttributeCharacteristics(true, true),
      summary_of_provenance_reference: createAttributeCharacteristics(true, false)

    }

  })

});



/**
 * Composes an object with functions for each component
 * @return {Object} entityObject - The composed description of an entity or object.
*/

const createExternallySourcedMaterialEntityObject = () => {
  const externallySourcedMaterial = () => Object.assign({}, hasExternallySourcedMaterialAttributes());
  var entityObject = createEntityObject('Register externally sourced material', 'action', externallySourcedMaterial);
  //Register externally sourced material' //'action'
  return entityObject;
}

const createInternallyGeneratedMaterialEntityObject = () => {
  const internallyGeneratedMaterial = () => Object.assign({}, hasInternallyGeneratedMaterialAttributes());
  var entityObject = createEntityObject('Register internally generated material', 'action', internallyGeneratedMaterial);

  return entityObject;
}

const createInternallyDerivedMaterialEntityObject = () => {
  const internallyDerivedMaterial = () => Object.assign({}, hasInternallyGeneratedMaterialAttributes(), hasCommentOptionalAttributes());
  var entityObject = createEntityObject('Register internally derived material', 'action', internallyDerivedMaterial);
  // derived //'inhouse_material_registration_type

  return entityObject;
}

const createInternallyComposedMaterialEntityObject = () => {
  const internallyComposedMaterial = () => Object.assign({}, hasInternallyGeneratedMaterialAttributes(),
    hasInternallyComposedMaterialAttributes());
  var entityObject = createEntityObject('composed', 'inhouse_material_registration_type', internallyComposedMaterial);
  //'composed' //'inhouse_material_registration_type
  return entityObject;
}

const createInternallyOrphanMaterialEntityObject = () => {
  const internallyOrphanMaterial = () => Object.assign({}, hasInternallyGeneratedMaterialAttributes(), hasInternallyOrphanMaterialAttributes());
  var entityObject = createEntityObject('orphan', 'inhouse_material_registration_type', internallyOrphanMaterial);
  // orphan //'inhouse_material_registration_type
  return entityObject;
}

const createInternallyComposedMaterialSummaryProvenanceEntityObject = () => {
  const internallyComposedMaterialSummaryProvenance = () => Object.assign({}, hasInternallyComposedMaterialAttributesSummaryProvenance());
  var entityObject = createEntityObject('composed', 'inhouse_material_registration_type', internallyComposedMaterialSummaryProvenance);

  return entityObject;
}

const createInternallyDerivedMaterialSummaryProvenanceEntityObject = () => {
  const internallyDerivedMaterialSummaryProvenance = () => Object.assign({}, hasInternallyDerivedMaterialAttributesSummaryProvenance());
  var entityObject = createEntityObject('derived', 'inhouse_material_registration_type', internallyDerivedMaterialSummaryProvenance);

  return entityObject;
}


const createAliasMaterialEntityObject = () => {
  const aliasMaterial = () => Object.assign({}, hasAliasAttributes());
  var entityObject = createEntityObject('alias', 'action', aliasMaterial);
  // Alias registered material //'action'

  return entityObject;
}


