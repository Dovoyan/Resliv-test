localStorage.setItem("entry", document.querySelector('#name_input').value);

document.querySelector('#name_input').addEventListener("input", (() => {
    if (localStorage.getItem('entry') !== document.querySelector('#name_input').value) {
        document.querySelector('#name_input').classList.add('red')
    } else {
        document.querySelector('#name_input').classList.remove('red')
    }
}))