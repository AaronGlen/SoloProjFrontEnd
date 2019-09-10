 
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
    let row = document.createElement("tr");
    for( let i =1; i <arguments.length;i++){
        let box = document.createElement("td");
        box.innerHTML = arguments[i];
        row.append(box);
    }
    table.append(row);

}

const req = new XMLHttpRequest();
req.onload = () => {
    data = JSON.parse(req.response);
    console.log(data);

    for(let i=0;i<data.length;i++){
        let temp = data[i];
        newTableEntries(heroTable,temp["heroName"],temp["issueOne"],temp["description"]);
    }
}
req.open('GET', 'http://35.222.59.218:9000/heroes');
req.send();

 const requ = new XMLHttpRequest();
 requ.onload = () => {
     data = JSON.parse(requ.response);
     console.log(data);

     for(let i=0;i<data.length;i++){
         let temp = data[i];
         newTableEntries(teamTable,temp["teamName"],temp["issueOne"],temp["description"]);
     }
 }
 requ.open('GET', 'http://35.222.59.218:9000/teams');
 requ.send();



