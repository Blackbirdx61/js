// ═══════════════════════════════════════════════════════
//  bJackClaude.js — Refactored Blackjack Engine
//  Incorporates: gameState loop, cleanup, BJ flags,
//  bust flags, full globals reset between hands.
// ═══════════════════════════════════════════════════════

// ── Globals ──
var plrbank     = 500; var plrbet = 0; var plrAceCount = 0; var dlrAceCount = 0;
var plrSum      = 0; var dlrSum = 0; var currentBet  = 0; var betLocked = false; 
var plrBJ = false; var dlrBJ = false; var plrBust = false; var dlrBust = false;
let gameState   = "betting";
let deck        = null;
let plrHand = []; let dlrHand = []; 
let plrCardCount = 2; // starts at 2 after initial deal
let dlrCardCount = 2; // starts at 2 after initial deal

// ── Card back object ──
class Card {
  constructor(suit, rank, crdval, crdsrc) {
    this.suit   = suit;
    this.rank   = rank;
    this.crdval = crdval;
    this.crdsrc = crdsrc;
  }
}

const cardBack = new Card('back', 'back', 0, 'img/cards/bjdeck/bjd0.png');

// ═══════════════════════════════════════════════════════
//  DECK CLASS
// ═══════════════════════════════════════════════════════
class Deck {
  constructor() {
    this.cards = [];
    this.newdeck();
  }

  newdeck() {
    const suits  = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    const ranks  = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
    const values = [ 11,   2,  3,  4,  5,  6,  7,  8,  9,  10,   10,    10,    10];
    this.cards = [];
    let imgIdx = 1;
    for (let suit of suits) {
      for (let r = 0; r < ranks.length; r++) {
        const crdsrc = `img/cards/bjdeck/bjd${imgIdx}.png`;
        this.cards.push(new Card(suit, ranks[r], values[r], crdsrc));
        imgIdx++;
      }
    }
  }

  static get back() {
    return 'img/cards/bjdeck/bjd0.png';
  }
}

// ═══════════════════════════════════════════════════════
//  GAME LOOP
// ═══════════════════════════════════════════════════════
function gameLoop() {
  console.log("gameState: " + gameState);
  switch(gameState) {
    case "betting":    placeYourBets(); break;
    case "dealing":    deal();          break;
    case "playerTurn": playerTurn();    break;
    case "dealerTurn": dealerTurn();    break;
    case "eval":       evalHand();      break;
    case "cleanup":    cleanup();       break;
  }
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
blkjckini();

function blkjckini() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("DealerCrd0" + i).style.visibility = "visible";
    document.getElementById("PlayerCrd0" + i).style.visibility = "visible";
  }
  console.log("blkjckini called");
}

function newhandini() {
  for (let i = 1; i <= 6; i++) {
    document.getElementById("DealerCrd0" + i).style.visibility = "hidden";
    document.getElementById("PlayerCrd0" + i).style.visibility = "hidden";
  }
  console.log("newhandini called");
}

// ═══════════════════════════════════════════════════════
//  MAIN
// ═══════════════════════════════════════════════════════
function main() {
  if (!deck || deck.cards.length < 14) {
    newgame();
  }
  newhand();
}

// ═══════════════════════════════════════════════════════
//  SHUFFLE
// ═══════════════════════════════════════════════════════
function shuffle(deck) {
  for (let i = deck.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
  }
  console.log("Deck shuffled.");
  return deck;
}

// ═══════════════════════════════════════════════════════
//  NEW GAME
// ═══════════════════════════════════════════════════════
function newgame() {
  deck = new Deck();
  deck = shuffle(deck);
  console.log(`Deck created — ${deck.cards.length} cards.`);
}

// ═══════════════════════════════════════════════════════
//  NEW HAND
// ═══════════════════════════════════════════════════════
function newhand() {
  newhandini();
  document.getElementById("msgtxt").textContent = "Place your bets";
  console.log("newhand called");
  gameState = "betting";
  gameLoop();
}

// ═══════════════════════════════════════════════════════
//  BETTING
// ═══════════════════════════════════════════════════════
function placeYourBets() {
  currentBet = 0;
  betLocked  = false;
  updateBetDisplay();

  const chips = [
    { id: "chip5",  value: 5  },
    { id: "chip10", value: 10 },
    { id: "chip25", value: 25 },
  ];
  
   document.getElementById("btnNew").style.visibility = "hidden";
   document.getElementById("btnStand").style.visibility = "visible";

  chips.forEach(chip => {
    const el = document.getElementById(chip.id);
    el.onclick = function() {
      currentBet += chip.value;
      updateBetDisplay();
    };
    el.oncontextmenu = function(e) {
      e.preventDefault();
      currentBet = Math.max(0, currentBet - chip.value);
      updateBetDisplay();
    };
  });

  document.getElementById("betcircleimg").onclick = function() {
    if (currentBet === 0) return;
    betLocked  = true;
    plrbet     = currentBet;
    plrbank    = plrbank - plrbet;
    console.log("Bet locked in: $" + plrbet + " | Bank: $" + plrbank);
    placechips(plrbet);
    gameState = "dealing";
    gameLoop();
  };
}

function placechips(plrbet) {
  document.getElementById("msgtxt").textContent = "Good Luck!";
  document.getElementById("betTxt").textContent = "$" + plrbet;
  document.getElementById("mychips").style.visibility = "visible";
  console.log("place chips bet= " + plrbet + " || plrbank= " + plrbank);
}

function updateBetDisplay() {
  //document.getElementById("msgtxt").textContent = "Bet = $" + currentBet;
  document.getElementById("msgtxt").innerHTML = "Place your Bet<br> Bet = $" + currentBet;
}

// ═══════════════════════════════════════════════════════
//  DEAL
// ═══════════════════════════════════════════════════════
function deal() {
  plrHand = [];
  dlrHand = [];

  // Deal alternating — Player, Dealer, Player, Dealer
  plrHand.push(pullcard()); dlrHand.push(pullcard());
  plrHand.push(pullcard()); dlrHand.push(pullcard());

  // Display player cards
  for (let i = 0; i < plrHand.length; i++) {
    let cardDiv = document.getElementById("PlayerCrd0" + (i + 1));
    cardDiv.querySelector("img").src = plrHand[i].crdsrc;
    cardDiv.style.visibility = "visible";
  }

  // Dealer card 1 — hole card (face down)
  let dlrCard1 = document.getElementById("DealerCrd01");
  dlrCard1.querySelector("img").src = Deck.back;
  dlrCard1.style.visibility = "visible";

  // Dealer card 2 — face up
  let dlrCard2 = document.getElementById("DealerCrd02");
  dlrCard2.querySelector("img").src = dlrHand[1].crdsrc;
  dlrCard2.style.visibility = "visible";

  console.log("P1: " + plrHand[0].crdsrc);
  console.log("P2: " + plrHand[1].crdsrc);
  console.log("D1: " + dlrHand[0].crdsrc);
  console.log("D2: " + dlrHand[1].crdsrc);

  // Calculate totals
  plrSum = plrHand[0].crdval + plrHand[1].crdval;
  dlrSum = dlrHand[0].crdval + dlrHand[1].crdval;
  console.log("Player total: " + plrSum + " | Dealer total: " + dlrSum);

  // Update message box
  document.getElementById("msgtxt").textContent = "Player: " + plrSum;

  // Check for blackjack
  if (plrSum === 21 && dlrSum === 21) {
    plrBJ = true; dlrBJ = true;
    gameState = "eval"; gameLoop();
  } else if (dlrSum === 21) {
    dlrBJ = true;
    gameState = "eval"; gameLoop();
  } else if (plrSum === 21) {
    plrBJ = true;
    gameState = "eval"; gameLoop();
  } else {
    gameState = "playerTurn"; gameLoop();
  }
}

// ═══════════════════════════════════════════════════════
//  PULL CARD
// ═══════════════════════════════════════════════════════
function pullcard() {
  let crdtmp = deck.cards.pop();
  if (crdtmp) {
    console.log(`You drew the ${crdtmp.rank} of ${crdtmp.suit}`);
  }
  return crdtmp;
}

// ═══════════════════════════════════════════════════════
//  PLAYER TURN
// ═══════════════════════════════════════════════════════
function playerTurn() {
  document.getElementById("msgtxt").innerHTML = "Player: " + plrSum + "<br>Hit or Stand?";
  console.log("playerTurn called — plrSum: " + plrSum);

  /* Reveal action buttons
  document.getElementById("btnHit").style.visibility    = "visible";
  document.getElementById("btnStand").style.visibility  = "visible";
  document.getElementById("btnDouble").style.visibility = "visible";
  document.getElementById("btnSplit").style.visibility  = "visible"; */

  // Single event listener on parent buttons div
  document.getElementById("buttons").onclick = function(e) {
    const btn = e.target.closest("button");
    if (!btn) return; // clicked on div not button

    switch(btn.id) {
      case "btnHit":
        playerHit();
        break;
      case "btnStand":
        playerStand();
        break;
      case "btnDouble":
        playerDouble();
        break;
      case "btnSplit":
        splitHand();
        break;
    }
  };
}


function playerHit() {
  let card = pullcard();
  if (card.crdval===11){plrAceCount++} 
  plrSum += card.crdval;
  //plrAceCheck();
  if (plrSum >21 && plrAceCount>0){ 
  plrSum=plrSum-10; plrAceCount--; }  
  console.log("Player hits: " + card.rank + " | plrSum: " + plrSum + "AceCount= "+ plrAceCount);
  
  // TODO: display card on screen

plrCardCount++;
let cardDiv = document.getElementById("PlayerCrd0" + plrCardCount);
cardDiv.querySelector("img").src = card.crdsrc;
cardDiv.style.visibility = "visible";



  document.getElementById("msgtxt").innerHTML = "Player: " + plrSum + "<br>Hit or Stand?";
  if (plrSum > 21) {
    plrBust = true;
    document.getElementById("msgtxt").innerHTML = "Player: " + plrSum + "<br>Bust!";
    gameState = "eval";
    gameLoop();
  }
}

/* function plrAceCheck (){
	if (plrSum >21 && plrAceCount>0){ 
  plrSum=plrSum-10; plrAceCount--; }  
  console.log("Player hits: " + card.rank + " | plrSum: " + plrSum + "AceCount= "+ plrAceCount);
} */

function playerStand() {
  console.log("Player stands on: " + plrSum);
  document.getElementById("msgtxt").textContent = "Player stands: " + plrSum;
  gameState = "dealerTurn";
  gameLoop();
}

function playerDouble() {
  // Double down — one card only then stand
  if (plrbank < plrbet) {
    document.getElementById("msgtxt").textContent = "Not enough bank to double!";
    return;
  }
  plrbank -= plrbet;
  plrbet  *= 2;
  let card = pullcard();
  plrSum  += card.crdval;
  if (plrSum >21 && plrAceCount>0){ 
  plrSum=plrSum-10; plrAceCount--; }  
  plrCardCount++;
  
let cardDiv = document.getElementById("PlayerCrd0" + plrCardCount);
cardDiv.querySelector("img").src = card.crdsrc;
cardDiv.style.visibility = "visible";
console.log("Player doubles: " + card.rank + " | plrSum: " + plrSum + " | AceCount: " + plrAceCount);



  console.log("Player doubles: " + card.rank + " | plrSum: " + plrSum);
  if (plrSum > 21) { plrBust = true; }
  gameState = plrBust ? "eval" : "dealerTurn";
  gameLoop();
}



function standbtnTest() {
console.log("Stand Button Clicked"); } 


// ═══════════════════════════════════════════════════════
//  DEALER TURN
// ═══════════════════════════════════════════════════════
function dealerTurn() {
 //test
   let dlrCard1 = document.getElementById("DealerCrd01");
  dlrCard1.querySelector("img").src = dlrHand[0].crdsrc;
  dlrCard1.style.visibility = "visible";
	
  console.log("dealerTurn called — dlrSum: " + dlrSum);
  // Dealer draws to 16, stands on 17+
  while (dlrSum < 17) {
    let card = pullcard();
    dlrSum += card.crdval;
	  if (dlrSum >21 && dlrAceCount>0){ 
  dlrSum=dlrSum-10; dlrAceCount--; } 
	
	
	
    console.log("Dealer draws: " + card.rank + " | dlrSum: " + dlrSum + "dlrAceCount= " + dlrAceCount);
	dlrCardCount++;
let cardDiv = document.getElementById("DealerCrd0" + dlrCardCount);
cardDiv.querySelector("img").src = card.crdsrc;
cardDiv.style.visibility = "visible";
  }
  if (dlrSum > 21) { dlrBust = true; }
  gameState = "eval";
  gameLoop();
}

// ═══════════════════════════════════════════════════════
//  EVAL HAND
// ═══════════════════════════════════════════════════════
function evalHand() {
  console.log("evalHand called");
  let msg = "";

  if (plrBust) {
    msg = "Bust! <br> Dealer wins.";
    plrbank = plrbank; // no payout
  } else if (dlrBust) {
    msg = "Dealer busts! You win!";
    plrbank += plrbet * 2;
  } else if (plrBJ && dlrBJ) {
    msg = "Push — both Blackjack!";
    plrbank += plrbet; // return bet
  } else if (dlrBJ) {
    msg = "Dealer Blackjack! Dealer wins.";
  } else if (plrBJ) {
    msg = "Blackjack! <br> You win 3:2!";
    plrbank += Math.floor(plrbet * 2.5); // 3:2 payout
  } else if (plrSum > dlrSum) {
    msg = "You win!";
    plrbank += plrbet * 2;
  } else if (dlrSum > plrSum) {
    msg = "Dealer wins.";
  } else {
    msg = "Push!";
    plrbank += plrbet; // return bet
  }
   document.getElementById("msgtxt").innerHTML = msg;
  //document.getElementById("msgtxt").textContent = msg;
  document.getElementById("txtbox01").textContent = "Bank: $" + plrbank;
  console.log("Result: " + msg + " | Bank: $" + plrbank);

  // Auto cleanup after 3 seconds
  setTimeout(() => {
    gameState = "cleanup";
    gameLoop();
  }, 5000);
}

// ═══════════════════════════════════════════════════════
//  CLEANUP
// ═══════════════════════════════════════════════════════
function cleanup() {
  plrBJ       = false; dlrBJ       = false;
  plrBust     = false; dlrBust     = false;
  plrSum      = 0;     dlrSum      = 0;
  plrAceCount = 0;     dlrAceCount = 0;
  plrbet      = 0;     
  currentBet  = 0;
  betLocked   = false;
  plrCardCount = 2; dlrCardCount = 2; // reset for next hand
  //document.getElementById("mychips").style.visibility = "visible";
  document.getElementById("mychips").style.visibility = "hidden";
  document.getElementById("betTxt").textContent = "";
  console.log("cleanup called — ready for new hand");
  let DkLen = deck.cards.length; console.log(DkLen + " Cards Remain");
  newhand();
}

// ═══════════════════════════════════════════════════════
//  SPLIT HAND (placeholder)
// ═══════════════════════════════════════════════════════
function splitHand() {
  document.getElementById('playerHand1').style.left = '150px';
  document.getElementById('playerHand2').style.visibility = 'visible';
  document.getElementById('playerHand2').style.left = '350px';
}
