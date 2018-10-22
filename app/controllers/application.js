import Controller from '@ember/controller';

export default Controller.extend({

  init() {
    this._super(...arguments);
    this.items = ['USA', 'China', 'Russia', 'India'];
  },

  actions: {
    selectionChanged(country) {
      let props = {};
      if (!country) {
        props = Object.assign({}, {searchText: ''});
      }
      props = Object.assign(props, {country});
      this.setProperties(props)
    }
  }
});
