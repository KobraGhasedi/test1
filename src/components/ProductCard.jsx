import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
        
            <div className="item">
                    <a href="#" className="linlItem">
                        <span className="spnitem">پیشنهاد شگفت انگیز</span>
                        <img src={product.imageUrl} className="owlImage" alt="Alternate Text"/>
                        <div href="#" className="owlProductName">{product.name}</div>
                        <input type="button" name="name" value="+" className="addToBasket" />
                        <div className="SendFast">
                            <p>ارسال سریع سوپر مارکتی</p>
                            <i className="fa fa-truck iconItem" aria-hidden="true"></i>
                        </div>
                        <div className="TakhfifItem">
                            <span>{product.takhfif}</span>
                        </div>
                        <div className="owlPriceBox">
                            <span className="owlUnitPrice">
                            {product.price}
                            </span>
                            <span className="owlUnitPrice">تومان</span>
                        </div>
                        <div className="priceOld">۸۷,۶۰۰</div>
                    </a>
            </div>
        
       
    </div>
  );
};

export default ProductCard
