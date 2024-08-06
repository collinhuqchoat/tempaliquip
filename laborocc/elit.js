let def = {
    from: null,
    data: function() {
        return [1, 2, 3, 4, 5];
    },
    propertyName: 'someProperty'
};

let name = 'propertyName';

let result = d.data((def.from || def.data()).map(def[name]));
