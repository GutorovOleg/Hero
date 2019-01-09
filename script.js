
var sections = document.querySelectorAll('.photos');

TweenMax.set(sections, {opacity: 0,x: 500, y: -500});
var sectionsAnimated = false;
var sectionsTop = document.getElementById('portfolio').offsetTop - 250;

 document.addEventListener('scroll', function(){
  if (document.documentElement.scrollTop > sectionsTop){
     sectionsAnimated = true;
     animateSections();
  }
 });
 function animateSections(){
  TweenMax.staggerTo(sections,1,{opacity: 1, x:0, y:0},0.5);
 }


window.onload = function(){
	var myNavStyle = getComputedStyle(menu);
	topnav.onclick = function(){
		if (myNavStyle.display == 'none'){
			menu.classList.add("activity");
			
		}
			else {
				menu.classList.remove("activity");
               
			}
		}
	
var header = document.querySelector("nav");
var doc = document.documentElement || document.scrollingElement;
var sticky = 550;







var progressSection = document.querySelector('.myskills');
var progressTop = progressSection.offsetTop - 550;
var progressbars = document.querySelectorAll('.progress');
var progressAnimated = false;

var statSection = document.querySelector('.presentation');
var statTop = statSection.offsetTop - 550;
var statItems = document.getElementsByClassName('number');
var statAnimated = false;

var typewriter = document.querySelectorAll('.typewriter');



// progressbars
function animateProgress(elem){
	var max = Number(elem.getAttribute('data-value'));
	var current = 0;
	var interval = setInterval(function(){
		if(current < max){
			elem.style.width = current + "%";
			current++;
		}
		else{
			clearInterval(interval);
		}
	},10);
}

// counters


function animateCount(el){
	var count = +el.getAttribute('data-count');
	var current = 0;
	var delta = 1000/count;
	var interval = setInterval(function(){
		if(current <= count){
			el.innerText = current;
			current++; 
		}
		else{
			clearInterval(interval);
		}
	},delta);
}






// load more

var loadBtn = document.getElementsByClassName('load');
var pfItems = document.getElementsByClassName('photos');
var pfDisplaying = 6;

load.onclick = function (){
	pfDisplaying += 3;
	for(var j = 0; j < pfDisplaying; j++){
		pfItems[j].style.display = 'block';
	}
	if(pfDisplaying == pfItems.length){
		load.style.display = 'none';
	}
}







//typewriter

function type(el){
   var text = el.getAttribute('data-text');
   var char = 0;
   var interval = setInterval(function(){
   	if(char<text.length){
        el.textContent +=text.charAt(char);
   		char++;
   	}
   	else{
   		clearInterval (interval);
   	}
   }, 2000/text.length);
}


// loader
var loader= document.getElementById("loader");
setTimeout(function(){
    doc.scrollTop = 0;
	loader.remove(loader);
}, 2000);
document.addEventListener('scroll', function(){
	if(doc.scrollTop > sticky){
		nav.classList.add('sticky');
		if(doc.scrollTop > progressTop && !progressAnimated){
			progressAnimated = true;
			for(var i = 0; i < progressbars.length; i++){
				animateProgress(progressbars[i]);
			}
		}
		else if(doc.scrollTop > statTop && !statAnimated){
			statAnimated = true;
			for(var i = 0; i < statItems.length; i++){
				animateCount(statItems[i]);
				type(typewriter[i]);
			}
		}
	}
	else{
		nav.classList.remove('sticky');
	}
});
/*//smooth scroll

var links = document.querySelectorAll('nav a');
links = [].slice.call(links);


  document.addEventListener('click', function(event){
  	if(links.includes(event.target)){
       event.preventDefault();
       var targetHref = event.target.getAttribute('href');
       var targetEl = document.querySelector('targetHref');
       var top = targetEl.offsetTop - 105;
       var deltaOffset = doc.scrollTop-top;
       var delta = 0;



       var interval = setInterval(function(){
            if(doc.scrollTop <= deltaOffset){
            	doc.scrollTop += 20;
            	delta += 20;
            }
            else if(doc.scrollTop >= deltaOffset){
            	doc.scrollTop -= 20;
            	delta -= 20;
            }
            else {
        	   clearInterval(interval);
        	   window.location.href = targetHref;
            }
       }, 1);
  	}
  });
function scrollToAnchor(link){

}
*/

}

