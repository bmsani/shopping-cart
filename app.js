function getInput(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal * .1;
    const netTotal = subTotal + tax;
    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax.toFixed(2);
    document.getElementById('net-total').innerText = netTotal;
}

function updateProductNumber (product,isIncreasing, price){
    const productCount = document.getElementById(product + '-number');
    console.log(productCount);
    const countNumberString = productCount.value
    let countNumber = parseInt(countNumberString);

    if(isIncreasing == true){
        countNumber = countNumber + 1 ;
    }
    else if (countNumber > 0){
        countNumber = countNumber - 1 ;
    }
    productCount.value = countNumber;

    const singleProductPrice = document.getElementById(product + '-price');
    singleProductPrice.innerText = countNumber * price;

    // sub total calculation
    calculateTotal();
}

document.getElementById('phone-incrise').addEventListener('click', function (){
    
    updateProductNumber('phone',true,1219);

})

document.getElementById('phone-decrise').addEventListener('click', function (){

    updateProductNumber('phone',false,1219);

})

document.getElementById('case-incrise').addEventListener('click', function (){
    
    updateProductNumber('case',true,59);

})

document.getElementById('case-decrise').addEventListener('click', function (){

    updateProductNumber('case',false,59);

})


