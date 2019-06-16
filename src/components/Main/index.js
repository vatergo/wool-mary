import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import api from '../../api';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentWillMount() {
        api.getAllProducts().then(data => {
            this.setState({
                data: data
            });
        });
    }

    render() {
        const list = this.state.data
            .map(function (item, i) {
                return <div className="list-item" key={i}>
                    <Link to={`/p${item.id}`}>
                        <img src={item.image} alt={item.id} title={item.title} />
                    </Link>
                    <div>{item.title}</div>
                    {item.cost}
                </div>;
            });
        return (
            <div className="content">
                <div className="container">
                    <div className="list">
                        {list}
                    </div>
                </div>
            </div>
        );
    }
}