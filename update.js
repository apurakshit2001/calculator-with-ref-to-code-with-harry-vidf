function offSwitch() {
    document.querySelector(".mbdy").classList.add("hidden");
}

function onSwitch() {
    document.querySelector(".mbdy").classList.remove("hidden");
}


let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (abcd) => {

        if (abcd.target.innerHTML == '=') {
            try {
                console.log(string)
                console.log(parseInt(string))
                string = eval(string);
                document.querySelector('input').value = string;
            }
            catch (Error) {
                document.querySelector('input').value = 'Error';
            }

        }
        else if (abcd.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (abcd.target.innerHTML == 'C') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else if (abcd.target.innerHTML == '+' || abcd.target.innerHTML == '-' || abcd.target.innerHTML == '*' || abcd.target.innerHTML == '/') {

            localStorage.setItem('StoredValue', document.querySelector('input').value)

            string = string + abcd.target.innerHTML;
            document.querySelector('input').value = string;
        }
        else if (abcd.target.innerHTML == '%') {
            let FirstInput = localStorage.getItem('StoredValue');

            let ab = document.querySelector('input').value;

            let operatorsRegex = /[-+*\/]/g;
            let array = ab.split(operatorsRegex);

            let positionValue = array[array.length - 1]

            let string1 = (FirstInput * parseInt(positionValue)) / 100;


            console.log(string, document.querySelector('input').value.replace(positionValue, string1));

            document.querySelector('input').value = document.querySelector('input').value.replace(positionValue, string1);
            string = document.querySelector('input').value.replace(positionValue, string1);
        }
        else {
            string = string + abcd.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})