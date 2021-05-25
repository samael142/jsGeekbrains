const cartGood = {
    render(good) {
        return `<div class="good">
                    <b>Наименование: ${good.name}</b>
                    <b>Цена: ${good.price}</b>
                    <b>Количество: ${good.quanity}</b>
                    <b>Стоимость: ${good.summ}</b>
                </div>`
    }
}


const cart = {
    cartElement: null,
    cartStatus: null,
    cartButton: null,
    goods: [
        {
            name: 'Mars',
            price: 40,
            quanity: 4
        },
        {
            name: 'Snikers',
            price: 50,
            quanity: 5
        },
        {
            name: 'Twix',
            price: 60,
            quanity: 6
        }
    ],

    addSummToGoods() {
        for (good of this.goods) {
            good.summ = good.price * good.quanity
        }
    },

    init() {
        this.cartElement = document.getElementById('cart')
        this.cartStatus = document.getElementById('cart__status')
        this.cartButton = document.querySelector('#clear__btn')
        this.cartButton.addEventListener('click', this.clearCart.bind())
        this.renderCart()
    },

    clearCart() {
        this.goods = []
        this.renderCart()
    },

    renderCart() {
        // cartElement = document.getElementById('cart')
        // cartStatus = document.getElementById('cart__status')
        // cartButton = document.querySelector('#clear__btn')
        // cartButton.addEventListener('click', this.clearCart.bind())
        this.addSummToGoods()
        for (good of this.goods) {
            this.cartElement.insertAdjacentHTML('afterbegin', cartGood.render(good));
        }
        if (this.goods.length != 0) {
            this.cartStatus.insertAdjacentHTML('afterbegin', `В корзине ${this.goods.length} товаров`)
        } else {
            this.cartStatus.textContent = 'В корзине пусто'
            console.log('dffgfg')
        }
    }
}

cart.init()

