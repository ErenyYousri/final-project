
console.log("hello world");
document.getElementById("ony");
    
var number1 = 1
var number2 = 3

var sum = number1 + number2; 

console.log(sum)
                 

var user = ["ony", "semon", "maro" ,"bola"]
     console.log(user)

var person = {
    firstName : "ereny",
    lastName : "saleb",
    age : 20 }

console.log( person)    
    
var users = [
    {
       firstName : "rerny",
        age : 20
    }
    
 
   ]
console.log(users)   
   
var person = {
    
    firstName : "felopater",
    lastName : "bola",
    age : 3,
    nationlity :" mahala we meafen "
     
}
console.log(person)
console.log(person.firstName)


var friends = [
       "ony",
       "semon",
      "felo",
    ]

/*
console.log(friends.length);
console.log(friends[1]);
friends.push("nada");
console.log(friends);
friends.unshift("mariam");
console.log(friends);

friends.splice(4 ,0 , "marina" , "soso" );

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

friends.sort();
console.log(friends);

friends.reverse();
console.log(friends);
*/
/*
var mySliceArray = friends.slice(2 , 4);
console.log( mySliceArray);
*/

var workFriend = [
    "rana",
    "angel",
    
]
var AllFriends = friends.concat(workFriend);
console.log(AllFriends);

var number = [2 , 2 , 3 ,5 , 6];
var x = number.map(function(num){
                                   
 return num * 10 });
 console.log(x);                  
                   
var x = number.map (num =>{return num *20;});
console.log(x)



var button = "changImg";

function changImg(){
    
     doctype.getElementsById("my ony").src = "WhatsApp Image 2020-11-18 at 14.31.12 (1)";
       
}   




var myDate = new Date, 
 myString = myDate.toString();
console.log(myString);

var myp = document.createElement('P'),
    MYPTEST = document.createTextNode('this is kkk');
document.body.appendChild(myp);

    
  
