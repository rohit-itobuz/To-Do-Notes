let inputText = document.getElementById("input-text");
inputText = inputText.value;
let arr = [];
const todoButton = document.querySelector(".add-button");
// const filterOption = document.querySelector(".filter-todo");


// filterOption.addEventListener("change", filterTodo);
todoButton.addEventListener("click", addTodo);

function EnterButton(event) {
    if (event.key === "Enter") {
        document.getElementById("myBtn").click();
    }
}

function addtask() {

    arr.unshift(document.getElementById("input-text").value);
    show();
}



function show(){

    document.getElementById("itemContainer").innerHTML = "";
    
    
        for (let i = 0; i < arr.length; i++) {
            document.getElementById("itemContainer").innerHTML += `<div id="val" class="item-box w-75 bg-light container-fluid d-flex gap-1 py-2 py-lg-3 flex-md-row justify-content-center">
                
        <input class="container-fluid border border-0 bg-light  py-2 mx-md-2 py-lg-3" type="text" id="first-text" value="${arr[i]}">

        <div class="list-button align-self-center d-flex gap-1 gap-md-2">
            <button onclick="completed('${i}')" id="cut1" class="btn border bg-success"><i class="fa-solid fa-check"></i></button>
            <button onclick="deleted('${i}')" id="delete1" class="btn border bg-danger"><i class="fa fa-trash"></i></button>

        </div>

    </div>`
}
//for clear the input
    document.getElementById("input-text").value = "";
}
function deleted(i){
    arr.splice(i,1);
    show()
    // console.log(arr);
}
    

    //empty space invalid


    document.getElementById("cut1").addEventListener("click", completed);
    function completed() {
        document.getElementById("val").style.textDecoration = "line-through";
    }

    // document.querySelector("#input-text").value = "";
    // let curr = document.querySelectorAll("#cut1");
    // for(let i=0; i<curr.length; i++){
    //     curr[i].onclick = function(){
    //         this.parentNode.remove();
    //     }
    // }

    // for (let i = 0; i < arr.length; i++) {
    //     document.getElementById("delete1").addEventListener("click", deleted);
    // function deleted() {
    //     document.getElementById("val").remove(arr.splice(i,1));
    //     // alert("hello");
    //  }
    // }
        


    








// for CLEAR COMPLETED
// document.getElementById("delete1").addEventListener("click",deleted);
// function deleted(){
//     document.getElementById("itemContainer").remove();