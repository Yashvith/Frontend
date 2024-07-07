import { Trash } from 'lucide-react';
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const AddedProducts = ({ productImage, productName, features ,onRemove,price}) => {
  
  
  return (
    <div className='flex  justify-center items-center px-2 py-2 rounded-md hover:bg-gray-100 shadow-md'>
      <div className='flex justify-center items-center gap-3'>
        <img
          src={productImage}
          alt='product'
          className='h-20 w-20 object-fill border-gray-200 shadow-md'
        />
        <div className='flex flex-col items-start justify-center'>
          <span className='text-xs font-semibold text-muted-foreground'>{productName}</span>
          <div className='flex items-center mt-1 justify-center gap-2 '>
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <span className="text-xs text-muted-foreground">{feature}</span>
              <div className="h-3 w-px bg-gray-300" /> 
            </React.Fragment>
          ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
                <span className=" text-lg font-bold text-green-500 ml-10">${price}</span>
                <Trash onClick={onRemove} className='h-10 w-10 text-red-500 rounded-full px-2 py-2 ml-4 hover:bg-gray-200' />
      </div>          
    </div>
  );
};

export default AddedProducts;
