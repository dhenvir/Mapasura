
CanvasJS.addColorSet("greenShades",
        [//colorSet Array      
        "#008080",
        "#2E8B57",
        "#91d8a1",
        "#3CB371",
        "#90EE90",
        "#31ce94",
        "#255b4e"
        ]);

$('#collapse3').on('shown.bs.collapse', function () {
var dataPoints = [];
$.getJSON("\json/typeOfGarbageDisposal.json", function(data) {  
    for(i=0; i<data.length; i++){
        dataPoints.push({name: data[i].Indicator, y: data[i].Value});
    };
    console.log(dataPoints);
    
var chart = new CanvasJS.Chart("chart3", {
	// colorSet: "greenShades",
	animationEnabled: true,
    dataPointMinWidth: 20,
	legend: {
		itemMaxWidth: 200,
		itemWrap: true,     // Change to true or false 
		verticalAlign: "top",
		horizontalAlign: "center"
		},
	data: [{
		type: "pie",
        showInLegend: true,
		startAngle: 170,
		yValueFormatString: "##0.00\"%\"",
		indexLabel: "{y}",
        click: explodePie,
        indexLabelFontColor: "black",
		indexLabelFontSize: 16,
		dataPoints: dataPoints
	}]
});
chart.render();
});
function explodePie(e) {
	for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
		if(i !== e.dataPointIndex)
			e.dataSeries.dataPoints[i].exploded = false;
	}
}
});

// ==========================================================================================================//
// $('#collapse2').on('shown.bs.collapse', function () {
var dataPoints = [];
var dataPoints2 = [];
$.getJSON("\json/bioDergadableSchedule.json", function(data) {  
    for(i=0; i<data.length; i++){
    	var count=0;
    	var tooltiptxt="<ul>";
    	for (var j =0; j <data[i].brgy.length ; j++) {
    		if(data[i].brgy[j].toString()!=""){
    			count++;
    			tooltiptxt+="<li>"+data[i].brgy[j].toString()+"</li>";
    		}
    	}
    	// tooltiptxt+="</ul>";
        dataPoints.push({label: data[i].Day, y:count, toolTipContent:tooltiptxt});
    };
    console.log(dataPoints);
 
$.getJSON("\json/NonbioDergadableSchedule.json", function(data) {
	    for(i=0; i<data.length; i++){
    	var count=0;
    	var tooltiptxt="<ul>";
    	for (var j =0; j <data[i].brgy.length ; j++) {
    		if(data[i].brgy[j].toString()!=""){
    			count++;
    			tooltiptxt+="<li>"+data[i].brgy[j].toString()+"</li>";
    		}
    	}
    	// tooltiptxt+="</ul>";
        dataPoints2.push({label: data[i].Day, y:count, toolTipContent:tooltiptxt});
    };
    console.log(dataPoints2);

var chart = new CanvasJS.Chart("chart2", {
	// colorSet: "greenShades",
	animationEnabled: true,
	toolTip: {
		// shared: true
	},
	legend:{
		cursor: "pointer",
		itemclick: toggleDataSeries,
		verticalAlign: "top",
		horizontalAlign: "center"
	},
	data: [{
		type: "column",
		name: "Bio-Dergadable Garbage Collection Schedule",
		showInLegend: "true",
		indexLabel: "{y}",
		indexLabelPlacement: "inside",
		indexLabelFontColor: "white",
		dataPoints:dataPoints
	},
	{
		type: "column",
		name: "Non Bio-Dergadable Garbage Collection Schedule",
		showInLegend: "true",
		indexLabel: "{y}",
		indexLabelPlacement: "inside",
		indexLabelFontColor: "white",
		dataPoints:dataPoints2
	}]
});
chart.render();

function toggleDataSeries(e) {
	if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}

chart.render();
}
});
});
// });