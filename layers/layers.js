ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-1.425654, 6.814649, -1.416696, 6.819046]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Valves_2 = new ol.format.GeoJSON();
var features_Valves_2 = format_Valves_2.readFeatures(json_Valves_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Valves_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valves_2.addFeatures(features_Valves_2);
var lyr_Valves_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valves_2, 
                style: style_Valves_2,
                popuplayertitle: "Valves ",
                interactive: true,
                title: '<img src="styles/legend/Valves_2.png" /> Valves '
            });
var format_PumpHouses_3 = new ol.format.GeoJSON();
var features_PumpHouses_3 = format_PumpHouses_3.readFeatures(json_PumpHouses_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PumpHouses_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PumpHouses_3.addFeatures(features_PumpHouses_3);
var lyr_PumpHouses_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PumpHouses_3, 
                style: style_PumpHouses_3,
                popuplayertitle: "Pump Houses",
                interactive: true,
                title: '<img src="styles/legend/PumpHouses_3.png" /> Pump Houses'
            });
var format_DistributionLines_4 = new ol.format.GeoJSON();
var features_DistributionLines_4 = format_DistributionLines_4.readFeatures(json_DistributionLines_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DistributionLines_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistributionLines_4.addFeatures(features_DistributionLines_4);
var lyr_DistributionLines_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistributionLines_4, 
                style: style_DistributionLines_4,
                popuplayertitle: "Distribution Lines",
                interactive: true,
                title: '<img src="styles/legend/DistributionLines_4.png" /> Distribution Lines'
            });
var format_Transmissionlines_5 = new ol.format.GeoJSON();
var features_Transmissionlines_5 = format_Transmissionlines_5.readFeatures(json_Transmissionlines_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Transmissionlines_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transmissionlines_5.addFeatures(features_Transmissionlines_5);
var lyr_Transmissionlines_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transmissionlines_5, 
                style: style_Transmissionlines_5,
                popuplayertitle: "Transmission lines ",
                interactive: true,
                title: '<img src="styles/legend/Transmissionlines_5.png" /> Transmission lines '
            });
var format_BoosterStation_6 = new ol.format.GeoJSON();
var features_BoosterStation_6 = format_BoosterStation_6.readFeatures(json_BoosterStation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BoosterStation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoosterStation_6.addFeatures(features_BoosterStation_6);
var lyr_BoosterStation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoosterStation_6, 
                style: style_BoosterStation_6,
                popuplayertitle: "Booster Station",
                interactive: true,
                title: '<img src="styles/legend/BoosterStation_6.png" /> Booster Station'
            });
var format_NodesAppertunances_7 = new ol.format.GeoJSON();
var features_NodesAppertunances_7 = format_NodesAppertunances_7.readFeatures(json_NodesAppertunances_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NodesAppertunances_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NodesAppertunances_7.addFeatures(features_NodesAppertunances_7);
var lyr_NodesAppertunances_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NodesAppertunances_7, 
                style: style_NodesAppertunances_7,
                popuplayertitle: "Nodes/Appertunances",
                interactive: true,
                title: '<img src="styles/legend/NodesAppertunances_7.png" /> Nodes/Appertunances'
            });
var format_BoreholesSourcewater_8 = new ol.format.GeoJSON();
var features_BoreholesSourcewater_8 = format_BoreholesSourcewater_8.readFeatures(json_BoreholesSourcewater_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_BoreholesSourcewater_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoreholesSourcewater_8.addFeatures(features_BoreholesSourcewater_8);
var lyr_BoreholesSourcewater_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoreholesSourcewater_8, 
                style: style_BoreholesSourcewater_8,
                popuplayertitle: "  Boreholes/Source water",
                interactive: true,
                title: '<img src="styles/legend/BoreholesSourcewater_8.png" />   Boreholes/Source water'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Valves_2.setVisible(true);lyr_PumpHouses_3.setVisible(true);lyr_DistributionLines_4.setVisible(true);lyr_Transmissionlines_5.setVisible(true);lyr_BoosterStation_6.setVisible(true);lyr_NodesAppertunances_7.setVisible(true);lyr_BoreholesSourcewater_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_Valves_2,lyr_PumpHouses_3,lyr_DistributionLines_4,lyr_Transmissionlines_5,lyr_BoosterStation_6,lyr_NodesAppertunances_7,lyr_BoreholesSourcewater_8];
lyr_Valves_2.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Descriptio': 'Descriptio', 'Facility T': 'Facility T', 'Valve Type': 'Valve Type', 'Valve Size': 'Valve Size', 'Function o': 'Function o', 'Serial No.': 'Serial No.', 'Date': 'Date', 'Pressure r': 'Pressure r', 'Photo': 'Photo', 'Condition': 'Condition', 'Pipe Netwo': 'Pipe Netwo', 'Functional': 'Functional', 'History': 'History', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Pipe Diame': 'Pipe Diame', 'Remaining': 'Remaining', });
lyr_PumpHouses_3.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Bore hole connected to': 'Bore hole connected to', 'Pump house ID': 'Pump house ID', 'Condition of pump house': 'Condition of pump house', 'Functionality': 'Functionality', 'Photo': 'Photo', });
lyr_DistributionLines_4.set('fieldAliases', {'fid': 'fid', 'Diameter(mm)': 'Diameter(mm)', 'Pipe material': 'Pipe material', 'Characteristic Condition': 'Characteristic Condition', 'Condition Assessment': 'Condition Assessment', 'Additional Description': 'Additional Description', 'Pressure Rating (PN)': 'Pressure Rating (PN)', 'Description': 'Description', 'Pipe Length': 'Pipe Length', 'Nominal Pipe Size (Inches)': 'Nominal Pipe Size (Inches)', });
lyr_Transmissionlines_5.set('fieldAliases', {'fid': 'fid', 'Pipe material': 'Pipe material', 'Diameter (mm)': 'Diameter (mm)', 'Pressure Rating (PN)': 'Pressure Rating (PN)', 'Characteristic condition': 'Characteristic condition', 'Additional Description': 'Additional Description', 'Condition Assessment': 'Condition Assessment', 'Nominal size (inches)': 'Nominal size (inches)', 'Pipe length (m)': 'Pipe length (m)', });
lyr_BoosterStation_6.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Descriptio': 'Descriptio', 'Facility T': 'Facility T', 'Maintenanc': 'Maintenanc', 'Serial No.': 'Serial No.', 'Date': 'Date', 'Date of La': 'Date of La', 'Photo': 'Photo', 'Condition': 'Condition', 'Pipe Netwo': 'Pipe Netwo', 'Functional': 'Functional', 'Comment': 'Comment', 'History': 'History', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Pipe Diame': 'Pipe Diame', 'Replacemen': 'Replacemen', });
lyr_NodesAppertunances_7.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Descriptio': 'Descriptio', 'Facility T': 'Facility T', 'Serial No.': 'Serial No.', 'Date': 'Date', 'Pressure r': 'Pressure r', 'Photo': 'Photo', 'Condition': 'Condition', 'Pipe Netwo': 'Pipe Netwo', 'Functional': 'Functional', 'History': 'History', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Pipe Diame': 'Pipe Diame', 'Replacemen': 'Replacemen', 'Type of Ap': 'Type of Ap', 'Dimensions': 'Dimensions', 'material': 'material', });
lyr_BoreholesSourcewater_8.set('fieldAliases', {'fid': 'fid', 'Location': 'Location', 'Descriptio': 'Descriptio', 'Facility T': 'Facility T', 'Date': 'Date', 'Date of La': 'Date of La', 'Photo': 'Photo', 'Condition': 'Condition', 'Pipe Netwo': 'Pipe Netwo', 'Functional': 'Functional', 'Pipe Type': 'Pipe Type', 'History': 'History', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Replacemen': 'Replacemen', });
lyr_Valves_2.set('fieldImages', {'fid': 'TextEdit', 'Location': 'TextEdit', 'Descriptio': 'TextEdit', 'Facility T': 'TextEdit', 'Valve Type': 'TextEdit', 'Valve Size': 'TextEdit', 'Function o': 'TextEdit', 'Serial No.': 'TextEdit', 'Date': 'TextEdit', 'Pressure r': 'TextEdit', 'Photo': 'ExternalResource', 'Condition': 'TextEdit', 'Pipe Netwo': 'TextEdit', 'Functional': 'Range', 'History': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Pipe Diame': 'TextEdit', 'Remaining': 'TextEdit', });
lyr_PumpHouses_3.set('fieldImages', {'fid': 'TextEdit', 'Location': 'TextEdit', 'Bore hole connected to': 'TextEdit', 'Pump house ID': 'TextEdit', 'Condition of pump house': 'TextEdit', 'Functionality': 'TextEdit', 'Photo': 'ExternalResource', });
lyr_DistributionLines_4.set('fieldImages', {'fid': 'TextEdit', 'Diameter(mm)': 'TextEdit', 'Pipe material': 'ValueMap', 'Characteristic Condition': 'ValueMap', 'Condition Assessment': 'ValueMap', 'Additional Description': 'TextEdit', 'Pressure Rating (PN)': 'TextEdit', 'Description': 'TextEdit', 'Pipe Length': 'Range', 'Nominal Pipe Size (Inches)': 'TextEdit', });
lyr_Transmissionlines_5.set('fieldImages', {'fid': 'TextEdit', 'Pipe material': 'ValueMap', 'Diameter (mm)': 'TextEdit', 'Pressure Rating (PN)': 'TextEdit', 'Characteristic condition': 'ValueMap', 'Additional Description': 'TextEdit', 'Condition Assessment': 'ValueMap', 'Nominal size (inches)': 'TextEdit', 'Pipe length (m)': 'Range', });
lyr_BoosterStation_6.set('fieldImages', {'fid': 'TextEdit', 'Location': 'TextEdit', 'Descriptio': 'TextEdit', 'Facility T': 'TextEdit', 'Maintenanc': 'TextEdit', 'Serial No.': 'TextEdit', 'Date': 'TextEdit', 'Date of La': 'DateTime', 'Photo': 'ExternalResource', 'Condition': 'TextEdit', 'Pipe Netwo': 'TextEdit', 'Functional': 'Range', 'Comment': 'TextEdit', 'History': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Pipe Diame': 'TextEdit', 'Replacemen': 'TextEdit', });
lyr_NodesAppertunances_7.set('fieldImages', {'fid': 'TextEdit', 'Location': 'TextEdit', 'Descriptio': 'TextEdit', 'Facility T': 'TextEdit', 'Serial No.': 'TextEdit', 'Date': 'TextEdit', 'Pressure r': 'TextEdit', 'Photo': 'ExternalResource', 'Condition': 'TextEdit', 'Pipe Netwo': 'TextEdit', 'Functional': 'Range', 'History': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Pipe Diame': 'TextEdit', 'Replacemen': 'TextEdit', 'Type of Ap': 'TextEdit', 'Dimensions': 'TextEdit', 'material': 'TextEdit', });
lyr_BoreholesSourcewater_8.set('fieldImages', {'fid': 'TextEdit', 'Location': 'TextEdit', 'Descriptio': 'TextEdit', 'Facility T': 'TextEdit', 'Date': 'TextEdit', 'Date of La': 'DateTime', 'Photo': 'ExternalResource', 'Condition': 'TextEdit', 'Pipe Netwo': 'TextEdit', 'Functional': 'Range', 'Pipe Type': 'TextEdit', 'History': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Replacemen': 'TextEdit', });
lyr_Valves_2.set('fieldLabels', {'fid': 'hidden field', 'Location': 'hidden field', 'Descriptio': 'no label', 'Facility T': 'inline label - always visible', 'Valve Type': 'inline label - always visible', 'Valve Size': 'inline label - always visible', 'Function o': 'hidden field', 'Serial No.': 'hidden field', 'Date': 'hidden field', 'Pressure r': 'inline label - visible with data', 'Photo': 'inline label - always visible', 'Condition': 'inline label - always visible', 'Pipe Netwo': 'hidden field', 'Functional': 'inline label - always visible', 'History': 'inline label - visible with data', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Pipe Diame': 'inline label - visible with data', 'Remaining': 'hidden field', });
lyr_PumpHouses_3.set('fieldLabels', {'fid': 'hidden field', 'Location': 'hidden field', 'Bore hole connected to': 'hidden field', 'Pump house ID': 'inline label - visible with data', 'Condition of pump house': 'inline label - visible with data', 'Functionality': 'inline label - always visible', 'Photo': 'inline label - visible with data', });
lyr_DistributionLines_4.set('fieldLabels', {'fid': 'hidden field', 'Diameter(mm)': 'hidden field', 'Pipe material': 'inline label - always visible', 'Characteristic Condition': 'inline label - visible with data', 'Condition Assessment': 'inline label - visible with data', 'Additional Description': 'inline label - visible with data', 'Pressure Rating (PN)': 'hidden field', 'Description': 'inline label - visible with data', 'Pipe Length': 'inline label - visible with data', 'Nominal Pipe Size (Inches)': 'inline label - always visible', });
lyr_Transmissionlines_5.set('fieldLabels', {'fid': 'hidden field', 'Pipe material': 'inline label - visible with data', 'Diameter (mm)': 'hidden field', 'Pressure Rating (PN)': 'hidden field', 'Characteristic condition': 'inline label - visible with data', 'Additional Description': 'inline label - visible with data', 'Condition Assessment': 'inline label - always visible', 'Nominal size (inches)': 'header label - always visible', 'Pipe length (m)': 'hidden field', });
lyr_BoosterStation_6.set('fieldLabels', {'fid': 'hidden field', 'Location': 'hidden field', 'Descriptio': 'inline label - visible with data', 'Facility T': 'inline label - visible with data', 'Maintenanc': 'inline label - visible with data', 'Serial No.': 'hidden field', 'Date': 'hidden field', 'Date of La': 'inline label - visible with data', 'Photo': 'inline label - always visible', 'Condition': 'inline label - always visible', 'Pipe Netwo': 'hidden field', 'Functional': 'inline label - always visible', 'Comment': 'inline label - visible with data', 'History': 'inline label - visible with data', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Pipe Diame': 'hidden field', 'Replacemen': 'hidden field', });
lyr_NodesAppertunances_7.set('fieldLabels', {'fid': 'hidden field', 'Location': 'hidden field', 'Descriptio': 'inline label - visible with data', 'Facility T': 'inline label - visible with data', 'Serial No.': 'hidden field', 'Date': 'hidden field', 'Pressure r': 'inline label - visible with data', 'Photo': 'inline label - always visible', 'Condition': 'inline label - always visible', 'Pipe Netwo': 'inline label - visible with data', 'Functional': 'inline label - always visible', 'History': 'inline label - visible with data', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Pipe Diame': 'inline label - always visible', 'Replacemen': 'inline label - visible with data', 'Type of Ap': 'inline label - visible with data', 'Dimensions': 'inline label - visible with data', 'material': 'inline label - visible with data', });
lyr_BoreholesSourcewater_8.set('fieldLabels', {'fid': 'hidden field', 'Location': 'hidden field', 'Descriptio': 'inline label - visible with data', 'Facility T': 'inline label - visible with data', 'Date': 'hidden field', 'Date of La': 'inline label - visible with data', 'Photo': 'inline label - always visible', 'Condition': 'inline label - always visible', 'Pipe Netwo': 'hidden field', 'Functional': 'inline label - always visible', 'Pipe Type': 'inline label - visible with data', 'History': 'inline label - visible with data', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Replacemen': 'hidden field', });
lyr_BoreholesSourcewater_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});