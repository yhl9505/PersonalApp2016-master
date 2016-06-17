Router.configure({
	layoutTemplate:'layout',
	})
Router.route('/',{name:"home"});
Router.route('/map', {name: 'map'});
Router.route('/comments', {name: 'comments'});
Router.route('/myAccount', {name: 'myAccount'});