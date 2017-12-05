// This deals with the input[type = 'range']
 
var s = document.createElement('style');
document.head.appendChild(s);
s.textContent = "";
var color1 = "#BD1550";
var color2 = "#333";

var itrS = document.querySelectorAll("input[type='range']");
var itrRy = [];

for (var i = 0; i < itrS.length; i++) {
(function (i) {
  itrRy[i] = {}
  itrRy[i].mx = itrS[i].getAttribute("max");
  itrRy[i].mn = itrS[i].getAttribute("min");
  itrRy[i].itrId = itrS[i].id;
  itrRy[i].itrVal = itrS[i].value;
  
  itrRy[i].width = parseInt(window.getComputedStyle(itrS[i], null).getPropertyValue("width"));
  //console.log(itrRy[i].width)
  
  itrS[i].addEventListener('input', function(){
	  itrRy[i].itrVal = this.value;
	  itrRy[i].percent = (itrRy[i].itrVal -itrRy[i].mn) * 100 / ( itrRy[i].mx - itrRy[i].mn);console.log(itrRy[i].mx +"\n"+ itrRy[i].mn)
	   manipulateCSS(itrRy);
	   writeLabel(this.id ,this.value);}, false);
	   
   }(i));
  
  }



function manipulateCSS(itrRy) {
  s.textContent = "";
  for (var j = 0; j < itrS.length; j++){
    var percent = ~~itrRy[j].percent;
	var id = itrRy[j].itrId;
	
    s.textContent += "\n#"+id+ "::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, " + color1 + " " + percent + "%," + color2 + " " + percent + "%);}";
    s.textContent += "\n#"+id+ "::-moz-range-track{ background-image:-moz-linear-gradient(left, " + color1 + " " + percent + "%," + color2 + " " + percent + "%);}";
	
  }

}

function writeLabel(id,value){ //console.log(id)
var label = document.querySelector("label[for = '"+id+"']");
//http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript#answer-14428340
label.innerHTML = Number(value) > 10 ? Number(value).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') : value;	
	}
	
