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
 * @fileoverview Functions to handle the visibility of columns.
 * @author Abigail Elizabeth 
 */

/**  
 * Chnage the visibility of columns.
 */
const changeVisibilityOfColumns = () => {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var sheetName = activeSheet.getName();
  var currentValue = activeSheet.getActiveRange().getValue();
  var currentColumnNumber = activeSheet.getActiveRange().getColumn();
  var currentColumnName = activeSheet.getRange(1, currentColumnNumber, 1, 1).getValue();
  var currentRowNumber = activeSheet.getActiveRange().getRow();

  if (sheetName === 'conceptDefinition') {
    var entityObjectsToShow = determineEntityObjectToBeVisibileForConceptDefinition(currentColumnName, currentValue);
    hideColumnsForConceptDefinition(activeSheet, currentColumnName);

  } else if (sheetName === 'materialDefinition') {
    var entityObjectsToShow = determineEntityObjectToBeVisibileForMaterialDefinition(currentColumnName, currentValue);
    hideColumnsForMaterialDefinition(activeSheet, currentColumnName);

  } else if (sheetName === 'processDefinition') {
    var entityObjectsToShow = determineEntityObjectToBeVisibileForProcessDefinition(currentColumnName, currentValue);
    hideColumnsForProcessDefinition(activeSheet, currentColumnName);

  } else if (sheetName === 'workflowManagement') {
    var entityObjectsToShow = determineEntityObjectToBeVisibileForWorkflowManagement(currentColumnName, currentValue, currentRowNumber, currentColumnNumber);
    hideColumnsForWorkflowManagement(activeSheet, currentColumnName, currentRowNumber);

  } else if (sheetName === 'processExecution') {
    var entityObjectsToShow = determineEntityObjectToBeVisibileForProcessExecution(currentColumnName, currentValue);
    hideColumnsForProcessExecution(activeSheet, currentColumnName);

  }

  for (var currentEntityObjectToShowIndex in entityObjectsToShow) {
    // show the columns
    let currentEntityObjectToShow = entityObjectsToShow[currentEntityObjectToShowIndex];
    let attributeObjects = getObjectsFromObjectFunctionsByKey(currentEntityObjectToShow, 'attributes');
    const columnsToBeVisibleNames = Object.keys(attributeObjects);
    const columnsToBeVisibleNumbers = columnNameToColumnNumber(activeSheet, columnsToBeVisibleNames)
    showManyColumns(activeSheet, columnsToBeVisibleNumbers)

  }

}

/**  
 * Determine what columns to display for an entity-object in the conceptDefinition sheet.
 * @param {string} currentColumnName - The name of the column that was most recently edited.
 * @param {string} currentValue - The name value in the most recently edited cell.
 * @return {Object} entityObjectsToShow - The entity-object whose columns should be displayed.
 * @todo For var functionsToReturnEntityObject, need a function that gathers into an array
 * only the functions relevant to the active spreadsheet's config. Right now, the var is specific
 * to config'ing the organism package.
 */
const determineEntityObjectToBeVisibileForConceptDefinition = (currentColumnName, currentValue) => {
  const namesOfColumnsThatDetermineVisibilityConceptDefinition = ['concept_type', 'biological_taxon_type', 'material_type', 'organismal_entity_type', 'has_taxonomy_identifier_as_reference', 'biological_taxon_as_reference', 'other_organism_grouping', 'has_species_taxonomy_id', 'has_other_organism_grouping', 'other_organism_grouping_reference'];

  // Show the columns for conceptDefinition Sheet
  if (namesOfColumnsThatDetermineVisibilityConceptDefinition.indexOf(currentColumnName) > -1) {
    const functionsToReturnEntityObject = [getCurrentEntityObjectColumnVisibilityConceptDefinitionCore, getCurrentEntityObjectColumnVisibilityConceptDefinitionOrganismPackag];

    var entityObjectsToShow = determineEntityObjectGivenFunctions(functionsToReturnEntityObject, currentColumnName, currentValue);

  }
  return entityObjectsToShow;

}

/**  
 * Determine what columns to display for an entity-object in the materialDefinition sheet.
 * @param {string} currentColumnName - The name of the column that was most recently edited.
 * @param {string} currentValue - The name value in the most recently edited cell.
 * @return {Object} entityObjectsToShow - The entity-object whose columns should be displayed.
 * @todo For var functionsToReturnEntityObject, need a function that gathers into an array
 * only the functions relevant to the active spreadsheet's config. 
 */

const determineEntityObjectToBeVisibileForMaterialDefinition = (currentColumnName, currentValue) => {
  const namesOfColumnsThatDetermineVisibilityMaterialDefinition = ['action', 'inhouse_material_registration_type'];


  // Show the columns for conceptDefinition Sheet
  if (namesOfColumnsThatDetermineVisibilityMaterialDefinition.indexOf(currentColumnName) > -1) {
    const functionsToReturnEntityObject = [getCurrentEntityObjectColumnVisibilityMaterialDefinitionCore, getCurrentEntityObjectColumnVisibilityMaterialDefinitionProvenanceSummary];
    var entityObjectsToShow = determineEntityObjectGivenFunctions(functionsToReturnEntityObject, currentColumnName, currentValue);


  }
  return entityObjectsToShow;

}

/**  
 * Determine what columns to display for an entity-object in the processDefinition sheet.
 * @param {string} currentColumnName - The name of the column that was most recently edited.
 * @param {string} currentValue - The name value in the most recently edited cell.
 * @return {Object} entityObjectsToShow - The entity-object whose columns should be displayed.
 * @todo For var functionsToReturnEntityObject, need a function that gathers into an array
 * only the functions relevant to the active spreadsheet's config. Right now, the var is specific
 * to config'ing the CIDC package.
 */
const determineEntityObjectToBeVisibileForProcessDefinition = (currentColumnName, currentValue) => {
  const namesOfColumnsThatDetermineVisibilityProcessDefinition = ['process_type', 'temperature_type', 'has_fixed_seed_amount', 'seed_amount_type', 'has_fixed_harvest_criteria', 'harvest_criteria_amount_type', 'has_fixed_growth_rate', 'has_fixed_temperature', 'has_fixed_pH', 'has_fixed_stirring', 'has_fixed_humidity', 'relative_humidity_amount_uom', 'humidity_type', 'has_fixed_gas_composition', 'gas_composition_unit_type', 'growth_rate_type'];

  // Show the columns for conceptDefinition Sheet
  if (namesOfColumnsThatDetermineVisibilityProcessDefinition.indexOf(currentColumnName) > -1) {
    const functionsToReturnEntityObject = [getCurrentEntityObjectColumnVisibilityProcessDefinitionCore, getCurrentEntityObjectColumnVisibilityProcessDefinitionCIDC];
    var entityObjectsToShow = determineEntityObjectGivenFunctions(functionsToReturnEntityObject, currentColumnName, currentValue);


  }
  return entityObjectsToShow;

}

/**  
 * Determine what columns to display for an entity-object in the workflowManagement sheet.
 * @param {string} currentColumnName - The name of the column that was most recently edited.
 * @param {string} currentValue - The name value in the most recently edited cell.
 * @return {Object} entityObjectsToShow - The entity-object whose columns should be displayed.
 */

const determineEntityObjectToBeVisibileForWorkflowManagement = (currentColumnName, currentValue, currentRowNumber) => {
  const namesOfColumnsThatDetermineVisibilityWorkflowManagement = ['workflow_entity_type', 'process_type', 'process_type_reference'];
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('workflowManagement');
  const entityTypeColumnNumber = columnNameToColumnNumber(sheet, ['workflow_entity_type']);
  const currentEntity = sheet.getRange(currentRowNumber, entityTypeColumnNumber, 1, 1).getValue();

  // Show the columns for conceptDefinition Sheet
  if (namesOfColumnsThatDetermineVisibilityWorkflowManagement.indexOf(currentColumnName) > -1 && currentEntity === 'process specification' && currentColumnName === 'process_type_reference' ||
    currentColumnName === 'workflow_entity_type') { // first condition handles displaying process ID columns for process specs; second condition handles everything else

    const functionsToReturnEntityObject = [getCurrentEntityObjectColumnVisibilityWorkflowManagement];
    var entityObjectsToShow = determineEntityObjectGivenFunctions(functionsToReturnEntityObject, currentColumnName, currentValue);

  }
  return entityObjectsToShow;

}

/**  
 * Determine what columns to display for an entity-object in the processExecution sheet.
 * @param {string} currentColumnName - The name of the column that was most recently edited.
 * @param {string} currentValue - The name value in the most recently edited cell.
 * @return {Object} entityObjectsToShow - The entity-object whose columns should be displayed.
 */
const determineEntityObjectToBeVisibileForProcessExecution = (currentColumnName, currentValue) => {
  const namesOfColumnsThatDetermineVisibilityProcessExecution = ['process_type'];


  // Show the columns for conceptDefinition Sheet
  if (namesOfColumnsThatDetermineVisibilityProcessExecution.indexOf(currentColumnName) > -1) {
    const functionsToReturnEntityObject = [getCurrentEntityObjectColumnVisibilityProcessExecution];
    var entityObjectsToShow = determineEntityObjectGivenFunctions(functionsToReturnEntityObject, currentColumnName, currentValue);

  }
  return entityObjectsToShow;

}

/**  
 * Determine what columns to hide in the conceptDefinition sheet.
 * @param {sheet} sheet - The sheet in which columns should be hidden.
 * @param {string} currentColumn name - The name of the column that was most recently edited.
 */
const hideColumnsForConceptDefinition = (sheet, currentColumnName) => {
  if (currentColumnName === 'concept_type') {
    // hide the columns
    hideAllColumnsExceptFirstN(sheet, 1)

  } else if (currentColumnName === 'organismal_entity_type') {
    let subtypeColumnNames = ['type_of_collection_of_organisms', 'biological_taxon_as_reference', 'species_reference'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'biological_taxon_type') {
    let subtypeColumnNames = ['species', 'strain'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'other_organism_grouping') {
    let subtypeColumnNames = ['strain', 'breed', 'cultivar', 'ecotype', 'isolate'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'has_species_taxonomy_id') {
    let subtypeColumnNames = ['species_reference'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  }

}


/**  
 * Determine what columns to hide in the materialDefinition sheet.
 * @param {sheet} sheet - The sheet in which columns should be hidden.
 * @param {string} currentColumn name - The name of the column that was most recently edited.
 */
const hideColumnsForMaterialDefinition = (sheet, currentColumnName) => {
  if (currentColumnName === 'action') {
    // hide the columns
    hideAllColumnsExceptFirstN(sheet, 1)

  } else if (currentColumnName === 'inhouse_material_registration_type') {
    let columnsToHide = columnNameToColumnNumber(sheet, ['catalog_number_inhouse_item']);
    hideManyColumns(sheet, columnsToHide)

  }

}

/**  
 * Determine what columns to hide in the processDefinition sheet.
 * @param {sheet} sheet - The sheet in which columns should be hidden.
 * @param {string} currentColumn name - The name of the column that was most recently edited.
 * @todo Need to replace hard-coded subtypeColumnName with function that dynamically
 * fetches the subtype column names via the entity objects.
 */
const hideColumnsForProcessDefinition = (sheet, currentColumnName) => {
  if (currentColumnName === 'process_type') {
    // hide the columns
    hideAllColumnsExceptFirstN(sheet, 1)

  } else if (currentColumnName === 'seed_amount_type') {
    let subtypeColumnNames = ['seed_amount_ratio', 'seed_amount_count', 'seed_amount_ratio_uom', 'ratio_result_type'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'temperature_type') {
    let subtypeColumnNames = ['temperature_amount_numerical', 'temperature_amount_uom_numerical', 'temperature_amount_textual'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'has_fixed_growth_rate') {
    let subtypeColumnNames = ['growth_rate_type', 'growth_rate_amount_textual', 'growth_rate_amount_numerical', 'growth_rate_amount_uom_numerical'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'growth_rate_type') {
    let subtypeColumnNames = ['growth_rate_amount_textual', 'growth_rate_amount_numerical', 'growth_rate_amount_uom_numerical'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'has_fixed_pH') {
    let subtypeColumnNames = ['pH'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'has_fixed_stirring') {
    let subtypeColumnNames = ['stirring_amount', 'stirring_amount_uom'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'has_fixed_humidity') {
    let subtypeColumnNames = ['humidity_type', 'relative_humidity_amount_individual_number', 'relative_humidity_amount_uom'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'relative_humidity_amount_uom') {
    let subtypeColumnNames = ['relative_humidity_amount_individual_number'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'humidity_type') {
    let subtypeColumnNames = ['relative_humidity_amount_individual_number', 'relative_humidity_amount_uom'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'has_fixed_gas_composition') {
    let subtypeColumnNames = ['gas_composition_unit_type', 'gas_component_common_name', 'gas_composition_percent_amount'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  } else if (currentColumnName === 'gas_composition_unit_type') {
    let subtypeColumnNames = ['gas_composition_percent_amount'];

    let columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);
    hideManyColumns(sheet, columnsToHide)

  }

}

/**  
 * Determine what columns to hide in the workflowManagement sheet.
 * @param {sheet} sheet - The sheet in which columns should be hidden.
 * @param {string} currentColumn name - The name of the column that was most recently edited.
 */
const hideColumnsForWorkflowManagement = (sheet, currentColumnName) => {

  if (currentColumnName === 'workflow_entity_type') {
    // hide the columns
    hideAllColumnsExceptFirstN(sheet, 1)

  } else if (currentColumnName === 'process_type' || currentColumnName === 'process_type_reference') {
    var subtypeColumnNames = ['establishing_culture_growth_environment_id', 'seed_id', 'fermentation_id', 'weight_measurement_id', 'resuspension_id', 'aliquoting_id', 'snap_freeze_id', 'storage_id', 'wash_id', 'specimen_pooling_id', 'counting_id', 'freeze_drying_id', 'substance_combination_id', 'open_id', 'volume_measurement_id', 'transfer_id', 'spot_bleach_id', 'microbial_culture_procedure_id', 'autoclave_id', 'centrifugation_id', 'bead_based_homogenization_id', 'solvent_preparation_id', 'solvent_extraction_id', 'harvest_culture_growth_environment_id', 'fermentation_id', 'optical_density_measurement_id', 'passage_id', 'contamination_measurement_id'];

    var columnsToHide = columnNameToColumnNumber(sheet, subtypeColumnNames);

    hideManyColumns(sheet, columnsToHide)

  }

}

/**  
 * Determine what columns to hide in the processExecution sheet.
 * @param {sheet} sheet - The sheet in which columns should be hidden.
 * @param {string} currentColumn name - The name of the column that was most recently edited.
 */
const hideColumnsForProcessExecution = (sheet, currentColumnName) => {
  if (currentColumnName === 'process_type' || currentColumnName === 'process_type_reference') {
    // hide the columns
    hideAllColumnsExceptFirstN(sheet, 9);

    if (currentColumnName === 'process_type_reference') {
      var columnsToHide = columnNameToColumnNumber(sheet, ['process_type']);
      hideManyColumns(sheet, columnsToHide);
    }

  }

}


const changeVisibilityOfColumnsOld = () => {
  var activeSheet = SpreadsheetApp.getActiveSheet();
  var sheetName = activeSheet.getName();
  var currentValue = activeSheet.getActiveRange().getValue();
  var currentColumnNumber = activeSheet.getActiveRange().getColumn();
  var currentColumnName = activeSheet.getRange(1, currentColumnNumber, 1, 1).getValue();
  var currentRowNumber = activeSheet.getActiveRange().getRow();
  var currentConceptType = activeSheet.getRange(currentRowNumber, 1, 1, 1).getValue();

  const columnNamesForVisibilityDeterminersConceptDefinition = ['concept_type', 'workflow_entity_type', 'material_type', 'other_organism_groupings', 'biological_taxon_type', 'other_organism_groupings', 'organismal_entity_type',
    'has_taxonomy_identifier', 'biological_taxon_for_organismal_entity'];
  const columnNamesForVisibilityDeterminersProcessDefinition = ['process_type', 'temperature_type'];

  if ((columnNamesForVisibilityDeterminersConceptDefinition.indexOf(currentColumnName) > -1) ||
    (sheetName !== 'workflowManagement' && columnNamesForVisibilityDeterminersProcessDefinition.indexOf(currentColumnName) > -1)) {
    showInProgressDialog('Changing visibility of columns');

    if (sheetName == 'conceptDefinition') {
      if (currentColumnName == 'taxonomic_rank') {
        currentValue = 'taxonomic rank ' + currentValue
      } else if (currentColumnName == 'organism_group') {
        currentValue = 'organism group ' + currentValue;
      } else if (currentColumnName == 'has_taxonomy_identifier') {
        currentValue = 'has taxonomy identifier ' + currentValue;
      } else if (currentColumnName == 'material_supplier' && currentValue != 'in-house') {
        currentValue = 'catalog number external material';
      } else if (currentConceptType == 'catalog number' && currentColumnName == 'strain_type') {
        currentValue = 'organismal entity ' + currentValue;
      } else if (currentColumnName == 'biological_taxon_for_organismal_entity') {
        currentValue = 'biological taxon for organismal entity ' + currentValue;

      }
    }
  }

  if (sheetName == 'conceptDefinition') {

    if (currentColumnName == 'material_supplier' && currentValue != 'in-house') {

      currentValue = 'catalog number external material';
    }
    var toShowEntityObject = getCurrentEntityObjectColumnVisibilityConceptDefinitionCore(currentValue);
    //SpreadsheetApp.getUi().alert('toShowEntityObject:' +toShowEntityObject)
    //if (toShowEntityObject === 'none') {
    //var toShowEntityObject = getCurrentEntityObjectColumnVisibilityConceptDefinitionOrganismPackage//(currentValue);

    //}

  } else if (sheetName == 'materialDefinition') {
    var toShowEntityObject = getCurrentEntityObjectColumnVisibilityMaterialDefinitionCore(currentValue)

  } else if (sheetName == 'processDefinition') {
    if (currentColumnName == 'has_fixed_seed_amount') {
      currentValue = 'fixed seed ' + currentValue
    } else if (currentColumnName == 'seed_amount_type') {
      currentValue = 'seed ' + currentValue
    } else if (currentColumnName == 'has_fixed_pH') {
      currentValue = 'fixed ph ' + currentValue
    } else if (currentColumnName == 'has_fixed_gas_composition') {
      currentValue = 'fixed gas composition ' + currentValue
    } else if (currentColumnName == 'has_fixed_stirring') {
      currentValue = 'fixed stirring ' + currentValue
    } else if (currentColumnName == 'has_fixed_temperature') {
      currentValue = 'fixed temperature ' + currentValue
    } else if (currentColumnName == 'temperature_type') {
      currentValue = 'temperature ' + currentValue
    } else if (currentColumnName == 'has_fixed_harvest_criteria') {
      currentValue = 'fixed harvest criteria ' + currentValue
    } else if (currentColumnName == 'harvest_criteria_amount_type') {
      currentValue = 'harvest criteria ' + currentValue
    } else if (currentColumnName == 'gas_composition_unit_type') {
      currentValue = 'gas composition unit ' + currentValue
    }

    var toShowEntityObject = getCurrentEntityObjectColumnVisibilityProcessDefinitionCore(currentValue)
  } else if (sheetName == 'workflowManagement') {
    var toShowEntityObject = getCurrentEntityObjectColumnVisibilityWorkflowManagement(currentValue)
  } else if (sheetName == 'processExecution') {
    var toShowEntityObject = getCurrentEntityObjectColumnVisibilityProcessExecution(currentValue)
  }


  const allColumnsExceptFirst = []
  const lastColumnNumber = activeSheet.getLastColumn()
  for (let i = 2; i <= lastColumnNumber; i++) {
    allColumnsExceptFirst.push(i)
  }
  // don't hide all columns
  let subtypeDeterminerColumn = ['biological_taxon_type', 'strain_type', 'taxonomic_rank', 'material_type', 'organism_group', 'has_strain_taxonomy_id', 'material_supplier', 'device_type', 'container_type', 'inhouse_material_registration_type', 'has_fixed_seed_amount', 'seed_amount_type', 'has_fixed_pH', 'has_fixed_gas_composition', 'has_fixed_stirring', 'has_fixed_temperature', 'temperature_type', 'has_fixed_harvest_criteria', 'harvest_criteria_amount_type', 'gas_composition_unit_type', 'substance_type', 'has_species_taxonomy_id']
  if (subtypeDeterminerColumn.indexOf(currentColumnName) == -1 && sheetName != 'processDefinition' && sheetName != 'materialDefinition' && sheetName != 'workflowManagement' && sheetName != 'processExecution') { //&& toShowEntityObject != 'none'
    hideManyColumns(activeSheet, allColumnsExceptFirst)

  } else if (subtypeDeterminerColumn.indexOf(currentColumnName) == -1 && (sheetName == 'processDefinition' && currentColumnName == 1) || sheetName == 'processExecution' && toShowEntityObject != 'none' || sheetName == 'materialDefinition') {

    const allColumnsExceptFirstTwo = []
    const lastColumnNumber = activeSheet.getLastColumn()
    for (let i = 3; i <= lastColumnNumber; i++) {
      allColumnsExceptFirstTwo.push(i)
    }
    hideManyColumns(activeSheet, allColumnsExceptFirstTwo)


  }

  // Show columns
  //SpreadsheetApp.getUi().alert('activeSheet: '+activeSheet)
  var attributeObjects = getObjectsFromObjectFunctionsByKey(toShowEntityObject, 'attributes');
  const columnsToBeVisibleNames = Object.keys(attributeObjects);
  const columnsToBeVisibleNumbers = columnNameToColumnNumber(activeSheet, columnsToBeVisibleNames)
  showManyColumns(activeSheet, columnsToBeVisibleNumbers)

  //var output = HtmlService.createHtmlOutput('<script>google.script.host.close();</script>');

  //SpreadsheetApp.getUi().showModalDialog(output, 'Changing visibility of columns'+ sheetName);
  const contextPackgages = getValueFromSpreadsheetProperty("scubed_packages")
  // show extra columns for conext packages
  if (sheetName === 'conceptDefinition' && contextPackgages.indexOf('organism items') > -1) {
    //SpreadsheetApp.getUi().alert('currentConceptType: '+currentConceptType)
    //SpreadsheetApp.getUi().alert('currentColumnName: '+currentColumnName)


    if (currentColumnName == 'other_organism_groupings') {
      currentValue = 'other organism groupings ' + currentValue
    } else if (currentColumnName == 'organism_group') {
      currentValue = 'organism group ' + currentValue;
    } else if (currentColumnName == 'has_strain_taxonomy_id') {
      currentValue = 'has strain taxonomy ' + currentValue;
    } else if (currentConceptType == 'catalog number' && currentColumnName == 'strain_type') {
      currentValue = 'organismal entity ' + currentValue;
    } else if (currentConceptType == 'biological taxon' && currentColumnName == 'biological_taxon_type') {

      currentValue = 'biological taxon type ' + currentValue;

    } /*else if (currentConceptType !== 'item' || currentConceptType !== 'biological taxon' || currentConceptType !== 'organization') { // not a subtype column
     const allColumnsExceptFirst = []
      const lastColumnNumber = activeSheet.getLastColumn()
        for (let i = 2; i <= lastColumnNumber; i++) {
          allColumnsExceptFirst.push(i)
        }
        hideManyColumns(activeSheet,allColumnsExceptFirst) 

    }*/

    var toShowEntityObject = getCurrentEntityObjectColumnVisibilityConceptDefinitionOrganismPackag(currentValue);
    ////SpreadsheetApp.getUi().alert('toShowEntityObject: '+JSON.stringify(toShowEntityObject))

    var attributeObjects = getObjectsFromObjectFunctionsByKey(toShowEntityObject, 'attributes');
    const columnsToBeVisibleNames = Object.keys(attributeObjects);
    const columnsToBeVisibleNumbers = columnNameToColumnNumber(activeSheet, columnsToBeVisibleNames)
    showManyColumns(activeSheet, columnsToBeVisibleNumbers)

  }

  closeCeleganDialog('Changing visibility of columns')

}