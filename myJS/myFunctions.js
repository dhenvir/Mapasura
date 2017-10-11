//================================[Reading File from JSON and plot circles]===================================================//
var lastCircle = L.featureGroup();
var datarequest = new XMLHttpRequest();
var sched ='\json/Schedule.json';
try{// Opera 8.0+, Firefox, Chrome, Safari
   datarequest = new XMLHttpRequest();
}catch (e){
   // Internet Explorer Browsers
   try{datarequest = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
          try{datarequest = new ActiveXObject("Microsoft.XMLHTTP");
             }catch (e){// Something went wrong
                 alert("Your browser broke!");
//                 return false;
        }}}

//datarequest.onreadystatechange = function(){
//   if (datarequest.readyState == 4  ){
//      // Javascript function JSON.parse to parse JSON data
//       datarequest.open('GET',sched, true);
//      var nodes = JSON.parse(datarequest.responseText);
//      // jsonObj variable now contains the data structure and can
//      // be accessed as jsonObj.name and jsonObj.country.
//      renderNodes(nodes);
//       datarequest.send();
//   }
//}
var nodes;
datarequest.open('GET',sched, true);
datarequest.onload = function(){
    nodes = JSON.parse(datarequest.responseText);
    renderNodes(nodes);
};
datarequest.send();

function renderNodes(data){
// ================[Icon Creation]===============================//
var greenIcon = L.icon({iconUrl:'\Pins/green.png', iconSize:[30, 40], iconAnchor:[15, 40], popupAnchor:[0, -40]});
var blueIcon = L.icon({iconUrl:'\Pins/blue.png', iconSize:[35, 40], iconAnchor:[15, 40], popupAnchor:[0, -40]});
var orangeIcon = L.icon({iconUrl:'\Pins/orange.png', iconSize:[35, 40], iconAnchor:[15, 40], popupAnchor:[0, -40]});
var redIcon = L.icon({iconUrl:'\Pins/red.png', iconSize:[30, 40], iconAnchor:[15, 40], popupAnchor:[0, -40]});
var violetIcon = L.icon({iconUrl:'\Pins/violet.png', iconSize:[30, 40], iconAnchor:[15, 40], popupAnchor:[0, -40]});
var whiteIcon = L.icon({iconUrl:'\Pins/white.png', iconSize:[30, 40], iconAnchor:[15, 40], popupAnchor:[0, -40]});
var yellowIcon = L.icon({iconUrl:'\Pins/yellow.png', iconSize:[30, 40], iconAnchor:[15, 40], popupAnchor:[0, -40]});
var icon;
    var day=document.getElementById("day").textContent;
    lastCircle.clearLayers();
    if(day!='week'){
    for(i=0; i<data.length; i++){
        if((day==data[i].Day)&&(data[i].Coordinates!=[])&&(data[i].Coordinates!="")){
            var point =L.latLng(data[i].Coordinates);
            
            switch(data[i].Day.toString()){
                case "Monday":
                    var marker = L.marker(point,{icon: greenIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Tuesday":
                    var marker = L.marker(point,{icon: blueIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Wednesday":
                    var marker = L.marker(point,{icon: orangeIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Thursday":
                    var marker = L.marker(point,{icon: redIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Friday":
                    var marker = L.marker(point,{icon: violetIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Saturday":
                    var marker = L.marker(point,{icon: whiteIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Sunday":
                    var marker = L.marker(point,{icon: yellowIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
            }
            
            var circle = L.circle(point, {
                weight: 0,
                fillColor: '#000000',
                fillOpacity: 0.3,
                radius: 100
            }).addTo(lastCircle);
    }}}
    else{
        for(i=0; i<data.length; i++){
            var point =L.latLng(data[i].Coordinates);
            if(point!==null){
            var circle = L.circle(point, {
                weight: 0,
                fillColor: '#000000',
                fillOpacity: 0.3,
                radius: 100
            }).addTo(lastCircle);

            switch(data[i].Day.toString()){
                case "Monday":
                    var marker = L.marker(point,{icon: greenIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Tuesday":
                    var marker = L.marker(point,{icon: blueIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Wednesday":
                    var marker = L.marker(point,{icon: orangeIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Thursday":
                    var marker = L.marker(point,{icon: redIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Friday":
                    var marker = L.marker(point,{icon: violetIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Saturday":
                    var marker = L.marker(point,{icon: whiteIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
                case "Sunday":
                    var marker = L.marker(point,{icon: yellowIcon}).addTo(lastCircle);
                    marker.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
                break;
            }

            // circle.bindPopup("<div id='circlePopUP'>Barangay "+data[i].Barangay+", "+data[i].Purok+"<br>Driver: "+data[i].Driver+"</div>");
    }}}
        
    mymap.addLayer(lastCircle);
}
//============================================[Responsive sidebar]================================================================//
$(document).ready(larg);
$(window).resize(larg);

function larg() {
    if($(window).width() < 760) {
        $('#dayButs').addClass('btn-group-justified');
        $('#dayButs').removeClass('btn-group-vertical');
        $('#sidebuts').addClass('col-sm-12');
        $('#sidebuts').removeClass('col-sm-1');
        $('#dd1').text("MON");
        $('#dd2').text("TUE");
        $('#dd3').text("WED");
        $('#dd4').text("THU");
        $('#dd5').text("FRI");
        $('#dd6').text("SAT");
        $('#dd0').text("SUN");
        // $('#WebName').text("City Environmental Management Office")
    }else{
        $('#dayButs').addClass('btn-group-vertical');
        $('#dayButs').removeClass('btn-group-justified');
        $('#sidebuts').addClass('col-sm-1');
        $('#sidebuts').removeClass('col-sm-12');
        $('#dd1').text("MONDAY");
        $('#dd2').text("TUESDAY");
        $('#dd3').text("WEDNESDAY");
        $('#dd4').text("THURSDAY");
        $('#dd5').text("FRIDAY");
        $('#dd6').text("SATURDAY");
        $('#dd0').text("SUNDAY");
        // $('#WebName').text("CEMO")
    }
}
//============================================[Setting Date on widget]================================================================//
var d = new Date();
var days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];
var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
document.getElementById("dayWidget").innerHTML = days[d.getDay()];
var currentDate = new Date();
        day = currentDate.getDate();
        month =currentDate.getMonth();
        year = currentDate.getFullYear();
        document.getElementById("date").innerHTML= (monthNames[month] + " " + day + ", " + year);
var dayz="dd"+d.getDay();
$("#"+dayz).addClass("active");
var daytoday=$("#"+dayz).attr('value');
$("#day").text(daytoday);
//==============================================[toggle buttons day and  time]==============================================================//
$(".btn-group > a.btnD").on("click", function(){
    $(".btn-group > .btnD").removeClass("active");
    $(this).addClass("active");
    var daytoday=$(this).attr('value');
    if(daytoday!='All'){
        $("#day").text(daytoday);
        var nodes = JSON.parse(datarequest.responseText);
        renderNodes(nodes);}
    else{
         $("#day").text("week");
        var nodes = JSON.parse(datarequest.responseText);
        renderNodes(nodes);
    }
});

$(".btn-group > a.btnT").on("click", function(){
     $(".btn-group > .btnT").removeClass("active");
    $(this).addClass("active");
    $("#time").text($(this).text());
});
//==============================================[Randomize qoute]==============================================================//
$.getJSON("\json/EnvironmentalQuotes.json", function(data) {
    var rnd=Math.floor((Math.random() * 100) + 1);;
    $("#qoute").text(data[rnd].Saying.toString());
    $("#qouteAuthor").text("--- "+data[rnd].Author.toString());

});