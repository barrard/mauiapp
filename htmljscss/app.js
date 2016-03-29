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