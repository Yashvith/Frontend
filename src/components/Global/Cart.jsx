import React, { useContext } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ArrowRight, Info, ShoppingCart } from "lucide-react";
import EmptyCart from "./EmptyCart";
import { Button } from "../ui/button";
import AddedProducts from "./AddedProducts";
import { GlobalContext } from "../context/GlobalContext";

const Cart = () => {
  const {cart,removeToCart} = useContext(GlobalContext)
  let Total = cart.reduce((total,item)=>  total + item.price,0)
  let Discount = Total *0.2;
  let Tax= Total *0.1;
  let Final= Total - Discount - Tax;
  
  return (
    <Sheet>
      <SheetTrigger className="group m-2 flex items-center p-2">
        <ShoppingCart className="h-6 w-10 flex-shrink-0 text-gray-500 group-hover:text-gray-500 " />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {cart.length>0?`Cart (${cart.length})`:"Cart"}
        </span>
      </SheetTrigger>

      <SheetContent className="flex flex-col w-full pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart {`(${cart.length})`}</SheetTitle>
        </SheetHeader>
        {cart.length > 0 ? (
          <div className="flex flex-col items-start gap-5 justify-center">
            <div className="flex flex-col items-center justify-start gap-y-4">
            {cart.map((product, i) => (
                                <AddedProducts
                                    key={i}
                                    productImage={product.image }
                                    productName={product.title}
                                    features={["ui-kit", "landing page", "admin dashboard"]}
                                    price={product.price}
                                    onRemove={()=>removeToCart(product)}
                                />
                            ))}
           </div>
           {/* line*/}
           <div className="w-full h-0.5 bg-gray-400 mt-3" />

           {/* calculation*/}

           <div className="flex flex-col justify-start items-center gap-y-5 w-full">
            <div className="flex justify-between items-center px-4 py-2 w-full">
              <span className="text-md text-gray-700 uppercase font-bold">Subtotal</span>
              <span className="text-md font-semibold text-muted-foreground">$
              {
              Math.ceil(Total)
              }</span>
            </div>

            <div className="flex justify-between items-center px-4 py-2 w-full">
              <span className="text-sm text-gray-700  ">Discount</span>
              <span className="text-md font-semibold text-muted-foreground">${Math.round(Discount)}</span>
            </div>

            <div className="flex justify-between items-center px-4 py-2 w-full">
              <span className=" flex items-center justify-center text-sm text-gray-700  gap-2">Tax 
              <Info className="w-4 h-4 text-muted-foreground"/>    
              </span>
              <span className="text-md font-semibold text-muted-foreground">${Math.round(Tax)}</span>
            </div>

            <div className="w-full h-0.5 bg-gray-200">
              <div className="flex justify-between items-center px-4 py-2w-full">
              <span className="text-md text-gray-700 uppercase font-bold">Total</span>
              <span className="text-md font-semibold text-muted-foreground">${Math.round(Final)}</span>
                
              </div>
            </div>

            <Button variant="default" className="w-full mt-4 mr-6">Checkout</Button>


           </div>

          
          </div>
        ) : (
          <div>
            <EmptyCart />

            <div className="flex items-center justify-center mt-10 font-bold">
              <SheetTrigger>
                <Button
                  variant="link"
                  size="lg"
                  className="text-lg text-muted-foreground items-start justify-center mb-16"
                >
                  Add items to your cart for checkout
                  <div className="align-bottom">{<ArrowRight />}</div>
                </Button>
              </SheetTrigger>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
