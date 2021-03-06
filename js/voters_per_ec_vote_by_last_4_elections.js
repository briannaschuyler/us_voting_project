$(function(){

    Highcharts.setOptions({"lang": {}, "global": {}});

    var option = {"loading": {},
                  "subtitle": {},
                  "xAxis": {"title": {"text": "Number of the Last 4 Elections Where the State Voted Republican"}},
                  "title": {"text": "Number of Voters Per Electoral College Vote"},
                  "series": {},
                  "labels": {},
                  "yAxis": {"title": {"text": "Number of Voters Per Electoral College Vote"}},
                  "chart": {"width": 650, "zoomType": "xy", "renderTo": "voters_per_ec_vote_by_last_4_elections", "height": 500},
                  "tooltip": {"footerFormat": "</table>", "headerFormat": "<table>", "followPointer": true, "pointFormat": "{point.name}: {point.y} ", "useHTML": true},
                  "plotOptions": {},
                  "credits": {"enabled": false},
                  "colors": {},
                  "pane": {},
                  "exporting": {},
                  "drilldown": {},
                  "navigation": {},
                  "legend": {}};

	var data = [{"name": "Number of Voters Per Electoral College Vote", "type": "scatter", "data": [{"y": 405245.0, "x": 4, "name": "AL", "color": "rgba(223, 83, 83, .5)"}, {"y": 174284.0, "x": 4, "name": "AK", "color": "rgba(223, 83, 83, .5)"}, {"y": 432995.0, "x": 4, "name": "AZ", "color": "rgba(223, 83, 83, .5)"}, {"y": 367399.0, "x": 4, "name": "AR", "color": "rgba(223, 83, 83, .5)"}, {"y": 508334.0, "x": 0, "name": "CA", "color": "rgba(119, 152, 191, .5)"}, {"y": 422615.0, "x": 1, "name": "CO", "color": "rgba(88, 24, 69, .5)"}, {"y": 393859.0, "x": 0, "name": "CT", "color": "rgba(119, 152, 191, .5)"}, {"y": 230721.0, "x": 0, "name": "DE", "color": "rgba(119, 152, 191, .5)"}, {"y": 166964.0, "x": 0, "name": "DC", "color": "rgba(119, 152, 191, .5)"}, {"y": 510307.0, "x": 2, "name": "FL", "color": "rgba(88, 24, 69, .5)"}, {"y": 449749.0, "x": 4, "name": "GA", "color": "rgba(223, 83, 83, .5)"}, {"y": 264115.0, "x": 0, "name": "HI", "color": "rgba(119, 152, 191, .5)"}, {"y": 284624.0, "x": 4, "name": "ID", "color": "rgba(223, 83, 83, .5)"}, {"y": 485063.0, "x": 0, "name": "IL", "color": "rgba(119, 152, 191, .5)"}, {"y": 443220.0, "x": 3, "name": "IN", "color": "rgba(88, 24, 69, .5)"}, {"y": 386385.0, "x": 2, "name": "IA", "color": "rgba(88, 24, 69, .5)"}, {"y": 354357.0, "x": 4, "name": "KS", "color": "rgba(223, 83, 83, .5)"}, {"y": 414494.0, "x": 4, "name": "KY", "color": "rgba(223, 83, 83, .5)"}, {"y": 426914.0, "x": 4, "name": "LA", "color": "rgba(223, 83, 83, .5)"}, {"y": 263452.0, "x": 0, "name": "ME", "color": "rgba(119, 152, 191, .5)"}, {"y": 442052.0, "x": 0, "name": "MD", "color": "rgba(119, 152, 191, .5)"}, {"y": 466237.0, "x": 0, "name": "MA", "color": "rgba(119, 152, 191, .5)"}, {"y": 471213.0, "x": 1, "name": "MI", "color": "rgba(88, 24, 69, .5)"}, {"y": 401978.0, "x": 0, "name": "MN", "color": "rgba(119, 152, 191, .5)"}, {"y": 368613.0, "x": 4, "name": "MS", "color": "rgba(223, 83, 83, .5)"}, {"y": 456342.0, "x": 4, "name": "MO", "color": "rgba(223, 83, 83, .5)"}, {"y": 255280.0, "x": 4, "name": "MT", "color": "rgba(223, 83, 83, .5)"}, {"y": 273416.0, "x": 4, "name": "NE", "color": "rgba(223, 83, 83, .5)"}, {"y": 339253.0, "x": 1, "name": "NV", "color": "rgba(88, 24, 69, .5)"}, {"y": 257305.0, "x": 0, "name": "NH", "color": "rgba(119, 152, 191, .5)"}, {"y": 480468.0, "x": 0, "name": "NJ", "color": "rgba(119, 152, 191, .5)"}, {"y": 308097.0, "x": 1, "name": "NM", "color": "rgba(88, 24, 69, .5)"}, {"y": 519061.0, "x": 0, "name": "NY", "color": "rgba(119, 152, 191, .5)"}, {"y": 483583.0, "x": 3, "name": "NC", "color": "rgba(88, 24, 69, .5)"}, {"y": 174235.0, "x": 4, "name": "ND", "color": "rgba(223, 83, 83, .5)"}, {"y": 489202.0, "x": 2, "name": "OH", "color": "rgba(88, 24, 69, .5)"}, {"y": 403092.0, "x": 4, "name": "OK", "color": "rgba(223, 83, 83, .5)"}, {"y": 423511.0, "x": 0, "name": "OR", "color": "rgba(119, 152, 191, .5)"}, {"y": 495503.0, "x": 1, "name": "PA", "color": "rgba(88, 24, 69, .5)"}, {"y": 207149.0, "x": 0, "name": "RI", "color": "rgba(119, 152, 191, .5)"}, {"y": 393868.0, "x": 4, "name": "SC", "color": "rgba(223, 83, 83, .5)"}, {"y": 203787.0, "x": 4, "name": "SD", "color": "rgba(223, 83, 83, .5)"}, {"y": 440912.0, "x": 4, "name": "TN", "color": "rgba(223, 83, 83, .5)"}, {"y": 481040.0, "x": 4, "name": "TX", "color": "rgba(223, 83, 83, .5)"}, {"y": 315475.0, "x": 4, "name": "UT", "color": "rgba(223, 83, 83, .5)"}, {"y": 165501.0, "x": 0, "name": "VT", "color": "rgba(119, 152, 191, .5)"}, {"y": 472865.0, "x": 1, "name": "VA", "color": "rgba(88, 24, 69, .5)"}, {"y": 428592.0, "x": 0, "name": "WA", "color": "rgba(119, 152, 191, .5)"}, {"y": 293110.0, "x": 4, "name": "WV", "color": "rgba(223, 83, 83, .5)"}, {"y": 434741.0, "x": 1, "name": "WI", "color": "rgba(88, 24, 69, .5)"}, {"y": 142740.0, "x": 4, "name": "WY", "color": "rgba(223, 83, 83, .5)"}], "dataLabels": {"enabled": false, "format": "{point.name}"}}];

    option.series = data;

	var chart = new Highcharts.Chart(option);

});
