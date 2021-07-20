// - створити функцію яка обчислює та повертає площу прямокутника висотою
function pryam(a,b){
    return a * b;
}
let res = pryam(5,5);
console.log(res);
// - створити функцію яка обчислює та повертає площу кола
function kolo(radius){
    return Math.PI * (radius + radius);
}
let suma = kolo(5);
console.log(suma);
// - створити функцію яка обчислює та повертає площу циліндру
function culindr(R,H){
    return Math.PI * (R + R) * H;
}
let resultat = culindr(3,5);
console.log(resultat);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function max_min() {
        let max = arguments [0];
        let min = arguments [0];
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max)
        {
            max = arguments[i];
        }
        if (arguments[i] < min)
        {
            min = arguments[i];
        }
    }
    console.log(max);
    return min;
}
console.log(max_min(2, 3, 8, 12, 49, 23, 37, -2, -99, -10, -33, ))
// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function createDiv(head,top,text) {
    document.write(`<div>
                <h1>${head}</h1>
                <h3>${top}</h3>
                <p>${text}</p>
                   </div>`)
}
createDiv(`Hello`,`every`,`body`)
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function foobar (){
    let text = "Lorem";
    document.write(
        `<div>
            <ul>
                <li>${text}</li>
                <li>${text}</li>
                <li>${text}</li>
            </ul>
        </div>`
    );
}
foobar();
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function numbtext() {
    let text1 = 'Hello';
    for (let i = 0; i < 4; i++)
            document.write
   (
     `<div>
           <ul>
               <li>${text1}</li>
           </ul>
     </div>`
   )
}
numbtext();

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function increment1(a,b,c) {
    a = 7;
    b = 'night';
    c = true;
    document.write(`<div><li>${a} ${b} ${c}</li></div>`)
}

increment1();
