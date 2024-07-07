import { AlertCircle } from "lucide-react"


const EmptyCart = () => {
    return (
  
      <>
       <div className='  flex w-full text-4xl justify-center text-gray-600 font-bold mt-10 '>
          Your Cart is empty
          <AlertCircle/>
        </div>
        <div className=" my-10 h-100 w-100 text-muted-foreground ">
          <img
            src="/hippo-empty-cart.png"
            alt='Empty Cart'
            className=' inset-0 w-full h-full object-contain'
          />
  
        </div>
  
       
  
      </>
  
    )
  }
  
  export default EmptyCart