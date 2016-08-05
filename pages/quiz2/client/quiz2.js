Template.quiz2.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    sort: "All",
    show: 10,     
    who: "none",  


  });
});


Template.quiz2.helpers({
	donations: function(){
    const instance = Template.instance();
    const sort = instance.state.get("sort");   
    const show= instance.state.get("show");
    console.log("sort="+sort);
    let donations = [];
    switch(sort){

      case "TraWorld":
            donations =
            Donations.find({team:"TraWorld"});
                // Donations.find({},{sort:{team:TraWorld}, limit:show});
            console.dir(donations);
            break;

      case "TalkBoard":
            donations =
                Donations.find({team:"TalkBoard"});  
            break;


      case "ChefsAssistant":
            donations =
              Donations.find({team:"ChefsAssistant"});
            break;

      case "Epoch":
            donations =
              Donations.find({team:"Epoch"});
            break;

      case "VirtualPet":
            donations =
              Donations.find({team:"VirtualPet"});
            break;
      case "PlanDeis":
            donations =
              Donations.find({team:"PlanDeis"});
            break;

      default:
            donations =
              Donations.find({});
            break;


       }
    return donations;
  },
})

Template.quiz2.events({
   "change .js-sort": function(event,instance){
    const sortby = $(".js-sort").val();
    instance.state.set("sort", sortby);
    console.log("sortby="+sortby);

  },
});

Template.donationForm.events({
  "click .js-share": function(event,instance){
     event.preventDefault();
     //console.dir(event);
     const  name = $(".js-name").val();
     if (name=="") {
      window.alert("you must enter a name!");
      return;
     }
     const rating = $(".js-rating").val();
     if (rating==null) {
      window.alert("you must choose the rating you want!!");
      return;
     }
     const comment = $(".feedback").val();
     const team = $(".js-who").val();
     if (team==null) {
      window.alert("you must choose a team!");
      return;
     }
     const donation_obj =
     {name,rating,comment, team,
      createdAt: new Date(),
      createdBy: Meteor.userId(),
    };
      //console.dir(comment_obj);
      Donations.insert(donation_obj);
      $(".js-name").val("");
      $(".feedback").val("");
      console.log(donation_obj);
      //Router.go('/');
      console.log("Did we get here????")
  },

});


Template.donationRow.events({
	"click .js-delete-comment": function(event){
    console.log("clicked on the x");
    console.dir(this);
    Donations.remove(this.d._id);
  },
})
