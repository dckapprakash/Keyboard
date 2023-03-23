
let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift = document.querySelector('.shift_right');
let shift1 = document.querySelector('.shift_left');
let caps = document.querySelector('.caps_lock_key');
let text_input = document.querySelector('#text');
let deletebtn= document.querySelector(".delete_key");

for (let i = 0; i < keys.length; i++) {

    keys[i].addEventListener("click", (e) => {
        if (e.target.innerText !== "Backspace" && e.target.innerText !== "Delete" && e.target.innerText !== "Caps Lock" && e.target.innerText !== "Shift" && e.target.innerText !== "Ctrl" && e.target.innerText !== "Alt" && e.target.innerText !== "Win" && e.target.innerText !== "Enter" && e.target.innerText !== "Fn" && e.target.innerText !== "Space" && e.target.innerText !== "Tab") {

            text_input.value += e.target.innerText;

        }

        else if (e.target.innerText === "Enter") {
            text_input.value += "\n";

        }
        else if (e.target.innerText === "Space") {
            text_input.value += " ";

        }
        else if (e.target.innerText === "Backspace") {
            text_input.value = text_input.value.slice(0, text_input.value.length - 1);

        }
        else if (e.target.innerText === "Tab") {
            text_input.value += "    ";

        }
        else if (e.target.innerText === "Delete") {
            text_input.value = " ";

        }


    })


    caps.addEventListener("click", (e) => {

        if (keys[i].innerText !== "Space" && keys[i].innerText !== "Delete" && keys[i].innerText !== "Enter" && keys[i].innerText !== "Backspace" && keys[i].innerText !== "Shift" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Win" && keys[i].innerText !== "Caps Lock" && keys[i].innerText !== "Tab") {


            keys[i].classList.toggle('uppercase');


        }
    })



    shift.addEventListener("click", (e) => {

        if (keys[i].innerText !== "Space" && keys[i].innerText !== "Delete" && keys[i].innerText !== "Enter" && keys[i].innerText !== "Backspace" && keys[i].innerText !== "Shift" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Win" && keys[i].innerText !== "Caps Lock" && keys[i].innerText !== "Tab") {


            keys[i].classList.toggle('uppercase');


        }
    })

    shift1.addEventListener("click", (e) => {

        if (keys[i].innerText !== "Space" && keys[i].innerText !== "Delete" && keys[i].innerText !== "Enter" && keys[i].innerText !== "Backspace" && keys[i].innerText !== "Shift" && keys[i].innerText !== "Ctrl" && keys[i].innerText !== "Alt" && keys[i].innerText !== "Fn" && keys[i].innerText !== "Win" && keys[i].innerText !== "Caps Lock" && keys[i].innerText !== "Tab") {


            keys[i].classList.toggle('uppercase');


        }
    })


}


window.addEventListener("keyup",(e)=>{
    if (e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Enter" && e.key !== "Shift" && e.key !== "" && e.key !== "Space" && e.key !== "CapsLock" && e.key !== "Tab") {
        text_input.value += e.key;
    }
    else if(e.key=="Backspace"){
        text_input.value = text_input.value.slice(0, text_input.value.length - 1);

    }
    else if(e.key=="Enter"){
        text_input.value +="\n";

    }
    else if (e.key == "Space") {
        text_input.value += " ";

    }
    else if (e.key == "Tab") {
        text_input.value += "    ";

    }
    else if (e.key == "Delete") {
        text_input.value = " ";

    }
    // console.log(e.key);
    

})