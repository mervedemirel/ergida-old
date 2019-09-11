import React, {Component} from 'react';
import axios from "axios";

import Product from "../Product/Product";

class VegContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("http://172.105.89.112:8600/products?category=vegetable", {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTY4MTQyNjQzLCJleHAiOjE1NzA3MzQ2NDN9.tqzTZksZT1lCQ38OSPVZd-VRIuja6VXrGahasTQUI7c`,
            }
        }).then(res => {
            const products = res.data;
            this.setState({products})
        })
    }

    render() {
        return (
            <>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'red' ? (
                                    <div className="col-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`http://172.105.89.112:8600${product.photo.url}`}
                                                 bgColor="rgba(255, 0, 0, .4)"
                                                 titleColor="rgba(139, 0, 0)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0" style={{background: 'rgb(253,245,230)'}}>
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'yellow' ? (
                                    <div className="col-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`http://172.105.89.112:8600${product.photo.url}`}
                                                 bgColor="rgba(204,204,0, .4)"
                                                 titleColor="rgba(153, 153, 0)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0">
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'white' ? (
                                    <div className="col-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`http://172.105.89.112:8600${product.photo.url}`}
                                                 bgColor="rgba(245,245,220, .4)" titleColor="rgba(225,222,173)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-0 py-3 m-0" style={{background: 'rgb(253,245,230)'}}>
                    <div className="container p-0">
                        <div className="row ProductRow">
                            {this.state.products.map((product, i) => {
                                return product.color === 'green' ? (
                                    <div className="col-3 pr-3 pb-3 pl-3">
                                        <Product key={i}
                                                 name={product.name}
                                                 nameEn={product.name_en}
                                                 photo={`http://172.105.89.112:8600${product.photo.url}`}
                                                 bgColor="rgba(50,205,50, .4)" titleColor="rgba(0,100,0)"/>
                                    </div>) : null
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default VegContainer;