'use strict';

var MainHandler = function() {
    var listenedElement = null;

    function Handler(domElement) {
        listenedElement = domElement;
    }

    Handler.prototype.setListener = function(action, actionMainHandler) {
        listenedElement.addEventListener(action, actionMainHandler)
    };

    return Handler;
};
