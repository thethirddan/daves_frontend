import Ember from 'ember';

export default Ember.Component.extend({
  isEditable: false,

  click() {
    //if isEditable is true just return
    if(this.get('isEditable')) {
      return
    }

    this.toggleProperty('isEditable');
  },

  actions: {
    save(){
      this.toggleProperty('isEditable');
      this.sendAction('action', this.get('model'));
    }
  }
});
