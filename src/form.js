import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 10%;
    padding: 1em;
    margin: 0.5em;
    color: black;
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `;

const BuyNowBtn = styled(Button)`
  width: 15%;
  color: black;
  background: #2899F8;
  font-size: medium;
  font-weight: bold;
`;

const CartBtn = styled(Button)`
  background: #B1F97C;
  color: black;
  border-color: black;
`;

class Form extends Component {
    render() {
        return (
            <div>
                <Button >WishList </Button><br />
                <BuyNowBtn >Buy Now </BuyNowBtn><br />
                <Button >Share </Button><br />
                <CartBtn >Add To Cart </CartBtn>
            </div>
        )
    }
}

export default Form;
