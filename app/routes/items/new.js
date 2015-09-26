import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('item');
  },

  actions: {
    submit(item) {
      item.save().then(()=> {
        this.transitionTo('items');
      });
    },
    cancel(){
      this.modelFor('items.new').destroyRecord();
      this.transitionTo('items');
    }
  }
});
