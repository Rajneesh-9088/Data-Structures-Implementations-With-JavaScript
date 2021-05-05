var letters = [];

var word = "racecare";

var reword = "";

for(let i=0;i<word.length;i++){
    letters.push(word[i]);
}

for(let i=0;i<word.length;i++){
    reword += letters.pop();
}

if(reword===word){
    console.log("Yes palindrome");
}else{
    console.log("No palindrome");
}