
let formLength  = document.getElementById('data-form').length

const capturar = () => {
    class Info{
        constructor(id, date, hour, ingreso, egreso){
            this.id = id;
            this.date = date + ' ' + hour;
            this.ingreso = ingreso;
            this.egreso = egreso;
            // this.totalEgresos = totalEgresos;
        }
        
    }

    for(i = 1; i<=5; i++) {
        let data = "data" + i
        let hour = "hour" + i
        let entryCount = "entryCount" + i
        let exitCount = "exitCount" + i

        let date = document.querySelector('#date').value
        let id = document.querySelector('#empresa-select').value
    
        hour = document.querySelector('.hour' + [i]).value
        entryCount = document.querySelector('.entry' + [i]).value
        exitCount = document.querySelector('.exit' + [i]).value

        data = new Info(id, date, hour, entryCount, exitCount)

        addNewObject(data)
    }

    // let date = document.querySelector('#date').value
    // let id = document.querySelector('#empresa-select').value

    // let hour = document.querySelector('.hour').value
    // let entryCount = document.querySelector('.entry').value
    // let exitCount = document.querySelector('.exit').value

    // let id2 = document.querySelector('#empresa-select').value
    // let hour2 = document.querySelector('.hour2').value
    // let entryCount2 = document.querySelector('.entry2').value
    // let exitCount2 = document.querySelector('.exit2').value

    
    // const data = new Info(id, date, hour, entryCount, exitCount)
    // const data2 = new Info(id2, date, hour2, entryCount2, exitCount2)
    
    // console.log(data, data2);


    let entries = arrayIteration(document.querySelectorAll('.entries'))
    let totalEntries = sumArray(entries)

    let exits = arrayIteration(document.querySelectorAll('.exits'))
    let totalExits = sumArray(exits)

    console.log("Total entradas: ", totalEntries, "Total salidas: ", totalExits);
    
}

let db = []

const addNewObject = (...data) => {
    db.push(data)
}

console.log(db);

//FUNCTIONS
const arrayIteration = (count) => {
    
    let array = []
    for(i=0; i<count.length; i++){
        array.push(count[i].value)
    }
    return array

}

const sumArray = (array) => {

    let total = array.reduce(
        (accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0)

    return total
}