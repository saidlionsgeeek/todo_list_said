let input_todo_one = document.querySelector("#input_todo_one");
let submit_todo_one = document.querySelector("#submit_todo_one");
let ul = document.querySelector("#ul-power")


let position = "beforeend";

let tabtoDO = [];
let tabdoing = [];
let tabAll = [];

const addElement = () => {
    if (input_todo_one.value.length != 0) {
        let text = `
                <li class="d-flex mt-4 ">
                    <i class="fa-solid fa-circle-check" style="color: #33e668;"></i>
                    <p class="ms-5 lolo">${input_todo_one.value}</p>
                    <i class="fa-solid fa-trash-can ms-5" style="color: #ed0202;"></i>
                </li>
`
            ;
        ul.insertAdjacentHTML(position, text);
        input_todo_one.value = "";
        for (let i = 0; i < ul.children.length; i++) {
            let element = ul.children[i];
            console.log(element);
            element.addEventListener("click", () => {
                let p = document = document.getElementsByClassName("lolo")[i]
                let circle_check = document.getElementsByClassName("fa-circle-check")[i]
                circle_check.addEventListener("click", () => {
                    p.style.color = "green";
                    
                })
            })
        }




    }


}
submit_todo_one.addEventListener("click", addElement);




