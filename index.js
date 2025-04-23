//QUESTION 1
function userAttempts(){
    let userAttempt=0;
    while(userAttempt <=3){
        if (userAttempt === 3){
            console.log("Account locked")
            break;
        }
        else{
            console.log("Try again")
        }
        userAttempt +=1
    
    }}
    userAttempts();

    //QUESTION 2
    function votes(arrayOfVotes){
        let i=0
        do{
            console.log(arrayOfVotes[i])
            i++
        }
        while(i<arrayOfVotes.length)
    }
votes([30,2,23,12,90,45,37]);
   
    //QUESTION 3
    function daysNumbers(arrayOfDays){
        arrayOfDays.map(day=>{
            switch(day){
                case 1:
                    console.log("Sunday")
                    break;
                case 2:
                    console.log("Monday")
                    break;
                case 3:
                    console.log("Tuesday")
                    break;
                case 4:
                    console.log("Wednesday")
                    break;
                case 5:
                    console.log("Thursday")
                    break;
                case 6:
                    console.log("Friday")
                    break;
                case 7:
                    console.log("Saturday")
                    break;
            }
        })
    }
    daysNumbers([1,2,3,4,5,6,7]);

    //QUESTION 4
    function checkPassword(passwords){
        for (let i=0; i<passwords.length; i++)
            if(passwords[i].length>=8){
                console.log("Strong")
            }
            else{
                console.log("Weak")
            }
    }
    checkPassword(["pass123", "Shirley", "myPassword"])

    //QUESTION 5
    function greetings(languages){
        languages.map((language)=> {
            switch(language){
                case "en":
                  console.log("Hello")
                  break;
                case "fr":
                    console.log("Bonjour")
                    break;
                case "sw":
                    console.log("Habari")
                    break;
                default:
                    console.log("Try another language")
                    break;
            }
        })
    }
    greetings(["en","fr","sw","ger"]);

    //QUESTION 6
    function weather(arrayOfTemperatures){
        for(let i=0; i<arrayOfTemperatures.length;i++)
            if(arrayOfTemperatures[i]>30){
                console.log("High heat alert!")
            }
            else if (arrayOfTemperatures[i]>=15 && arrayOfTemperatures[i]<=30){
                console.log("Normal conditions")
            }
            else(
                console.log("Cold alert!")
            )
    }
    weather([10,40,15,18])


    //QUESTION 7
    function userQueue(arrayOfUsers){
        let i=0
        do{
            console.log(arrayOfUsers[i])
            i++
        }
        while(i < arrayOfUsers.length)
    }
userQueue(["Shirley","Bilha","Abwoi","Joan"])


  //QUESTION 8
  function retakes(studentScore){
    do { console.log(`You have scored ${studentScore}`);
    studentScore +=10
    }
    while(studentScore<=50)
  }
  retakes(10);

