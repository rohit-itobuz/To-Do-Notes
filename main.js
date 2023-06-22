let arr = [''];

function addtask()
{
    arr.unshift(document.getElementById("write").value);
    const array_list = arr.join("<br>");
    // document.getElementById("val").innerHTML = array_list;
    document.getElementById("itemContainer").innerHTML+= `<div id="val" class="list-item container-fluid d-flex flex-column gap-1 flex-md-row justify-content-center">
    <input class="item-box border py-3 " type="text" id="first-text" placeholder=>
<h3>${array_list}</h3>
    <div class="list-button align-self-center">
        <button onclick="completed()" id="cut" class="btn border"><i class="fa-solid fa-check"></i></button>
        <button onclick="deleted()" class="btn border"><i class="fa fa-trash"></i></button>
    </div>
</div>`

//     document.body
//   .appendChild(
//   Object.assign(
//     document.createElement('div'),
//     { id:'box'}
//   )
// ).appendChild(
//   Object.assign(
//     document.createElement('button'),
//     { innerHTML : 'button' ,
//       id:'button-1'

//     }
//   )
// )



    // for(let i=0; i< arr.length; i++)
    // {

    // }





    
}