import './header.scss';
import React from 'react';

class Header extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    async componentDidMount() {
    }

    render() {
        return (
            <header className="header">
                <div className="black"/>
                <div className="white">
                    <img src="/logo.png" alt="logo"/>
                    <div><b>Shop</b></div>
                    <div/>
                </div>
                <hr/>
            </header>);
    }
}

export default Header;
