import './Shop.scss';
import React from 'react';
import {buyProduct, getAllProducts} from "../../api/api";

class Shop extends React.Component {

    constructor() {
        super();
        this.state = {
            products: [],
            success_enabled: false
        }
    }

    async componentDidMount() {
        const response = await getAllProducts();
        //const products = getAllProductsMock();
        let products = await response.json();
        this.setState({products});
    }

    handleClick = async (product) => {
        await buyProduct(product);
        this.setState({success_enabled: true});
    }

    render() {
        return (
            <div className="Shop">
                {this.state.success_enabled ?
                <div className="alert">
                    <span>Artikel erfolgreich gekauft!</span>
                </div> : null}
                {this.state.products.map((product, key) => {
                    return <div className="box" key={key}>
                        <div className="box_content">
                            <img
                                src={product.imageUrl}
                                alt="product"/>
                            <button onClick={() => this.handleClick(product)}>Kaufen</button>
                            <div className="price">{product.price}</div>
                        </div>
                    </div>
                })}
            </div>);
    }
}

export default Shop;
