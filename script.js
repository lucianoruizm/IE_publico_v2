
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

