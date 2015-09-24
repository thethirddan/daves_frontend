import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit(item) {
      console.log("itemgetname: ", item.get('name'));
      let postitem = this.store.createRecord('item', {
        name: item.get('name'),
        description: item.get('description')
      });

      item.save().then(()=> {
        this.transitionTo('items');
      });
    },
    cancel(){
      this.transitionTo('items');
    }
  }
});
