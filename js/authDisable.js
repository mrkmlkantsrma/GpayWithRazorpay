
document.addEventListener("keydown", function (event) {
    if (event.ctrlKey) {
        event.preventDefault();
    } 
    if (event.shiftKey) {
        event.preventDefault();
    }  
});

 document.onkeydown = function(e) {
    if (e.ctrlKey && 
        (e.keyCode === 67 || 
            e.keyCode === 86 || 
            e.keyCode === 85 || 
            e.keyCode === 117)) {
        alert('not allowed');
        return false;
    } else {
        return true;
    }
};
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
    console.log('hit')
     return false;
  }
}
document.onkeypress = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
}
document.onmousedown = function (event) {
    event = (event || window.event);
    if (event.keyCode == 123) {
        return false;
    }
    if(event.button == 2)
    {
      return false; 
    }
}
document.onkeydown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
        return false;
    }
}
jQuery(document).ready(function($){
    $(document).keydown(function(event) {
        var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
        if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
            return false;
        }
    });
});

function mousehandler(e) {
    var myevent = (isNS) ? e : event;
    var eventbutton = (isNS) ? myevent.which : myevent.button;
    if ((eventbutton == 2) || (eventbutton == 3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;
function disableCtrlKeyCombination(e) {
    var forbiddenKeys = new Array("a", "s", "c", "x","u");
    var key;
    var isCtrl;
    if (window.event) {
        key = window.event.keyCode;
        if (window.event.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    else {
        key = e.which;
        if (e.ctrlKey)
            isCtrl = true;
        else
            isCtrl = false;
    }
    if (isCtrl) {
        for (i = 0; i < forbiddenKeys.length; i++) {
            if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                return false;
            }
        }
    }
    return true;
}
