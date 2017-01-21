import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    "use strict";
    return this.get('store').findRecord('person', params.person_id);
  },
  actions: {
    updatePerson(params){
      "use strict";
      params.save().then(() => {
        this.transitionTo('dashboard');
      })
    },
    deletePerson(params){
      "use strict";
      let person = params;
      person.deleteRecord();
      person.save().then(() => {
        this.transitionTo('dashboard');
      });
    }
  }
});
