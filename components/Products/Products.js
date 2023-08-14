class Products {
    constructor(){
        this.classNameActive = "products-element__btn_active";
        this.labelAdd = "Добавить в корзину";
        this.labelRemove = "Удалить из корзины";
    }
    handleSetLocationStorage(element, id){
        
        // console.log(element, id);
        const {pushProduct, products} = localStorageUtil.putProducts(id);
        // console.log(pushProduct, products);
        if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length);
    }

    render() {
        const productsStorage = localStorageUtil.getProducts();
        let htmlCatalog = "";

        CATALOG.forEach(({ id, name, img, price }) => {
            let activeClass = "";
            let activeText = "";
            if(productsStorage.indexOf(id) === -1){
                activeText =this.labelAdd ;
            } else {
                activeClass = " " + this.classNameActive;
                activeText = this.labelRemove;
            }
     
            // console.log(id, name, img, price);
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <div class="products-element__img">
                        <img class="" src=${img}>
                    </div>
                    <span class="products-element__price"> 💵 ${(+price).toLocaleString()} BYN</span>
                    <button class="products-element__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">${activeText}</button>
                </li>
            `;

        })
        let html = `<ul class="products-container">${htmlCatalog}</ul>`;
        ROOT_PRODUCTS.innerHTML = html;
    }

}

let productsPage = new Products();
