Template.hiddenRoom.helpers({
	roomNumber:function(){
		console.log("random number"+ roomNumber);
		const roomNumber=parseInt(Math.random()*1000+1);
		return roomNumber;
	}
	
})

