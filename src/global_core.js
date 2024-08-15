const globalCubeCoreEntities = {};

const addGetter_ = (name, value, object = inputObject) => {
  Object.defineProperty(object, name, {
    enumerable: true,
    configurable: true,

    get() {
      delete this[name];
      return (this[name] = value());
    },

  });

  return object;
};

[
  ['conceptDefinition', () => ['concept_type person', 'concept_type', 'concept_type organization',
    'concept_type investigation', 'concept_type study', 'concept_type item',
    'concept_type contact', 'concept_type organization', 'concept_type item',
    'concept_type funding source', 'concept_type digital data repository',
    'concept_type accession', 'concept_type url']],
  ['materialDefinition', () => myObj = {
    summaryLevel: ['action Register externally sourced material',
      'action Register internally generated material',
      'inhouse_material_registration_type orphan',
      'inhouse_material_registration_type composed',
      'inhouse_material_registration_type derived'],
    activityLevel: ['action Register externally sourced material',
      'action Register internally generated material',
      'inhouse_material_registration_type orphan',
      'inhouse_material_registration_type composed',
      'inhouse_material_registration_type derived']
  }]//,
  //['processDefinition', () => globalCubeCoreEntities.MasterSheet.getRange('A1:A5')],
  //['workflowManagement', () => globalCubeCore.MasterRangeColA1_5.getValues()],
  //['processExecution', () => globalCubeCore.MasterRangeColA1_5.getValues()]
].forEach(([n, v]) => addGetter_(n, v, globalCubeCoreEntities));


const globalCubeCoreAttributes = {};

[
  ['conceptDefinition', () => ['concept_type', 'organization_id', 'organization_title', 'orcid',
    'person_reference', 'investigation_title', 'material_supplier',
    'catalog_number', 'is_external_catalog_number', 'study_title',
    'investigation_reference', 'funding_organization_id', 'funding_id',
    'digital_data_repository_name', 'digital_data_repository_reference',
    'accession', 'url', 'helper_is_mini_table_header', 'helper_mini_table_guid'
  ]],
  ['materialDefinition', () => ['action', 'catalog_number_inhouse_item', 'inhouse_material_registration_type',
    'catalog_number_noninhouse_item', 'lot_number', 'lot_number_reference', 'barcode',
    'helper_is_mini_table_header', 'helper_mini_table_guid', 'comment']],
  ['processDefinition', () => ['process_type', 'process_id', 'helper_is_mini_table_header', 'helper_mini_table_guid']],
  ['dataValidation', () => ['process_type_value', 'process_type_is_ontology_term', 'process_type_url']],
  ['workflowManagement', () => myObj = {
    activityLevel: ['workflow_entity_type', 'workflow_name', 'process_specification_name',
      'workflow_name_reference', 'process_type', 'process_type_reference',
      'workflow_sequence_number',
      'helper_is_mini_table_header', 'helper_mini_table_guid'],
    summaryLevel: ['workflow_entity_type', 'workflow_name', 'process_specification_name',
      'workflow_name_reference', 'process_type', 'process_type_reference',
      'workflow_sequence_number',
      'summary_of_provenance_name', 'process_specification_reference',
      'helper_is_mini_table_header', 'helper_mini_table_guid']
  }]
].forEach(([n, v]) => addGetter_(n, v, globalCubeCoreAttributes));



const testme = () => {
  //globalCubeCoreEntities.materialDefinition.summaryLevel
  console.log(globalCubeInVitroCellCultureAttributes.workflowManagement)
}

const globalCubeOrganismEntities = {};
[
  ['conceptDefinition', () => ['concept_type item', 'concept_type biological taxon', 'breed', 'cultivar',
    'ecotype', 'strain', 'material_type organismal entity', 'taxonomic rank strain',
    'taxonomic rank species', 'biological_taxon_type strain', 'biological_taxon_type species',
    'concept_type other organism groupings', 'organismal_entity_type collection of organisms',
    'has_taxonomy_identifier_as_reference TRUE', 'biological_taxon_as_reference strain',
    'biological_taxon_as_reference species', 'other_organism_grouping breed', 'other_organism_grouping strain',
    'other_organism_grouping ecotype', 'other_organism_grouping cultivar', 'other_organism_grouping isolate',
    'other_organism_grouping breed_reference', 'other_organism_grouping_reference strain_reference',
    'other_organism_grouping_reference ecotype', 'other_organism_grouping_reference cultivar',
    'other_organism_grouping_reference isolate', 'has_species_taxonomy_id TRUE', 'has_other_organism_grouping TRUE']]
].forEach(([n, v]) => addGetter_(n, v, globalCubeOrganismEntities));

const globalCubeOrganismAttributes = {};

[
  ['conceptDefinition', () => ['material_type', 'organismal_entity_type', 'type_of_collection_of_organisms', 'biological_taxon_for_organismal_entity', 'has_taxonomy_identifier', 'has_taxonomy_identifier_as_reference', 'biological_taxon_as_reference', 'strain_taxonomy_reference', 'other_organism_grouping', 'breed', 'cultivar', 'ecotype', 'isolate', 'has_species_taxonomy_id', 'has_strain_taxonomy_id', 'species_reference', 'has_other_organism_grouping', 'other_organism_grouping_reference', 'breed_reference', 'cultivar_reference', 'ecotype_reference', 'strain_reference', 'isolate_reference', 'biological_taxon_type', 'species', 'strain', 'curator_organization_taxonomy_reference', 'taxonomy_id']]
].forEach(([n, v]) => addGetter_(n, v, globalCubeOrganismAttributes));

const globalCubeInVitroCellCulture = {};

[
  ['processDefinition', () => ['has_fixed_seed_amount TRUE', 'seed_amount_type ratio', 'seed_amount_type count',
    'fixed ph true', 'fixed gas composition true', 'fixed stirring true', 'fixed temperature true', 'temperature numerical',
    'fixed harvest criteria true', 'harvest criteria ratio', 'gas composition unit percent', 'process_type establishing culture growth environment',
    'process_type seed', 'process_type fermentation', 'process_type weight measurement', 'process_type contamination measurement',
    'process_type resuspension', 'process_type aliquoting', 'process_type snap freeze', 'process_type storage', 'process_type wash',
    'process_type specimen pooling', 'process_type counting', 'process_type Freeze-Drying', 'process_type substance combination',
    'process_type open', 'process_type volume measurement', 'process_type transfer', 'process_type spot bleach',
    'process_type microbial culture procedure', 'process_type autoclave', 'process_type centrifugation', 'process_type passage',
    'process_type bead-based homogenization', 'process_type solvent preparation', 'process_type solvent extraction',
    'process_type harvest culture growth environment', 'has_fixed_harvest_criteria TRUE', 'temperature_type numerical',
    'temperature_type textual', 'has_fixed_growth_rate TRUE', 'has_fixed_stirring TRUE', 'has_fixed_humidity TRUE',
    'relative_humidity_amount_uom percentage unit', 'humidity_type relative humidity', 'gas_composition_unit_type TRUE',
    'gas_composition_unit_type percent', 'growth_rate_type numerical', 'growth_rate_type textual', 'has_fixed_pH TRUE',
    'has_fixed_gas_composition TRUE', 'gas_composition_unit_type percent', 'relative_humidity_amount_uom percentage unit',
    'has_fixed_temperature TRUE', 'process_type optical density measurement', 'has_taxonomy_identifier_as_reference TRUE']],

  ['workflowManagement', () => ['workflow_entity_type reporting workflow', 'workflow_entity_type process specification', 'process_type_reference establishing culture growth environment', 'process_type_reference seed', 'process_type_reference fermentation', 'process_type_reference weight measurement', 'process_type_reference resuspension', 'process_type_reference aliquoting', 'process_type_reference snap freeze', 'process_type_reference storage', 'process_type_reference wash', 'process_type_reference specimen pooling', 'process_type_reference counting', 'process_type_reference Freeze-Drying', 'process_type_reference substance combination', 'process_type_reference open', 'process_type_reference passage', 'process_type_reference volume measurement', 'process_type_reference transfer', 'process_type_reference spot bleach', 'process_type_reference microbial culture procedure', 'process_type_reference autoclave', 'process_type_reference centrifugation', 'process_type_reference bead-based homogenization', 'process_type_reference solvent preparation', 'process_type_reference solvent extraction', 'process_type_reference harvest culture growth environment', 'process_type_reference fermentation', 'process_type_reference optical density measurement']],

  ['processExecution', () => ['process_type snap freeze', 'process_type specimen pooling', 'process_type passage', 'process_type optical density measurement', 'process_type contamination measurement', 'process_type establishing culture growth environment', 'process_type seed', 'process_type fermentation', 'process_type harvest culture growth environment', 'process_type resuspension', 'process_type aliquoting', 'process_type storage', 'process_type passage', 'process_type spot bleach', 'process_type wash', 'process_type counting', 'process_type microbial culture procedure', 'process_type Freeze-Drying', 'process_type substance combination', 'process_type open', 'process_type weight measurement', 'process_type volume measurement', 'process_type transfer', 'process_type autoclave', 'process_type centrifugation', 'process_type bead-based homogenization', 'process_type solvent preparation', 'process_type solvent extraction']]
].forEach(([n, v]) => addGetter_(n, v, globalCubeInVitroCellCulture));

const globalCubeInVitroCellCultureAttributes = {};

[
  ['processDefinition', () => ['medium_total_volume', 'medium_total_volume_uom', 'has_fixed_seed_amount', 'seed_amount_type', 'seed_amount_ratio', 'seed_amount_count', 'seed_amount_ratio_uom', 'has_fixed_growth_rate', 'growth_rate_type', 'growth_rate_amount_numerical', 'growth_rate_amount_uom_numerical', 'growth_rate_amount_textual', 'has_fixed_pH', 'pH', 'has_fixed_gas_composition', 'gas_composition_unit_type', 'gas_component_common_name', 'gas_composition_percent_amount', 'has_fixed_humidity', 'humidity_type', 'relative_humidity_amount_individual_number', 'relative_humidity_amount_uom', 'has_fixed_stirring', 'stirring_amount', 'stirring_amount_uom', 'has_fixed_temperature', 'temperature_type', 'temperature_amount_numerical', 'temperature_amount_uom_numerical', 'has_fixed_harvest_criteria', 'harvest_criteria_relationship', 'harvest_criteria_amount_type', 'harvest_criteria_amount_ratio', 'harvest_criteria_amount_uom_ratio', 'ratio_result_type', 'temperature_amount_textual', 'per_wash_solution_volume_amount', 'per_wash_solution_volume_amount_uom', 'pressure_amount', 'pressure_amount_uom', 'autoclave_cycle_type', 'speed_amount', 'speed_amount_uom', 'solution_volume_amount', 'solution_volume_amount_uom', 'solvent_prep_process_id', 'optical_density']],

  ['workflowManagement', () => ['passage_id', 'establishing_culture_growth_environment_id', 'optical_density_measurement_id', 'contamination_measurement_id', 'seed_id', 'fermentation_id', 'harvest_culture_growth_environment_id', 'weight_measurement_id', 'resuspension_id', 'aliquoting_id', 'snap_freeze_id', 'storage_id', 'wash_id', 'specimen_pooling_id', 'counting_id', 'substance_combination_id', 'open_id', 'volume_measurement_id', 'transfer_id', 'spot_bleach_id', 'microbial_culture_procedure_id', 'autoclave_id', 'centrifugation_id', 'bead_based_homogenization_id', 'solvent_preparation_id', 'solvent_extraction_id', 'freeze_drying_id']],

  ['processExecution', () => ['passage_id', 'establishing_culture_growth_environment_id', 'optical_density_measurement_id', 'contamination_measurement_id', 'seed_id', 'fermentation_id', 'harvest_culture_growth_environment_id', 'wash_id', 'weight_measurement_id', 'resuspension_id', 'substance_combination_id', 'aliquoting_id', 'spot_bleach_id', 'snap_freeze_id', 'freeze_drying_id', 'storage_id', 'microbial_culture_procedure_id', 'open_id', 'counting_id', 'specimen_pooling_id', 'volume_measurement_id', 'transfer_id', 'autoclave_id', 'bead_based_homogenization_id', 'solvent_preparation_id', 'solvent_extraction_id', 'centrifugation_id', 'input_material_lot_number', 'input_container_lot_number', 'input_substance_lot_number', 'input_media_lot_number', 'input_solution_lot_number', 'input_organismal_entity_lot_number', 'input_growth_environment_lot_number', 'support_growth_environment_lot_number', 'support_lyophilizer_lot_number', 'support_autoclave_lot_number', 'support_centrifuge_lot_number', 'support_homogenizer_lot_number', 'output_organismal_entity_lot_number', 'output_pooled_specimen_lot_number', 'output_growth_environment_lot_number', 'output_substance_lot_number', 'optical_density_result', 'optical_density_uom', 'contamination_result', 'weight_result_type', 'weight_result_amount', 'weight_result_uom', 'count_result_amount', 'solution_volume_amount', 'solution_volume_uom', 'ambient_temperature_amount', 'ambient_temperature_uom', 'condensor_temperature_amount', 'condensor_temperature_uom', 'compressor_pressure_amount', 'compressor_pressure_uom', 'volume_result_amount', 'volume_result_uom', 'volume_result_type', 'comment']]
].forEach(([n, v]) => addGetter_(n, v, globalCubeInVitroCellCultureAttributes));

