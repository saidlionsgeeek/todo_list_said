let input_todo_one = document.querySelector("#input_todo_one");
let submit_todo_one = document.querySelector("#submit_todo_one");
let ul = document.querySelector("#ul-power")


let li_tag = document.getElementsByTagName("LI");
var i;
for (i = 0; i < li_tag.length; i++) {
    let span = document.createElement("i");
    span.classList.add("close");
    span.classList.add("fa-solid");
    span.classList.add("fa-trash-can");

    li_tag[i].appendChild(span);
}

let closee = document.getElementsByClassName("close");

function newElement() {
    let li = document.createElement("li");
    li.classList.add("remov")
    let inputValue = input_todo_one.value;
    let p = document.createElement("p");
    li.appendChild(p)
    let t = document.createTextNode(inputValue);
    p.appendChild(t);

    let i = document.createElement("i");
    i.classList.add("modifier");
    i.classList.add("fa-solid");
    i.classList.add("fa-pen-to-square");
    li.appendChild(i)


    if (inputValue === '') {
    alert("You must write something!");
    } else {
    document.getElementById("ul-power").appendChild(li);
    }

document.getElementById("input_todo_one").value = "";

let span = document.createElement("i");

span.classList.add("close");
span.classList.add("fa-solid");
span.classList.add("fa-trash-can");


    li.appendChild(span);
let ul_all = document.querySelectorAll("ul");
console.log(ul_all);

    for (i = 0; i < closee.length; i++) {
        let element = closee[i]
        let remov = document.getElementsByClassName("remov")[i]
        element.addEventListener("click", () => {
            for (let id = 0; id < ul_all.length; id++) {
                let elemet = ul_all[id];
                elemet.removeChild(remov);
            }
        })
    }


let span2 = document.createElement("i");

span2.classList.add("color");
span2.classList.add("fa-solid");
span2.classList.add("fa-circle-check");


li.appendChild(span2);
let color = document.querySelectorAll(".color")
console.log(color);

    for (let i = 0; i < color.length; i++) {
    color[i].onclick = function() {
        let div = this.parentElement;
        div.classList.toggle("checked")
        }
    }

    let modifier = document.querySelectorAll(".modifier");

    for (let i = 0; i < modifier.length; i++) {
    modifier[i].onclick = function() {
        let div = this.parentElement.firstChild;
        div.textContent = prompt("dd")
        }
    }

console.log(li.children);

}

submit_todo_one.addEventListener("click",newElement)

let select_input = document.getElementById("select_input");

select_input.addEventListener("change", () => {
let selectedValue = select_input.value;
let li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        let element = li[i];
    if (selectedValue === "All elments") {
        element.style.display = "block";
            } else if (selectedValue === "Valid elments") {
                if (element.classList.contains("checked")) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            } else if (selectedValue === "No valid elments") {
                if (!element.classList.contains("checked")) {
                    element.style.display = "block";
                } else {
                    element.style.display = "none";
                }
            }
    }
});































// !!! first methode 



// let position = "beforeend";

// const addElement = () => {
//     if (input_todo_one.value.length != 0) {
//         let text = `

//                 <li  class="d-flex mt-4  li-removal">
//                     <p class="ms-5 lolo">${input_todo_one.value}</p>
//                     <i class="fa-solid fa-circle-check ms-5" style="color: #33e668;"></i>
//                     <i class="fa-solid fa-trash-can ms-1 remove" style="color: #ed0202;"></i>
//                     <i class="fa-regular fa-pen-to-square modifier ms-1 me-1"></i>
//                 </li>
// `
//         document.createElement("p",);
//         ul.insertAdjacentHTML(position, text);
//         input_todo_one.value = "";
//         for (let i = 0; i < ul.children.length; i++) {
//             let element = ul.children[i];
//             console.log(element);
//             element.addEventListener("click", () => {
//                 let p = document.getElementsByClassName("lolo")[i]
//                 let circle_check = document.getElementsByClassName("fa-circle-check")[i]
//                 let removal = document.getElementsByClassName("remove")[i];
//                 let li_removal = document.getElementsByClassName("li-removal")[i];
//                 let modifier = document.getElementsByClassName("modifier")[i];

                
                
//                 circle_check.addEventListener("click", () => {
//                     li_removal.style.backgroundColor = "lime";
//                     p.style.color = "white";
//                     tabvalid.push(li_removal);
//                     tabnovalid.pop(li_removal)
//                     console.log(tabvalid);
//                     console.log(tabnovalid);
//                 })
                

//                 modifier.addEventListener("click",() => {
//                     p.textContent = prompt(`changer`);
                    
//                 })
//                 removal.addEventListener("click", () => {
                    
//                     ul.removeChild(li_removal)
//                 })
//             })

//             console.log(tabAll);
//             console.log(tabvalid);
//             console.log(tabnovalid);

//         }
//     }


// }
// submit_todo_one.addEventListener("click", addElement);







