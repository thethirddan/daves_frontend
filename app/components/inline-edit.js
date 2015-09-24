import Ember from 'ember';

export default Ember.Component.extend({
  click() {
    //if isEditable is true just return
    if(this.get('isEditable')) {
      return
    }

    this.toggleProperty('isEditable');
  },
  actions: {
    save(){
      //this.toggleProperty('isEditable');
      this.set('isEditable', false);
      this.sendAction('action', this.get('model'));

      this.isEditable = false;
      console.log("this", this);
    }
  },
  isEditable: false
});
