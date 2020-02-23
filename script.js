
const draws = "ABCDEFABCDEF";
const allDraws = draws.split('');
const colection = getCarts();



function verifyChoice(c){
    for(var i = 0; i < allDraws.length; i++){
        if(c == allDraws[i]){
            allDraws.splice(i,1);
            return;
        }
    }
}
function getCarts(){
    const cart = document.getElementsByClassName("cart");
  
   
    const carts = [];
    
    for(var i = 0; i < cart.length; i++){
        var ramdomNum = Math.round(Math.random() * (11 - i));
        console.log(allDraws)
        console.log(ramdomNum)
        var myDraw = '';
        if(i == 12){
            myDraw = allDraws[0];
        }else{
            myDraw = allDraws[ramdomNum];
        }
        
        verifyChoice(myDraw);

        carts[i] = {
            id: i,
            status: false,
            cart: cart[i],
            childs: cart[i].childNodes,
            draw: myDraw
        }

        
    }
    for(var i = 0; i < cart.length; i++){
        console.log(carts[i].draw);
    }


    return carts;

}

function setValues(){

}

function clickCart(id){
    
    if(id === '1'){
        transformCart(id-1);
    }
    if(id === '2'){
        transformCart(id-1);
    }
    if(id === '3'){
        transformCart(id-1);
    }
    if(id === '4'){
        transformCart(id-1);
    }
    if(id === '5'){
        transformCart(id-1);
    }
    if(id === '6'){
        transformCart(id-1);
    }
    if(id === '7'){
        transformCart(id-1);
    }
    if(id === '8'){
        transformCart(id-1);
    }
    if(id === '9'){
        transformCart(id-1);
    }
    if(id === '10'){
        transformCart(id-1);
    }
    if(id === '11'){
        transformCart(id-1);
    }
    if(id === '12'){
        transformCart(id-1);
    }
    
}
function transformCart(n){
        colection[n].status = true;
        colection[n].cart.style.backgroundColor = "#b5c4c9";
        colection[n].cart.style.boxShadow = "0px 10px 20px #00000066";
        colection[n].childs[1].textContent = colection[n].draw;
        colection[n].childs[1].style.color = "#000000aa";
        colection[n].cart.style.color = "#000000aa";

}

function changeStyle(cart){
    cart.style.backgroundcolor = "#b5c4c9";
    const childs = cart.childs;
    console.log(childs);
    
}