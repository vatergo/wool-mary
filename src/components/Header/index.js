import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';

import Auth from '../Auth';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <div className="container">
                    <Link className="logo" to="/wool-mary">Wool Mary</Link>
                    {this.props.userId && <Link className="link exit" to="/wool-mary" onClick={this.props.toOut}
                        onMouseOver={() => document.querySelector('.exit').innerHTML = 'Выход'}
                        onMouseOut={() => document.querySelector('.exit').innerHTML = this.props.userName}>{this.props.userName}</Link>}
                    {this.props.userId && <Link className="link" to="/basket">Корзина</Link>}
                    <div className='social-link'>
                        <a href='https://www.instagram.com/wool_mary/' target="_blank" className='link social'><svg viewBox="0 0 512 512" fill='#aeb2b7' xmlns="http://www.w3.org/2000/svg"><path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0"/><path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0"/><path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"/></svg></a>
                        <a href='https://vk.com/id171959132' target="_blank" className='link social'><svg viewBox="1 -104 511.99902 511" fill='#aeb2b7' xmlns="http://www.w3.org/2000/svg"><path d="m456.738281 202.101562-.277343-.257812c-4.371094-4.035156-17.761719-17.066406-22.277344-22.761719-5.300782-7.105469-4.078125-11.761719-.105469-18.738281 5.019531-8.816406 15.078125-22.339844 25.722656-36.660156 34.09375-45.851563 56.105469-77.59375 51.574219-100.140625l-2.441406-12.042969-125.910156.054688c-.441407 1.1875-7.011719 30.050781-34.738282 79.199218-20.105468 35.636719-33.292968 46.832032-37.9375 48.808594l-.71875-.21875c-1.511718-1.867188-4.152344-6.90625-5.238281-19.894531-1.132813-13.605469-.128906-30.078125.84375-46.007813 1.136719-18.679687 2.117187-34.8125-.230469-46.355468l-3.824218-18.804688c-4.621094-.738281-21.539063-7.265625-68.675782-7.761719-40.808594-.417969-52.796875 5.476563-58.683594 10.671875l-19.472656 17.183594 24.613282 8.28125c9.367187 3.152344 12.476562 6.789062 15.027343 24.816406 1.664063 11.75 2.535157 31.496094.738281 49.125-2.582031 25.277344-8.773437 29.980469-9.09375 30.230469-1.066406-.363281-10.109374-4.320313-25.808593-37.511719-10.890625-23.019531-20.4375-50.25-27.414063-70.132812-7.984375-22.769532-6.546875-17.921875-10.597656-28.679688l-121.8125-.003906 7.882812 20.390625c32.863282 85.089844 63.015626 151.539063 103.367188 199.265625 44.582031 52.730469 99.988281 80.339844 174.621094 80.339844h15v-15c0-14.023438 1.160156-24.121094 3.648437-31.777344 1.519531-4.664062 3.539063-8.519531 5.660157-12.5625 3.148437-5.953125 6.226562-8.503906 7.90625-8.882812 1.523437-.347657 4.203124.769531 7.171874 2.984374 8.523438 6.355469 15.289063 14.707032 22.453126 23.550782 10.335937 12.761718 21.023437 25.953125 37.980468 34.589844 9.265625 4.71875 26.25 7.101562 35.597656 7.101562 2.472657 0 90.601563-.003906 90.710938-.003906l-.644531-15.617188c-.960938-23.351562-19.339844-52.550781-54.617188-86.777344zm-34.867187 72.394532h-.242188c-6.445312.105468-18.746094-2.007813-22.324218-3.828125-11.273438-5.742188-19.152344-15.472657-28.28125-26.738281-8.011719-9.894532-16.296876-20.125-27.832032-28.722657-9.328125-6.957031-17.800781-8.992187-24.527344-8.992187-2.6875 0-5.101562.324218-7.171874.792968-7.808594 1.757813-18.976563 7.375-27.855469 24.167969-2.503907 4.777344-5.34375 10.1875-7.644531 17.265625-2.410157 7.40625-3.910157 15.636719-4.625 25.648438-56.242188-3.195313-100.128907-25.445313-137.207032-69.300782-34.472656-40.777343-61.59375-97.8125-90.316406-170.300781 2.078125 0 54.152344.007813 57.226562.007813.941407 2.644531 1.957032 5.542968 3.035157 8.613281 7.519531 21.449219 17.820312 50.820313 29.957031 75.867187 17.378906 35.867188 33.25 51.863282 51.457031 51.863282 9.089844 0 17.242188-3.851563 23.574219-11.144532 9.027344-10.394531 14.269531-27.550781 16.027344-52.453124 1.386718-19.636719.097656-39.195313-1.425782-49.972657-1.257812-8.867187-3.050781-18.175781-7.425781-26.515625 18.644531-.839844 43.609375.488282 59.425781 2.757813 1.4375 7.828125.5 23.214843-.40625 38.101562-2.191406 35.960938-4.453124 73.070313 14.582032 90.433594 3.347656 3.054687 6.898437 4.691406 7 4.757813l9.6875 2.972656c3.738281-1.152344 25.390625 9.832031 66.390625-61.71875 13.136719-22.925782 25.367187-49.34375 31.953125-66.597656 15.273437-.03125 67.308594.027343 73.421875.035156-8.660157 19.058594-29.183594 46.242187-42.597657 64.285156-11.695312 15.726562-21.792968 29.308594-27.71875 39.714844-11.007812 19.332031-9.15625 36.5625 2.308594 51.761718l.179688.234376c6.398437 8.144531 22.199218 23.222656 25.476562 26.261718 23.742188 23.050782 35.183594 39.609375 40.628906 50.738282h-54.730468zm0 0"/></svg></a>
                    </div>
                    {!this.props.userId && <a href="#auth" className="link">Авторизация</a>}
                </div>
                <Auth logIn={this.props.logIn} toRegister={this.props.toRegister} />
            </div>
        )
    }
}