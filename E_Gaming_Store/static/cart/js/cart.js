var updateBtns = document.getElementsByClassName('update-cart')

for(var i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var product = this.dataset.product
        var action = this.dataset.action
        console.log('product: ', product, 'action: ', action)
        console.log('User', user)
        if(user == 'AnonymousUser'){
            console.log('Not logged in')
        }else{
            updateUserCart(product, action)
        }
    })
}

function updateUserCart(product, action){
    console.log('User is logged in, sending data..')

    var url = '/cart/update_cart/'

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body:JSON.stringify({'product':product, 'action':action})
    })

    .then((response) =>{
        return response.json()
    })

    .then((data) =>{
        console.log('data:', data)
    })
}