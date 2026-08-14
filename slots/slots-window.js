<!-----------Claude.JS Below ---> 
var Balance = 200;
const btn = document.getElementById('spin-btn');

// -------------------------------------------------------
//  SYMBOL DEFINITIONS  (index = PNG number)
// -------------------------------------------------------
const lemon   = [0];
const bar     = [1, 2,  3,  4,  5 ];
const dblBar  = [6, 7];
const triBar  = [8];
const crown   = [9];
const grapes  = [10];
const cherry  = [11, 12];
const wmelon  = [13];
const wild    = [14];
const apple   = [15];
const clubs   = [16];
const seven   = [17];
const dblSeven= [18];
const triSeven= [19];
const pSeven  = [20]; // 3 Purple Sevens

// -------------------------------------------------------
//  FIXED REEL STRIPS
//  Each reel has its own weighted pool of symbol indices.
//  Edit these arrays to control which symbols appear on
//  each reel and how often (repeat an index to weight it).
// -------------------------------------------------------
const REEL_STRIPS = [
  // Reel 0 - Left
  [
    ...lemon,  
    ...bar,    ...bar,
    ...dblBar,
    ...cherry, ...cherry,
    ...grapes,
    ...apple,  ...apple,
    ...clubs,
    ...seven,
    ...wmelon,
    ...triBar,
    ...crown,
    ...dblSeven,
    ...wild,
    ...triSeven, ...triSeven, ...triSeven,
    ...pSeven,
  ],
  // Reel 1 - Centre
  [
    ...lemon,  ...lemon,
    ...bar,    ...bar,    ...bar,
    ...dblBar,
    ...cherry, ...cherry,
    ...grapes, ...grapes,
    ...apple,
    ...clubs,
    ...seven,  ...seven,
    ...wmelon,
    ...triBar,
    ...crown,
    ...dblSeven,
    ...wild,
    ...triSeven,
    ...pSeven,
  ],
  // Reel 2 - Right
  [
    ...lemon,  ...lemon,
    ...bar,    ...bar,
    ...dblBar, ...dblBar,
    ...cherry,
    ...grapes,
    ...apple,  ...apple,
    ...clubs,  ...clubs,
    ...seven,
    ...wmelon,
    ...triBar,
    ...crown,
    ...dblSeven,
    ...wild,
    ...triSeven,
    ...pSeven,
  ],
];

// -------------------------------------------------------
//  SYMBOL IMAGE PATHS  (index 0-20 maps to reels00-20.png)
// -------------------------------------------------------
const SYMBOL_PATHS = Array.from({ length: 21 }, (_, i) =>
  `img/reels${String(i).padStart(2, '0')}.png`
);

// How long each spin lasts per reel (ms). Reels stop left ? right.
const SPIN_DURATIONS = [900, 1100, 1300];

// Symbol size in px - must match --symbol-size in CSS
const SYMBOL_SIZE = 175;

// Number of frames in the animated strip (more = smoother spin)
const STRIP_LENGTH = 20; 

//-------------------------------
// Test add Overlay Text
 //addTextOverlay("Hello World");

// -------------------------------------------------------
//  REEL ENGINE
// -------------------------------------------------------
class Reel {
  constructor(viewport, strip) {
    this.viewport  = viewport;
    this.el        = viewport.querySelector('.reel-strip');
    this.reelStrip = strip;          // fixed pool for this reel
    this.targetIdx = 17;              // symbol index (0-20) that lands in window
    this._build();
  }

  // Pick a random symbol index from this reel's strip
  _randomSymbol() {
    return this.reelStrip[Math.floor(Math.random() * this.reelStrip.length)];
  }

  // Build the animated image strip, ending on targetIdx
  _build() {
    const seq = [];
    for (let i = 0; i < STRIP_LENGTH - 1; i++) {
      seq.push(this._randomSymbol());
    }
    seq.push(this.targetIdx); // guaranteed final symbol

    this.el.innerHTML = seq
      .map(idx => `<img src="${SYMBOL_PATHS[idx]}" alt="symbol-${idx}" draggable="false">`)
      .join('');

    // park at the last frame so reel looks settled at rest
    this._setY((STRIP_LENGTH - 1) * SYMBOL_SIZE);
  }

  _setY(y) {
    this.el.style.transition = 'none';
    this.el.style.transform  = `translateY(-${y}px)`;
  }

  // Spin to a specific symbol index; returns Promise that resolves when done
  spin(symbolIdx, duration) {
    return new Promise(resolve => {
      this.targetIdx = symbolIdx;
      this._build();

      this._setY(0);
      void this.el.offsetHeight; // force reflow before animating

      const finalY = (STRIP_LENGTH - 1) * SYMBOL_SIZE;
      this.el.style.transition = `transform ${duration}ms cubic-bezier(0.17, 0.67, 0.35, 1.0)`;
      this.el.style.transform  = `translateY(-${finalY}px)`;

      setTimeout(resolve, duration);
    });
  }
}

// -------------------------------------------------------
//  INITIALISE REELS
// -------------------------------------------------------
const reels = REEL_STRIPS.map((strip, i) =>
  new Reel(document.getElementById('reel-' + i), strip)
);

// -------------------------------------------------------
//  spinAll()
//  Randomly picks one symbol index from each reel's own
//  strip, spins all three, then calls Eval with the
//  three resulting symbol numbers.
//
//  To force a result pass an array of symbol indices:
//    spinAll([12, 12, 12])  // three cherries
// -------------------------------------------------------

async function spinAll(forceTargets) { 
  btn.disabled = true; btn.style.visibility = 'hidden';
  Balance = Balance - 5; document.getElementById('txtbox01').innerHTML = " Bank = " + Balance;  
  
  const targets = forceTargets || reels.map((reel) =>
    reel.reelStrip[Math.floor(Math.random() * reel.reelStrip.length)])
// -----------------------------------------------------
// ------------------Test Values ----------------------
// let tmp=20; //Forces values
//targets[0]=tmp; targets[1]=tmp;  targets[2]=tmp;
// targets[0]=4;   targets[1]=7;  targets[2]=7;
// targets[0]=14;  targets[1]=1;  targets[2]=8;  // ← Force Wild(14), Bar(1), triBar(8) — test Case 21

  
  console.clear();
  // Start all reels spinning (no await)
  reels.forEach((reel, i) => reel.spin(targets[i], SPIN_DURATIONS[i]));
  


 const [sym0, sym1, sym2] = targets;

  // Wait for the longest reel to finish, then call Eval
  const maxDuration = Math.max(...SPIN_DURATIONS) + 250;
  setTimeout(() => {
    console.log(`Reels stopped on symbols: ${sym0}, ${sym1}, ${sym2}`);
    Eval([sym0, sym1, sym2]);
  }, maxDuration);

  return targets;
}

// -------------------------------------------------------
//  Eval  - receives [sym0, sym1, sym2] (symbol numbers)
// -------------------------------------------------------
function Eval(val) {
  console.log('Eval called');
  console.log(`Symbol indices ? Reel0: ${val[0]}  Reel1: ${val[1]}  Reel2: ${val[2]}`);
	
   WinnerInt = CheckWinners(val);
   console.log("WinnerInt = " + WinnerInt);
   if (WinnerInt==0) {
   document.getElementById('txtbox02').innerHTML = "  Good Luck! ";
	btn.disabled = false; btn.style.visibility = 'visible';  }
   else  {
			//WinnerInt=1;
			PayOut(WinnerInt); 
		}
	   
  return val;
}
// -------------------Event Listener Removed. --------


//-------------------End Claudes Code ------------  



function CheckWinners(val) {
		
        WinnerInt=1;
		val=CheckWild(val);
		val=CleanUpSymbols(val);
		WinnerInt=CheckZero(val);
		if (WinnerInt==0) return WinnerInt; 
		WinnerInt=CheckTriples(val);
		if (WinnerInt>1) return WinnerInt; 
		WinnerInt=TestBars(val);
		if (WinnerInt>1) return WinnerInt; 
		WinnerInt=Test7s(val);
		if (WinnerInt==1) {
			WinnerInt=0;
			return WinnerInt; 
		}
		console.log("val= "+val[0], val[1], val[2]);

	
		return WinnerInt;  	
	}  
	
function CheckZero(val) {
	if (val[0]==0 || val[1]==0 || val[2] ==0 ) {
		 	WinnerInt=0;}
		return WinnerInt;
}	
function CheckTriples(val) {
		if (val[0]== val[1] && val[1]==val[2]) {
		WinnerInt=1	
		if (val[0]==20) WinnerInt=39; 
		if (val[0]==19) WinnerInt=38; 
		if (val[0]==18) WinnerInt=37; 
		if (val[0]==17) WinnerInt=36;
		if (val[0]==14) WinnerInt=38;
		if (val[0]==11) WinnerInt=24;
		if (val[0]==10) WinnerInt=24;		
		if (val[0]==8)  WinnerInt=25;
		if (val[0]==6 ) WinnerInt=23;
		 if (val[0]==1) WinnerInt=22;
		
		
		}
		return WinnerInt;
	}
	
function CleanUpSymbols (val) {
let i=0 
while (i<3){ 
//if (val[i]==1) {val[i]=0;}
if (val[i]==2 || val[i]==3 ||val[i]==4 || val[i]==5  ){val[i]=1;}
if (val[i]==7) {val[i]=6;}
if (val[i]==12) {val[i]=11;}
i++; 
	}
	return val
}
//--------------------------------------------
function CheckWild(val){
		wildInt=0; i=0; 
        //console.log("valZ="+val[0]);
        
        for (let i = 0; i < 3; i++) {
        if (val[i]==14) wildInt++; } 
         

        switch (wildInt) {
        case 3:  
        val[0]=14;      
        console.log("WildInt= " + wildInt); 
        return val;
        break;
               
        case 2: val=_2Wild(val);            
            console.log("WildInt= " + wildInt); 
        return val;
        break;
             
        case 1: val=_1Wild(val); 
                 console.log("WildInt= " + wildInt); 
            return val;            
        break
               console.log("Wild: "+val);
        default: return val;  //console.log("WildInt= Zero");
              
        } // End Switch
        } // End Function
        
        function _2Wild(val){ 
            let wrk=0; let i=1;
            for (let i = 0; i <3; i++) {
                if (val[i]!==14) {
                wrk=val[i];} }
                  
            for (let i = 0; i < 3; i++) {
            val[i]=wrk }
                    
            return val; }
        
         function _1Wild(val){ 
            if (val[0]==14) {val[0]=val[1];}
            if (val[1]==14) {val[1]=val[0];} //should work. 
            if (val[2]==14) {val[2]=val[1];}      
            return val ; }

//-------------------------------------------
// WinnerInt=Test7s(val);
	function Test7s(val) {
	if (val[0] > 18 && val[1] > 18 && val[2] > 18) {
        WinnerInt = 37;
	}
    else if (val[0] > 16 && val[1] > 16 && val[2] > 16) {
        WinnerInt = 23;
    } 
    else if (val[0] > 16 && val[1] > 16 && val[2]<=16) {
        WinnerInt = 22;
    } 
    else if (val[0] > 16 && val[1] <= 16) { // Using standard comparison
        WinnerInt = 20;
    } 
    else {
        WinnerInt = 1; // Fallback if no conditions are met
    }

  //  console.log("7s val = " + val[0], val[1], val[2]);
  //  console.log("7s Wint = " + WinnerInt);
    
    return WinnerInt;
}
// WinnerInt=TestBars(val);
	function TestBars(val) {
    if (val[0] <=8 && val[1] <=8 && val[2] <= 8) {
        WinnerInt = 21; 
	}	
    else {
        WinnerInt = 1; // Fallback if no conditions are met
    }

    //console.log("Bars val = " + val[0], val[1], val[2]);
    //console.log("Bars WinInt = " + WinnerInt);
    
    return WinnerInt;
	}

// **************************** PayTable ******************
// ********************************************************
// RTP: ~98% | Cost per spin: 5 credits | Jackpot: 5,000
// ********************************************************
function PayOut(WinnerInt) {
  let Credit = 0;

  switch (WinnerInt) {
    case 20: Credit = 5;    break;  // 1× seven + losses
    case 21: Credit = 8;   break;  // Any bar mix
    case 22: Credit = 15;   break;  // 2× seven + other
    case 23: Credit = 25;   break;  // 3× any seven
    case 24: Credit = 40;   break;  // 3× cherry / grapes
    case 25: Credit = 75;  break;  // 3× tri-bar
    case 36: Credit = 100;  break;  // 3× single seven
    case 37: Credit = 250;  break;  // 3× tri-seven
    case 38: Credit = 500;  break;  // 3× dbl-seven / wild
    case 39: Credit = 5000; break;  // 3× purple seven — JACKPOT
  }

  const newBalance = Balance + Credit;
  let iC = 5;
  if (Credit < 30)   iC = 1;
  if (Credit == 600)  iC = 10;
  if (Credit == 5000) iC = 50;

  console.log("Bank = " + Balance + " WinnerInt = " + WinnerInt + " Credit = " + Credit);
  document.getElementById('txtbox02').innerHTML = " Winner= " + Credit;

  DialPayout(newBalance, iC);
}

// ********************************************************
function DialPayout(newBalance, iC) {
  const timer = setInterval(() => {
    if (Balance < newBalance) {
      Balance += iC;
      document.getElementById('txtbox01').innerHTML = " Bank = " + Balance;
    } else {
        btn.disabled = false; btn.style.visibility = 'visible'; 
		clearInterval(timer);
    }
  }, 100);
  console.log("Balance= " + Balance + " NewBalance= " + newBalance);
}

function addTextOverlay(textString) {
    // 1. Get the container element
    const container = document.getElementById('txtbox01');
    
    // 2. Create a new text element (like a paragraph or span)
    const textElement = document.createElement('p');
    textElement.innerText = textString;
    
    // 3. Apply CSS styles for positioning and look
    textElement.style.position = 'absolute';
    textElement.style.top = '33px';         // Position from top
    textElement.style.left = '5px';        // Position from left
    textElement.style.transform = 'translate(-50%, -50%)'; // Center perfectly
    
    textElement.style.color = 'white';     // Text styling
    textElement.style.fontSize = '24px';
    textElement.style.fontWeight = 'bold';
    textElement.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)'; // Make text readable
    textElement.style.margin = '0';
    
    // 4. Append the text element into the container
    container.appendChild(textElement);
}




