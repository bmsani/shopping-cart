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


