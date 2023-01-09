
let db = []

const capturar = () => {
    class Info{
        constructor(id, date, hour, ingreso, egreso){
            this.id = id;
            this.date = date + hour;
            this.ingreso = ingreso;
            this.egreso = egreso;
        }
        
    }

    let hora = "7"
    
    let date = document.querySelector('#date').value
    
    let dateTime = (`${date} ${hora >= 10 ? hora + ':00:00' : '0' + hora + ':00:00'}`)
    console.log(dateTime)

    for(i = 1; i<=5; i++) {
        let data = "data" + i
        let hour = "hour" + i
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

    console.log(db);
    console.log("Total entradas: ", totalEntries, "Total salidas: ", totalExits);
    
}
    
//FUNCTIONS
const addNewObject = (...data) => { db.push(...data) }

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





// function agregarTiempo(){
//     var fecha = new Date(),
//         ; //Tiempo en segundos
 
//     fecha.setSeconds(addTime); //Añado el tiempo
 
//     let dateSelect = document.querySelector('#date').value

//     console.log("Fecha actual: " + dateSelect)
//     console.log("Tiempo añadido: " + tiempo + " días")
//     console.log("Fecha final: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() + ' ' + (fecha.getHours() + ":00:00"))
// }

// agregarTiempo()
