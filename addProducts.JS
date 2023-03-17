function addProducts(){
    // alert("working!")

    var productImage = document.getElementById("productImage").value;
    var productName =document.getElementById("productName").value;
    var productPrice =document.getElementById("productPrice").value;

    var product ={image:productImage, name:productName,price:productPrice}

    var products=JSON.parse(localStorage.getItem("product")) || [];

    console.log(products,"products")

    var flag=false;
    for(var i=0;i<products.length;i++){
        if(products[i].Image===productImage){
            flag=true;
        }

    }if(flag===true){
        alert("image alredy added, use another one!")
    }else{
        products.push(product);
        localStorage.setItem('product', JSON.stringify(products));
        document.getElementById("productImage").value='';
        document.getElementById("productName").value='';
        document.getElementById("productPrice").value='';

        alert("product added")
    }


}