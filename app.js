
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let u_scr = document.querySelector("#user_scr");
let c_scr = document.querySelector("#comp_scr");

let user_scr = 0;
let comp_scr = 0;

//here we are generating the computer choice 

const comp_choice = ()=>{

    const c_choice = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);

    // console.log(random);
    return c_choice[random];
}

//here we are generating the user choice 

choices.forEach((choice) => {

    choice.addEventListener("click", () =>{
        const u_choice = choice.getAttribute("id");
        // console.log(u_choice);
        playgame(u_choice);
    })
    
})

//here we are checking the condition of winning and wraw tha gane 

const playgame = (u_choice) => {

    const c_choice = comp_choice();
    // console.log("computer choice = ",c_choice);
    // console.log("user choice = ",u_choice);

    if(c_choice == u_choice){

        draw(); // here i call the draw function to display the massege of draw
    }
    else{

        let userwin = true;

        if(u_choice == "rock"){

            //computer choice paper & scissors

           userwin = c_choice == "scissors" ? true : false;
           win(userwin, u_choice, c_choice);
        }
        else if(u_choice == "paper"){

             //computer choice rock & scissors

            userwin = c_choice == "rock" ? true : false;
            win(userwin, u_choice, c_choice);
        }
        else{

            //computer choice rock & paper

            userwin = c_choice == "rock" ? false : true;
            win(userwin, u_choice, c_choice);
        }
    }
    
}

const draw = () => {

    msg.innerText = "This match is draw";
    msg.style.backgroundColor = "gray";
}

const win = (userwin, u_choice, c_choice) =>{

    if(userwin){

        msg.innerText = `You are winner, your choice ${u_choice} win against ${c_choice}`;
        msg.style.backgroundColor = "green";
        user_scr += 1;
        u_scr.innerText = user_scr;
    }
    else{

        msg.innerText = `You are looser, computer choice ${c_choice} win against your choice ${u_choice}`;
        msg.style.backgroundColor = "red";
        comp_scr += 1;
        c_scr.innerText = comp_scr;
    }
}


