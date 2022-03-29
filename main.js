//Define
const form = document.querySelector("#form1");
const clearallbutton=document.querySelector("#call");
const cleardone=document.querySelector("#cdone");
const items=document.querySelector("#allitem");
const newiteminput=document.querySelector("#newiteminput");
let count=0

//Always event listener
clearallbutton.addEventListener("click",function(){
    while (items.firstChild) {
        items.removeChild(items.firstChild);
    }
})
cleardone.addEventListener("click",function(){
    
    var temp = document.querySelectorAll(".Complete");
    for (var i = 0; i < temp.length; i++) {
        temp[i].remove();
    }
    
})
//New item
form.addEventListener("submit",function(event){
    event.preventDefault();
    count+=1
    //new div
    var newitem = document.createElement("div");
    newitem.id = "item"+count;
    items.appendChild(newitem);
    //text
    var text = document.createElement("div");
    text.id = "itemtext"+count;
    text.textContent=newiteminput.value
    newitem.appendChild(text);
    //complete button
    var complete = document.createElement("button");
    complete.id = "complete"+count;
    complete.textContent="Complete"
    newitem.appendChild(complete)
    //deleter
    var deleter = document.createElement("button");
    deleter.id = "deleter"+count;
    deleter.textContent="Delete"
    newitem.appendChild(deleter)
    //Add event listener
    complete.addEventListener("click",function(){
        var temp=complete.id;
        
        var num=temp.replace(/\D/g,'');
        console.log(num);
        var temp2=document.querySelector("#itemtext"+num);
        temp2.style.textDecoration= 'line-through'
        var temp3=document.querySelector("#item"+num);
        temp3.classList.add('Complete');
    })
    deleter.addEventListener("click",function(){
        var temp=complete.id;
        var num=temp.replace(/\D/g,'');
        var temp2=document.querySelector("#item"+num);
        temp2.remove();
    })
    

    //Reset
    form.reset();
});

