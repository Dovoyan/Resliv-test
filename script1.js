let win = document.getElementsByTagName('iframe')[0].contentWindow;


window.onmessage = function (e) {
    var payload = JSON.parse(e.data);

    if (payload.event === "add") {
        if (!localStorage.getItem(payload.key)) {
            localStorage.setItem(payload.key, payload.data);
            console.log('written')
        }
    }
    if (payload.event === "delete") {
        if (localStorage.getItem(payload.key)) {
            localStorage.removeItem(payload.key);
            console.log('removed')
        }
    }
    if (payload.event === "Get") {
        const items = { ...localStorage };
        console.log(items)
        for (key in items) {
            console.log(key + ' ' + items[key])
        }
    }
    win.postMessage(JSON.stringify({ key: request.toString(), event: "Get" }), "*");
};

function request() {
    let oReq = new XMLHttpRequest();
    oReq.onload = () => console.log(oReq.response);
    oReq.open("get", 'https://reqres.in/api/users?per_page=12', true);
    oReq.send();
}