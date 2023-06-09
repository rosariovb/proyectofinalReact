/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCount from "../Count";


export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<div className="container">
			<div className="detail">
				<img className="detail__image" src={data.} alt="" />
				<div className="content">
					<h1>{data.}</h1>
					{goToCart ? (
						<Link to="/cart"> Terminar al carrito</Link>
					) : (
						<ItemCount initial={0} stock={5} onAdd={onAdd} />
					)}
				</div>
			</div>
		</div>
	);
};
export default ItemDetail;*/