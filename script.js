
let db = []

const capturar = () => {
    class Info{
        constructor(id, dateTime, ingreso, egreso){
            this.id = id;
            this.dateTime = dateTime;
            this.ingreso = ingreso;
            this.egreso = egreso;
        }
        
    }

    let hora = 5
    
    
    let date = document.querySelector('#date').value
    
    for(i = 1; i<=24; i++) {
        let data = "data" + i
        let entryCount = "entryCount" + i
        let exitCount = "exitCount" + i

        let hour = hora + i
        let newHour = 0
        let dateTime

        if (hour < 24) {
           dateTime = (`${date} ${Number(hour) >= 10 ? Number(hour) + ':00:00' : '0' + Number(hour) + ':00:00'}`)
        } else {
           let newDate = new Date(date)
           for(j = 0; j<=6; j++) {
            let horaCero = newHour + j 
            dateTime = (`${Number(newDate.getDate()) + 2} ${'0' + Number(horaCero) + ':00:00'}`)
           }
        }
        
        
        let id = document.querySelector('#empresa-select').value
        entryCount = document.querySelector('.entry' + [i]).value
        exitCount = document.querySelector('.exit' + [i]).value

        data = new Info(id, dateTime, entryCount, exitCount)

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
