let idHero = "";
let idTeam = "";

function heroHTML() {
    location.href = "heros.html";
}

function teamHTML() {
    location.href = "teams.html";
}


//////////////////// httpRequests
function httpRequest(method, url, callback, headers, body) {
    let request = new XMLHttpRequest();
    request.open(method, url);
    request.onload = () => {
        callback(request);
    };
    let key ="";
    for (key in headers) {
        request.setRequestHeader(key, headers[key]);
    }
    body ? request.send(body) : request.send();
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
    let data = JSON.parse(request.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        newTableEntries(document.getElementById("heroTable"), data[i].id, data[i].heroName, data[i].issueOne, data[i].description);
    }
}

function onLoadHero() {
    httpRequest("GET", "http://35.222.59.218:9000/heroes", onLoadHeroTable, { "Content-Type": "application/json" });
}

function onLoadTeamTable(request) {
    let data = JSON.parse(request.response);
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        newTableEntries(document.getElementById("teamTable"), data[i].id, data[i].teamName, data[i].issueOne, data[i].description);
    }
}

function onLoadTeam() {
    httpRequest("GET", "http://35.222.59.218:9000/teams", onLoadTeamTable, { "Content-Type": "application/json" });
}
//////////////////////////////////// Create
function handleSubmitHero(form) {
    let formDataObj = {};
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    httpRequest("POST", "http://35.222.59.218:9000/hero", heroHTML, { "Content-Type": "application/json" }, JSON.stringify(formDataObj));
    return false;
}

function handleSubmitTeam(form) {
    let formDataObj = {};
    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }

    httpRequest("POST", "http://35.222.59.218:9000/team", teamHTML, { "Content-Type": "application/json" }, JSON.stringify(formDataObj));
    return false;
}
/////////////////// DropBox's
function dropBoxEntries(select, data, value) {
    for (let i = 0; i < data.length; i++) {
        let entry = document.createElement("OPTION");
        entry.innerHTML = data[i][value];
        select.append(entry);
    }
}

function updateTeamDropBox(request) {
    let data = JSON.parse(request.response);
    dropBoxEntries(document.getElementById("updateTeamId"), data, "id");
}

function deleteTeamDropBox(request) {
    let data = JSON.parse(request.response);
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


function dropBoxTeam() {
    httpRequest("GET", "http://35.222.59.218:9000/teams", deleteTeamDropBox, { "Content-Type": "application/json" });
    httpRequest("GET", "http://35.222.59.218:9000/teams", updateTeamDropBox, { "Content-Type": "application/json" });
}

function dropBoxHero() {
    httpRequest("GET", "http://35.222.59.218:9000/heroes", deleteHeroDropBox, { "Content-Type": "application/json" });
    httpRequest("GET", "http://35.222.59.218:9000/heroes", updateHeroDropBox, { "Content-Type": "application/json" });

}
///////////////////////////////// Delete
function deleteTeam() {
    var id = document.getElementById("deleteTeamId").value;
    httpRequest("DELETE", "http://35.222.59.218:9000/team/" + id, teamHTML, { "Content-Type": "application/json" });
    return false;
}

function deleteHero() {
    var id = document.getElementById("deleteHeroId").value;
    httpRequest("DELETE", "http://35.222.59.218:9000/hero/" + id, heroHTML, { "Content-Type": "application/json" });
    return false;
}
////////////////////////// Update

function heroId(request) {
    let data = JSON.parse(request.response);
    console.log(data);
}

function getHeroId() {
    idHero = document.getElementById("updateHeroId").value;
    console.log(idHero);
    httpRequest("GET", "http://35.222.59.218:9000/hero/" + idHero, heroId, { "Content-Type": "application/json" });
    return false;
}



function updateHero() {
    let heroNameUpdate = document.getElementById("heroNameUpdate").value;
    let issueOneUpdate = document.getElementById("issueOneUpdate").value;
    let descriptionUpdate = document.getElementById("descriptionUpdate").value;
    let heroInfo = {
        "heroName":heroNameUpdate,
        "issueOne":issueOneUpdate,
        "description":descriptionUpdate
    };
    httpRequest("PUT", "http://35.222.59.218:9000/hero/" + idHero, heroHTML, { "Content-Type": "application/json" }, JSON.stringify(heroInfo));
    return false;
}


function teamId(request) {
    let data = JSON.parse(request.response);
}

function getTeamId() {
    idTeam = document.getElementById("updateTeamId").value;
    httpRequest("GET", "http://35.222.59.218:9000/team/" + idTeam, teamId, { "Content-Type": "application/json" });
    return false;
}



function updateTeam(form) {
    let teamNameUpdate = document.getElementById("teamNameUpdate").value;
    let issueOneUpdate = document.getElementById("issueOneUpdate").value;
    let descriptionUpdate = document.getElementById("descriptionUpdate").value;
    let teamInfo = {
        "teamName":teamNameUpdate,
        "issueOne":issueOneUpdate,
        "description":descriptionUpdate
    };
    httpRequest("PUT", "http://35.222.59.218:9000/team/" + idTeam, teamHTML, { "Content-Type": "application/json" }, JSON.stringify(teamInfo));
    return false;
}


///////////////////// Search 
function searchTable(input, table) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(input);
    filter = input.value.toUpperCase();
    table = document.getElementById(table);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function searchHeroes() {
    searchTable("nameHero", "heroTable");
}

function searchTeams() {
    searchTable("nameTeam", "teamTable");
}