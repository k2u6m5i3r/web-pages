class Shoping {
    handelClear(){
        ROOT_SHOPING.innerHTML = ``;
    }
    render(){
        const productsStorage = localStorageUtil.getProducts();
        let htmlCatalog = "";
        let sumCatalog = 0;
        CATALOG.forEach(({id, name,price}) => {
             if(productsStorage.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td class="shoping-element__name">${name}</td>
                        <td class="shoping-element__price"> 💵  ${(+price).toLocaleString()}</td>

                    </tr>
                `;
                sumCatalog += +price;
             }
        });
        const html = `
            <div class="shoping-container">
                <div class="shoping__close" onclick="shopingPage.handelClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shoping-element__name">Сумма</td>
                        <td class="shoping-element__price"> 💵  ${sumCatalog.toLocaleString()}</td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPING.innerHTML = html;
    }
}

const shopingPage = new Shoping();
