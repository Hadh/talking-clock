
const say = require('say')
const HOURS = [
    "tweleve",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven"
]

const ONES = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
]

const TEENS = [
    "ten",
    "eleven",
    "tweleve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
]

const TENS = [
    "",
    "",
    "twenty",
    "thirty",
    "fourty",
    "fifty"
]

function talk(time){
    const[h,m] = time.split(':').map(n=> parseInt(n));
    h;
    m;
    const hour = HOURS[h % 12]
    const suffix = (h < 12 ) ? 'am' : 'pm' ;
    let minute = '';
    if( m < 10){
        minute = `oh ${ONES[m]}`; 
    }
    else if(m < 20){
        minute = TEENS[m % 10];
    }
    else {
       minute = `${TENS[ Math.floor(m / 10)]}   ${ONES[m% 10]}`
    } 

    return ["It's", hour, minute, suffix ].join(' ') ;
}
    
setInterval(function(){
    if(new Date().getMinutes() == 32 || new Date().getMinutes() == 15 || new Date().getMinutes() == 30 || new Date().getMinutes() == 45){
        if(new Date().getSeconds()== 0)
            say.speak(talk([new Date().getHours(),new Date().getMinutes()].join(':')))   
    }
    console.log(talk([new Date().getHours(),new Date().getMinutes()].join(':')))
},1000);

