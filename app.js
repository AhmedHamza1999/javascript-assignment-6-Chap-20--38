// ______________________chapter 21-25 start__________________________

// ______________________Question 1__________________________

// var firstName = prompt("Enter firdt name");
// var lastName = prompt("Enter last nmae");

// var fullName = firstName + " " +lastName;
// alert("Asalam o alikum "+fullName);

// ______________________Question 2__________________________

// var userMoile = prompt("Enter your favout mobile Phone Name");
// var nameLenght = userMoile.length;
// document.write("Lenght of String : "+nameLenght);

// ______________________Question 3__________________________

// var stringName = "pakistani";
// var c= stringName.indexOf("n");
// document.write("Index of 'n' : "+c);


// ______________________Question 4__________________________

// var names = "hello world";
// var find = names.lastIndexOf("l");
// document.write("Last inde of 'l' is : "+find);

// ______________________Question 5__________________________

// var stringName = "pakistani";
// var c= stringName.charAt(3);
// document.write("Character At index 3 : "+c);

// ______________________Question 6__________________________

// var str1 = prompt("Furst name");
// var str2 = prompt(" Last name");
// var res = str1.concat(str2);
// document.write("Aslam o alikum " +res);

// ______________________Question 7__________________________

// var city = "hyderabad";
// var rep = city.replace('hyder' , 'Islam');
// document.write("After replacing: "+rep)

// ______________________Question 8__________________________

// var para = ("Ali and Sami are best friends. They play cricket and football together"); 
// var replaCe = para.replace(/and/g ,'&');
// document.write(replaCe);

// ______________________Question 9__________________________

// var stringNumber = "472";
// var number = parseInt(stringNumber);
// document.write("Value :"+number + "<br>");
// document.write("type :" + typeof(number)+ "<br>");

// var typNumb = 472;
// var numaric = typNumb.toString();
// document.write("value: "+numaric+ "<br>");
// document.write("type: "+typeof(numaric)+ "<br>");

// ______________________Question 10__________________________v

// var inputUser = prompt("Enter String");
// var capital = inputUser.toUpperCase();
// document.write("User input : " +inputUser +"<br>");
// document.write("Upper case : "+capital);

// ______________________Question 11__________________________

// var inputUser = prompt("Enter String");
// var firstChar = inputUser.slice(0,1);
// firstChar = firstChar.toUpperCase();
// var otherChar = otherChar.slice(1);
// otherChar = otherChar.toLowerCase();

// var final = firstChar + otherChar;

// document.write(final);

// ______________________Question 12__________________________

// var num = 35.36;
// var str = num.toString();
// var first = str.slice(0,2);
// var second = str.slice(3);
// var final = first + second ;
// document.write("Number : " + num +"<br>")
// document.write("Result : " + final); 

// ______________________Question 13__________________________

// var userInput = prompt("Enter Your name");

// for(var i = 0 ; i<userInput.length ; i++)
// {
//     if(userInput[i] == '@' || userInput[i] == '.' || userInput[i] == ',' || userInput[i] == '!')
//     {
//         alert("please enter valid character");
//         break;
//     }
    
// }

// ______________________Question 14__________________________

// var input = prompt("Enter item");
// input=input.toLowerCase();
// var A = [ 'cake ' , 'apple pie' , 'cookie' , 'chips' , 'patties' ];

// for(var i = 0 ; i<A.length ; i++)
// {
//     if(input === A[i])
//     {
//         document.write(input+" available at index "+ A.indexOf(input) +" in our bakery");
//         break;
//     }
//     else 
//     {
//         alert("Sorry!  item not available in our bakery");
    
//     }
// }

// ______________________Question 15__________________________



// ______________________Question 16__________________________

// var university = "Univerty of Karachi";
// var res = university.split();

// for(var i = 0 ; i < university.length ; i++ )
// {
//     document.write(university[i]+"<br>")
// }

// ______________________Question 17__________________________

// var disp = prompt("enter string");
// var res = disp.charAt(disp.length-1);
// document.write("last character of input: "+res)

// ______________________Question 18__________________________

// var stri = "The quick brown fox jumps over the lazy dog";
// var aar = stri.split(" ");
// var count = 0 ;
// for(var i = 0 ; i < aar.length ; i++)
// {
//     if(aar[i] === "the" || aar[i] === "The")
//     {
//         count++;
            
//     }
    
   
// } 
// alert("The word 'the' repeat in this string "+count + " times")

// ______________________chapter 21-25 end__________________________


// ______________________chapter 26-30 end__________________________

// ______________________Question 1__________________________

// var positiveInt = +prompt("Enter positive integer");
// positiveInt=positiveInt;
// var roundOf = Math.round(positiveInt);
// var floor = Math.floor(positiveInt);
// var ceil = Math.ceil(positiveInt);
// document.write("number : " + positiveInt +"<br>")
// document.write("Round : " +roundOf +"<br>")
// document.write("floor : "+floor +"<br>" )
// document.write("Ceil : "  + ceil +"<br>")

// ______________________Question 2__________________________

// var nagetiveInt = +prompt("Enter negative integer");
// nagetiveInt=nagetiveInt;
// var roundOf = Math.round(nagetiveInt);
// var floor = Math.floor(nagetiveInt);
// var ceil = Math.ceil(nagetiveInt);
// document.write("number : " + nagetiveInt +"<br>")
// document.write("Round : " +roundOf +"<br>")
// document.write("floor : "+floor +"<br>" )
// document.write("Ceil : "  + ceil +"<br>")


// ______________________Question 3__________________________

// var absolute = +prompt("Enter number");
// absolute=absolute;
// var res = Math.abs(absolute);
// document.write("The Absolute value of "+absolute+" is " + res)

// ______________________Question 4__________________________

// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);
// document.write("Random Dice Value "+numberOfStars)

// ______________________Question 5__________________________

// var toss = (Math.random()*2)+1;
// var floor = Math.floor(toss)
// if(floor === 1)
// {
//     document.write(floor + "<br>" + "Ramdom toss value : Tails")
// }
// else
// {
//     document.write(floor + "<br>" + "Ramdom toss value : Heads")
// }


// ______________________Question 6__________________________

// var disp = (Math.random()*100)+1;
// var fLoor = Math.floor(disp);
// document.write("Random number between 1 and 100 : " +fLoor)

// ______________________Question 7__________________________

// var weight = prompt("Enter your weight");
// var res = parseInt(weight);
// document.write(res)

// ______________________Question 8__________________________

// var ranumber = (Math.random()*10)+1;
// var userNum = +prompt("Enter number");
// if(ranumber === userNum)
// {
//     alert("Conratulations the user")
// }
// else
// {
//     alert("Try again");
// }

// ______________________chapter 31-35 start__________________________

// ______________________Question 1__________________________

// var time = new Date;
// document.write(time);

// ______________________Question 2__________________________

// var arrMonth = ['January' , 'Faberary' , 'March' , 'April' , 'May' , 'June' ,'July' , 'Augest' , 'September' , 'October' , 'Navember' , 'December']
// var date = new Date;
// var month = arrMonth[date.getMonth()];
// alert("Current Month :" +month);

// ______________________Question 3__________________________

// var week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
// var date = new Date;
// var day = week[date.getDay()];
// var three = day.slice(0,3)
// alert("Today is "+three);

// ______________________Question 4__________________________


// var week = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
// var date = new Date;
// var day = week[date.getDay()];
// if(day === 'Saturday' || day === 'Sunday')
// {
//     alert("It’s Fun day")
// }
// else
// {
//     alert("Today is "+day);
// }

// ______________________Question 5__________________________

// var date = new Date;
// var day = date.getDate();
// if(day > 15 )
// {
//     document.write("Last days of the month")
// }
// else if(day < 15)
// {
//     document.write("First fifteen days of the month")
// }

// ______________________Question 6__________________________

// var date = new Date;
// document.write("Current Date : "+date+"<br>")
// var min = date.getTime();
// document.write("Minutees Since 1970 : "+min+"<br>")
// document.write("milisecond since 1970 : " +min*1000 +"<br>")

// ______________________Question 7__________________________

// var date = new Date;
// var hour = date.getHours();
// if(hour <= 12)
// {
//     document.write("Its AM")
// }
// else{
//     document.write("Its PM")
// }

// ______________________Question 8__________________________

// var lastDate = new Date(2020, 11, 31);
// document.write(lastDate)

// ______________________Question 9__________________________

// var date = new Date(2015,5,18);
// var ramdan = date.getTime();
// var today = new Date();
// var todarmili = today.getTime();
// var diff = todarmili - ramdan;
// var acc = Math.floor(diff/(1000*60*60*24));
// alert(acc + " days passed since 1st Ramdan 2015")

// ______________________Question 10__________________________

// var refDate = new Date(2015,11,5,22,50,16);
// var refmili = refDate.getTime();
// var begining = new Date(2015,0,1);
// var beginMili = begining.getTime();
// var diff = refmili - beginMili;
// var accr = Math.floor(diff/(1000*60));
// document.write(accr + " seconds had passed since beginning of 2015")

// ______________________Question 11__________________________

// var date = new Date();
// document.write("Current date  : " +date +"<br>");
// var dt = new Date();
// dt.setHours( dt.getHours() - 1 );
// document.write( "one hour ago : "+dt );




// ______________________Question 12__________________________

// var date = new Date();
// document.write("Current date  : " +date +"<br>");
// var dt = new Date();
// dt.setFullYear( dt.getFullYear() - 100 );
// document.write( "one hour ago : "+dt );





// ______________________Question 13__________________________

// var dob = +prompt("Enter your age ")
// var date = new Date();
// var Month = date.getFullYear();
// document.write("Your age is " + dob + "<br>")
// document.write("Your birth Year is "+(Month-dob))

// ______________________Question 14__________________________

// var customerName = "ABC cuntomer";
// var month = "Faberery";
// var unit = 410 ; 
// var charge = 16. ;
// var laitFee = 350;
// var netAmount = Math.round(unit * charge);
// var laitAmount = Math.round(netAmount + laitFee);

// document.write( "<h1> K-Electric bill </h1>")

// document.write("Customer Name : " + "<b>"+ customerName +"</b>" + "<br>");
// document.write("Current Month : " + "<b>"+ month +"</b>" + "<br>");
// document.write("Number of units : " + "<b>"+ unit +"</b>" + "<br>");
// document.write(" Charges per uni : " + "<b>"+ charge +"</b>" + "<br>" +"<br>");
// document.write(" Net Amount Payable (within Due Date) : " + "<b>"+ netAmount +"</b>" + "<br>" )
// document.write(" Late Payment Surcharge : " + "<b>"+ laitFee +"</b>" + "<br>" )
// document.write(" Gross Amount Payable (after Due Date)  : " + "<b>"+ laitAmount +"</b>" + "<br>" )


// ______________________chapter 31-35 ends__________________________



// ______________________chapter 35-38 start__________________________

// ______________________Question 1__________________________

// function date(){
//   var n =  new Date();
//   document.write(n)
// }
// date();

// ______________________Question 2__________________________

// function userName(){
//     var first = prompt("Enter first Name");
//     var lastname = prompt("Enter last name")
//     document.write("asalam o alikum " +first +" " +lastname )

// }
// userName();

// ______________________Question 3__________________________

// function sum(a , b)
// {
//     return a+b;
    
// }

// alert(sum( +prompt("Enter num 1"), +prompt("Enter num 2")))

// ______________________Question 4__________________________

// function calculator(a,opr,b)
// {
//     if(opr === '+')
//     {
//         return a+b;
//     }
//     else if (opr === '-')
//     {
//         return a-b;
//     }
//     else if (opr === '*')
//     {
//         return a*b;
//     }
//     else if(opr === '/')
//     {
//         return a/b;
//     }
//     else
//     {
//         return "invalid opr"
//     }
// }
// document.write(" your Calculation is : "+calculator(+prompt("a") , prompt("opr") , +prompt("b")));

// ______________________Question 5__________________________

// function sqr(a) 
// {
//     alert("aquqre is : "+ a*a);
// }
// sqr(5);

// ______________________Question 6__________________________

// function factorial(n){
//     var fact = 1;
//     if (n == 0 || n == 1)
//     {
//       return fact;
//     }
//     else
//     {
//       for(var i = n; i >= 1; i--)
//       {
//         fact = fact * i;
//       }
//       return fact;
//     }  
//   }
//   var n = 5;
//   fact = factorial(n)
//   document.write("The factorial of " + n + " is " + fact);

// ______________________Question 7__________________________

// function count(start , end)
// {
//     for(var i = start ; i<=end ; i++)
//     {
//         document.write(i + "<br>")
//     }
// }
// count(12,100)

// ______________________Question 8__________________________


// function cal(){
// function calcHypotenus(base,  per) {
//     return Math.sqrt(base*base  + per*per) ;
// }
// document.write("Hypotanus is : "+calcHypotenus(3,4))
// }
// cal();

// ______________________Question 9__________________________

// function area(wid ,hei){
//     return (wid*hei);
// }
// document.write("Area of triangle is : "+ area(4,5))


// function area(wid ,hei){
//     return (wid*hei);
// }

// var x=area(5,6)

// document.write("Area of triangle is : "+ x);

// ______________________Question 10__________________________

// var word = prompt("Enter your word");
// check="";

// for(var i=word.length-1 ; i>=0 ; i--)
// {
//     check+=word[i];
// }

// if(word===check)
// {
//     document.write(word + " is a palindrom word");
// }
// else
// {
//     document.write(word + " not a palindrom word")
// }

// ______________________Question 11__________________________

// function uppr(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppr("the quick brown fox"));

// ______________________Question 12__________________________

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// ______________________Qustion 13__________________________

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('w3resource.com', 'o'));

// ______________________Qustion 14__________________________



// // ______________________chapter 35-38 end__________________________


