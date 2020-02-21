function clickCart(id){
    const cart = document.getElementsByClassName("cart");
    if(id === '1'){
        changeStyle(cart[0]);
    }
    if(id === '2'){
        changeStyle(cart[1]);
    }
    if(id === '3'){
        changeStyle(cart[2]);
    }
    if(id === '4'){
        changeStyle(cart[3]);
    }
    if(id === '5'){
        changeStyle(cart[4]);
    }
    if(id === '6'){
        changeStyle(cart[5]);
    }
    if(id === '7'){
        changeStyle(cart[6]);
    }
    if(id === '8'){
        changeStyle(cart[7]);
    }
    if(id === '9'){
        changeStyle(cart[8]);
    }
}

function changeStyle(cart){
    cart.style.backgroundColor = "#b5c4c9";
    const childs = cart.childs;
    console.log(childs);
    
}