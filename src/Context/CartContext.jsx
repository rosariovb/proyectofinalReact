/*import React,{useState} from 'react';
export const CartContext = React.createContext([]);

const CartProvider = ({children}) => {
	const [ cart, setCart] = useState([]);

	const agregarCart = (item,quantity) =>{
		if (estadoCart(item.id)) {
			setCart(
				cart.map((product) => {
					return product.id === item.id
						? { ...product, quantity: product.quantity + quantity }
						: product;
				}),
			);
		} else {
			setCart([...cart, { ...item, quantity }]);
		}
	};


	}


	const vaciarCart = () => setCart ([]); 

	const estadoCart = (id) => {
		return cart.find(product => product.id === id) ? true : false;
	}
    
	const eliminarCart = (id) => setCart (cart.filter ((product => product.id !=== id));




	return (
		<CartContext.Provider value={{
			vaciarCart,
			estadoCart,
			eliminarCart,
			agregarCart,
			cart,
		}}>
			{children} 
		</CartContext.Provider>
	)
}

export default CartProvider;*/