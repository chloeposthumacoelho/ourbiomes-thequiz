// console.log('I am in a separate file')

function updateProductNumber(product,price,isIncreasing){
    const productInputText=document.getElementById(product +'-number');

    let  productNumber=productInputText.value;
    if(isIncreasing==true){
        productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0){
        productNumber=parseInt(productNumber)-1
    }
productInputText.value=productNumber;
//update case price
const productTotal=document.getElementById(product +'-price');
productTotal.innerText=productNumber*price;

calculateTotal();
    // console.log(productNumber);
}

document.getElementById('case-plus').addEventListener('click',function(){

updateProductNumber('case',59,true);

});
document.getElementById('case-minus').addEventListener('click',function(){

 updateProductNumber( 'case',59,false)
;
})


function getInputValue(product){
    const productInput=document.getElementById(product +'-number');
    const productNumber=parseInt(productInput.value);
    return productNumber;
}


function calculateTotal(){
    
    const phoneTotal=getInputValue('phone')*1219;
const caseTotal=getInputValue('case')*59
const subTotal=phoneTotal+caseTotal;
const tax=subTotal/10;
const total=subTotal+tax;

// console.log(subTotal);

// update the html
document.getElementById('sub-total').innerText=subTotal;
document.getElementById('tax-total').innerText=tax;
document.getElementById('total-price').innerText=total;
}


//phone incresde decrease
document.getElementById('phone-plus').addEventListener('click',function(){

    // console.log("clicjked");
    updateProductNumber('phone',1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
updateProductNumber('phone',1219,false);
})