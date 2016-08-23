import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=f354f26de02441e2a82ebf8efd0d9230';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
  
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
