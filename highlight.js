/* global AFRAME */
AFRAME.registerComponent('highlight', {
    init: function () {
      var buttonEls = this.buttonEls = document.querySelectorAll('.menu-button');
      var dogEl = document.getElementById("#dog")
      console.log(dogEl)
      this.onClick = this.onClick.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.reset = this.reset.bind(this);
      for (var i = 0; i < buttonEls.length; ++i) {
        buttonEls[i].addEventListener('mouseenter', this.onMouseEnter);
        buttonEls[i].addEventListener('mouseleave', this.onMouseLeave);
        buttonEls[i].addEventListener('click', this.onClick);
      }
    },
  
    onClick: function (evt) {
      //alert("clicked somethign")
      console.log(evt.target.object3D.visible)
      evt.target.object3D.visible = !evt.target.object3D.visible
      var dogEl = document.getElementById("#dog")
      var dogTextEl = document.getElementById("dogText")
      console.log(dogTextEl.object3D)
      dogTextEl.object3D.visible = !dogTextEl.object3D.visible
      dogEl.object3D.visible = !dogEl.object3D.visible
  
    },
  
    onMouseEnter: function (evt) {
      
    },
  
    onMouseLeave: function (evt) {
      
    },
  
    reset: function () {
      
    }
  });
  