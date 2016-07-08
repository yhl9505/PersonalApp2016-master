Router.configure({
	layoutTemplate:'layout',
	})
Router.route('/',{name:"home"});
Router.route('/map', {name: 'map'});
Router.route('/comments', {name: 'comments'});
Router.route('/myAccount', {name: 'myAccount'});
Router.route('/room', {name: 'room'});

Router.route('/hiddenRoom', {name: 'hiddenRoom'});
Router.route('/Mandel124', {name: 'Mandel124'});
Router.route('/Mandel121', {name: 'Mandel121'});
Router.route('/settings', {name: 'settings'});

Router.route('/roomOnAccount/:_id',
	{	
		name:"roomOnAccount",
		data:function(){

			check(this.params._id, String);
			const c=Room.findOne({_id:this.params._id});
			
			console.dir(c);
			return c;
		}




	}
);
