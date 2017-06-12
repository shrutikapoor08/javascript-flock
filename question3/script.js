var httpRequest; //global variable for now. Refactor later.

function sendRequest() {
    console.log("finding groups..");
    makeRequest();
}

function makeRequest() {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }
    var url = 'https://cors.io/?u=https://api.meetup.com1/find/groups2?zip=11211&radius=1&category=253&order=members4&key=4b6a3f401d4e6ef643a123c11502560';
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
}

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            document.getElementById('groups').innerHTML = httpRequest.responseText;
        } else {
            alert('There was a problem with the request.');
        }
    }
}
