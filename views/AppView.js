var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-beer': 'createBeer'
  },

  initialize: function () {
    this.listenTo(this.model.get('beers'), 'add', this.renderBeer);
    this.renderBeers();
  },

  createBeer: function () {
    this.model.get('beers').addBeer(
      this.$('#name-input').val(),
      this.$('#style-input').val(),
      this.$('#abv-input').val(),
      this.$('#img-input').val()
    );
  },

  renderBeer: function (b) {
    var beerView = new BeerView({ model: b });
    this.$('.beer-list').append(beerView.render().el);
  },

  renderBeers: function () {
    this.model.get('beers').each(function (b) {
      this.renderBeer(b);
      
    }, this);
  }

});