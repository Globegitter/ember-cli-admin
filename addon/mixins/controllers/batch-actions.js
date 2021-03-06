// Generated by CoffeeScript 1.8.0
import Ember from 'ember';
var batchActionsMixin;

batchActionsMixin = Ember.Mixin.create({
    __batches: [],
    batchActions: [
        {
            title: "delete",
            confirm: "Are you sure you want to delete this?",
            action: "destroy"
        }
    ],
    actions: {
        baseBatchAction: function(action) {
            this.get('__batches').forEach((function(_this) {
                return function(model) {
                    return _this.send(action, model, true);
                };
            })(this));
            return this.set('__batches', []);
        }
    }
});

export default batchActionsMixin;
