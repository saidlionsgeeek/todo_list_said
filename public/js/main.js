let input_todo_one = document.querySelector("#input_todo_one");
let submit_todo_one = document.querySelector("#submit_todo_one");
let ul = document.querySelector("#ul-power")


let position = "beforeend";


let tabAll = [];


// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("i");
  span.classList.add("close");
  span.classList.add("fa-solid");
  span.classList.add("fa-trash-can");
  
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
let modifier = document.getElementsByClassName("modifier");




// Add a "checked" symbol when clicking on a list item
// let list = document.querySelector('.ul-power-t');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);




function newElement() {
  let li = document.createElement("li");
  let inputValue = input_todo_one.value;
  let p = document.createElement("p");
  li.appendChild(p)
  let t = document.createTextNode(inputValue);
  p.appendChild(t);

  li.addEventListener('click', function(ev) {
    if (ev.target.classList === 'modifier') {
      prompt("e")
    }
  }, false);

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
  let modifier = document.querySelectorAll(".modifier");
  console.log(modifier);
  



  let span = document.createElement("i");
  
  span.classList.add("close");
  span.classList.add("fa-solid");
  span.classList.add("fa-trash-can");


  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
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
  let li_t = document.querySelectorAll("li")
  let pp = document.querySelector("p")
   for (let i = 0; i < modifier.length; i++) {
    let element = modifier[i];
    element.addEventListener("click",()=>{
        pp[i].textContent = prompt()
    
      })
   }

console.log(li);
  
  tabAll.push(li)
  console.log(tabAll);
}

submit_todo_one.addEventListener("click",newElement)









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







