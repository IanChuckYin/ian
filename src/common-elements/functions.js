function _hide(element) {
    element.classList.add('hide');
}

function _show(element) {
  element.classList.remove('hide');
}

function _addCSS(element, css) {
  element.classList.add(css);
}

function _removeCSS(element, css) {
  element.classList.remove(css);
}

function _checkIfInView(element, animation, origianlProperty, autoEditCSS) {
    var screenViewTop = $(window).scrollTop();
    var screenViewBottom = screenViewTop + $(window).height();

    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).height() - 150;

    var inView = ((elementBottom <= screenViewBottom) && (elementTop >= screenViewTop));

    if (inView && autoEditCSS) {
      element.classList.remove(origianlProperty);
      element.classList.add(animation);
    }

    if (inView && !autoEditCSS) {
      return true;
    }
  }

  function _typeAnimation(word, targetElement, timer, self) {
    if (word.length > 0) {
      targetElement.innerHTML += word.shift();

      Polymer.Async.timeOut.run(function () {
        _typeAnimation(word, targetElement, timer, self);
      }, timer);
    }
  }