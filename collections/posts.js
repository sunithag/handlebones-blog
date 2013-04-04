Application.PostCollection = Backbone.Collection.extend({
  model: Application.PostModel,
  localStorage: new Backbone.LocalStorage("PostCollection")
});
Application.posts = new Application.PostCollection();