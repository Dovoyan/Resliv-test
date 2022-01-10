const buttonAdd = document.querySelector('.add')
const buttonDelete = document.querySelector('.delete')
const buttonGet = document.querySelector('.get')

buttonAdd.addEventListener('click', (() => AddLocal()))

buttonDelete.addEventListener('click', (() => DelelteLocal()))

buttonGet.addEventListener('click', (() => GetLocal()))

let win = document.getElementsByTagName('iframe')[0].contentWindow;

function AddLocal() {
    const key = document.querySelector('#key_add')
    const value = document.querySelector('#value_add')
    win.postMessage(JSON.stringify({ key: key.value, data: value.value, event: "add" }), "*");
};

function DelelteLocal() {
    const key = document.querySelector('#key_delete')
    win.postMessage(JSON.stringify({ key: key.value, event: "delete" }), "*");
};

function GetLocal() {
    win.postMessage(JSON.stringify({ event: "Get" }), "*");

};



window.onmessage = function (e) {
    const payload = JSON.parse(e.data);
    eval('(' + (payload.key) + ')();');
};