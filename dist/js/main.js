!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";function t(){var t=this;this._touchHandler=this._touchHandler.bind(this),this._mouseWheel=this._mouseWheel.bind(this),this._triggerMobileNav=this._triggerMobileNav.bind(this),this._untriggerMobileNav=this._untriggerMobileNav.bind(this),this.storyOutterDOM=document.querySelector(".ui-content-story-outter"),this.uiNavItems=document.querySelectorAll(".ui-nav-container li"),this.stories=this.storyOutterDOM.children,this.storiesLen=this.stories.length;for(var e=0;e<this.storiesLen;e++)this.stories[e].style.visibility="hidden",this.stories[e].style.display="none",this.stories[e].style.opacity="0",this.stories[e].style.position="relative",this.stories[e].style.left="-30px";this.curr=0,this._setCurrIndex(0),this.uiNavItems&&function(){var e=t.uiNavItems.length,i=t.uiNavItems[0];i.style.top=t.uiNavItems[t.curr+1].offsetTop-6+"px";for(var s=1;s<e;s++)!function(e){t.uiNavItems[e].addEventListener("mouseover",function(){i.style.top=t.uiNavItems[e].offsetTop-6+"px"}),t.uiNavItems[e].addEventListener("mouseout",function(){t.setCurrIndexBlock||(i.style.top=t.uiNavItems[t.curr+1].offsetTop-6+"px")}),t.uiNavItems[e].addEventListener("click",function(){t._setCurrIndex(e-1),t._untriggerMobileNav()})}(s)}(),this.storyOutterDOM.addEventListener("mousewheel",this._mouseWheel),document.addEventListener("mousewheel",this._mouseWheel),this.trigger=!1,document.querySelector(".ui-mobile-nav-trigger").addEventListener("click",this._triggerMobileNav),document.querySelector(".ui-nav-container").addEventListener("click",function(t){t.stopPropagation()}),document.body.addEventListener("click",this._untriggerMobileNav);var i=document.querySelector(".ui-content-article");i.addEventListener("touchstart",this._touchHandler),i.addEventListener("touchend",this._touchHandler),i.addEventListener("touchmove",this._touchHandler)}t.prototype._touchHandler=function(t){var e=void 0,i=void 0,s=void 0,o=void 0,r=document.querySelector(".ui-nav-container");switch(t.type){case"touchend":if((s=this.endTouchX-this.startTouchX)>100&&!this.trigger){r.classList.add("ui-mobile-show"),this.trigger=!0;break}if(s<-100&&this.trigger){r.classList.remove("ui-mobile-show"),this.trigger=!1;break}if((o=this.endTouchY-this.startTouchY)>50)0===this.storyOutterDOM.scrollTop&&this._upStory();else if(o<-50){this.storyOutterDOM.scrollTop+this.storyOutterDOM.offsetHeight>=this.storyOutterDOM.scrollHeight&&this._downStory()}break;case"touchstart":i=t.touches[0].clientX,e=t.touches[0].clientY,this.startTouchX=i,this.startTouchY=e;break;case"touchmove":i=t.touches[0].clientX,e=t.touches[0].clientY,this.endTouchX=i,this.endTouchY=e}},t.prototype._triggerMobileNav=function(t){t.stopPropagation();var e=document.querySelector(".ui-nav-container");this.trigger?(e.classList.remove("ui-mobile-show"),this.trigger=!1):(e.classList.add("ui-mobile-show"),this.trigger=!0)},t.prototype._untriggerMobileNav=function(t){var e=document.querySelector(".ui-nav-container");this.trigger&&(e.classList.remove("ui-mobile-show"),this.trigger=!1)},t.prototype._mouseWheel=function(t){var e=this;t.preventDefault(),t.stopPropagation();var i=5,s=setInterval(function(){e.storyOutterDOM.scrollTop+=t.deltaY>0?5*i:-5*i,i--<=0&&clearInterval(s)},25);if(t.deltaY<0)0===this.storyOutterDOM.scrollTop&&this._upStory();else if(t.deltaY>0){this.storyOutterDOM.scrollTop+this.storyOutterDOM.offsetHeight>=this.storyOutterDOM.scrollHeight&&this._downStory()}},t.prototype._setCurrIndex=function(t,e){var i=this;this.setCurrIndexBlock||(this._setUINavPos(t),"number"==typeof t&&(this.curr===t?(this.stories[t].style.display="block",this.setCurrIndexBlock=!0,setTimeout(function(){i.stories[t].style.visibility="visible",i.stories[t].style.opacity="1",i.stories[t].style.left="0px",i.setCurrIndexBlock=!1},250)):(this.stories[this.curr].style.visibility="hidden",this.stories[this.curr].style.opacity="0",this.stories[this.curr].style.left="-30px",this.setCurrIndexBlock=!0,setTimeout(function(){i.stories[i.curr].style.display="none",i.stories[t].style.display="block",setTimeout(function(){i.stories[t].style.visibility="visible",i.stories[t].style.opacity="1",i.stories[t].style.left="0px",i.setCurrIndexBlock=!1,i.curr=t,"function"==typeof e&&e()},250)},250))))},t.prototype._getCurrIndex=function(t){return this.curr},t.prototype._setUINavPos=function(t){this.uiNavItems[0].style.top=this.uiNavItems[t+1].offsetTop-6+"px"},t.prototype._goStory=function(t){t>=0&&t<this.storiesLen&&this._setCurrIndex(t)},t.prototype._upStory=function(){var t=this;this._getCurrIndex()>0&&this._setCurrIndex(this._getCurrIndex()-1,function(){var e=t.storyOutterDOM.offsetHeight,i=t.storyOutterDOM.scrollHeight;t.storyOutterDOM.scrollTop=i-e})},t.prototype._downStory=function(){var t=this;this._getCurrIndex()<this.storiesLen-1&&this._setCurrIndex(this._getCurrIndex()+1,function(){t.storyOutterDOM.scrollTop=0})};new t;var e=document.querySelector(".ui-loading");window.onload=function(){e.style.opacity=0,setTimeout(function(){e.parentElement.removeChild(e)},750)}});