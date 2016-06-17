Template.home.events({
	"click .js":function(event){
		console.log("clicked on the button");
		//get the start time
		var s1 = document.getElementById("startTime");
		var starttime = s1.options[s1.selectedIndex].value;
		var numb1= parseInt($('#startTime').val());
		console.log("starttime is"+ starttime);
		console.log("numb1 is"+ numb1);
		
		//get the end time
		var s2 = document.getElementById("endTime");
		var endtime = s1.options[s2.selectedIndex].value;
		var numb2 = parseInt($('#endTime').val());
		console.log("endtime is"+endtime);
		console.log("numb2 is "+numb2);


		//compare
		if(numb2<=numb1){
			window.alert("You must choose the right time!   The end time cannot be earlier than or same as the start time");
		}
		else{
			window.location="http://129.64.155.117:3000/map";
		}

		
	}


})