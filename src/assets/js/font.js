(function (doc, win) {
      var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
          window.clientWidth = docEl.clientWidth;
          if (!window.clientWidth) return;
          docEl.style.fontSize = 30 * (window.clientWidth / 750) + 'px';
          window.base = 30 * (window.clientWidth / 750);
          //console.log(window.clientWidth / 750*30)
      };
      if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);