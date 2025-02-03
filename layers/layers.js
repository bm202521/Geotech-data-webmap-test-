var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.547000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GeoTechReportsRegisters_13_1 = new ol.format.GeoJSON();
var features_GeoTechReportsRegisters_13_1 = format_GeoTechReportsRegisters_13_1.readFeatures(json_GeoTechReportsRegisters_13_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeoTechReportsRegisters_13_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeoTechReportsRegisters_13_1.addFeatures(features_GeoTechReportsRegisters_13_1);
cluster_GeoTechReportsRegisters_13_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_GeoTechReportsRegisters_13_1
});
var lyr_GeoTechReportsRegisters_13_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GeoTechReportsRegisters_13_1, 
                style: style_GeoTechReportsRegisters_13_1,
                popuplayertitle: 'GeoTech Reports Registers_1.3',
                interactive: true,
    title: 'GeoTech Reports Registers_1.3<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_0.png" /> Geology - Desktop<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_1.png" /> Geophysical<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_2.png" /> Geotechnical Investigation<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_3.png" /> Interpretative<br />\
    <img src="styles/legend/GeoTechReportsRegisters_13_1_4.png" /> Sediment - Acid<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_GeoTechReportsRegisters_13_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GeoTechReportsRegisters_13_1];
lyr_GeoTechReportsRegisters_13_1.set('fieldAliases', {'ID': 'ID', 'Client': 'Client', 'Consultant': 'Consultant', 'Date': 'Date', 'Report Category': 'Report Category', 'Project Name': 'Project Name', 'Report Name': 'Report Name', 'Boreholes': 'Boreholes', 'Geology': 'Geology', 'CPT_SPT_DCP': 'Penetration Test', 'Shear Vane': 'Shear Vane', 'Geophysical': 'Geophysical', 'Test Pits': 'Test Pits', 'Vibrocore': 'Vibrocore', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Hyperlink': 'Hyperlink', });
lyr_GeoTechReportsRegisters_13_1.set('fieldImages', {'ID': 'TextEdit', 'Client': 'TextEdit', 'Consultant': 'TextEdit', 'Date': 'TextEdit', 'Report Category': 'TextEdit', 'Project Name': 'TextEdit', 'Report Name': 'TextEdit', 'Boreholes': 'TextEdit', 'Geology': 'TextEdit', 'CPT_SPT_DCP': 'TextEdit', 'Shear Vane': 'TextEdit', 'Geophysical': 'TextEdit', 'Test Pits': 'TextEdit', 'Vibrocore': 'TextEdit', 'Longitude': 'Hidden', 'Latitude': 'Hidden', 'Hyperlink': 'TextEdit', });
lyr_GeoTechReportsRegisters_13_1.set('fieldLabels', {'ID': 'inline label - visible with data', 'Client': 'inline label - visible with data', 'Consultant': 'inline label - visible with data', 'Date': 'no label', 'Report Category': 'no label', 'Project Name': 'no label', 'Report Name': 'no label', 'Boreholes': 'no label', 'Geology': 'no label', 'CPT_SPT_DCP': 'no label', 'Shear Vane': 'no label', 'Geophysical': 'no label', 'Test Pits': 'no label', 'Vibrocore': 'no label', 'Hyperlink': 'no label', });
lyr_GeoTechReportsRegisters_13_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});