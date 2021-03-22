// class MyDate{
//     constructor(day,month,year){
//         this.day=day;
//         this.month=month;
//         this.year=year;
//     }
//     getDay(){
//         return this.day;
//     }
//     getMonth(){
//         return this.month;
//     }
//     getYear(){
//         return this.year;
//     }
// }
// let date = new MyDate(22,3,2021);
// let day = date.getDay();
// let month = date.getMonth();
// let year = date.getYear();
// alert(day + "/" + month + "/" + year);

class Temperature {
  constructor(Celsius, Fahrenheit, Kelvin) {
    this.Celsius = Celsius;
    this.Fahrenheit = Fahrenheit;
    this.Kelvin = Kelvin;
  }
  getCelsius(){
      return 5/9*(this.Fahrenheit-32);
  }
  getFahrenheit(){
      return 9/5*this.Celsius+32;
  }
  getKelvin(){
      return this.Celsius+273.15
  }
}
let celsius1=new Temperature(25);
let fahrenheit= celsius1.getFahrenheit();
let Kelvin=celsius1.getKelvin();
alert("Độ F="+fahrenheit+" "+"Độ K="+Kelvin)

