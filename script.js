
function heroPage() {
    location.href = "heros.html";
}

function teamPage() {
    location.href = "teams.html";
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
    httpRequest('GET', 'http://35.222.59.218:9000/heroes', onLoadHeroTable, { "Content-Type": "application/json" });
}

function onLoadTeamTable(request) {
    data = JSON.parse(request.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        newTableEntries(document.getElementById("teamTable"), data[i].id, data[i].teamName, data[i].issueOne, data[i].description);
    }
}

function onLoadTeam() {
    httpRequest('GET', 'http://35.222.59.218:9000/teams', onLoadTeamTable, { "Content-Type": "application/json" });
}
//////////////////////////////////// Create
function handleSubmitHero(form) {
    let formDataObj = {};
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    httpRequest("POST", 'http://35.222.59.218:9000/hero', heroHTML, { 'Content-Type': 'application/json' }, JSON.stringify(formDataObj));
    return false;
}

function handleSubmitTeam(form) {
    let formDataObj = {};
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    httpRequest("POST", 'http://35.222.59.218:9000/team', teamHTML, { 'Content-Type': 'application/json' }, JSON.stringify(formDataObj));
    return false;
}
/////////////////// DropBox's
function updateTeamDropBox(request) {
    data = JSON.parse(request.response);
    dropBoxEntries(document.getElementById("updateTeamId"), data, "id");
}

function deleteTeamDropBox(request) {
    data = JSON.parse(request.response);
    dropBoxEntries(document.getElementById("deleteTeamId"), data, "id");
}

function updateHeroDropBox(request) {
    data = JSON.parse(request.response);
    dropBoxEntries(document.getElementById("updateHeroId"), data, "id");
}

function deleteHeroDropBox(request) {
    data = JSON.parse(request.response);
    dropBoxEntries(document.getElementById("deleteHeroId"), data, "id");
}
function dropBoxEntries(select, data, value) {
    for (let i = 0; i < data.length; i++) {
        let entry = document.createElement("OPTION");
        entry.innerHTML = data[i][value];
        select.append(entry);
    }
}

function dropBoxTeam() {
    httpRequest('GET', 'http://35.222.59.218:9000/teams', deleteTeamDropBox, { "Content-Type": "application/json" });
    httpRequest('GET', 'http://35.222.59.218:9000/teams', updateTeamDropBox, { "Content-Type": "application/json" });
}

function dropBoxHero() {
    httpRequest('GET', 'http://35.222.59.218:9000/heroes', deleteHeroDropBox, { "Content-Type": "application/json" });
    httpRequest('GET', 'http://35.222.59.218:9000/heroes', updateHeroDropBox, { "Content-Type": "application/json" });

}
///////////////////////////////// Delete
function deleteTeam() {
    var id = document.getElementById("deleteTeamId").value;
    httpRequest("DELETE", 'http://35.222.59.218:9000/team/' + id, teamHTML, { "Content-Type": "application/json" });
    return false;
}

function deleteHero() {
    var id = document.getElementById("deleteHeroId").value;
    httpRequest("DELETE", 'http://35.222.59.218:9000/hero/' + id, heroHTML, { "Content-Type": "application/json" });
    return false;
}
////////////////////////// Update
let idHero = "";

function heroId(request) {
    data = JSON.parse(request.response);
    console.log(data);
}

function getHeroId() {
    idHero = document.getElementById("updateHeroId").value;
    console.log(idHero);
    httpRequest("GET", 'http://35.222.59.218:9000/hero/' + idHero, heroId, { "Content-Type": "application/json" });
    return false;
}

function heroHTML() {
    location.href = "heros.html";
}

function editHero(form) {
    let heroInfo = {};
    for (let element of form.elements) {
        heroInfo[element.id] = element.value;
    }
    httpRequest("PUT", 'http://35.222.59.218:9000/hero/' + idHero, heroHTML, { 'Content-Type': 'application/json' }, JSON.stringify(heroInfo));
    return false;
}
let idTeam = "";

function teamId(request) {
    data = JSON.parse(request.response);
    console.log(data);
}

function getTeamId() {
    idTeam = document.getElementById("updateTeamId").value;
    httpRequest("GET", 'http://35.222.59.218:9000/team/' + idTeam, teamId, { "Content-Type": "application/json" });
    return false;
}

function teamHTML() {
    location.href = "teams.html";
}

function editTeam(form) {
    let teamInfo = {};
    for (let element of form.elements) {
        teamInfo[element.id] = element.value;
    }
    httpRequest("PUT", 'http://35.222.59.218:9000/team/' + idTeam, teamHTML, { 'Content-Type': 'application/json' }, JSON.stringify(teamInfo));
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

