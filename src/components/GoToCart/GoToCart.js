import { Button } from "..";
import { formatPrice } from "../../utils/helper";


const GoToCart = ({ data }) => {

    return (
        <div className="price-show">
            <div className="contents">
                <div className="heading">
                    <h3 style={{marginRight:30}} id="order-days">Business Days:</h3>
                    <h3 style={{marginRight:30}} id="order-quantity">Quantity:</h3>
                    <h3 style={{marginRight:10}} id="order-price">Order Price: {formatPrice(data.price)}</h3>
                </div>
                <div className="button">
                    <Button title='Cart'/>
                </div>
            </div>
        </div>
    );
};
export default GoToCart;