 
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
     registerHero();
    //newTableEntries(heroTable,formDataObj["heroName"],formDataObj["issueOne"],formDataObj["description"]);
    return false;
}


function handleSubmitTeam(form){
   
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    registerTeam();

    //newTableEntries(teamTable,formDataObj["teamName"],formDataObj["issueOne"],formDataObj["description"]);

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
function onLoadHero(){
const req = new XMLHttpRequest();
req.onload = () => {
    data = JSON.parse(req.response);
    console.log(data);

    for(let i=0;i<data.length;i++){
        let temp = data[i];
        newTableEntries(heroTable,temp["id"],temp["heroName"],temp["issueOne"],temp["description"]);
    }
}


req.open('GET', 'http://35.222.59.218:9000/heroes');
req.send();
}

function onLoadTeam(){
const requ = new XMLHttpRequest();
 requ.onload = () => {
     data = JSON.parse(requ.response);
     console.log(data);

     for(let i=0;i<data.length;i++){
         let temp = data[i];
         newTableEntries(teamTable,temp["id"],temp["teamName"],temp["issueOne"],temp["description"]);
     }
 }
 requ.open('GET', 'http://35.222.59.218:9000/teams');
 requ.send();
}

function registerHero() {
    
    const req = new XMLHttpRequest();
    req.onload = () => {
            location.href = "heros.html";
    };
    req.open('POST', 'http://35.222.59.218:9000/hero');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(formDataObj));
}

function registerTeam() {
    
    const req = new XMLHttpRequest();
    req.onload = () => {
            location.href = "teams.html";
    };
    req.open('POST', 'http://35.222.59.218:9000/team');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(formDataObj));
}


function deleteHero(form) {
    const req = new XMLHttpRequest();
    req.onload = () => {
            location.href = "heros.html";
    };
    req.open('DELETE', 'http://35.222.59.218:9000/hero/17');
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify());
}
