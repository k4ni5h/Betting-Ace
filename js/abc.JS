var money;
var ini1;
var ini2;
var betmon;
var myArray = ['jo','k','q','j','a'];
var zzz;
var c=0;
var p;
function remo() {
p=$("#b").detach();
}
function validatation()
{
    var user = document.forms["start"]["username"].value;
    var age = document.forms["start"]["age"].value;
    var amount = document.forms["start"]["iamount"].value;
    var email = document.forms["start"]["email"].value;
    var format = /^([a-zA-Z0-9_\.\-])+\@+([a-zA-Z0-9\-])+\.+([a-zA-Z0-9])+$/;

  

    if (user == "")
    {
        alert("Name must be filled out");
        return false;
    }
 	else if (!format.test(email))
 	{
 		alert("You have entered an invalid email address!"+"\n"+"email should be in correct format")
    	return (false)
    }
    else if (age >60 || age <18)
    {
        alert("Age must be in between 18-60");
        return false;
    }
    else if (amount<0)
    {
        alert("invalid amount");
        return false;
    }
    else
    {initialize();}

}

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function initialize()
{
	ini2=document.forms["start"]["iamount"].value;
	ini1=ini2;
	zzz=document.forms["start"]["username"].value;
	fx=true;

$("#a").remove();
	p.appendTo("body");
	p=null;
	iniy();
}
function end()
{
$("#b").remove();
document.getElementById("end1").innerHTML="Thank you for playing with us "+zzz;
document.getElementById("finaim").innerHTML="Your final amount is : $"+ini2;
if(c<=5)
document.getElementById("count").innerHTML="You have lasted "+c+" rounds which is reasonably"+"<br>"+"well for a beginner";
if(c>5 && c<=10)
document.getElementById("count").innerHTML="You have lasted "+c+" rounds :O " +"<br>"+"That's pretty impressive";
if(c>10 && c<20)
document.getElementById("count").innerHTML="You have lasted "+c+" rounds" +"<br>"+ "Just keep trying hard, you are almost there :)";

}
	
function iniy()
{
if(ini2<=0)
{
	ini2=0;
	end();
}
if(c%20==0 && c!=0 && ini2>=ini1)
{
	ini2=ini2+3*ini1;
	alert("You won the game!");
	iniy();
}
var fx=confirm("Your current amount is " + ini2 + " " +"and your current round is "+c+ "."+"\n" + "You wanna get more money ?");

	if(fx==false)
	{
     end();
	}
 else
 	{
 	document.getElementById('one').src='images/ca.png';
	document.getElementById('two').src='images/ca.png';
	document.getElementById('three').src='images/ca.png';
	document.getElementById('four').src='images/ca.png';
	document.getElementById('five').src='images/ca.png';


 	



	betmon=prompt("Enter your bet");
	if(isNaN(betmon))
	{
		alert("Please input a number");
		iniy();
	}
	if(betmon>ini2/5)
	{
		alert("Your maximum bet should not exceed one-fifth of your current balance.");
		iniy();
	}
	if(betmon==null)
	{
		end();
	}
	if(betmon<ini2/20)
		{alert("Minimum bet should be 5% of the your current amount");
			iniy();}
	document.getElementById("bet").innerHTML="Your current bet is: " + betmon;
	document.getElementById("name").innerHTML="Hello "+zzz;
	var t=parseInt(ini2)-parseInt(betmon);
	document.getElementById("curr").innerHTML="Your remaining balance is : "+t;

    shuffle(myArray);
	
	}
	
 }
	

//SHuffline Begins


function f1() {

	document.getElementById('one').src='images/'+myArray[0]+'.png';
	document.getElementById('two').src='images/'+myArray[1]+'.png';
	document.getElementById('three').src='images/'+myArray[2]+'.png';
	document.getElementById('four').src='images/'+myArray[3]+'.png';
	document.getElementById('five').src='images/'+myArray[4]+'.png';
	if (myArray[0]=="a") {win();}
	else if (myArray[0]=="j") {win1();}
	else if (myArray[1]=="jo") {win2();}
	else {win3();}
}

function f2() {
	document.getElementById('one').src='images/'+myArray[0]+'.png';
	document.getElementById('two').src='images/'+myArray[1]+'.png';
	document.getElementById('three').src='images/'+myArray[2]+'.png';
	document.getElementById('four').src='images/'+myArray[3]+'.png';
	document.getElementById('five').src='images/'+myArray[4]+'.png';
	if (myArray[1]=="a") {win();}
	else if (myArray[1]=="j") {win1();}
	else if (myArray[1]=="jo") {win2();}
	else {win3();}
}

function f3() {
	document.getElementById('one').src='images/'+myArray[0]+'.png';
	document.getElementById('two').src='images/'+myArray[1]+'.png';
	document.getElementById('three').src='images/'+myArray[2]+'.png';
	document.getElementById('four').src='images/'+myArray[3]+'.png';
	document.getElementById('five').src='images/'+myArray[4]+'.png';
	if (myArray[2]=="a") {win();}
	else if (myArray[2]=="j") {win1();}
	else if (myArray[2]=="jo") {win2();}
	else {win3();}
}

function f4() {
	document.getElementById('one').src='images/'+myArray[0]+'.png';
	document.getElementById('two').src='images/'+myArray[1]+'.png';
	document.getElementById('three').src='images/'+myArray[2]+'.png';
	document.getElementById('four').src='images/'+myArray[3]+'.png';
	document.getElementById('five').src='images/'+myArray[4]+'.png';
	if (myArray[3]=="a") {win();}
	else if (myArray[3]=="j") {win1();}
	else if (myArray[3]=="jo") {win2();}
	else {win3();}
}

function f5() {
	document.getElementById('one').src='images/'+myArray[0]+'.png';
	document.getElementById('two').src='images/'+myArray[1]+'.png';
	document.getElementById('three').src='images/'+myArray[2]+'.png';
	document.getElementById('four').src='images/'+myArray[3]+'.png';
	document.getElementById('five').src='images/'+myArray[4]+'.png';
	if (myArray[4]=="a") {win();}
	else if (myArray[4]=="j") {win1();}
	else if (myArray[4]=="jo") {win2();}
	else {win3();}
}


//Shuffline Ends


function win() {
	
	ini2=parseInt(ini2)+(parseInt(betmon)*4);
	setTimeout(iniy,2000);
	c++;
}
function win1() {
	
	ini2=parseInt(ini2)-(parseInt(betmon)*3);
	setTimeout(iniy,2000);
	c++;
}
function win2() {
	
	ini2=parseInt(ini2)-(parseInt(betmon)*5);
	setTimeout(iniy,2000);
	c++;
}
function win3() {
	
	ini2=parseInt(ini2);
	setTimeout(iniy,2000);
	c++;
}