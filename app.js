/*
    Developer:  Frankie Barrios
    Date:       11/09/2018
    Purpose:    Rocket Launch Project
*/

var httpRequest = new XMLHttpRequest();
var launchInfoRow = document.getElementById("launchRow");
var counterRow = document.getElementById("timerRow");
var bannerLaunch = document.getElementById("underTitle");
var btn1 = document.getElementById("allBtn");
var btn2 = document.getElementById("falconBtn");
var btn3 = document.getElementById("arianeBtn");
var btn4 = document.getElementById("launcherOneBtn");

//Get next 5 launches function linking to correct button
btn1.addEventListener("click", function () {
    launchInfoRow.innerHTML = "";
    bannerLaunch.innerHTML = "";
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5?");
    ourRequest.onload = function () {
        var allData = JSON.parse(ourRequest.responseText);
        renderHTML(allData);
    };
    ourRequest.send();
});

//Get next 5 falcon launches function linking to correct button
btn2.addEventListener("click", function () {
    launchInfoRow.innerHTML = "";
    bannerLaunch.innerHTML = "";
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5?&name=falcon");
    ourRequest.onload = function () {
        var falconData = JSON.parse(ourRequest.responseText);
        renderHTML(falconData);
    };
    ourRequest.send();
});

//Get next 5 ariane launches function linking to correct button
btn3.addEventListener("click", function () {
    launchInfoRow.innerHTML = "";
    bannerLaunch.innerHTML = "";
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5?&name=ariane");
    ourRequest.onload = function () {
        var arianeData = JSON.parse(ourRequest.responseText);
        renderHTML(arianeData);
    };
    ourRequest.send();
});

//Get next 5 launcherone launches function linking to correct button
btn4.addEventListener("click", function () {
    launchInfoRow.innerHTML = "";
    bannerLaunch.innerHTML = "";
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("get", "https://launchlibrary.net/1.4/launch?next=5?&name=launcherone");
    ourRequest.onload = function () {
        var launcherOneData = JSON.parse(ourRequest.responseText);
        renderHTML(launcherOneData);
    };
    ourRequest.send();
});

//Send our data to the html page
function renderHTML(data) {
    var htmlString = "";

    for (i = 0; i < data.launches.length; i++) {
        htmlString += "<p>" + data.launches[i].net + data.launches[i].name + "</p>";

    } //end of for

    launchInfoRow.insertAdjacentHTML('beforeend', htmlString);

    //Places "Next Launch:"" under Page Header
    bannerLaunch.insertAdjacentHTML('beforeend', "<p>" + "Next Launch: " +
        data.launches[0].net + data.launches[0].name + "</p>");
}


var x = setInterval(function () {
    var countDownDate = new Date(rocketObj.launches[0].net).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    F1.innerHTML = `<b>Countdown to Launch: </b> ${days} Days: ${hours} Hours: ${minutes} Min: ${seconds} Seconds:`

}, 1000);
