



//create a class for complex numbers

//create a constructor with two fields: re, im

function ComplexNumber(re,im){  //make it capital, want others to know its a constructor
	this.re=re;
	this.im=im;



}


//doubles the real and imaginary parts of the element
ComplexNumber.prototype.double = function (){
	this.re=2*this.re;
	this.im=2*this.im;
}

ComplexNumber.prototype.square=function(){
	const re1=this.re*this.re - this.im*this.im;
	const im1=this.re*this.im*2;
	this.re=re1;
	this.im=im1;
}


const num =new ComplexNumber(1,2);
num.double();
num.square();


// mtobj=(function(){
// 	//define a bunch of stuff, with new functions,
// 	//temp variables
// 	//all hidden from rest of programs
// 	function a (x){return x*2}
// 	const b =[1,2,3]
// 	return {
// 		a:a, // revealt this value
// 		b:b;	//and this
// 	}
// }



Template.testing.helpers({
	num:function(){
		return num;
	}

})