var str = "<p>It is not the knowledge which should come to you, it is you who should come to the knowledge.<br> - Imam Malik</p>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
     setTimeout(type, 80);
}());