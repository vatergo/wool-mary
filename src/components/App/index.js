import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

import Layout from '../Layout';
import Main from '../Main';
import Basket from '../Basket';
import Product from '../Product';

import api from '../../api';
import * as cookie from '../../cookie';

function validate(string) {
    if (string.length > 4) return true;
    return false;
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: cookie.get('userId'),
            userName: ''
        };
        this.logIn = this.logIn.bind(this);
        this.toRegister = this.toRegister.bind(this);
        this.toOut = this.toOut.bind(this);
        this.token = cookie.get('token') ? cookie.get('token') : Math.random().toString(36).substr(2);
        cookie.set('token', this.token);
    }


    logIn() {
        let login = document.querySelector('.login').value;
        let pass = document.querySelector('.password').value;
        if (validate(login) && validate(pass)) {
            api.logIn(login, pass)
                .then(data => {
                    cookie.set('userId', data.userId);
                    this.setState({
                        userId: data.userId,
                        userName: login
                    });
                    if(window) window.history.back();
                })
                .catch(e => {
                    if (e.message === 'Unauthorized') document.querySelector('.error').innerHTML = 'Неверный пароль';
                    if (e.message === 'Not Found') document.querySelector('.error').innerHTML = 'Пользователь не найден';
                    else console.log(e.message);
                });
        }
        else document.querySelector('.error').innerHTML = ('Мало символов');
    }

    toRegister() {
        let login = document.querySelector('.login').value;
        let pass = document.querySelector('.password').value;
        if (validate(login) && validate(pass)) {
            api.toRegister(login, pass)
                .then(data => {
                    cookie.set('userId', data.userId);
                    this.setState({
                        userId: data.userId,
                        userName: login
                    });
                    if(window) window.history.back();
                })
                .catch(e => {
                    if (e.message === 'Unauthorized') document.querySelector('.error').innerHTML = 'Пользователь с таким логином уже существует';
                    else document.querySelector('.error').innerHTML = e.message;
                });
        }
        else document.querySelector('.error').innerHTML = ('Мало символов');
    }

    toOut() {
        cookie.set('userId', '');
        this.setState({
            userId: '',
            userName: ''
        });
    }

    componentWillMount() {
        if (this.state.userId) {
            api.getName(this.state.userId)
                .then(data => {
                    this.setState({
                        userName: data.userName
                    });
                });
        }
    }

    render() {
        return (
            <div>
                <Layout userId={this.state.userId} toOut={this.toOut} userName={this.state.userName} logIn={this.logIn} toRegister={this.toRegister}>
                    <Route exact path='/wool-mary' render={() => <Main />} />
                    <Route path='/p*' render={() => <Product userId={this.state.userId} logIn={this.logIn} toRegister={this.toRegister} />} />
                    <Route path='/basket' render={() => <Basket />} />
                </Layout>
            </div>
        );
    }
}