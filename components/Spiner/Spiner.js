class Spiner {
    handerClear(){
        ROOT_SPINER.innerHTML = "";
    }
    render(){
        const html = `
            <div class="spiner-container">
                <img class="spiner__img" src="components/Spiner/img/spiner.svg" />
            </div>
        `;
        
        ROOT_SPINER.innerHTML = html;
    }
}

const spiner = new Spiner();
spiner.render();