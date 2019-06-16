import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import api from '../../api';
import * as cookie from '../../cookie';
import Checkout from '../Checkout';

function counterHelp() {
    if (document.querySelector('.item-counter').value > 5 || document.querySelector('.item-counter').value < 1)
        document.querySelector('.item-counter').value = 1;
}

function getTotal() {
    let total = 0;
    let items = document.querySelectorAll('.basket-item');
    for (let item of items) {
        let cost = item.childNodes[2].outerText;
        total += cost.substr(0, cost.length - 1) * item.childNodes[3].value;
    }
    document.querySelector('.basket-total-text').innerHTML = `Итого: ${total}₽`;
}

let okey = `<div class="checkout-headline">
<h2 class="checkout-caption">Заказ успешно оформлен, в ближайшее время с вами свяжется наш оператор</h2>
</div>
<a href="#" class="checkout-close"><button type='button' class="button checkout-button">Закрыть</button></a>`;

export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
        this.deleteFromBasket = this.deleteFromBasket.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    componentWillMount() {
        api.getBasket(cookie.get('userId')).then(data => {
            this.setState({
                data: data
            });
        });
    }

    deleteFromBasket(itemId) {
        api.deleteFromBasket(cookie.get('userId'), itemId).then(data => {
            this.setState({
                data: data
            });
        });
    }

    checkout() {
        if (document.querySelector('.name').value.length !== 0 &&
            document.querySelector('.address').value.length !== 0 &&
            document.querySelector('.phone').value.length !== 0 &&
            document.querySelector('.email').value.length !== 0) {
            api.deleteBasket(cookie.get('userId')).then(data => {
                this.setState({
                    data: data
                });
            });
            setTimeout(() => document.querySelector('.checkout-form').innerHTML = okey, 500);
        } else {
            document.querySelector('.checkout-caption').style.color = '#b90021';
            document.querySelector('.checkout-caption').innerHTML = 'Заполните все поля';
            setTimeout(() => {
                document.querySelector('.checkout-caption').style.color = '#323436';
                document.querySelector('.checkout-caption').innerHTML = 'Заполните ваши данные:'
            }, 1000);
        }
    }

    render() {
        const context = this;
        const list = this.state.data
            .map(function (item, i) {
                return <div className="basket-item" key={i} onMouseOver={() => getTotal()}>
                    <div className='item-img'>
                        <Link to={`/p${item.id}`}>
                            <img src={item.image} alt={item.id} title={item.title} />
                        </Link>
                    </div>
                    <span>{item.title}</span>
                    <span>{item.cost}</span>
                    <input className='item-counter' type="number" min="1" max="5" defaultValue="1" onInput={() => counterHelp()} />
                    <button className="delete-item" onClick={context.deleteFromBasket.bind(context, item.id)}>✖</button>
                </div>;
            });
        return (
            <div className="content">
                <div className="container">
                    <h2 className='basket-caption'>Корзина</h2>
                    {this.state.data.length === 0 && <h3>Ваша корзина еще пуста</h3>}
                    {this.state.data.length === 0 && <Link className='to-shop' to='/wool-mary'><h3>Перейти к покупкам</h3></Link>}

                    {this.state.data.length !== 0 && <div className='basket-headline'>
                        <h3 className='title'>Товар</h3>
                        <h3 className='cost'>Цена</h3>
                        <h3 className='count'>Количество</h3>
                    </div>}
                    {this.state.data.length !== 0 && <div className='basket-list'>
                        {list}
                    </div>}
                    {this.state.data.length !== 0 && <div className='basket-total' onMouseOver={() => getTotal()}>
                        <h3 className='basket-total-text'>Итого: 0₽</h3>
                        <a href="#checkout"><button className='button-buy'>Оформить заказ</button></a>
                    </div>}
                </div>
                <Checkout checkout={this.checkout} />
            </div>
        );
    }
}