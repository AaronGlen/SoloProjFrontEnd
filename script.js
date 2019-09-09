 
const heroTable = document.getElementById("heroTable");
const teamTable = document.getElementById("teamTable");
function homePage(){

location.href = "home.html";
}

function heroPage(){

location.href = "heros.html";
}

function teamPage(){

location.href = "teams.html";
}

function deletePage(){

    location.href = "delete.html";
    }
function editPage(){

    location.href = "edit.html";
}  




const formDataObj = {};
    
function handleSubmitHero(form){
   
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    newTableEntries(heroTable,formDataObj["heroName"],formDataObj["issueOne"],formDataObj["description"]);
    return false;
}
function handleSubmitTeam(form){
   
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    newTableEntries(teamTable,formDataObj["teamName"],formDataObj["issueOne"],formDataObj["description"]);
    return false;
}




function newTableEntries(table){
    row = document.createElement("tr")
    for( let i =1; i <arguments.length;i++){
        box = document.createElement("td")
        box.innerHTML = arguments[i];
        row.append(box)
    }
    table.append(row)

}

