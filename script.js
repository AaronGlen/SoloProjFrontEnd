
const heroTable = document.getElementById("heroTable");
const teamTable = document.getElementById("teamTable");
function homePage() {

    location.href = "home.html";
}

function heroPage() {

    location.href = "heros.html";
}

function teamPage() {

    location.href = "teams.html";
}

function deletePage() {

    location.href = "delete.html";
}
function editPage() {

    location.href = "edit.html";
}







///////////////////////////// Read
function newTableEntries(table) {
    let row = document.createElement("tr");
    for (let i = 1; i < arguments.length; i++) {
        let box = document.createElement("td");
        box.innerHTML = arguments[i];
        row.append(box);
    }
    table.append(row);
 }

function onLoadHeroTable(request) {
    data = JSON.parse(request.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let temp = data[i];
        newTableEntries(heroTable, temp["id"], temp["heroName"], temp["issueOne"], temp["description"]);
    }
}

function onLoadHero(){
httpRequest('GET', 'heroes',onLoadHeroTable, {"Content-Type": "application/json"})
}

function onLoadTeamTable(request) {
    data = JSON.parse(request.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let temp = data[i];
        newTableEntries(teamTable, temp["id"], temp["teamName"], temp["issueOne"], temp["description"]);
    }
}

function onLoadTeam(){
httpRequest('GET', 'teams',onLoadTeamTable, {"Content-Type": "application/json"})
}


//////////////////////////////////// Create


const formDataObj = {};

function handleSubmitHero(form) {

    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    registerHero();
    return false;
}


function handleSubmitTeam(form) {

    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    registerTeam();
    return false;
}


function registerHero() {
    console.log(formDataObj);

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

/////////////////// Delete

function deleteDropBoxHero() {
    const requ = new XMLHttpRequest();
    requ.onload = () => {
        data = JSON.parse(requ.response);
        console.log(data);

        dropBoxEntries(document.getElementById("deleteHeroId"),data );
    }
    requ.open('GET', 'http://35.222.59.218:9000/heroes');
    requ.send();
}

function deleteDropBoxTeam() {
    const requ = new XMLHttpRequest();
    requ.onload = () => {
        data = JSON.parse(requ.response);
        console.log(data);

        dropBoxEntries(document.getElementById("deleteTeamId"),data );
    }
    requ.open('GET', 'http://35.222.59.218:9000/teams');
    requ.send();
}

function dropBoxEntries(select,data){
    for (let i= 0;i<data.length;i++){
        let entry = document.createElement("OPTION")
        entry.innerHTML = data[i].id;
        select.append(entry);
    }

}


function deleteHero(form) {
    let id = document.getElementById("deleteHeroId").value;
    console.log(id);

    var req = new XMLHttpRequest();

    req.open('DELETE', 'http://35.222.59.218:9000/hero/' + id, true);

    req.onload = () => {
        location.href = "heros.html";
    };

    req.send(null);
    return false;
}

function deleteTeam(form) {
    var id = document.getElementById("deleteTeamId").value;
    console.log("d");

    var req = new XMLHttpRequest();
    req.open('DELETE', 'http://35.222.59.218:9000/team/' + id, true);
    req.onload = () => {
        location.href = "teams.html";
    };

    req.send(null);
    return false;
}



////////////////////////// Update

let idHero = "";

function getHeroId() {
    idHero = document.getElementById("heroId").value;

    const requ = new XMLHttpRequest();
    requ.onload = () => {
        data = JSON.parse(requ.response);
        console.log(data);

    }
    requ.open('GET', 'http://35.222.59.218:9000/hero/'+idHero);
    requ.send();
    return false;
}

function editHero(form) {
    let heroInfo = {};
    for (let element of form.elements) {
        heroInfo[element.id] = element.value;
    }

    
    const req = new XMLHttpRequest();
    req.onload = () => { 
        location.href = "heros.html";
    };
    console.log(idHero);
    req.open('PUT', 'http://35.222.59.218:9000/hero/'+idHero);
    req.setRequestHeader('Content-Type', 'application/json');
  
    req.send(JSON.stringify(heroInfo));
    
    return false;
}



let idTeam = "";

function getTeamId() {
    idTeam = document.getElementById("teamId").value;

    const requ = new XMLHttpRequest();
    requ.onload = () => {
        data = JSON.parse(requ.response);
        console.log(data);

    }
    requ.open('GET', 'http://35.222.59.218:9000/team/'+idTeam);
    requ.send();
    return false;
}

function editTeam(form) {
    let teamInfo = {};
    for (let element of form.elements) {
        teamInfo[element.id] = element.value;
    }

    
    const req = new XMLHttpRequest();
    req.onload = () => { 
        location.href = "teams.html";
    };
    console.log(idTeam);
    req.open('PUT', 'http://35.222.59.218:9000/team/'+idTeam);
    req.setRequestHeader('Content-Type', 'application/json');
    
    req.send(JSON.stringify(teamInfo));
  
    return false;
}
//////////////////// httpRequests

function httpRequest(method, url, callback, headers, body) {
    let request = new XMLHttpRequest();
    request.open(method,'http://35.222.59.218:9000/'+ url);
    request.onload = () => {
        callback(request);
    }
    for (key in headers) {
        request.setRequestHeader(key, headers[key]);
    }
    body ? request.send(body) : request.send();
    }