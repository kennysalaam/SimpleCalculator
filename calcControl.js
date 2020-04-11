//This Javascript is written to control the activities of users 
// on a simple calculator. Strictly basic calculations


//This function is used to get information about calculator.
function showInfo(info)
{
	document.getElementById("display").value=info;
}

//this function is created to display the value on the button
//Then perform the simple aritmetic calculations with respect to
//the selected operator.
function getButtonValue(val)
{
	document.getElementById("display").value+=val;
}

//this function calculate the percentage 
function percentage()
{
	try 
	{ 
	  //the percentage is calculate with by evaluating the division sign.
	  perc= eval(document.getElementById("display").value) * 100;
	  showInfo(perc);
	} 
	
	//this inner block catch the exception, if exist during arithmetic
	catch(errorValidate) 
	{
	  showInfo('Can not Calculate Error!') 
	} 
}

//this function calculates the square of any value 
function squareValue()
{
	try 
	{ 
	  squareVal= (document.getElementById("display").value) ** 2;
	  showInfo(squareVal);
	} 
	
	//this inner block catch the exception, if exist during arithmetic
	catch(errorValidate) 
	{
	  showInfo('Can not Calculate Error!') 
	} 
}
//This function validates some calculations errors that 
//can't be calculated by simple arithmetic

//Inside it there is handler to catch the exception
function errorValidate() 
{ 
	try 
	{ 
	  showInfo(eval(document.getElementById("display").value)) 
	} 
	
	//this inner block catch the exception, if exist during arithmetic
	catch(errorValidate) 
	{
	  showInfo('Can not Calculate Error!') 
	} 
}