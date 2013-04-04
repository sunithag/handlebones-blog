var Application = window.Application = {};
_.extend(window.Application, Backbone.Events);

//global router
new (Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function() {
    var model = new Backbone.Model({
      greeting: 'Hello'
    });
    var indexView = new Application.View({
      template: Handlebars.templates['index'],
      model: model
    });
    indexView.render();
    $('body').append(indexView.el);
  }
}));

$(function() {
  Application.comments.fetch({
    success: function() {
      Application.posts.fetch({
        success: function() {
          Application.trigger('ready');
          Backbone.history.start();
        }
      });
    }
  })
});
