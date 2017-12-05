String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


//Data for building the HTML

var o = [
{arr:["email","confirm email","first name","last name","company","street address 1","street address 2","city","state","zip","country","phone"], class:"text",h4:"Tell us about you",id:"about",col:"col-2"},

{arr:["&lt; 20","20-24","25-29","30-34","35-39","40-49","50-59","&gt; 60","Prefer not to disclose"
], class:"radio",h4:"How old are you?",id:"old",col:"col-2"},

{arr:["female","male","other","Prefer not to disclose"
], class:"radio",h4:"What is your gender?",id:"gender",col:"col-2"},

{arr:["developer","engineer","programmer","sr. developer","manager","rockstar","ninja","guru","expert","full-stack developer","hacker","Prefer not to disclose"
], class:"checkbox",h4:"What do you consider yourself? (select all that apply)",id:"consider",col:"col-2"},

{arr:["less than 1 year","1 - 2 years","2 - 5 years","6 - 10 years","11+ years"
], class:"radio",h4:"How many years of IT / programming experience do you have?",id:"experience",col:"col-2"},

{arr:["5,000.00"],mn:5000,mx:200000,
 class:"range",h4:"What is your annual gross  or salary (including bonus) in USD?",id:"earnings",col:"col-1"},

{arr:["android","Arduino","AngularJS","C","C++","C#","Cassandra","CoffeeScript","Cordova","Clojure","Cloud","Dart","F#","Go","Hadoop","Haskell","iOS","Java","JavaScript","LAMP","Matlab","MongoDB","Node.js","Objective-C","Perl","PHP","Python","R","React","Redis","Ruby","Rust","Salesforce","Scala","Sharepoint","Spark","SQL","SQL Server","Swift","Visual Basic","Windows Phone","Wordpress"
], class:"checkbox",h4:"Which of the following languages or technologies have you done extensive development with in the last year? (select all that apply)",id:"languages",col:"col-3"},	

{arr:["1"], mn:1, mx:10, 
class:"range",h4:"On a scale of 1-10, how would you rate your programming ability?<br><small>1 - not comfortable with code<br>10 - I am an extremely capable coder</small>",id:"ability",col:"col-1"},

{arr:["employed full-time","employed part-time","freelance / Contractor","self-employed","unemployed","I'm a student","retired","Prefer not to disclose"
], class:"radio",h4:"How would you describe your current employment status?",id:"currentStatus" ,col:"col-2"}
];		
			

// building the HTML
function fieldset(o,n,wrapper){
var type = o.class;//console.log(type)
var arr = o.arr;
/*
<div class="fieldset col-2" >
        <h4>12. How would you describe your current employment status?</h4>
        <div class="radio-group" id="currentStatus"></div>
</div>
*/
var fieldset = document.createElement("div");
fieldset.setAttribute("class", "fieldset "+o.col);
var h4 = document.createElement("h4");
h4.innerHTML = o.h4;
fieldset.appendChild(h4);
var group = document.createElement("div");
group.setAttribute("class", o.class + "-group");
group.setAttribute("id", o.id);
fieldset.appendChild(group);
wrapper.appendChild(fieldset);

for( var i = 0; i < arr.length; i++)	{
	var theId = type+n+"_"+i;

/*<div class="input-text">
<label for="text0_0">Email</label>
<input type="text" id="text0_0" name="text0_0">
</div>*/

var input_text_div = document.createElement("div");
input_text_div.setAttribute("class", "input-"+type);
group.appendChild(input_text_div);

var label = document.createElement("label");
label.setAttribute("for", theId);
label.innerHTML = arr[i].capitalizeFirstLetter();

	
var input = document.createElement("input");
input.setAttribute("type", type);
input.setAttribute("id", theId);
if(type == "radio"){
input.setAttribute("name", type+n);
}else{	
input.setAttribute("name", theId);}

if(type == "range"){
	input.setAttribute("autocomplete", "off");
	input.setAttribute("value", 0);
}


if(o.hasOwnProperty('mn')){	
input.setAttribute("min", o.mn);	
input.setAttribute("max", o.mx);
}

input_text_div.appendChild(input);

if(type == "text"){
input_text_div.appendChild(label);
input_text_div.appendChild(input);
}else{
input_text_div.appendChild(input);
input_text_div.appendChild(label);
}	
}
}





var w1 = document.getElementById("w1");
for( var i = 0; i < 4;i++){
	fieldset(o[i],i,w1);
}
var w2 = document.getElementById("w2");
for( var i = 5; i < o.length;i++){
	fieldset(o[i],i,w2);
}

var surveyForm = document.querySelector(".surveyForm");
var submit_button = document.createElement("input");
/*<input type="submit" value="Submit">*/
submit_button.setAttribute("type","submit");
submit_button.setAttribute("value","Submit");
surveyForm.appendChild(submit_button);