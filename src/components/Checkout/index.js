import React from 'react';
import './index.css';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="checkout" className="checkout">
                <div className="checkout-form">
                    <div className="checkout-headline">
                        <h2 className="checkout-caption">Заполните ваши данные:</h2>
                        <a href="#" className="checkout-close">✖</a>
                    </div>
                    <input type="text" className="textfield name" placeholder="Полное имя" />
                    <input type="text" className="textfield address" placeholder="Адрес" />
                    <input type="text" className="textfield phone" placeholder="Номер телефона" />
                    <input type="text" className="textfield email" placeholder="E-mail" />
                    <button type='button' className="button checkout-button" onClick={this.props.checkout}>Оформить заказ</button>
                </div>
            </div>

        );
    }
}