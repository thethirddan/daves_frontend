import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submit() {
      let item = this.store.createRecord('item', {
        name: this.get('name'),
        description: this.get('description')
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
