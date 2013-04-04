Application.CommentsCollection = Backbone.Collection.extend({
  model: Application.CommentModel,
  localStorage: new Backbone.LocalStorage("CommentsCollection")
});
Application.comments = new Application.CommentsCollection();
