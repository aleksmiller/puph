// PuphJS v0.0.1 | MIT
function Puph() {
  var self = this;

  // logger
  function _err(msg) {
    if ( typeof window.console !== 'undefined' ) {
      console.error(msg);
    }
  }

  // detect mobile devices
  var isMobile = {
    Android: function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
    any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
  };

  // create
  self.init = function() {
    self.el = document.querySelector('a.puph');

    if ( self.el ) {
      if ( self.el.querySelector('img') !== null ) {
        return;
      }

      if ( self.el.dataset.mobile === 'true' && !isMobile.any() ) {
        return false;
      }

      var puphImg = new Image();

      puphImg.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMjZweCIgaGVpZ2h0PSIyNnB4IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPiAgICAgICAgPHRpdGxlPlNsaWNlIDE8L3RpdGxlPiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4gICAgPGRlZnM+PC9kZWZzPiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4gICAgICAgIDxwYXRoIGQ9Ik04LjgzMyw3LjQ4OCBDOC44MzMsNy40ODggNS40MTcsOS4zMTggNS4yNSwxMC40ODYgQzUuMDgzLDExLjY1MiAxMi4yMDksMjAuNTY1IDE0Ljg3NSwyMC4yMzMgQzE3LjU0MSwxOS44OTkgMTguMzM2LDE2LjgyNCAxOC4zMzYsMTYuODI0IEwyNS44NCwxOC44MTQgTDI1Ljg0LDI1LjgxNCBDOC44NCwyNS44MTQgNS42ODQzNDE4OWUtMTQsMTIgNS42ODQzNDE4OWUtMTQsMCBMNi44MzMsMCBMOC44MzMsNy40ODggTDguODMzLDcuNDg4IFoiIGlkPSJTaGFwZSIgZmlsbD0iI0I4RTk4NiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPiAgICA8L2c+PC9zdmc+';

      puphImg.onload = function() {
        self.el.appendChild(puphImg);
        self.el.style.display = 'block';
        puphImg.className = 'pulse';
      };

    } else {
      _err('Please, create link <a href="tel:{PHONE_NUMBER}" class="puph"></a> in your markup.');
    }
  }();

  // change default icon
  self.icon = function( src ) {
    if ( self.el === null ) {
      _err('You should create instance new Puph() firstly.');
      return;
    } else {
      var puphImg = self.el.querySelector('img');
      if ( puphImg ) {
        puphImg.src = src;
      }
    }
  };

  // destroy
  self.destroy = function() {
    var puphImg = self.el.querySelector('img');
    if ( puphImg ) {
      self.el.removeChild( puphImg );
    }
    self.el.style.display = 'none';
    self = null;
  };

  return self;
};
