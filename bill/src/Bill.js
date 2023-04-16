import React, { Component } from 'react'
import img from './pizza.png'
import img2 from './pizza2.jpg'
import '../src/Bill.css'

export default class Bill extends Component {
    constructor(props) {
        super(props)

        this.state = {
            price: 200,
            qnt: 1,
            // msg: '',
            output: 200,
            bill: ''
        }
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
        this.done = this.done.bind(this)
    }
    plus = () => {
        this.state.msg = ''
        this.state.bill = ''
        console.log('count...')
        if (this.state.qnt < 10) {
            this.setState({
                qnt: this.state.qnt + 1,
                output: this.state.price * (this.state.qnt + 1)
                 
            })
        }
        else {
            alert('Now STOP')
            // this.setState({
            //     msg: 'NOW STOP'
            // })
        }
    }

    minus = () => {
        this.state.msg = ''
        this.state.bill = ''
        console.log('count minus...')
        if (this.state.qnt > 1) {
            this.setState({
                qnt: this.state.qnt - 1,
                output: this.state.price * (this.state.qnt - 1)

            })
        }
        else {
            alert("STOP")
            // this.setState({
            //     msg: 'STOP'
            // })
        }
    }
    done = () => {
        console.log(

            this.state.price,
            this.state.qnt,
            this.state.output,
            this.state.total,
        )

        this.setState({
            bill:
                //     this.state.price,
                //    this.state.qnt,
                'Product Price:' + this.state.price + ',' + 'Qnt:' + this.state.qnt + ',' + 'Total Is:' + this.state.output

        })
    }

    reset = () => {
      this.setState({
        qnt:1 
      })
        
    }
  render() {
    return (
      <>
    <div className="cart-container">
      <h2>Your Order Details</h2>
      <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {/* {cart.cartItems && */}
              {/* cart.cartItems.map((cartItem) => ( */}
                {/* <div className="cart-item" key={cartItem.id}> */}
                <div className="cart-item" >
                  <div className="cart-product">
                    <img src={img2} alt='' />
                    <div>
                      {/* <h3>{cartItem.name}</h3>
                      <p>{cartItem.desc}</p> */}
                      <h3>Pizza</h3>
                      <p>lorem aheu hued hudcig yegqd KJADNcohe KLQwjIOU </p>
                      {/* <button onClick={() => handleRemoveFromCart(cartItem)}>
                        Remove
                      </button> */}
                    </div>
                  </div>
                  {/* <div className="cart-product-price">500</div> */}
                  <div className="cart-product-price"> {this.state.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={this.minus}>
                      -
                    </button>
                    <div className="count"> {this.state.qnt} </div>
                    <button onClick={this.plus}>+</button>
                    {/* <button onClick={() => handleDecreaseCart(cartItem)}>
                      -
                    </button>
                    <div className="count">{cartItem.cartQuantity}</div>
                    <button onClick={() => handleAddToCart(cartItem)}>+</button> */}
                  </div>
                  <div className="cart-product-total-price">
                  {this.state.output}
                    {/* ${cartItem.price * cartItem.cartQuantity} */}
                  </div>
                </div>
                </div>
            
        

          <div className="cart-summary">
            <button className="clear-btn" >
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">
                Total Is: Rs.{this.state.output}
                </span>
              </div>
             <p>Taxes and shipping calculated at checkout</p>
              <button>Check out</button>
             
            </div>
          </div>
        </div>
    </div> 
      </>
    )
  }
}
