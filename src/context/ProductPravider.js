import React, { useReducer } from 'react';

import axios from 'axios';
import { API } from '../halpers/const';

export const ProductContext = React.createContext()

const INIT_STATE = {
  product: null,
  productToEdit: null,
};


const reducer = (state, action) => {
 switch(action.type){
    case "GET_PRODUCT":
        return {...state, product: action.payload};
    case "GET_PRODUCT_TO_EDIT":
        return {...state, productToEdit: action.payload};    
      default:
           return state;
 }
}

const ProductPravider = (props) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE)



    const addProduct = async (newProduct) => {
      try{
        const response = await axios.post(API, newProduct);
      } catch(error){
        console.log(error)
      }
    }

    const getProduct = async () =>{
      try{
         const response = await axios(API);
         let action = {
           type: "GET_PRODUCT",
           payload:response.data,
         } 
         dispatch(action)
      } catch(error){
        console.log(error)
      }
     
    }

    const deleteProduct = async (id) =>{
       try{
         await axios.delete(`${API}/${id}`)
       } catch(error){
         console.log(error)
       }
       getProduct()
    }

    const getProductToEdit = async (id) => {
       try{
         const response =  await axios(`${API}/${id}`);
         let action = {
           type: "GET_PRODUCT_TO_EDIT",
           payload: response.data,
         }
         dispatch(action)
       } catch(error){
          console.log(error)
       }
    }

    const saveProductToEdit = async (editedProduct) => {
       try{
         await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
         getProduct()
       } catch(error){
         console.log(error)
       }
    }


    return <ProductContext.Provider value={{
      addProduct: addProduct,
      getProduct: getProduct,
      deleteProduct: deleteProduct,
      getProductToEdit: getProductToEdit,
      saveProductToEdit: saveProductToEdit,
      productToEdit: state.productToEdit,
      product: state.product
    }}>
      {props.children}
    </ProductContext.Provider>
};

export default ProductPravider;