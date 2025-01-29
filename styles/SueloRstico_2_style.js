var size = 0;
var placement = 'point';
function categories_SueloRstico_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Suelo rustico preservado por ordenacion territorial o urbanistica SRPOTU':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(24,155,128,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Suelo rustico especialmente protegido por legislacion sectorial SREPLS':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(195,209,194,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Suelo rustico comun SRC':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(160,255,160,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}),fill: new ol.style.Fill({color: 'rgba(244,245,202,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SueloRstico_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("categoria");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_SueloRstico_2(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
