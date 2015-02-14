(function() {
  // all animation without jQuery

  "use strict";

  (function() {
    // header animation on canvas (logo and finger)
    // addEventListener and canvas are not supported in IE8

    if (!document.addEventListener) return;

    document.addEventListener("DOMContentLoaded", function() {
      var ctx = logo.getContext("2d");
      
      var h = logo.height;
      var w = logo.width;

      var currFrame = 0;
      var framesCount = 19;
      var DELAY_TIME = 1500;
                            
      var img = new Image();
      img.src = "/img/sprite_new.jpg";
                        
      function draw() {
        if (currFrame < framesCount) {

          ctx.clearRect(0, 0, w, h);
          ctx.drawImage(img, 0, h * (currFrame % 9), w, h, 0, 0, w, h);
          ++currFrame;
        } else {

          clearInterval(interval);
        }
      }

      var interval = setInterval(draw, DELAY_TIME);
    });

    document.addEventListener("DOMContentLoaded", function() {
      var ctx = finger.getContext("2d");

      var canvHeight = finger.height;
      var canvWidth = finger.width;

      var imgHeight = 40;
      var imgWidth = 27;

      var currFrame = 0;
      var framesCount = 21;
      var FIRST_DELAY_TIME = 75;
      var SECOND_DELAY_TIME = 1000;

      var SHIFT = 200;

      var img = new Image();
      img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoBAMAAAD9FJxlAAAAG1BMVEUAAAAzMzNtbW18fHxGRkZJSUn////Z2dmcnJybb1tvAAAABnRSTlMA7/w3uX6rDERfAAAAyElEQVR4AZXRPQrCQBAF4JHVXhSNbRC1XTceQBIxllEsbF3C27QBiV4g4rHNz0YnFoqv+1h23sBQGU8Si/DXnN0s51S4fGHnB+M2z39ReJzx3pVCvl/HJvBHlqog3Hm6GjJmepISiaNU0HO40I6WdHjMFEyGG4yjI9pC+7ApGCIZNEwiWsJMGHt3cJKDBacCOHtZi2LcIu3AevlnLasjvFiobLZJifis+lRhw2nFEyMbbfoVO3wL22RrWZO9hVhcq+SWmzoBfeYJpmFxoIWLw5IAAAAASUVORK5CYII=";

      function drawBefore() {
        if (currFrame < framesCount) {

          ctx.clearRect(0, 0, canvWidth, canvHeight);
          ctx.drawImage(img, 0, 0, imgWidth, imgHeight, 
                             currFrame * 10, 0, imgWidth, imgHeight);
          ++currFrame;
        } else {

          clearInterval(interval);
          setInterval(drawAfter, SECOND_DELAY_TIME);
        }
      }

      function drawAfter() {
        ctx.clearRect(SHIFT, 0, imgWidth, canvHeight);
        ctx.drawImage(img, 0, 0, imgWidth, imgHeight, 
                           SHIFT, currFrame % 3, imgWidth, imgHeight);
        ++currFrame;
      }

      var interval = setInterval(drawBefore, FIRST_DELAY_TIME);
    });

  }());

  (function() {
    // thanksgiving letters animation

    var imgContainer = null;
    var isShown = false;

    var lettersArr = ("l0.png,l1.jpg,l2.jpg,l3.jpg,l4.png,l5.jpg,l6.jpg,l7.jpg,l8.jpg").split(",");

    var loadedLetters = 0;

    window.showLetters = function() {
      if (!isShown) {

        lettersTitle.innerHTML = "&lt; скрыть &gt;";
        imgContainer = imgContainer || createImgContainer();
        thanksgivingLetters.appendChild(imgContainer);
      } else {

        lettersTitle.innerHTML = "Благодарственные письма";
        thanksgivingLetters.removeChild(imgContainer);
      }

      isShown = !isShown;
    }

    function createImgContainer() {
      // new container because it takes to load content only on request

      lettersTitle.innerHTML = "Загрузка...";

      var container = document.createElement("div");
      container.className = "gradient";

      for (var i = 0; i < lettersArr.length; ++i) {
        createImg(container, "/img/thanksgivingLetters/" + lettersArr[i]);
      }

      return container;
    }

    function createImg(container, path) {
      var link = document.createElement("a");

      link.className = "letters_fancybox";

      // group - fancybox special property
      link.rel = "group";
      link.href = path;

      var img = document.createElement("img");

      img.src = path;
      img.width = 25;
      img.height = 25;
      img.style.margin = "10px";
      img.style.border = "1px solid #c8c8c8";

      // Is img.onload supported in IE8?

      img.onload = function() {
        if (++loadedLetters < lettersArr.length) return;

        lettersTitle.innerHTML = "&lt; скрыть &gt;";
      }

      link.appendChild(img);
      container.appendChild(link);
    }
        
  }());

  (function() {
    // lady animation

    if (document.addEventListener) {

      document.addEventListener("DOMContentLoaded", initLadyAnimation);
    } else {

      document.attachEvent("onreadystatechange", function() {
        if (document.readyState != "complete") return;

        initLadyAnimation();
      });
    }

    function initLadyAnimation() {
      var PROPERTIES = ("webkitTransform,mozTransform,oTransform,msTransform").split(",");

      var transform = "transform";

      for (var i = 0; i < PROPERTIES.length; ++i) {

        if (!(PROPERTIES[i] in lady.style)) continue;

        transform = PROPERTIES[i];
        break;
      }

      var USUAL_SHIFT = 5;
      var SPECIAL_SHIFT = 0.5;
      var JUMPING_COEFF = 4;

      var GRAFF_T_POS = 10; // "px"
      var graffWidth = 20; // "%"
      var ladyLPos = null;

      var LOW_LIMIT = 40;
      var UPP_LIMIT = LOW_LIMIT + graffWidth;

      var isReady = null;

      function resetValues() {
        graffWidth = 20; // "%"
        ladyLPos = 100; // "%"

        graff.style.top = GRAFF_T_POS + "px";
        graff.style.left = LOW_LIMIT + "%";
        graff.style.width = graffWidth + "%";

        lady.style.top = -GRAFF_T_POS + "px";
        lady.style.left = ladyLPos + "%";
        lady.style.height = ladyContainer.style.height;
        lady.style[transform] = "";

        wall.style.top = -parseInt(wall.style.height) + "px";

        isReady = true;
      }

      window.animateLady = function() {
        if (!isReady) return;

        isReady = false;

        var interval = setInterval(function() {
          if (ladyLPos >= -50) {

            if (ladyLPos < LOW_LIMIT || ladyLPos > UPP_LIMIT) {

              ladyLPos -= USUAL_SHIFT;
            } else {

              ladyLPos -= SPECIAL_SHIFT;
              lady.style.top = -GRAFF_T_POS - (ladyLPos % 2) * JUMPING_COEFF + "px";
              lady.style[transform] = "rotate(" + (LOW_LIMIT - 10 - ladyLPos) + "deg)";

              graffWidth -= SPECIAL_SHIFT;
              graff.style.width = graffWidth + "%";
            }

            lady.style.left = ladyLPos + "%";
          } else {

            clearInterval(interval);
            resetValues();
          }
        }, 100);
      }

      resetValues();
      ladyContainer.style.display = "block";
    }

  }());

}());
