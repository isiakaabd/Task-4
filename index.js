const displayElement= document.getElementById("h3");


const convertFahrToCelsius=(F)=>{
     
    if( typeof F === "object" && Array.isArray(F)){ 
        return `${JSON.stringify(F)}  is not a valid number but a/an array` 
    }
    else if(typeof F === "object"){
        return  `${JSON.stringify(F)}  is not a valid number but a/an object.` 
     }else{
        return  ((F - 32) * 5/9).toFixed(4) 
     }
 } 

displayElement.innerText = convertFahrToCelsius({temp: 0})

const  checkYuGiOh = (n) => {
    regex = /^-?[\d.]+(?:e-?\d+)?$/

        s  = [];
        if(!regex.test(n)){
            return `invalid parameter: ${n}`
        }
    else {
    for (let i = 1; i <=n; i++) {
        var out = '';
        var ina ="-";
        if (i % 2 === 0) out += 'yu';
        if (i % 3 === 0) out += 'gi';
        if (i % 5 === 0) out += 'oh';
        if(i >=10 &&  i % 2 === 0) out+= ina
        
        s.push(out || i)
  
    }
 
}
console.log(s)
return s  
      
}
     
     //   }
     displayElement.innerText= (checkYuGiOh("10") )