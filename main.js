var ticketCost = 500;
var hotelCost = 250;
var museumCost = 120;
var USD_TO_UZS = 9433.34;
var EURO_TO_UZS = 10354.03;

ticketCost = Math.round(ticketCost*USD_TO_UZS);
hotelCost = Math.round(hotelCost*USD_TO_UZS);
museumCost = Math.round(museumCost*EURO_TO_UZS);

var currentMoney = prompt('Qancha Pulingiz Bor');

var totalExpensiv = ticketCost + hotelCost + museumCost;
if (totalExpensiv <= currentMoney ) {
    console.log('Pulingiz Yetadi');

}else{
    console.log('Pulingiz Yetmaydi');
}