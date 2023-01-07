
let formLength  = document.getElementById('data-form').length

const capturar = () => {
    class Info{
        constructor(id, date, hour, ingreso, egreso){
            this.id = id;
            this.date = date;
            this.hour = hour;
            this.ingreso = ingreso;
            this.egreso = egreso;
            // this.totalIngresos = totalIngresos;
            // this.totalEgresos = totalEgresos;
        }
        
    }

    let date = document.querySelector('#date').value

    let id = document.querySelector('#empresa-select').value
    let hour = document.querySelector('.hour').value
    let entryCount = document.querySelector('.entry').value
    let exitCount = document.querySelector('.exit').value

    let id2 = document.querySelector('#empresa-select').value
    let hour2 = document.querySelector('.hour2').value
    let entryCount2 = document.querySelector('.entry2').value
    let exitCount2 = document.querySelector('.exit2').value

    const data = new Info(id, date, hour, entryCount, exitCount)
    const data2 = new Info(id2, date, hour2, entryCount2, exitCount2)
    
    
    console.log(data, data2);

    addNewObject(data, data2)
    
}

let db = []

const addNewObject = (data, data2) => {
    db.push(data, data2)
    console.log(db); 
}