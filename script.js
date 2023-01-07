
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

    let id = document.querySelector('#empresa-select').value
    let date = document.querySelector('#date').value
    let hour = document.querySelector('.hour').value
    let entryCount = document.querySelector('.entry').value
    let exitCount = document.querySelector('.exit').value

    const data = new Info(id, date, hour, entryCount, exitCount)
    
    console.log(data);

    addNewObject(data)
    
}

let db = []

const addNewObject = (data) => {
    db.push(data)
    console.log(db); 
}