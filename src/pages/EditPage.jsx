import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../context/ProductPravider';

const EditPage = () => {
    const params = useParams();

    const {getProductToEdit, productToEdit, saveProductToEdit} = useContext(ProductContext);
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if(productToEdit){
            setName(productToEdit.name)
            setPrice(productToEdit.price)
            setDescription(productToEdit.description)
            setImg(productToEdit.img)
        }
    },[productToEdit])

    useEffect(() => {
        getProductToEdit(params.id)
    },[])
    console.log(productToEdit)

    function handleSubmit(event){
        event.preventDefault();
        if(!name.trim()){
           alert("Заполните поля!!!!")
           return;
        }
        let editedProduct = {
            ...productToEdit,
            name: name,
            price: price,
            description: description,
            img: img,
        }
        saveProductToEdit(editedProduct);
        navigate("/")
    }

    if(!productToEdit){
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h1>Saparali</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
                <input
                 type="text"
                 value={price} />
                <input type="text" />
                <input type="text" />
                <button type='submit'>Сохранить</button>
            </form>
        </div>
    );
};

export default EditPage;