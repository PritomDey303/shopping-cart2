
//increment function
const increment = (event) => {
    let inputVal=event.target.parentNode.previousElementSibling;
    let x=parseInt(inputVal.value);
    x=x+1;
    if(x<=10){
        inputVal.value=x;
    }
   

    //Price Calculation
    let y=event.target.parentNode.parentNode.nextElementSibling.children[0];
    let price=inputVal.value*y.value;
    y.innerText=`$ ${price}`;
   
    //calling totalPrice Function

    totalPrice();
   
}

//decrement function
const decrement = (event) => {
    let inputVal=event.target.parentNode.nextElementSibling;
    let x=parseInt(inputVal.value);
    x=x-1;
    if(x>0){
        inputVal.value=x;
    }

    //Price Calculation
    let y=event.target.parentNode.parentNode.nextElementSibling.children[0];
    let price=inputVal.value*y.value;
    y.innerText=`$ ${price}`;
}

//itemValue Function

const itemValue = (event) => {
    let inputVal=event.target.value;
    console.log(inputVal);
    if(inputVal>10 || inputVal<0){
        event.target.value=1;
    }
}

//totalPrice Function

const totalPrice = () => {
    let price_array;
    let temp;
    let price=document.getElementsByClassName("price");
    for(let i=0;i<price.length;i++){
        temp=price[i].value;
        console.log(temp);
    }
}