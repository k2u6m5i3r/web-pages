function render() {
    const productsStore = localStorageUtil.getProducts()

    headerPage.render(productsStore.length);
    productsPage.render();
}

let CATALOG = [];
fetch('/server/catalog.json')
// fetch('/server/catalog+.json')
    .then(result=> result.json())
    .then(ans =>{
        // console.log(ans);
        CATALOG = ans;
        setTimeout(function(){//fake delay
            spiner.handerClear();
            render();
        },1000);
    })
    .catch(error=>{
        // console.log(error);
        spiner.handerClear();
        errorPage.render();
    })
