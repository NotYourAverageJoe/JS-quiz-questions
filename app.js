//Array Variable representing a set of character mains in the video game Smash Bros

let smashMain = ['Incineroar', 'Dr. Mario', 'Inkling', 'Fox', 'Diddy Kong' ];

for( i = 0; i < smashMain.length; i++){
    
    console.log(smashMain[i]);
    
};

//Question 1  How would you go about adding another character to a certain index?


smashMain.splice(1, 0, 'Captain Falcon')

console.log(smashMain)

