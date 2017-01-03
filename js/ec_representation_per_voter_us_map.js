$(function(){
	var geojson = Highcharts.geojson(Highcharts.maps["countries/us/us-all"]);

    Highcharts.setOptions({"lang": {}, "global": {}});
    var option = {"loading": {},
									"subtitle": {},
									"title": {"text": "Electoral College Representation Per Voter (vs. National Average)"},
									"series": {},
									"mapNavigation": {"buttonOptions": {"verticalAlign": "bottom"}, "enabled": true},
									"labels": {},
									"yAxis": {},
									"chart": {"width": 650, "renderTo": "ec_representation_per_voter_us_map", "height": 500},
									"tooltip": {"valueSuffix": "%"},
									"plotOptions": {},
									"credits": {"enabled": false},
									"colors": {},
									"xAxis": {},
									"exporting": {},
									"drilldown": {},
									"navigation": {},
									"legend": {},
									"colorAxis": {"minColor": "#FFFFFF", "maxColor": "#581845", "type": "linear"}};


    var data = [{"name": "Electoral College Representation (vs National Average)", "type": "map", "dataLabels": {"enabled": true, "format": "{point.properties.postal}"}, "states": {"hover": {"color": "#FFC300"}}, "joinBy": "hc-key", "data": [{"value": 109.0, "hc-key": "us-al"}, {"value": 253.0, "hc-key": "us-ak"}, {"value": 102.0, "hc-key": "us-az"}, {"value": 120.0, "hc-key": "us-ar"}, {"value": 87.0, "hc-key": "us-ca"}, {"value": 104.0, "hc-key": "us-co"}, {"value": 112.0, "hc-key": "us-ct"}, {"value": 191.0, "hc-key": "us-de"}, {"value": 264.0, "hc-key": "us-dc"}, {"value": 86.0, "hc-key": "us-fl"}, {"value": 98.0, "hc-key": "us-ga"}, {"value": 167.0, "hc-key": "us-hi"}, {"value": 155.0, "hc-key": "us-id"}, {"value": 91.0, "hc-key": "us-il"}, {"value": 100.0, "hc-key": "us-in"}, {"value": 114.0, "hc-key": "us-ia"}, {"value": 125.0, "hc-key": "us-ks"}, {"value": 106.0, "hc-key": "us-ky"}, {"value": 103.0, "hc-key": "us-la"}, {"value": 167.0, "hc-key": "us-me"}, {"value": 100.0, "hc-key": "us-md"}, {"value": 95.0, "hc-key": "us-ma"}, {"value": 94.0, "hc-key": "us-mi"}, {"value": 110.0, "hc-key": "us-mn"}, {"value": 120.0, "hc-key": "us-ms"}, {"value": 97.0, "hc-key": "us-mo"}, {"value": 173.0, "hc-key": "us-mt"}, {"value": 161.0, "hc-key": "us-ne"}, {"value": 130.0, "hc-key": "us-nv"}, {"value": 171.0, "hc-key": "us-nh"}, {"value": 92.0, "hc-key": "us-nj"}, {"value": 143.0, "hc-key": "us-nm"}, {"value": 85.0, "hc-key": "us-ny"}, {"value": 91.0, "hc-key": "us-nc"}, {"value": 253.0, "hc-key": "us-nd"}, {"value": 90.0, "hc-key": "us-oh"}, {"value": 109.0, "hc-key": "us-ok"}, {"value": 104.0, "hc-key": "us-or"}, {"value": 89.0, "hc-key": "us-pa"}, {"value": 213.0, "hc-key": "us-ri"}, {"value": 112.0, "hc-key": "us-sc"}, {"value": 217.0, "hc-key": "us-sd"}, {"value": 100.0, "hc-key": "us-tn"}, {"value": 92.0, "hc-key": "us-tx"}, {"value": 140.0, "hc-key": "us-ut"}, {"value": 267.0, "hc-key": "us-vt"}, {"value": 93.0, "hc-key": "us-va"}, {"value": 103.0, "hc-key": "us-wa"}, {"value": 151.0, "hc-key": "us-wv"}, {"value": 101.0, "hc-key": "us-wi"}, {"value": 309.0, "hc-key": "us-wy"}], "mapData": geojson}];
    	    option.series = data;

	var chart = new Highcharts.Map(option);
});
