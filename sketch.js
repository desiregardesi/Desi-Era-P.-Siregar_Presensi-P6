let judul;
let nama;
let tombol;
let hello;
let objek;
function setup() {
  createCanvas(windowWidth, windowHeight);
 judul = createElement('h2', 'Halo semua')
 judul.position(30, 50)
 createCanvas(windowWidth, windowHeight);
 judul = createElement('h2', 'Halo, tuliskan nama anda')
 judul.position(50, 90)
 nama = createInput( 'DESI ERA P. SIREGAR')
 nama.position(70, 150)
 judul = createElement('h2', 'Halo, tuliskan NIM anda')
 judul.position(50, 170)
 nim = createInput('121160029')
 nim.position(70, 230)
 tombol = createButton('Masukkan')
 tombol.position(90,280)
 tombol.mousePressed(sayHello);
}
function draw() {

}
function sayHello() {
 hello = createElement('h2', 'Selamat datang ' + nama.value())
 hello.position(60, 350)
 hello = createElement('h2', nim.value())
 hello.position(500, 350)
}

class Mover {
 constructor(loc, vel, acc, m){
 this.location = loc;
 this.mass = m;
 this.velocity = vel;
 this.acceleration = acc;
 }
 update(){
 this.velocity.add(this.acceleration);
 this.location.add(this.velocity);
 }
 display(){
 noStroke();
 ellipse(this.location.x, this.location.y, 2*this.mass, 2*this.mass);
 }
}