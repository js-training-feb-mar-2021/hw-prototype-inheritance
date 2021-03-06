var humburger = function(payload, Parent) {
    var size = {}
    var stuff = [];

    function Humburger(data) {
        size = HUMBURGER_SIZE.find(function (item) {
            return data.includes(item.id);
        });

        stuff = HUMBURGER_STUFF.filter(function (item) {
            return data.includes(item.id);
        });

        Parent.call(this, [size].concat(stuff));
    }
    
    Humburger.prototype = Object.create(Parent.prototype);
    
    Humburger.prototype.getSize = function() {
        return size;
    };
    
    Humburger.prototype.getStuffing = function() {
        return stuff;
    };

    Humburger.prototype.getDescription = function() {
        var stuffDescription = Parent.prototype.getDescription(stuff);
        var sizeDescription = Parent.prototype.getDescription([size]);

        return 'Гамбургер: ' + String(sizeDescription) + '. Начинка: ' + String(stuffDescription) + '.';
    };

    return new Humburger(payload);
};
