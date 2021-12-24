import React, { useContext , useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { ProductContext } from '../context/ProductPravider';

const AddPage = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const {addProduct} = useContext(ProductContext)

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(!name.trim() ||
            !price.trim() ||
            !description.trim() ||  
            !img.trim()){
            alert("Заполните поля!!!!")
            return;
        }
        let newProduct = {
            name: name,
            price:price,
            description: description,
            img: img,


        }
        addProduct(newProduct);
        setName("");
        setPrice("");
        setDescription("");
        setImg("");
    }
    return (
        <div className='add-page'>
            <h1>Saparali</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Загрузить товар</Form.Label>
                    <Form.Control onChange={(event) =>
                         setName(event.target.value)} type="text"
                          placeholder="Введите называния товара"
                          value={name} />
                     <Form.Control onChange={(event) =>
                         setPrice(event.target.value)} type="text"
                          placeholder="Введите цену товара"
                          value={price} /> 
                     <Form.Control onChange={(event) =>
                         setDescription(event.target.value)} type="text"
                          placeholder="Введите описания товара"
                          value={description} />
                     <Form.Control onChange={(event) =>
                         setImg(event.target.value)} type="text"
                          placeholder="Загрузите фотографию товара"
                          value={img} />                 
                </Form.Group>
                <Button variant="primary" type="submit">
                    Добавить
                </Button>
              </Form>
        </div>
    );
};

export default AddPage;