$(function(){

	Highcharts.setOptions({"lang": {}, "global": {}});

	var option = {"loading": {},
							  "subtitle": {},
							  "xAxis": {"title": {"text": "Number of the Last 4 Elections Where the State Voted Republican"}},
								"title": {"text": "Electoral College Representation By State Voting Behavior"},
								"series": {},
								"labels": {},
								"yAxis": {"title": {"text": "Electoral College Over/Under-Representation (%)"}},
								"chart": {"width": 650, "zoomType": "xy", "renderTo": "ec_representation_by_last_4_elections", "height": 500},
								"tooltip": {"footerFormat": "</table>", "headerFormat": "<table>", "followPointer": true, "pointFormat": "{point.name}: {point.y}% ", "useHTML": true},
								"plotOptions": {},
								"credits": {"enabled": false},
								"colors": {},
								"pane": {},
								"exporting": {},
								"drilldown": {},
								"navigation": {},
								"legend": {}};

	var data = [{"name": "Electoral College Representation By State Voting Behavior", "type": "scatter", "data": [{"y": 109.0, "x": 4, "name": "AL", "color": "rgba(223, 83, 83, .5)"}, {"y": 253.0, "x": 4, "name": "AK", "color": "rgba(223, 83, 83, .5)"}, {"y": 102.0, "x": 4, "name": "AZ", "color": "rgba(223, 83, 83, .5)"}, {"y": 120.0, "x": 4, "name": "AR", "color": "rgba(223, 83, 83, .5)"}, {"y": 87.0, "x": 0, "name": "CA", "color": "rgba(119, 152, 191, .5)"}, {"y": 104.0, "x": 1, "name": "CO", "color": "rgba(88, 24, 69, .5)"}, {"y": 112.0, "x": 0, "name": "CT", "color": "rgba(119, 152, 191, .5)"}, {"y": 191.0, "x": 0, "name": "DE", "color": "rgba(119, 152, 191, .5)"}, {"y": 264.0, "x": 0, "name": "DC", "color": "rgba(119, 152, 191, .5)"}, {"y": 86.0, "x": 2, "name": "FL", "color": "rgba(88, 24, 69, .5)"}, {"y": 98.0, "x": 4, "name": "GA", "color": "rgba(223, 83, 83, .5)"}, {"y": 167.0, "x": 0, "name": "HI", "color": "rgba(119, 152, 191, .5)"}, {"y": 155.0, "x": 4, "name": "ID", "color": "rgba(223, 83, 83, .5)"}, {"y": 91.0, "x": 0, "name": "IL", "color": "rgba(119, 152, 191, .5)"}, {"y": 100.0, "x": 3, "name": "IN", "color": "rgba(88, 24, 69, .5)"}, {"y": 114.0, "x": 2, "name": "IA", "color": "rgba(88, 24, 69, .5)"}, {"y": 125.0, "x": 4, "name": "KS", "color": "rgba(223, 83, 83, .5)"}, {"y": 106.0, "x": 4, "name": "KY", "color": "rgba(223, 83, 83, .5)"}, {"y": 103.0, "x": 4, "name": "LA", "color": "rgba(223, 83, 83, .5)"}, {"y": 167.0, "x": 0, "name": "ME", "color": "rgba(119, 152, 191, .5)"}, {"y": 100.0, "x": 0, "name": "MD", "color": "rgba(119, 152, 191, .5)"}, {"y": 95.0, "x": 0, "name": "MA", "color": "rgba(119, 152, 191, .5)"}, {"y": 94.0, "x": 1, "name": "MI", "color": "rgba(88, 24, 69, .5)"}, {"y": 110.0, "x": 0, "name": "MN", "color": "rgba(119, 152, 191, .5)"}, {"y": 120.0, "x": 4, "name": "MS", "color": "rgba(223, 83, 83, .5)"}, {"y": 97.0, "x": 4, "name": "MO", "color": "rgba(223, 83, 83, .5)"}, {"y": 173.0, "x": 4, "name": "MT", "color": "rgba(223, 83, 83, .5)"}, {"y": 161.0, "x": 4, "name": "NE", "color": "rgba(223, 83, 83, .5)"}, {"y": 130.0, "x": 1, "name": "NV", "color": "rgba(88, 24, 69, .5)"}, {"y": 171.0, "x": 0, "name": "NH", "color": "rgba(119, 152, 191, .5)"}, {"y": 92.0, "x": 0, "name": "NJ", "color": "rgba(119, 152, 191, .5)"}, {"y": 143.0, "x": 1, "name": "NM", "color": "rgba(88, 24, 69, .5)"}, {"y": 85.0, "x": 0, "name": "NY", "color": "rgba(119, 152, 191, .5)"}, {"y": 91.0, "x": 3, "name": "NC", "color": "rgba(88, 24, 69, .5)"}, {"y": 253.0, "x": 4, "name": "ND", "color": "rgba(223, 83, 83, .5)"}, {"y": 90.0, "x": 2, "name": "OH", "color": "rgba(88, 24, 69, .5)"}, {"y": 109.0, "x": 4, "name": "OK", "color": "rgba(223, 83, 83, .5)"}, {"y": 104.0, "x": 0, "name": "OR", "color": "rgba(119, 152, 191, .5)"}, {"y": 89.0, "x": 1, "name": "PA", "color": "rgba(88, 24, 69, .5)"}, {"y": 213.0, "x": 0, "name": "RI", "color": "rgba(119, 152, 191, .5)"}, {"y": 112.0, "x": 4, "name": "SC", "color": "rgba(223, 83, 83, .5)"}, {"y": 217.0, "x": 4, "name": "SD", "color": "rgba(223, 83, 83, .5)"}, {"y": 100.0, "x": 4, "name": "TN", "color": "rgba(223, 83, 83, .5)"}, {"y": 92.0, "x": 4, "name": "TX", "color": "rgba(223, 83, 83, .5)"}, {"y": 140.0, "x": 4, "name": "UT", "color": "rgba(223, 83, 83, .5)"}, {"y": 267.0, "x": 0, "name": "VT", "color": "rgba(119, 152, 191, .5)"}, {"y": 93.0, "x": 1, "name": "VA", "color": "rgba(88, 24, 69, .5)"}, {"y": 103.0, "x": 0, "name": "WA", "color": "rgba(119, 152, 191, .5)"}, {"y": 151.0, "x": 4, "name": "WV", "color": "rgba(223, 83, 83, .5)"}, {"y": 101.0, "x": 1, "name": "WI", "color": "rgba(88, 24, 69, .5)"}, {"y": 309.0, "x": 4, "name": "WY", "color": "rgba(223, 83, 83, .5)"}], "dataLabels": {"enabled": false, "format": "{point.name}"}}];
	option.series = data;

	var chart = new Highcharts.Chart(option);

    });
