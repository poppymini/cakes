 (function (doc, win) {
        var docEl = doc.documentElement;
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var setRootFontSize = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = (clientWidth / 20) + 'px';
    };
     if(!docEl.addEventListener) return;
        win.addEventListener(resizeEvt,setRootFontSize,false);
        doc.addEventListener("DOMContentLoaded",setRootFontSize,false);
       })(document,window);