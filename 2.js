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
    cartGood,
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
        totalAmount = this.goods.reduce((acc, item) => {
            return acc += item.price;
        }, 0);
    },

    addAllSumm() {
        var summ = 0
        for (el of this.goods) {
            summ += el.price * el.quanity
        }
        return summ
    },

    init() {
        this.cartElement = document.getElementById('cart')
        this.cartStatus = document.getElementById('cart__status')
        this.cartButton = document.querySelector('#clear__btn')
        this.cartButton.addEventListener('click', this.clearCart.bind(this))
        this.renderCart()
    },
    clearCart() {
        this.goods = [];
        this.renderCart();
        
    },
    renderCart() {
        if (this.goods.length != 0) {
            this.addSummToGoods()
            for (good of this.goods) {
                this.cartElement.insertAdjacentHTML('afterbegin', this.cartGood.render(good));
            }
            this.cartStatus.insertAdjacentHTML('afterbegin', `В корзине ${this.goods.length} товаров на сумму ${this.addAllSumm()}`)
        } else {
            this.cartElement.textContent = ""
            this.cartStatus.textContent = 'Корзина пуста';
        }
    }
}


cart.init()

