import { product } from "../../assets/data/data";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import { ProductCard } from "../../components/cards/ProductCard";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

export const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const handlePopup = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };
  const [isAdded, setIsAdded] = useState(false);

  const [quantity, setQuantity] = useState(1);



  const addToCart = () => {
    if (selectedProduct) {
      dispatch(
        cartActions.addToCart({
          id: selectedProduct.id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          cover: selectedProduct.cover,
        })
      );
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    }
  };
  
  return (
    <>
      <section className="product">
        <div className="container">
          <h1>Trending Products</h1>
          <div className="content">
            {product.slice(0, 10).map((product, index) => (
              <ProductCard key={index} products={product} handlePopup={handlePopup} />
            ))}
          </div>
        </div>
      </section>
      {selectedProduct && (
        <div className="popup">
          <div className="popup-inner">
            <button className="close-btn" onClick={closePopup}>
              <IoMdClose size={20} />
            </button>
            <div className="list">
              <img src={selectedProduct.cover} alt={selectedProduct.name} />
            </div>
            <div className="details">
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.desc}</p>
              <h3 className="price-tag">${selectedProduct.price}</h3>

              <div className="size">
                <h3>Size</h3>
                <div className="size-buttons">
                  {selectedProduct.size.map((size, index) => (
                    <button key={index} className="size-btn">
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* <div className="size color">
                <h3>Color</h3>
                <div className="size-buttons">
                  {selectedProduct.colors.map((color, index) => (
                    <button key={index} className="size-btn" style={{ backgroundColor: color.toLowerCase() }}></button>
                  ))}
                </div>
              </div> */}

              <div className="flex">
               <div className="add-to-cart">
  <button className="plus" onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}>
    <FiMinus size={20} />
  </button>
  <button className="text">{quantity}</button>
  <button className="minus" onClick={() => setQuantity((prev) => (prev + 1))}>
    <FiPlus size={20} />
  </button>
</div>

                <div className="add">
                 <button
  className={`primarybtn ${isAdded ? "added" : ""}`}
  onClick={addToCart}
>
  {isAdded ? "Added!" : "Add To Cart"}
</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ProductApp />
      <RecentlyProduct handlePopup={handlePopup} />
    </>
  );
};

export const ProductApp = () => {
  return (
    <>
      <section className="app-section">
        {/* <div className="container flex">
          <div className="left">
            <h3>The ChawkBazar App</h3>
            <h1>
              Share Your <span>Ideas</span> & Shop Endless <span>Inspiration</span>
            </h1>
            <div className="apps">
              <img src={AppImg} alt="app" />
              <img src={playImg} alt="play" />
            </div>
          </div>
          <div className="right">
            <img src={Img} alt="play" />
          </div>
        </div> */}
      </section>
    </>
  );
};

export const RecentlyProduct = ({ handlePopup }) => {
  return (
    <>
      <section className="product">
        <div className="container">
          <h1>Recently View Products</h1>
          <div className="content">
            {product.slice(11, 21).map((product, index) => (
              <ProductCard key={index} products={product} handlePopup={handlePopup} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
RecentlyProduct.propTypes = {
  handlePopup: PropTypes.any,
};
