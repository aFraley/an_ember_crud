import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service('router'),
  store: Ember.inject.service('store'),
  actions: {
   createPerson(){
     "use strict";
     let name = this.get('name');
     let age = this.get('age');
     let newPerson = this.get('store').createRecord('person', {
       name,
       age
     });
     newPerson.save();
     this.set('name', '');
     this.set('age', '');
   },
    updatePerson(){
     "use strict";

    }
  }
});
