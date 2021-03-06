import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('item');
  },

  actions: {
    saveItem(item) {
      item.save();
    }
  }
});
