var MauiLocs = [
{
lat: "20.87803797691294",
lng: "-156.46578701940598",
town: "Kahului, HI, USA"
},
{
lat: "20.81001711484125",
lng: "-156.50149258581223",
town: "Maalaea, HI, USA"
},
{
lat: "20.759944412680955",
lng: "-156.44930752721848",
town: "Kihei, HI, USA"
},
{
lat: "20.686731393113124",
lng: "-156.43557461706223",
town: "Wailea-Makena, HI, USA"
},
{
lat: "20.60577062513971",
lng: "-156.42596157995285",
town: "Wailea-Makena, HI, USA"
},
{
lat: "20.591630200978653",
lng: "-156.30511197057785",
town: "Kula, HI 96790, USA"
},
{
lat: "20.623765630979115",
lng: "-156.1430636307341",
town: "Hana, HI 96713, USA"
},
{
lat: "20.752239446429783",
lng: "-155.99062832799973",
town: "Hana, HI, USA"
},
{
lat: "20.820286384388595",
lng: "-156.10323819128098",
town: "Haiku, HI 96708, USA"
},
{
lat: "20.88317037843461",
lng: "-156.20211514440598",
town: "Haiku, HI 96708, USA"
},
{
lat: "20.908829754347177",
lng: "-156.37102993932785",
town: "Paia, HI, USA"
},
{
lat: "20.928071405989357",
lng: "-156.2968722244841",
town: "Haiku-Pauwela, HI, USA",
},
{
lat: "20.8061659583829",
lng: "-156.32845791784348",
town: "Makawao, HI 96768, USA"
},
{
lat: "20.7573761342296",
lng: "-156.2199679276091",
town: "Kula, HI 96790, USA"
},
{
lat: "20.82156999387807",
lng: "-156.62371548620285",
town: "Lahaina, HI 96761, USA"
},
{
lat: "20.887019564471874",
lng: "-156.68276699987473",
town: "Lahaina, HI, USA"
},
{
lat: "20.940897801153515",
lng: "-156.69649991003098",
town: "Kaanapali, HI, USA"
},
{
lat: "20.990910238977825",
lng: "-156.65667447057785",
town: "Kapalua, HI 96761, USA"
},
{
lat: "21.013987271838452",
lng: "-156.58389004674973",
town: "Wailuku, HI 96793, USA"
},
{
lat: "20.972958995647463",
lng: "-156.5275851151091",
town: "Wailuku, HI 96793, USA"
},
{
lat: "20.928071420668637",
lng: "-156.5880099197966",
town: "Wailuku, HI 96793, USA"
},
{
lat: "20.793328074551397",
lng: "-156.58114346471848",
town: "Lahaina, HI 96761, USA"
},
{
lat: "20.67645305095448",
lng: "-156.03457363788038",
town: "Hana, HI 96713, USA"
}
]



var map;
var Markers = []
var tenYearArry = []
var allYears = [];
var latLngString = ''
var latLngArray = []
var SESSION = false;
var currentUNIX = Math.floor(Date.now()); //current time in UNIX seconds
var myDateObj = new Date(currentUNIX)
var theDay = myDateObj.getDate();
var theMonth = myDateObj.getMonth()
var theYear = myDateObj.getFullYear()
var current = Math.floor((myDateObj / 1000)); //current time in UNIX seconds
var year = 31536000; //one year in seconds
var yearCount = year * 1; //ten years in seconds
var final = current - yearCount; //final time ten years from now


 // console.log('______________START OF LOG____________________')
 function addMarker() {
   console.log('______________START OF LOG____________________')
   console.log(parseFloat(MauiLocs[1].lat))
var x = 0
   for (i in MauiLocs){
   console.log(MauiLocs[i])
 
var lat =  parseFloat(MauiLocs[i].lat)
var lng =  parseFloat(MauiLocs[i].lng)

//REAL API CALL THIS WORKS
// lat= 20.78881630731087
//     lng= -156.3409423828125
//   var url = 'https://api.forecast.io/forecast/ee56df7c95dbc07fbfe02bb565ee45fd/' + lat + ',' + lng;

// $.ajax({
//   url :url+'?callback=?', 
//   dataType: 'jsonp',
//   success: function(data){
//   console.log(data)
//   tenYearArry.push(data);
//   console.log('ajax')
//   }
// })//REAL API CALL THIS WORKS
x++
console.log(x)
    var myLatLng = { lat: parseFloat(MauiLocs[i].lat), lng: parseFloat(MauiLocs[i].lng)}
    //new marker
   var img =  '<i class="wi wi-night-sleet"></i>'
   var marker = new MarkerWithLabel({
    // draggable: true,
     position: myLatLng,
     map: map,
     title:'title',
     animation: google.maps.Animation.DROP,
      icon: ' ',
    labelContent: img,
    labelAnchor: new google.maps.Point(22, 50),
     labelClass: "labels"

     // labelContent: 'i'
     //label: '<i class="wi wi-day-cloudy-gusts" style="color:rgba(153,102,102,0.8);"></i>'
   });
   //info window 
   var infowindow = new google.maps.InfoWindow({
     
     content: 'This is making me $$'
   });
   //OnClick InfoWond
markerClickEvent(marker)
   Markers.push(marker)


  }

    function markerClickEvent(marker){
   marker.addListener('click', function() {
       infowindow.open(map, marker);
     });
    }
  
 }
 
  //this returns just a name of place clicked.  Run it only once
function geoLocate(){
   var lat = $("#lat").val();
   var lng = $("#lng").val();

  console.log(lat +" "+lng)

  var geocoder = new google.maps.Geocoder;
  var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
  
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      var placeClicked = results[1].formatted_address
      console.log(placeClicked);
      MauiTowns.push(placeClicked)
      $('#CityState').html(placeClicked)
      var town = {
        lat : lat,
        lng : lng,
        town: placeClicked
      }
      MauiLocs.push(town)
    }else{
      console.log('THIS GEOLOC NOT WORKING becaue '+status)
    }
  });
}


// function getGeoLocate(lat, lng){
//   console.log(lat +" "+lng)
//   var geocoder = new google.maps.Geocoder;
//   var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
  
//   geocoder.geocode({'location': latlng}, function(results, status) {
//     if (status === google.maps.GeocoderStatus.OK) {
//       console.log(results)
//       var placeClicked = results[1].formatted_address
//       console.log(placeClicked);

//       $('#CityState').html(placeClicked)
//     }else{
//       console.log('THIS GEOLOC NOT WORKING becaue '+status)
//     }
//   });
// }


  
  
   function getSecondsDateYear(){
    var count = allYears.length
    for (var x = 0; x<count;x++){
      console.log(new Date(allYears[x], theMonth, theDay))
    }
  }



  function timeConverter(unixTime) {
    var a = new Date(unixTime * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    // return time;
    return(time);
  }
  
    function getTime(unixTime) {
    var a = new Date(unixTime * 1000);
    var hour = a.getHours();
    if (hour)
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =hour + ':' + min
    // return time;
    return(time);
  }
  
  
  
  
  function getAllYears(dateObj, numYears){
     var thisYear = dateObj.getFullYear()

    for (var x = 0; x<numYears; x++ ){
      allYears.push(thisYear)
      thisYear--
    }
  }


  function timeZoneDifference(myTimeZone, clickedLocTimeZone){
    if(myTimeZone < clickedLocTimeZone){
      console.log(myTimeZone - clickedLocTimeZone+' myTimeZone - clickedLocTimeZone')
    return Math.abs(myTimeZone - clickedLocTimeZone)
    }else{
      console.log(clickedLocTimeZone - myTimeZone+' clickedLocTimeZone - myTimeZone')
      return Math.abs(clickedLocTimeZone - myTimeZone)
    }
  
  }


//api for forcast.io ee56df7c95dbc07fbfe02bb565ee45fd
//function apiCall(position){
function apiCall() {
  var lat = $("#lat").val();
  var lng = $("#lng").val();
  console.log(lat + " " + lng)
  //var url = 'https://api.forecast.io/forecast/ee56df7c95dbc07fbfe02bb565ee45fd/' + lat + ',' + lng;
  var tmp = 0;
  var file = tmp+'.js';
  // var UTC_API = 'https://maps.googleapis.com/maps/api/timezone/json?key=AIzaSyAi_4W1hVR6KsZJS5C_LHthpthxvSpxTcY&location='+Math.round(lat*100)/100+','+Math.round(lng*100)/100

  for (var x = current; x > final; x -= year) {
    var dataTime = timeConverter(x)
    $('#dataTime').html(dataTime)

    $.ajax({
      //url: url + ',' + x + '?callback=?',
      url: file,
      //dataType: 'jsonp',
      success: function(result) {
      //MAGICAL CODE FOR SINGLE DAY WATHER DATA POINT
      var propValueList = []
      var propList = []
        tenYearArry.push(result)//master data collection
       console.log(tenYearArry.length+" length of the tenYearArry");//see dataCollection
       
       //this code will only grab the data from the last index of collection
        for(var x = tenYearArry.length; x<=tenYearArry.length;x++){
          var y = x-1;
          console.log('the count is '+x+' for the tenYearArry loop...')
          var data = tenYearArry[y].daily.data[0]
          var timeZone = tenYearArry[y].timezone
          $('#timeZone').html(timeZone)
          
          console.log(data)
          
          for(var k in data){

            propList.push(k)
            propValueList.push(data[k])
            if(SESSION === false){
            $('#specificData').append('<option>'+k+'</option>')
            }
            
          } SESSION=true
          

        console.log(propList)// this is k
        console.log(propValueList)//this is data[k]
        var resultDiv = $('#resultList')//for testing
        
        var output = '';
        
       var getPropVal = function(theSummary){
         return theSummary
       }
        
        
        
  var myTimeZone = new Date().getTimezoneOffset()/60*-1
  var clickedLocTimeZone = tenYearArry[y].offset
  
  

  var timeDiff = timeZoneDifference(myTimeZone, clickedLocTimeZone)*60*60
  //THE TIMEZONE FUNCTION

        
      function iPropList(propList){
        for (var i in propList) {
          switch(propList[i]) {
            case 'summary':
              $('#dataHeader').html(propValueList[i])
              propList[i] = 'Todays Weather';//today weather
              break;
            case 'icon':
              var icon = getPropVal(propValueList[i])
              $('#dataIcon').html(icon)
              propList[i] = 'Symbol';// Font Icon
              break;
            case 'sunriseTime':
              var time = getTime(propValueList[i]+timeDiff)
              $('#dataSunRise').html(time)
              propList[i] = 'Sunrise';//sunrise
              break;
            case 'sunsetTime':
              var time = getTime(propValueList[i]+timeDiff)
              $('#dataSunSet').html(time)
              propList[i] = 'Sunset';//sunset
              break;
            case 'moonPhase':
              var moon = getPropVal(propValueList[i])
              var nightSky =  function(){
                var night;
                if(moon <= 0.5){
                  night =  (moon*200) - 100
                }else{
                  night =  ((1 - moon)*(200))-100
                }
                return Math.abs(night)
                  
              }//nightSky
              var crescent = function(){
                var cres;
                if(moon <= 0.5){
                  cres =  moon*20
                }else{
                  cres =  (moon - 0.5)*(20)-10
                }
                return cres
                  
              }//crescent
              console.log(nightSky())
              $('#dataMoonPerc').html(moon)
              $('.moonDataBox').css(
        "background", "linear-gradient(black "+nightSky()+"%, #041931)"
              );
              $('.moonIcon').css("box-shadow", "inset "+crescent()+"rem 0 whitesmoke")
              propList[i] = 'Moon';//moonphase
              break;
              
            case 'precipIntensity':
               var dataRainIndex = getPropVal(propValueList[i])
              $('#dataRainIndex').html(dataRainIndex)
              propList[i] = 'Precipitation Intensity';// rain index?
              break;
              
            case 'precipIntensityMax':
               var dataRainMax = getPropVal(propValueList[i])
              $('#dataRainMax').html(dataRainMax)
              propList[i] = 'Maximum Rainfall';// max rain
              break;
              
            case 'precipProbability':
               var dataRainChance = getPropVal(propValueList[i])
              $('#dataRainChance').html(dataRainChance)
              propList[i] = 'Chance of Rain';//Rain probobility
              break;
            case 'temperatureMin':
               var dataTempLow = getPropVal(propValueList[i])
              $('#dataTempLow').html(dataTempLow)
              propList[i] = 'Todays Low';// Low of the Day temp
              break;
            case 'temperatureMinTime':
               var dataTempLowTime = getTime(propValueList[i]+timeDiff)
              $('#dataTempLowTime').html(dataTempLowTime)
              propList[i] = 'Time of day minimum Temp.';//time of min temp
              break;
            case 'temperatureMax':
               var dataTempHigh = getPropVal(propValueList[i])
              $('#dataTempHigh').html(dataTempHigh)
              propList[i] = 'Todays High';//High temp of the day
              break;
            case 'temperatureMaxTime':
               var dataTempHighTime = getTime(propValueList[i]+timeDiff)
              $('#dataTempHighTime').html(dataTempHighTime)
              propList[i] = 'Time of day max temp';//time of max temp
              break;
            case 'dewPoint':
               var dataDewPoint = getPropVal(propValueList[i])
              $('#dataDewPoint').html(dataDewPoint)
              propList[i] = 'Dew Point Temp.';//Temp of DewPoint
              break;
            case 'humidity':
               var dataHumidity = getPropVal(propValueList[i])
              $('#dataHumidity').html(dataHumidity)
              propList[i] = '% Humidity';//Humidity %
              break;
            case 'windSpeed':
               var dataWindSpeed = getPropVal(propValueList[i])
              $('#dataWindSpeed').html(dataWindSpeed)
              propList[i] = 'Wind Speed mph';//windspeed mph??
              break;
            case 'windBearing':
               var dataWindDirrection = getPropVal(propValueList[i])
              $('#dataWindDirrection').html(dataWindDirrection)
              propList[i] = 'Wind Dirrection';//bearing is degree reading
              break;
            case 'visibility':
               var dataVisibility = getPropVal(propValueList[i])
              $('#dataVisibility').html(dataVisibility)
              propList[i] = 'Visibility #'; //Vistability
              break;
            case 'cloudCover':
               var dataCloudCover = getPropVal(propValueList[i])
              $('#dataCloudCover').html(dataCloudCover)
              propList[i] = 'Cloud Cover %';//% Cloud Cover
              break;
            case 'Barametric preasure':
               var dataPreassure = getPropVal(propValueList[i])
              $('#dataPreassure').html(dataPreassure)
              propList[i] = 'Is Preasuure on ya heads?';//mm Merc
              break;
            case 'ozone':
               var dataSunIndex = getPropVal(propValueList[i])
              $('#dataSunIndex').html(dataSunIndex)
              propList[i] = 'Sun Intensity';//Always Wear Sunscreen!!!
              break;
              //extra switch......
              // case 'apparentTemperatureMax':
              // propList[i] = 'Max Temp';
              // break;
              
            // default: 
            // propList[i] = "Sorry, please try again."
            // break; 
            
          }
        }

      }
       iPropList(propList)
        }
        
        console.log(tenYearArry.length+ ' tenYearArry.length again, but why?')
        console.log(tenYearArry+ ' tenYearArry')
 var dailyData = tenYearArry[0].daily.data//more data lives here
        console.log('the prop list is '+ propList);
        console.log('the propValueList '+ propValueList);
        console.log('______________END OF LOG____________________')

        
      }//END OF AJAX

    })

  }

}

// console.log('______________END OF LOG____________________')

 // addMarker();
//google api function MAGIC DONT TOUCH
function markerWithLabel(){
var s = document.createElement("script");
s.type = "text/javascript";
s.src = "markerwithlabel.js";
$("head").append(s);
}
function initMap() {
  var maui = {
    lat: 20.78881630731087,
    lng: -156.3409423828125
  };



  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: maui,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });


markerWithLabel()
 addMarker()
}//GOOGLE MAPS API NO TOUCH

$('#gteMarks').on('click', function(){
   console.log(AJAX)
})