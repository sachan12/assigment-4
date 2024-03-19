// Chapter 14-16 (ARRAYS);
// Question-01 : Declare any empty array using JS literal notation to store student names in future;
// var studentNames = [];

// Question-03 : Declare and initialize a strings array;
//var studentNames = ["Sachan","Sajawal","umer","Muzammil"];

// Question-04 : Declare and initialize a number  array;
//var scores = [64,89,90,100,55];

// Question-05 : Declare and initialize a Boolean array;
//var checks = [true,false];

// Question-06 : Declare and initialize a Mixed array;
//var marks = ["Sachan",50,true];

// Question-07 : Declare and initialize an array and store availabe education qualifications in 
//Pakistan (e.g.SSC,HSC,BCS,BS,BCOM,MS,M.phil,PHD).show the listed qualifications in your browser like.

/*var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M.phil","PHD"];
document.write("<h1>"+"Qualifications In Pakistan"+"</h1>");
function task(){
    for(i=0;i<qualifications.length;i++){
        document.write(qualifications[i]);
        document.write("<br>")
    }
}
task();*/

// Question-08 : write a program to store 3 Students names in array .Take another array to store score
// of these three students .Assume that total marks are 500 of aech students , display the scores and percentages of students like;

/*var studentNames = ["Sachan" , "Sajawal" , "Umair"];
var studentMarks = [460 , 315 , 250];
var totalMarks = 500;
document.write("<h1>"+"Marks Of the students"+"</h1>");
document.write(`Score of the ${studentNames[0]} is : ${studentMarks[0]} . Percentage ${studentMarks[0] * 100/totalMarks}% <br> `)

document.write(`Score of the ${studentNames[1]} is : ${studentMarks[1]} . Percentage ${studentMarks[1] * 100/totalMarks}% <br> `)

document.write(`Score of the ${studentNames[2]} is : ${studentMarks[2]} . Percentage ${studentMarks[2] * 100/totalMarks}% <br> `)*/

// Question-09 :  initialize an array with color names.Display the array elements in your browser.
// Ask the user what color he/she wants to add to the begining of the array 
// Display the updated array in your browser.
// Ask the user what color he/she wants to add to the end of the array 
// And add that color to the end of the array .
// Display the updated array in your browser.

/*var colorNames = ["blue","white","black"];
var userFirst = prompt("Please add color name in the beginning");
var userLast = prompt("Please add color name in the last");
var addFirst = colorNames.unshift(userFirst);
var addLast = colorNames.push(userLast);
document.write(colorNames);

// Add two more color to the begining of the array.
// Display the updated array in your browser.

var colorNames = ["blue","white","black"];
colorNames.unshift("red" , "orange");
document.write(colorNames);

// Delete the first color in the array . Dispaly the updated array in the browser.
var colorNames = ["blue" , "white" , "black"];
colorNames.shift();
document.write(colorNames);

// Delete the Last color in the array . Dispaly the updated array in the browser.
var colorNames = ["blue" , "white" , "black"];
colorNames.pop();
document.write(colorNames);

// Ask the user at which index he/she wants to add a color & color name Then add the color to desired
// position/index..Display the updated array in your browser.
var colorNames =  ["blue" , "white" , "black"];
var Usercolor = prompt("please tell the color name");
var userindex = +prompt("and also the tell the index of the where do you want to add this color")
colorNames.splice(userindex,0,Usercolor);
document.write(colorNames);*/

// Question-10 : write a program to store student scores in an array & 
//and sort the array in asscending order using Arrays sort Method.

/*var studentScore = [35,53,397,24];
document.write(`score of the students ${studentScore}<br>`)
studentScore.sort();
document.write(`Ordered score of the students ${studentScore}`);*/



// Question-012 : write a program to create a single string
/*var array = ["This" , "is" , "my" , "Cat"];
document.write(array);*/

// Question -013 : Create a new array store values one by one in such a way 
// that you access the values in order in which they were stored.(FIFO-First In First OUT)
/*var devices = ["keyboard" , "mouse" , "printer","CPU"]
for(i=0;i<devices.length;i++){
    document.write(`${devices[i]}<br>`)
}*/

// Question -014 : Create a new array store values one by one in such a way 
// that you access the values in order in which they were stored.(last In First OUT)
/*var devices = ["keyboard" , "mouse" , "printer","CPU"];
var reverseDevices = devices.reverse()
for(i=0;i<reverseDevices.length;i++){
    document.write(`${reverseDevices[i]}<br>`)
}*/










