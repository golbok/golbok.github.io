var str="<p><h2>$ Hallo !</h2></p>",i=0,isTag,text;!function t(){if((text=str.slice(0,++i))!==str){document.getElementById("typewriter").innerHTML=text;var e=text.slice(-1);if("<"===e&&(isTag=!0),">"===e&&(isTag=!1),isTag)return t();setTimeout(t,80)}}();