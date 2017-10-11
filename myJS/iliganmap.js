//==============================================[TIME BUTTONS]=======================================================================>>  
var cntrbuttons =  L.Control.extend({        
      options: { position: 'bottomright'
      },

      onAdd: function (map) {
        var cntbuts = L.DomUtil.create('div', '');
          cntbuts.id="cntrTime";
          cntbuts.style.margin=0;
          cntbuts.style.marginBottom="1vh";
          cntbuts.className="btn-group btn-group-justified"
          cntbuts.innerHTML = '<a href="#" class="btn btn-default btnT" id="time1">8:00am - 12:00nn</a>'; 
          cntbuts.innerHTML +='<a href="#" class="btn btn-default btnT" id="time2">12:00nn - 4:00pm</a>';
          cntbuts.innerHTML +='<a href="#" class="btn btn-default btnT" id="time3">4:00pm - 8:00pm</a>';

        return cntbuts;
      }
    });
//==============================================[LEGENDS]=======================================================================>> 
var Legend =  L.Control.extend({        
      options: {
        position: 'topright'
      },

      onAdd: function (map) {
        var legendDiv = L.DomUtil.create('div', '');

        legendDiv.style.backgroundColor = 'black';     
        legendDiv.style.width = '20vw';
        legendDiv.style.height = '20vh';
        legendDiv.style.margin=0;
        legendDiv.style.opacity=0.4;
        return legendDiv;
      }
    });
//===========================================[SELECTION INDICATOR]==========================================================================>>
    var Selected =  L.Control.extend({        
      options: {
        position: 'topleft'
      },

      onAdd: function (map) {
        var selectedDiv = L.DomUtil.create('p', '');

        selectedDiv.style.backgroundColor = 'white';     
        selectedDiv.style.opacity=0.7;
        selectedDiv.id='sched';
//        selectedDiv.style.height="100%";
        selectedDiv.textContent="Garbage collection Schedule for every";
          
        var contDay = L.DomUtil.create('p', '',selectedDiv); 
        contDay.id='day';  

        var contTime = L.DomUtil.create('p', '',selectedDiv); 
        contTime.id='time';  
        contTime.xtextContent="8:00am - 12:00nn";  
        return selectedDiv;
      }
    });
//===========================================[ZOOM TOOL]==========================================================================>>
    var zoomingtool =  L.Control.extend({        
      options: {
        position: 'topleft'
      },

      onAdd: function (map) {
        var zoomz = L.DomUtil.create('div', 'btn-group-vertical');    
        zoomz.style.opacity=0.7;
        zoomz.id='zoomtool';
        zoomz.innerHTML="<button type='button' class='btn zoombut'>+</button>";
        zoomz.innerHTML+="<button type='button' class='btn zoombut'>-</button>";
        return zoomz;
      }
    });
//===============================================[MAP CREATION]====================================================================>>
var mymap = L.map('mapid',{ minZoom: 11, zoomControl:true, maxZoom:18});
        var isOnline = window.navigator.onLine;
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
					attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
				}).addTo(mymap);;
            var southWest = L.latLng(8.3671, 124.0994),
            northEast = L.latLng(7.9940, 124.5884);
            var bounds = L.latLngBounds(southWest, northEast);
    
            mymap.addControl(new Selected());
//            mymap.addControl(new Legend());
            mymap.zoomControl.setPosition('topright');
//            mymap.addControl(new cntrbuttons());
//            mymap.addControl(new zoomingtool());
            mymap.setMaxBounds(bounds);
            mymap.setView([8.244648, 124.264569], 13)
            mymap.on('drag', function() {
            mymap.panInsideBounds(bounds, { animate: false });
            });
$('.leaflet-control-attribution').hide();
//============================================================================================================================>>