import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductPravider';


const MainPage = () => {

    const {getProduct, product, deleteProduct} = useContext(ProductContext);
    useEffect(() => {
        getProduct()
    },[])

    if(!product){
        return <h2>Loading...</h2>
    }

    return (
        <div className='container'>
            {
            product && product.map((item) => {
                return <div className="card" >
                            <div className="card__img">
                                <img src={item.img} alt="фото" />
                            </div>
                            <h4>{item.name}</h4>
                            <h5>{item.price}</h5>
                            <p>{item.description}</p>
                            <div className="buttons">
                                <Link className="edit-btn" to={`/edit/${item.name}/${item.id}`}>
                                   <div >Изменит</div>
                                </Link>
                                <div onClick={() => deleteProduct(item.id)} className="delete-btn">Удалить</div>
                            </div>
                        </div>
            })
            }
             
        </div>
    );
};

export default MainPage;