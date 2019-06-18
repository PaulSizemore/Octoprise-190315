
var waypoint = new Waypoint({
element: document.getElementById('waypoint0'),
handler: function(direction) {  if (direction == 'down') {
$("#content0").fadeTo(1000, 1);
$("#content1").fadeTo(1000, 0);
$("#content2").fadeTo(1000, 0);
$("#content3").fadeTo(1000, 0);
$("#content4").fadeTo(1000, 0);
document.getElementById("waypoint0").style.marginLeft = "0";
document.getElementById("waypoint1").style.marginLeft = "0";
document.getElementById("waypoint2").style.marginLeft = "0";
document.getElementById("waypoint3").style.marginLeft = "0";
document.getElementById("waypoint4").style.marginLeft = "0";

 } else {        }      }  ,offset: '40%'
})


var waypoint = new Waypoint({
element: document.getElementById('waypoint0'),
handler: function(direction) {  if (direction == 'up') {
document.getElementById("waypoint0").style.marginLeft = "37vw";
document.getElementById("waypoint1").style.marginLeft = "37vw";
document.getElementById("waypoint2").style.marginLeft = "37vw";
document.getElementById("waypoint3").style.marginLeft = "37vw";
document.getElementById("waypoint4").style.marginLeft = "37vw";
document.getElementById("content0").style.display = "none";
document.getElementById("content1").style.display = "none";
document.getElementById("content2").style.display = "none";
document.getElementById("content3").style.display = "none";
document.getElementById("content4").style.display = "none";
 } else {        }    }  ,offset: '45%'
})

//  Second Content 
var waypoint = new Waypoint({
element: document.getElementById('waypoint1'),
handler: function(direction) {  if (direction == 'up') {
document.getElementById("content0").style.display = "none";
document.getElementById("content2").style.display = "none";
document.getElementById("content3").style.display = "none";
document.getElementById("content4").style.display = "none";
$("#content1").fadeTo(1000, 1);
//document.getElementById("content1").style.display = "block";
 } else {        }    } ,offset: '1%'
})

var waypoint = new Waypoint({
element: document.getElementById('waypoint1'),
handler: function(direction) {  if (direction == 'down') {
document.getElementById("content0").style.display = "none";
document.getElementById("content2").style.display = "none";
document.getElementById("content3").style.display = "none";
document.getElementById("content4").style.display = "none";
$("#content1").fadeTo(1000, 1);
//document.getElementById("content1").style.display = "block";
 } else {        }    } ,offset: '70%'
})

// Third Content 

var waypoint = new Waypoint({
element: document.getElementById('waypoint2'),
handler: function(direction) {  if (direction == 'up') {
document.getElementById("content0").style.display = "none";
document.getElementById("content1").style.display = "none";
document.getElementById("content3").style.display = "none";
document.getElementById("content4").style.display = "none";
$("#content2").fadeTo(1000, 1);
//document.getElementById("content2").style.display =  "block";
 } else {        }    } ,offset: '1%'
})
var waypoint = new Waypoint({
element: document.getElementById('waypoint2'),
handler: function(direction) {  if (direction == 'down') {
document.getElementById("content0").style.display = "none";
document.getElementById("content1").style.display = "none";
document.getElementById("content3").style.display = "none";
document.getElementById("content4").style.display = "none";
$("#content2").fadeTo(1000, 1);
//document.getElementById("content2").style.display = "block";
 } else {        }    } ,offset: '70%'
})
// Fourth Content 
var waypoint = new Waypoint({
element: document.getElementById('waypoint3'),
handler: function(direction) {  if (direction == 'up') {
document.getElementById("content0").style.display = "none";
document.getElementById("content1").style.display = "none";
document.getElementById("content2").style.display = "none";
document.getElementById("content4").style.display = "none";
$("#content3").fadeTo(1000, 1);
//document.getElementById("content3").style.display =  "block";
 } else {        }   } ,offset: '1%'
})
var waypoint = new Waypoint({
element: document.getElementById('waypoint3'),
handler: function(direction) {  if (direction == 'down') {
document.getElementById("content0").style.display = "none";
document.getElementById("content1").style.display = "none";
document.getElementById("content2").style.display = "none";
document.getElementById("content4").style.display = "none";
$("#content3").fadeTo(1000, 1);
//document.getElementById("content3").style.display = "block";
 } else {        }    } ,offset: '70%'
})
//  Fifth Content 
var waypoint = new Waypoint({
element: document.getElementById('waypoint4'),
handler: function(direction) {if (direction == 'up') {
document.getElementById("content0").style.display = "none";
document.getElementById("content1").style.display = "none";
document.getElementById("content2").style.display = "none";
document.getElementById("content3").style.display = "none";
$("#content4").fadeTo(1000, 1);
//document.getElementById("content4").style.display =  "block";
 } else {        }    } ,offset: '1%'
})

var waypoint = new Waypoint({
element: document.getElementById('waypoint4'),
handler: function(direction) {  if (direction == 'down') {
document.getElementById("content0").style.display = "none";
document.getElementById("content1").style.display = "none";
document.getElementById("content2").style.display = "none";
document.getElementById("content3").style.display = "none";
document.getElementById("content4").style.display = "none";
$("#content4").fadeTo(1000, 1);
document.getElementById("content4").style.display = "block";
 } else {        }    } ,offset: '70%'
})

