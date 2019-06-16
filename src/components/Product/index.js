import React from 'react';
import './index.css';

import Auth from '../Auth';

import api from '../../api';
import * as cookie from '../../cookie';

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        api.addToBasket(cookie.get('userId'), this.state.item.id);
        document.querySelector('.button-add').innerHTML = 'Добавлено';
    }

    componentWillMount() {
        let itemId = window ? window.location.href.split('/')[3].substr(1) : '';
        api.getProduct(itemId).then(data => {
            this.setState({
                item: data
            });
        });
    }

    render() {
        let item = this.state.item;
        return (
            <div className="content">
                <div className="container">
                    <div className='product'>
                        <div className="product-img"><img src={item.image} alt={item.id} title={item.title} /></div>
                        <div className="product-info">
                            <h2 className='info-title'>{item.title}</h2>
                            <span className='info-cost'>{item.cost}</span>
                            <span className='info-description'>{item.description}</span>          
                            {this.props.userId && <button className='button-add' onClick={this.onClick}>Добавить в корзину</button>}
                            {!this.props.userId && <a href="#auth"><button className='button-add' onClick={this.onClick}>Добавить в корзину</button></a>}
                        </div>
                    </div>
                </div>
                <Auth logIn={this.props.logIn} toRegister={this.props.toRegister} />
            </div>
        );
    }
}