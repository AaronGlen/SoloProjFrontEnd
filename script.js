 

function homePage(){

location.href = "home.html";
}

function heroPage(){

location.href = "heros.html";
}

function teamPage(){

location.href = "teams.html";
}
const formDataObj = {};
    
function handleSubmit(form){
   
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    return false;
}
function newTableEntries(){

}