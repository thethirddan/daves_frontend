import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    //if isEditable is true just return
    if(this.get('isEditable')) {
      return;
    }

    //this.toggleProperty('isEditable');
    this.set('isEditable', true);
  },
  actions: {
    save(){
      this.set('isEditable', false);
      this.sendAction('action', this.get('model'));
      // stop propigation
      return false;
    }
  },
  isEditable: false
});
