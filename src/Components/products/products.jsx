import "./products.css";
import { v4 as uuidv4 } from "uuid";

import { DisplayTitle } from "../displayContainer/displayTitle";

export function Products(props) {

  return (
    <>
      <DisplayTitle title={props.title} />

      <div className="showInfo flx-r-w">
        {props.productsInfo.data.map((product) => {

          return (
            <>
              <article className="profileCartDataConatiner flx-r-nw" key={uuidv4()}>
                <input type="hidden" name="productId" id="productId" value={product.productId} />

                <div className="leftProfileCartBorder"></div>

                <div className="profileCart-img-container flx-r-nw">
                  <img src={product.imagesURL.image0} alt="" />
                </div>

                <p className="favoriteProductName">{product.productName}</p>

                <div className="profileCart-quantity-container flx-r-w">
                  <input type="number" className="profileCart-quantity-input" value={product.stock} disabled />
                </div>

                {product.discount ? <i className="profileCart-discount-text flx-r-nw">{product.discount}% OFF!</i> : <i className="profileCart-discount-text"></i>}

                <p className="profileCart-product-subtotal">{product.productPrice.toFixed(2)}</p>

              </article>
            </>
          );
        })}
      </div>
    </>
  );
}
