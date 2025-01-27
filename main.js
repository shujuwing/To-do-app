const inputbox = document.getElementById("input-box");
const listWrapper = document.getElementById("list-wrapper");

function addTask(){
    if(inputbox.value===''){
    alert("You Must Write Something ")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listWrapper.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    storeData();
}

listWrapper.addEventListener("click",function(e) {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        storeData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        storeData();
    }

}, false); 

function storeData(){
    localStorage.setItem("data",listWrapper.innerHTML);
}

function showTask(){
    listWrapper.innerHTML=localStorage.getItem("data");

}

showTask();

inputbox.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addTask();
    }
});