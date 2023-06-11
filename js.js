const list=document.getElementsByClassName("list")[0];
const input=document.getElementById("input");

input.addEventListener("keydown",function(e)
{
    if(e.key==="Enter")
    add();
})
function add()
{
    var parent=document.createElement("div");
    var child=document.createElement("div");
    var cicon=document.createElement("i");
    var icon=document.createElement("i");

    parent.className="list";
    parent.innerHTML='<div>'+input.value+'</div>';
    cicon.className="fas fa-check-square";
    cicon.style.color="yellow";
    cicon.addEventListener("click",function(){
        cicon.style.color="purple";
    })
    child.appendChild(cicon);
    icon.className="fas fa-trash-alt";
    icon.style.color="darkgray";
    icon.addEventListener("click",function(){
        parent.remove();
    })
    child.appendChild(icon);
    parent.appendChild(child);
    list.appendChild(parent);
    input.value="";
}