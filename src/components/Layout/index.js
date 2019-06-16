import React from 'react';
import Header from '../Header';
import './index.css';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header userId={this.props.userId} toOut={this.props.toOut} userName={this.props.userName} logIn={this.props.logIn} toRegister={this.props.toRegister} />
                {this.props.children}
            </div>
        );
    }
}
