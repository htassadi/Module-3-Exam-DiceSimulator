// JavaScript File 

// When the 'Play' button is clicked:
document.getElementById("play-btn").addEventListener('click', play)

//varibles
let numSocks= 0
let numTrip= 0
let numRing = 0
let numMotor = 0
let numHouse= 0
let numCar= 0
let numBoat= 0
let numBike = 0


function play () {
    // - A random die is show (1-6) for the house
    let bet = Number(document.getElementById('bet-input').value);
    let fund = Number(document.getElementById('funds').innerHTML);
    let randnum1House = Math.floor(Math.random() * 6)+1;
    let randnum2House = Math.floor(Math.random() * 6)+1;
    let randnum1Player = Math.floor(Math.random() * 6)+1;
    let randnum2Player = Math.floor(Math.random() * 6)+1;
     
    
    if (randnum1House==1) {
            document.getElementById("house-die1").src ='images/1.png';
        } else if (randnum1House ==2) {
            document.getElementById("house-die1").src ='images/2.png';
        } else if (randnum1House ==3) {
            document.getElementById("house-die1").src ='images/3.png';
        } else if (randnum1House ==4) {
            document.getElementById("house-die1").src ='images/4.png';
        } else if (randnum1House ==5) {
            document.getElementById("house-die1").src ='images/5.png';
        } else {
            document.getElementById("house-die1").src ='images/6.png';
        }

    if (randnum2House ==1) {
            document.getElementById("house-die2").src ='images/1.png';
        } else if (randnum1House ==2) {
            document.getElementById("house-die2").src ='images/2.png';
        } else if (randnum1House ==3) {
            document.getElementById("house-die2").src ='images/3.png';
        } else if (randnum1House ==4) {
            document.getElementById("house-die2").src ='images/4.png';
        } else if (randnum1House ==5) {
            document.getElementById("house-die2").src ='images/5.png';
        } else {
            document.getElementById("house-die2").src ='images/6.png';
        }
    
         // - A different (but still random) die is shown for the player
         
    
    if (randnum1Player ==1) {
            document.getElementById("player-die1").src ='images/1.png';
        } else if (randnum1Player ==2) {
            document.getElementById("player-die1").src ='images/2.png';
        } else if (randnum1Player ==3) {
            document.getElementById("player-die1").src ='images/3.png';
        } else if (randnum1Player ==4) {
            document.getElementById("player-die1").src ='images/4.png';
        } else if (randnum1Player ==4){ 
            document.getElementById("player-die1").src ='images/5.png';
        } else {
            document.getElementById("player-die1").src ='images/6.png';
        }

    if (randnum2Player ==1) {
            document.getElementById("player-die2").src ='images/1.png';
        } else if (randnum2Player ==2) {
            document.getElementById("player-die2").src ='images/2.png';
        } else if (randnum2Player ==3) {
            document.getElementById("player-die2").src ='images/3.png';
        } else if (randnum2Player ==4) {
            document.getElementById("player-die2").src ='images/4.png';
        } else if (randnum2Player ==4) {
            document.getElementById("player-die2").src ='images/5.png';
        } else {
            document.getElementById("player-die2").src ='images/6.png';
        }
    
    

    // - If the player's roll is higher than the house, the player's bet is added to their funds.
    

    if ( randnum1Player + randnum2Player > randnum1House + randnum2House) {
        let total = (fund + bet);
        document.getElementById('funds').innerHTML= total;

    } else {
        // - If the player loses, they subtract the bet from their funds.
        let total = (fund - bet);
        console.log(total)
        document.getElementById('funds').innerHTML= total;
    }
      
    // - If it is a tie, nothing happens.
}

// Part 2: Life of Luxury (40%)
// When the 'Buy Riches & Luxury' button is clicked:
document.getElementById('purchase-btn').addEventListener('click', purchase)
    
    

function purchase () {
    let randnum3 = Math.random();
    let fund = Number(document.getElementById('funds').innerHTML);
    
    if (fund < 1000){  // If funds is less than 1000
        document.getElementById('loot').innerHTML += '<img src="images/socks.png">';
        //dispaly loot
        numSocks++
        document.getElementById('socks').innerHTML = numSocks


    } else if (fund >= 1000 && fund < 5000) {
         if (randnum3 <= 0.33 ) { //ring
            document.getElementById('loot').innerHTML += '<img src="images/ring.png">';
            fund = fund-1000
            document.getElementById('funds').innerHTML= fund
            //dispaly loot
            numRing++
            document.getElementById('ring').innerHTML = numRing


         } else if (randnum3 <= 0.66 && randnum3 > 0.33 ) { //bike
            document.getElementById('loot').innerHTML += '<img src="images/bike.jpg">';
            fund = fund-1000
            document.getElementById('funds').innerHTML= fund
            //dispaly loot
            numBike++
            document.getElementById('bike').innerHTML = numBike

         } else { //trip
            document.getElementById('loot').innerHTML += '<img src="images/trip.jpg">';
            fund = fund-1000
            document.getElementById('funds').innerHTML= fund
            //dispaly loot
            numTrip++
            document.getElementById('trip').innerHTML = numTrip
         }
    } else if (fund >= 5000) { //If funds is over 5000

        if (randnum3 <= 0.25) { //motorcycle
           document.getElementById('loot').innerHTML += '<img src="images/motorcycle.jpg">';
           fund = fund-5000
           document.getElementById('funds').innerHTML= fund
           //dispaly loot
           numMotor++
           document.getElementById('motor').innerHTML = numMotor

        } else if (randnum3 > 0.25 && randnum3 <= 0.5 ) { //boat
           document.getElementById('loot').innerHTML += '<img src="images/boat.png">';
           fund = fund-5000
           document.getElementById('funds').innerHTML= fund
           //dispaly loot
           numBoat++
           document.getElementById('boat').innerHTML = numBoat

        } else if (randnum3 > 0.5  && randnum3 <= 0.75) { //house
            document.getElementById('loot').innerHTML += '<img src="images/house.png">';
            fund = fund-5000
            document.getElementById('funds').innerHTML= fund
            //dispaly loot
            numHouse++
            document.getElementById('house').innerHTML = numHouse

        } else { //car
           document.getElementById('loot').innerHTML += '<img src="images/car.png">';
           fund = fund-5000
           document.getElementById('funds').innerHTML= fund
           //dispaly loot
           numCar++
           document.getElementById('car').innerHTML = numCar
        }
   }
}





