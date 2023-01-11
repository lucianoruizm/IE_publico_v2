
let db = []

const capturar = () => {
    class Info{
        constructor(id, date, hour, ingreso, egreso){
            this.id = id;
            this.date = date;
            this.hour = hour;
            this.ingreso = ingreso;
            this.egreso = egreso;
        }
        
    }

    let date = document.querySelector('#date').value
    
    for(i = 1; i<=24; i++) {
        let data = "data" + i
        let entryCount = "entryCount" + i
        let exitCount = "exitCount" + i

        let id = document.querySelector('#empresa-select').value
        hour = document.querySelector('.hour' + [i]).value
        entryCount = document.querySelector('.entry' + [i]).value
        exitCount = document.querySelector('.exit' + [i]).value

        data = new Info(id, date, hour, entryCount, exitCount)

        addNewObject(data)
        
    }

    let entries = arrayIteration(document.querySelectorAll('.entries'))
    let totalEntries = sumArray(entries)

    let exits = arrayIteration(document.querySelectorAll('.exits'))
    let totalExits = sumArray(exits)

    let entrada = arrayIteration(document.querySelectorAll('#entry'))

    console.log(db);
    console.log(entrada);
    
}
    
//FUNCTIONS
const addNewObject = (...data) => { db.push(...data) }

// const arrayIteration = (count) => {
    
//     let array = []
//     for(i=0; i<count.length; i++){
//         array.push(count[i].value)
//     }
//     return array

// }

const sumArray = (array) => {

    let total = array.reduce(
        (accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0)

    return total
}

const arrayIteration = (count) => {

    let array = []
    for(i=0; i<count.length; i++){
        array.push(count[i].value)
    }
    console.log(array);

}

input = document.querySelectorAll("#entry")
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('change', function() {
  n = document.getElementById("totalOutputContainer");
  n.value = parseInt("0"+n.value) + parseInt("0"+this.value) - parseInt("0"+this.defaultValue);
 this.defaultValue = this.value;
 });
};

inputSalida = document.querySelectorAll("#exit")
for (let i = 0; i < inputSalida.length; i++) {
  inputSalida[i].addEventListener('change', function() {
  n2 = document.getElementById("totalOutputContainerSalida");
  n2.value = parseInt("0"+n2.value) + parseInt("0"+this.value) - parseInt("0"+this.defaultValue);
 this.defaultValue = this.value;
 });
};