
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




const formDataObj = {};

function handleSubmitHero(form) {

    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    registerHero();
    //newTableEntries(heroTable,formDataObj["heroName"],formDataObj["issueOne"],formDataObj["description"]);
    return false;
}


function handleSubmitTeam(form) {

    for (let element of form.elements) {
        formDataObj[element.id] = element.value;
    }
    console.log(formDataObj);
    registerTeam();

    //newTableEntries(teamTable,formDataObj["teamName"],formDataObj["issueOne"],formDataObj["description"]);

    return false;
}




function newTableEntries(table) {
    let row = document.createElement("tr");
    for (let i = 1; i < arguments.length; i++) {
        let box = document.createElement("td");
        box.innerHTML = arguments[i];
        row.append(box);
    }
    table.append(row);

}
function onLoadHero() {
    const req = new XMLHttpRequest();
    req.onload = () => {
        data = JSON.parse(req.response);
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let temp = data[i];
            newTableEntries(heroTable, temp["id"], temp["heroName"], temp["issueOne"], temp["description"]);
        }
    }
    req.open('GET', 'http://35.222.59.218:9000/heroes');
    req.send();
}

function onLoadTeam() {
    const requ = new XMLHttpRequest();
    requ.onload = () => {
        data = JSON.parse(requ.response);
        console.log(data);

        for (let i = 0; i < data.length; i++) {
            let temp = data[i];
            newTableEntries(teamTable, temp["id"], temp["teamName"], temp["issueOne"], temp["description"]);
        }
    }
    requ.open('GET', 'http://35.222.59.218:9000/teams');
    requ.send();
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


function deleteHero(form) {
    var id = document.getElementById("heroNameDelete").value;
    console.log("d");

    var req = new XMLHttpRequest();

    req.open('DELETE', 'http://35.222.59.218:9000/hero/' + id, true);

    req.onload = () => {
        location.href = "heros.html";
    };

    req.send(null);
    return false;
}

function deleteTeam(form) {
    var id = document.getElementById("teamNameDelete").value;
    console.log("d");

    var req = new XMLHttpRequest();
    req.open('DELETE', 'http://35.222.59.218:9000/team/' + id, true);
    req.onload = () => {
        location.href = "teams.html";
    };

    req.send(null);
    return false;
}





let idHero = "";

function getId() {
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
    console.log("fail but heres the id:"+idHero);
    req.send(JSON.stringify(heroInfo));
    console.log("success?");
    return false;
}



