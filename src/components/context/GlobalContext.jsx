import React , {useState , createContext} from "react";

// create context
const GlobalContext = createContext();


const ContextProvider = ({children})=>{
    const user = null;

    const [cart , setCart] = useState([]);

    const addToCart = (product)=>{
        setCart([...cart ,product]);

        localStorage.setItem("cart" , JSON.stringify([...cart ,product]));
    }

    const addedToCart =(PRODUCT_CATEGORIES)=>{
        setCart([...cart, PRODUCT_CATEGORIES])
    }

    const removeToCart = (product)=>{
        const newCart = cart.filter((item)=>item.id !== product.id);
        setCart(newCart);
        localStorage.setItem("cart" , JSON.stringify(newCart));
    
    }

    

    return (
        <GlobalContext.Provider value={{
            cart,
            addToCart,
            removeToCart,
            addedToCart
        }}>
            {children}
        </GlobalContext.Provider>
    )
}



export {GlobalContext , ContextProvider}