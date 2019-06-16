import fetch from 'node-fetch';
let serverURI = 'https://wool-mary-server.herokuapp.com';

export default {
    getAllProducts() {
        return fetch(`${serverURI}/api/products`, { method: 'GET' }).then(res => res.json());
    },

    getProduct(itemId) {
        return fetch(`${serverURI}/api/products/${itemId}`, { method: 'GET' }).then(res => res.json());
    },

    getBasket(userId) {
        return fetch(`${serverURI}/api/basket`, { method: 'GET', headers: { 'set-cookie': `userId=${userId}` } }).then(res => res.json());
    },

    addToBasket(userId, itemId) {
        return fetch(`${serverURI}/api/basket/${itemId}`, { method: 'GET', headers: { 'set-cookie': `userId=${userId}` } }).then(res => res.json());
    },

    deleteFromBasket(userId, itemId) {
        return fetch(`${serverURI}/api/basket/${itemId}`, { method: 'DELETE', headers: { 'set-cookie': `userId=${userId}` } }).then(res => res.json());
    },

    deleteBasket(userId) {
        return fetch(`${serverURI}/api/basket`, { method: 'DELETE', headers: { 'set-cookie': `userId=${userId}` } }).then(res => res.json());
    },

    getName(userId) {
        return fetch(`${serverURI}/api/users/${userId}`, { method: 'GET' }).then(res => res.json());
    },

    logIn(login, password) {
        let body = {
            login: login,
            password: password
        };
        return fetch(`${serverURI}/api/users/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(res => {
            if (res.ok) return res.json();
            throw Error(res.statusText);
        });
    },

    toRegister(login, password) {
        let body = {
            login: login,
            password: password
        };
        return fetch(`${serverURI}/api/users/reg`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }).then(res => {
            if (res.ok) return res.json();
            throw Error(res.statusText);
        });
    },
}

