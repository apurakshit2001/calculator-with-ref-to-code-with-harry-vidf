let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (abcd) => {

        if (abcd.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (abcd.target.innerHTML == 'AC') {
            string = ""
            document.querySelector('input').value = string;
        }
        else if (abcd.target.innerHTML == 'C') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        // else if (abcd.target.innerHTML == '+' || abcd.target.innerHTML == '-' || abcd.target.innerHTML == '*' || abcd.target.innerHTML == '/') {



        //     localStorage.setItem('StoredValue', document.querySelector('input').value)
        // }
        // else if (abcd.target.innerHTML == '%') {
        //     let FirstInput = localStorage.getItem('StoredValue');
        //     string = (FirstInput * document.querySelector('input').value) / 100;
        // }
        else {
            string = string + abcd.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})