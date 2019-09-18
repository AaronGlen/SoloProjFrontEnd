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
        newTableEntries(document.getElementById("heroTable"), data[i].id, data[i].heroName, data[i].issueOne, data[i].description);
    }
}

function onLoadHero() {
    httpRequest('GET', 'http://35.222.59.218:9000/heroes', onLoadHeroTable, { "Content-Type": "application/json" })
}

function onLoadTeamTable(request) {
    data = JSON.parse(request.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        newTableEntries(document.getElementById("teamTable"), data[i].id, data[i].teamName, data[i].issueOne, data[i].description);
    }
}

function onLoadTeam() {
    httpRequest('GET', 'http://35.222.59.218:9000/teams', onLoadTeamTable, { "Content-Type": "application/json" })
}


//////////////////////////////////// Create
function handleSubmitHero(form) {
    let formDataObj = {};
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    httpRequest("POST", 'http://35.222.59.218:9000/hero', registerHero, { 'Content-Type': 'application/json' }, JSON.stringify(formDataObj))
    return false;
}

function handleSubmitTeam(form) {

    let formDataObj = {};
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    httpRequest("POST", 'http://35.222.59.218:9000/team', registerTeam, { 'Content-Type': 'application/json' }, JSON.stringify(formDataObj))
    return false;
}

function registerHero() {
    location.href = "heros.html";
}

function registerTeam() {
    location.href = "teams.html";

}

/////////////////// Delete DropBox



function dTeamDropBox(request) {
    data = JSON.parse(request.response);
    console.log(data);
    dropBoxEntries(document.getElementById("deleteTeamId"), data, "id");

}

function dHeroDropBox(request) {
    data = JSON.parse(request.response);
    console.log(data);
    dropBoxEntries(document.getElementById("deleteHeroId"), data, "id");

}

function dropBoxEntries(select, data, value) {
    for (let i = 0; i < data.length; i++) {
        let entry = document.createElement("OPTION")
        select.append(entry);
    }
}

function deleteDropBoxTeam() {
    httpRequest('GET', 'http://35.222.59.218:9000/teams', dTeamDropBox, { "Content-Type": "application/json" })
}

function deleteDropBoxHero() {
    httpRequest('GET', 'http://35.222.59.218:9000/heroes', dHeroDropBox, { "Content-Type": "application/json" })
}


///////////////////////////////// Delete
<<<<<<< HEAD
=======


>>>>>>> 1270912abbf730f21435d1906cd54b4f15fba806
function deleteTeamEntry(request) {
    location.href = "teams.html";
}

function deleteTeam() {
    var id = document.getElementById("deleteTeamId").value;
    httpRequest("DELETE", 'http://35.222.59.218:9000/team/' + id, deleteTeamEntry, { "Content-Type": "application/json" })
    return false;
}


function deleteHeroEntry(request) {
    location.href = "heros.html";
}

function deleteHero() {
    var id = document.getElementById("deleteHeroId").value;
    httpRequest("DELETE", 'http://35.222.59.218:9000/hero/' + id, deleteHeroEntry, { "Content-Type": "application/json" })
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
    requ.open('GET', 'http://35.222.59.218:9000/hero/' + idHero);
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
    req.open('PUT', 'http://35.222.59.218:9000/hero/' + idHero);
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
    requ.open('GET', 'http://35.222.59.218:9000/team/' + idTeam);
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
    req.open('PUT', 'http://35.222.59.218:9000/team/' + idTeam);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(teamInfo));
    return false;
}
//////////////////// httpRequests

function httpRequest(method, url, callback, headers, body) {
    let request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = () => {
        callback(request);
    }
    for (key in headers) {
        request.setRequestHeader(key, headers[key]);
    }
    body ? request.send(body) : request.send();
}