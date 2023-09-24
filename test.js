const urlBacon = "https://jsonplaceholder.typicode.com/todos/1";

//VD1
function getData(){
    $.ajax({ method: "GET", url: urlBacon, dataType: "json"})
        .done(function (data) {
            console.log(data);
            }
        )
        .fail(function () {
            alert("no good");
        });
    }
function getData1(){
        $.ajax({ method: "GET", url: urlBacon, dataType: "json"})
            .done(function (data) {
                console.log(data);
            })
            .fail(function () {
                alert("no good");
            });
        }
    
getData()
getData1()
//VD2
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        beforeSend: function (xhr) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }
    })
        .done(function (data) {
            if (console && console.log) {
                console.log("Sample of data:", data.slice(0, 100));
            }
        });
    //Vd3
    //Get all users
    var url = 'https://jsonplaceholder.typicode.com/todos';
        var xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onload = function () {
            var users = JSON.parse(xhr.responseText);
            if (xhr.readyState == 4 && xhr.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr.send(null);
   //vd4
    //Get a user
    var xhr1 = new XMLHttpRequest()
    xhr1.open('GET', url + '/12', true)
    xhr1.onload = function () {
        var users = JSON.parse(xhr1.responseText);
        if (xhr1.readyState == 4 && xhr1.status == "200") {
            console.table(users);
        } else {
            console.error(users);
        }
    }
    xhr1.send(null);
    //vd5
    var data = {};
        data.firstname = "John";
        data.lastname = "Snow";
        var json = JSON.stringify(data);

        var xhr2 = new XMLHttpRequest();
        xhr2.open("POST", url, true);
        xhr2.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr2.onload = function () {
            var users = JSON.parse(xhr2.responseText);
            if (xhr2.readyState == 4 && xhr2.status == "201") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr2.send(json);
        //vd6
        var dt2 = {};
        dt2.firstname = "John2";
        dt2.lastname = "Snow2";
        var json = JSON.stringify(dt2);

        var xhr3 = new XMLHttpRequest();
        xhr3.open("PUT", url + '/12', true);
        xhr3.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr3.onload = function () {
            var users = JSON.parse(xhr3.responseText);
            if (xhr3.readyState == 4 && xhr3.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr3.send(json);
//Delete user
        var xhr4 = new XMLHttpRequest();
        xhr4.open("DELETE", url + '/12', true);
        xhr4.onload = function () {
            var users = JSON.parse(xhr4.responseText);
            if (xhr4.readyState == 4 && xhr4.status == "200") {
                console.table(users);
            } else {
                console.error(users);
            }
        }
        xhr4.send(null);
//Promise
var f = function (relsolve, reject) {
    relsolve();
    reject();
}

var promise = new Promise(f);

        promise
        .then(
            function () {
                console.log('Successful!');
            }
        )
        .catch(
            function () {
                console.log('UnSuccessful!');
            }
        )
        .finally(
            function () {
                console.log('Finally!');
            }
        );
var promise2 = new Promise(f);
        promise2
        .then(
            function () {
                console.log('1!');
            }
        )
        .then(
            function () {
                console.log('2!');
            }
        )
        .then(
            function () {
                console.log('3!');
            }
        )
var promise3 = new Promise(f);
promise3
        .then(
            function () {
                console.log(0);
                return 1;
            }
        )
        .then(
            function (data) {
                console.log(data);
                return 2;
            }
        )
        .then(
            function (data) {
                console.log(data);
            }
        )
var promise4 = new Promise(f);
promise4
        .then(
            function () {
                return new Promise(function(resolve){
                    setTimeout(resolve, 3000);
                });
            }
        )
        .then(
            function (data) {
                console.log(data);
                return 2;
            }
        )
        .then(
            function (data) {
                console.log(data);
            }
        )



