let flag = 0;
request('https://reqres.in/api/users?per_page=12')
request('https://reqres.in/api/users?per_page=12')

function request(url) {
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener();
    oReq.open("get", url, true);
    oReq.send();

    return flag
}

function reqListener() {
    flag++
    if (flag === 2) win()
    return flag
}

function win() {
    console.log('оба запроса готовы')
}