var wms_layers = [];

var lyr_Ortoimagen_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/pnoa-ma",
                              attributions: ' ',
                              params: {
                                "LAYERS": "OI.OrthoimageCoverage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortoimagen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortoimagen_0, 0]);
var lyr_Callejero_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://www.ign.es/wms-inspire/ign-base",
                              attributions: ' ',
                              params: {
                                "LAYERS": "IGNBaseTodo-gris",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Callejero',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Callejero_1, 0]);
var format_SueloRstico_2 = new ol.format.GeoJSON();
var features_SueloRstico_2 = format_SueloRstico_2.readFeatures(json_SueloRstico_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SueloRstico_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SueloRstico_2.addFeatures(features_SueloRstico_2);
var lyr_SueloRstico_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SueloRstico_2, 
                style: style_SueloRstico_2,
                popuplayertitle: 'Suelo Rústico',
                interactive: true,
    title: 'Suelo Rústico<br />\
    <img src="styles/legend/SueloRstico_2_0.png" /> Suelo rústico preservado por ordenación territorial o urbanistica SRPOTU<br />\
    <img src="styles/legend/SueloRstico_2_1.png" /> Suelo rústico especialmente protegido por legislación sectorial SREPLS<br />\
    <img src="styles/legend/SueloRstico_2_2.png" /> Suelo rústico común SRC<br />'
        });
var format_SueloUrbano_3 = new ol.format.GeoJSON();
var features_SueloUrbano_3 = format_SueloUrbano_3.readFeatures(json_SueloUrbano_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SueloUrbano_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SueloUrbano_3.addFeatures(features_SueloUrbano_3);
var lyr_SueloUrbano_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SueloUrbano_3, 
                style: style_SueloUrbano_3,
                popuplayertitle: 'Suelo Urbano',
                interactive: true,
                title: '<img src="styles/legend/SueloUrbano_3.png" /> Suelo Urbano'
            });
var format_HulagoTM_4 = new ol.format.GeoJSON();
var features_HulagoTM_4 = format_HulagoTM_4.readFeatures(json_HulagoTM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HulagoTM_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HulagoTM_4.addFeatures(features_HulagoTM_4);
var lyr_HulagoTM_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HulagoTM_4, 
                style: style_HulagoTM_4,
                popuplayertitle: 'Huélago TM',
                interactive: true,
                title: '<img src="styles/legend/HulagoTM_4.png" /> Huélago TM'
            });
var lyr_Catastro_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Catastro',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_5, 0]);

lyr_Ortoimagen_0.setVisible(false);lyr_Callejero_1.setVisible(true);lyr_SueloRstico_2.setVisible(true);lyr_SueloUrbano_3.setVisible(true);lyr_HulagoTM_4.setVisible(true);lyr_Catastro_5.setVisible(true);
var layersList = [lyr_Ortoimagen_0,lyr_Callejero_1,lyr_SueloRstico_2,lyr_SueloUrbano_3,lyr_HulagoTM_4,lyr_Catastro_5];
lyr_SueloRstico_2.set('fieldAliases', {'id': 'id', 'categoria': 'categoria', 'subcategoria': 'subcategoria', 'figura': 'figura', 'clase': 'clase', 'nombre': 'nombre', 'etiqueta': 'etiqueta', 'superficie': 'superficie', 'porcent_en_termino': 'porcent_en_termino', 'datos_1': 'datos_1', 'datos_2': 'datos_2', });
lyr_SueloUrbano_3.set('fieldAliases', {'id': 'id', 'nucleo': 'nucleo', 'tipo': 'tipo', 'patrimonio': 'patrimonio', 'tipo_cueva': 'tipo_cueva', 'notas': 'notas', 'uso': 'uso', 'refcat': 'refcat', 'sup_parce_catastro': 'sup_parce_catastro', 'sup_parce_ordena': 'sup_parce_ordena', 'anno_construc': 'anno_construc', 'estado_construccion': 'estado_construccion', 'uso_construccion_previo': 'uso_construccion_previo', 'n_inm_conten_parc': 'n_inm_conten_parc', 'n_inm_conten_parc_uso_resid': 'n_inm_conten_parc_uso_resid', 'sup_constr_total_parcela': 'sup_constr_total_parcela', 'sup_edificacion': 'sup_edificacion', 'num_plantas': 'num_plantas', 'piscina': 'piscina', 'foto_catastro': 'foto_catastro', 'ficha_catastro': 'ficha_catastro', 'sistema_g_l': 'sistema_g_l', 'exist_propu': 'exist_propu', 'sistema_general': 'sistema_general', 'denominacion': 'denominacion', 'etiqueta': 'etiqueta', 'sg_uso_basico_gestion': 'sg_uso_basico_gestion', 'sg_titularidad': 'sg_titularidad', 'sg_uso_pormenor_basico': 'sg_uso_pormenor_basico', 'sg_uso_pormenor_gestion': 'sg_uso_pormenor_gestion', 'sl_uso_global': 'sl_uso_global', 'sl_uso_basico_gestion': 'sl_uso_basico_gestion', 'sl_titularidad': 'sl_titularidad', 'sl_uso_pormenor_basico': 'sl_uso_pormenor_basico', 'sl_uso_pormenor_gestion': 'sl_uso_pormenor_gestion', 'area_homogenea': 'area_homogenea', 'zona_homog_tipolog': 'zona_homog_tipolog', 'regimen_vivienda': 'regimen_vivienda', 'uso_particular_pormenor': 'uso_particular_pormenor', 'tipolog_n_plantas': 'tipolog_n_plantas', 'tipolog_porcen_ocupacion': 'tipolog_porcen_ocupacion', 'tipolog_edificabilidad': 'tipolog_edificabilidad', 'tipol_sup_vivienda_min_m2t': 'tipol_sup_vivienda_min_m2t', 'tipo_red_viaria': 'tipo_red_viaria', 'sup_edificab_techo': 'sup_edificab_techo', 'movilidad': 'movilidad', 'tipo_movilidad': 'tipo_movilidad', 'tipo_ctra': 'tipo_ctra', 'redes_clase': 'redes_clase', 'redes_tipo': 'redes_tipo', 'caracter': 'caracter', 'selec_epu': 'selec_epu', 'evu_titularidad': 'evu_titularidad', 'etiqueta_eie_dota': 'etiqueta_eie_dota', });
lyr_HulagoTM_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id_dera': 'id_dera', 'cod_mun': 'Cód. municipal', 'nombre': 'Municipio', 'provincia': 'Provincia', });
lyr_SueloRstico_2.set('fieldImages', {'id': 'TextEdit', 'categoria': 'ValueMap', 'subcategoria': 'UniqueValues', 'figura': 'UniqueValues', 'clase': 'UniqueValues', 'nombre': 'TextEdit', 'etiqueta': 'UniqueValues', 'superficie': 'TextEdit', 'porcent_en_termino': 'TextEdit', 'datos_1': 'Hidden', 'datos_2': 'Hidden', });
lyr_SueloUrbano_3.set('fieldImages', {'id': 'TextEdit', 'nucleo': 'TextEdit', 'tipo': 'TextEdit', 'patrimonio': 'TextEdit', 'tipo_cueva': 'TextEdit', 'notas': 'TextEdit', 'uso': 'TextEdit', 'refcat': 'TextEdit', 'sup_parce_catastro': 'TextEdit', 'sup_parce_ordena': 'TextEdit', 'anno_construc': 'TextEdit', 'estado_construccion': 'TextEdit', 'uso_construccion_previo': 'TextEdit', 'n_inm_conten_parc': 'TextEdit', 'n_inm_conten_parc_uso_resid': 'TextEdit', 'sup_constr_total_parcela': 'TextEdit', 'sup_edificacion': 'TextEdit', 'num_plantas': 'TextEdit', 'piscina': 'TextEdit', 'foto_catastro': 'TextEdit', 'ficha_catastro': 'TextEdit', 'sistema_g_l': 'TextEdit', 'exist_propu': 'TextEdit', 'sistema_general': 'TextEdit', 'denominacion': 'TextEdit', 'etiqueta': 'TextEdit', 'sg_uso_basico_gestion': 'TextEdit', 'sg_titularidad': 'TextEdit', 'sg_uso_pormenor_basico': 'TextEdit', 'sg_uso_pormenor_gestion': 'TextEdit', 'sl_uso_global': 'TextEdit', 'sl_uso_basico_gestion': 'TextEdit', 'sl_titularidad': 'TextEdit', 'sl_uso_pormenor_basico': 'TextEdit', 'sl_uso_pormenor_gestion': 'TextEdit', 'area_homogenea': 'TextEdit', 'zona_homog_tipolog': 'TextEdit', 'regimen_vivienda': 'TextEdit', 'uso_particular_pormenor': 'TextEdit', 'tipolog_n_plantas': 'TextEdit', 'tipolog_porcen_ocupacion': 'TextEdit', 'tipolog_edificabilidad': 'TextEdit', 'tipol_sup_vivienda_min_m2t': 'TextEdit', 'tipo_red_viaria': 'TextEdit', 'sup_edificab_techo': 'TextEdit', 'movilidad': 'TextEdit', 'tipo_movilidad': 'TextEdit', 'tipo_ctra': 'TextEdit', 'redes_clase': 'TextEdit', 'redes_tipo': 'TextEdit', 'caracter': 'TextEdit', 'selec_epu': 'TextEdit', 'evu_titularidad': 'TextEdit', 'etiqueta_eie_dota': 'TextEdit', });
lyr_HulagoTM_4.set('fieldImages', {'OBJECTID': 'Hidden', 'id_dera': 'Hidden', 'cod_mun': 'TextEdit', 'nombre': 'TextEdit', 'provincia': 'TextEdit', });
lyr_SueloRstico_2.set('fieldLabels', {'id': 'inline label - always visible', 'categoria': 'inline label - always visible', 'subcategoria': 'inline label - always visible', 'figura': 'inline label - always visible', 'clase': 'inline label - always visible', 'nombre': 'inline label - always visible', 'etiqueta': 'inline label - always visible', 'superficie': 'inline label - always visible', 'porcent_en_termino': 'inline label - always visible', });
lyr_SueloUrbano_3.set('fieldLabels', {'id': 'no label', 'nucleo': 'no label', 'tipo': 'inline label - always visible', 'patrimonio': 'no label', 'tipo_cueva': 'no label', 'notas': 'no label', 'uso': 'no label', 'refcat': 'no label', 'sup_parce_catastro': 'no label', 'sup_parce_ordena': 'no label', 'anno_construc': 'no label', 'estado_construccion': 'no label', 'uso_construccion_previo': 'no label', 'n_inm_conten_parc': 'no label', 'n_inm_conten_parc_uso_resid': 'no label', 'sup_constr_total_parcela': 'no label', 'sup_edificacion': 'no label', 'num_plantas': 'no label', 'piscina': 'no label', 'foto_catastro': 'no label', 'ficha_catastro': 'no label', 'sistema_g_l': 'no label', 'exist_propu': 'no label', 'sistema_general': 'no label', 'denominacion': 'no label', 'etiqueta': 'no label', 'sg_uso_basico_gestion': 'no label', 'sg_titularidad': 'no label', 'sg_uso_pormenor_basico': 'no label', 'sg_uso_pormenor_gestion': 'no label', 'sl_uso_global': 'no label', 'sl_uso_basico_gestion': 'no label', 'sl_titularidad': 'no label', 'sl_uso_pormenor_basico': 'no label', 'sl_uso_pormenor_gestion': 'no label', 'area_homogenea': 'no label', 'zona_homog_tipolog': 'no label', 'regimen_vivienda': 'no label', 'uso_particular_pormenor': 'no label', 'tipolog_n_plantas': 'no label', 'tipolog_porcen_ocupacion': 'no label', 'tipolog_edificabilidad': 'no label', 'tipol_sup_vivienda_min_m2t': 'no label', 'tipo_red_viaria': 'no label', 'sup_edificab_techo': 'no label', 'movilidad': 'no label', 'tipo_movilidad': 'no label', 'tipo_ctra': 'no label', 'redes_clase': 'no label', 'redes_tipo': 'no label', 'caracter': 'no label', 'selec_epu': 'no label', 'evu_titularidad': 'no label', 'etiqueta_eie_dota': 'no label', });
lyr_HulagoTM_4.set('fieldLabels', {'cod_mun': 'inline label - visible with data', 'nombre': 'inline label - always visible', 'provincia': 'inline label - always visible', });
lyr_HulagoTM_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
