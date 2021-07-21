import React from 'react';

import { Card, CardBody, CardText, CardTitle, Button, CardImg } from "reactstrap";

const CartItem = ({product, addCart}) => {
    return(
        <Card className="mt-2 mb-1">
            <CardImg top height="250" width="100%" src={product.smallImage} />
                <CardBody className="text-center">

                    <CardTitle> {product.productName} </CardTitle>
                    <CardText> Rs {product.productPrice} </CardText>

                    <Button color="success" onClick={() => addCart(product) } >
                        Buy Now
                    </Button>

                </CardBody>
        </Card>
  );
};

export default CartItem;
