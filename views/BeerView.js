  var BeerView = Backbone.View.extend({
    className: 'beer',
  

    events: {
       
        'click .edit': 'editMode',
        'click .remove': 'removeBeer',
        'keypress .edit-mode': 'editBeer'
      },

      initialize: function () {
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'change', this.render)

      },
    


    template: Handlebars.compile($('#beer-template').html()),
  
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
  
      return this;
    },

    editMode: function (e) {
        //console.log('edit clicked');
        //toggle HTML el class to edit-mode
        console.log(this.$el.find('.edit-mode').css('display', 'block'));
       //this.model.changed!!
    },

    removeBeer: function (e) {
        //console.log('remove clicked');
        this.model.destroy();
        //console.log(this.model);
    },

    editBeer: function (e) {
        if (e.which === 13) {
            var userInput = this.$el.find('.edit-mode').val();
            console.log(userInput);
            this.model.set('name', userInput);
            console.log(this.model);
        }
    }



  });