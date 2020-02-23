
const draws = "ABCDEFABCDEF";
const allDraws = draws.split('');
const carts = [];
const colection = getCarts();
const cartsChoice = [];


function verifyChoice(c) {
    for (var i = 0; i < allDraws.length; i++) {
        if (c == allDraws[i]) {
            allDraws.splice(i, 1);
            return;
        }
    }
}
function getCarts() {
    const cart = document.getElementsByClassName("cart");

    for (var i = 0; i < cart.length; i++) {
        var ramdomNum = Math.round(Math.random() * (11 - i));
        var myDraw = '';
        if (i == 12) {
            myDraw = allDraws[0];
        } else {
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
    for (var i = 0; i < cart.length; i++) {
        console.log("a carta: " + (carts[i].id + 1) + " tem o drawn: " + carts[i].draw);

    }


    return carts;

}
function verifyExist(cart) {
    if (cartsChoice.indexOf(cart) != -1) {
        return true;
    } else {
        return false;
    }

}
function clearArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        cartsChoice.pop();
    }
}
function verifyStatus() {
    if (cartsChoice.length > 0) {
        var firstCartChoice = cartsChoice[0];
    }
    for (var i = 0; i < carts.length; i++) {
        if (carts[i].status && !verifyExist(carts[i])) {
            cartsChoice.push(carts[i]);
        }
    }
}
function clickCart(id) {
    if (id === '1') {
        transformCart(id - 1);
    }
    if (id === '2') {
        transformCart(id - 1);
    }
    if (id === '3') {
        transformCart(id - 1);
    }
    if (id === '4') {
        transformCart(id - 1);
    }
    if (id === '5') {
        transformCart(id - 1);
    }
    if (id === '6') {
        transformCart(id - 1);
    }
    if (id === '7') {
        transformCart(id - 1);
    }
    if (id === '8') {
        transformCart(id - 1);
    }
    if (id === '9') {
        transformCart(id - 1);
    }
    if (id === '10') {
        transformCart(id - 1);
    }
    if (id === '11') {
        transformCart(id - 1);
    }
    if (id === '12') {
        transformCart(id - 1);
    }
    verifyStatus();
    verifyPoint();
}
function verifyPoint() {
    if (cartsChoice.length == 2) {
        console.log("Entrou");
        var cart1 = cartsChoice[0];
        var cart2 = cartsChoice[1];
        console.log(cartsChoice);

        if (cart1.draw == cart2.draw) {
            console.log("point");
            cartsChoice.splice(0,cartsChoice.length);
            
        }
    }

}
function transformCart(n) {
    colection[n].id = n + 1;
    colection[n].status = true;
    colection[n].cart.style.backgroundColor = "#b5c4c9";
    colection[n].cart.style.boxShadow = "0px 10px 20px #00000066";
    colection[n].childs[1].textContent = colection[n].draw;
    colection[n].childs[1].style.color = "#000000aa";
    colection[n].cart.style.color = "#000000aa";

}

function changeStyle(cart) {
    cart.style.backgroundcolor = "#b5c4c9";
    const childs = cart.childs;
    console.log(childs);

}