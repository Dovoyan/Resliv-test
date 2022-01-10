let params = window.location.search;
const arr = [];
params = params.substring(1).split('&');
for (let i = 0; i < params.length; i++) {
    param = params[i].split("=");
    arr.push([param[0], param[1]]);
}


if (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 'size') {
            let sizeRadio = document.querySelector(`#Size${arr[i][1]}`)
            sizeRadio.checked = true
        }
        if (arr[i][0] === 'color') {
            let colorCheck = document.querySelector(`#color${arr[i][1]}`)
            colorCheck.checked = true
        }
        if (arr[i][0] === 'sale') {
            let saleCheck = document.querySelector(`#Sale`)
            saleCheck.checked = true
        }
        if (arr[i][0] === 'manufacturer') {
            let multipleSel = document.querySelector(`#manufacturer`)
            for (let y = 0; y < multipleSel.options.length; y++) {
                if (multipleSel.options[y].value === arr[i][1]) {
                    multipleSel.options[y].selected = true
                }
            }
        }
    }
}

let inputs = document.querySelectorAll('input')
let select = document.querySelector('select')

inputs.forEach(input => {
    if (input.id != 'Sale')
        input.addEventListener('click', (() => urlGenerate()))
});

select.addEventListener('click', (() => urlGenerate()))

function urlGenerate() {
    let url = window.location.href;
    url = url.split("?")[0];
    url += "?"


    inputs.forEach(input => {
        if (input.checked === true) {
            if (input.id.indexOf('color') != -1) {
                url += `color=${input.nextElementSibling.innerHTML}&`
            }
            if (input.id.indexOf('Size') != -1) {
                url += `size=${input.nextElementSibling.innerHTML}&`
            }
            if (input.id === "Sale") {
                url += `sale=1&`
            }
        }
    });

    url += `manufacturer=${select.value}`

    console.log(url)

}