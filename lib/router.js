Router.configure({
	layoutTemplate:'layout',
	})
Router.route('/',{name:"home"});
Router.route('/map', {name: 'map'});
Router.route('/comments', {name: 'comments'});
Router.route('/myAccount', {name: 'myAccount'});
Router.route('/room', {name: 'room'});
Router.route('/testing', {name: 'testing'});
Router.route('/quiz1', {name: 'quiz1'});
Router.route('/roomOnAccount/:_id',
	{	
		name:"roomOnAccount",
		data:function(){
			const c=Room.findOne({_id:this.params._id});
			
			console.dir(c);
			return c;
		}
	}
);
