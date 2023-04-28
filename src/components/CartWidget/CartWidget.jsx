//cardwidget del video?
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
/*import { useCartContext } from "../../context/CartContext";*/

const Shop = () => {
  return (
    <div>
        <ShoppingCartIcon />
        <span style={{ color: "purple" }}>5</span>
    </div>
  );
};

export default Shop;

/*const CartWidget = () => {
	return <i className="bi bi-cart3"></i>;
	const { totalProducts } = useCartContext();

	return (
		<>
			<i className="bi bi-cart3"></i>
			<span>{totalProducts() || ""}</span>
		</>
	);
};

export default CartWidget;*/