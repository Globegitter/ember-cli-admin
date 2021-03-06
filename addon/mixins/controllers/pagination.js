// Generated by CoffeeScript 1.8.0
import Ember from 'ember';
var paginationMixin;

paginationMixin = Ember.Mixin.create({

    numberOfPages: (function() {
        var total = this.get('total') || this.get('model').get('total');
        return Math.ceil(total / this.get('perPage'));
    }).property('perPage', 'total', 'model'),

    actions: {
        changePerPage: function(perPage) {
            return this.set('perPage', perPage);
        }
    }
});

export default paginationMixin;
