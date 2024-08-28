import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_DATA } from '../store/data'
import { Container } from 'react-bootstrap'
import StoreContext from '../store/StoreContext'
import './addtocart.css'

const AddTocart = ({ data }) => {
    const { id } = useParams()
    // const addData = DUMMY_DATA.filter((li) => li.id === id)
    console.log(data);
    const storeCtx = useContext(StoreContext)
    console.log(storeCtx.items);


    return (
        <div className='add-to-cart-container'>
            <Container>
                {storeCtx.items.map((item) => (
                    <div className='cart-list'>
                        <img src={item.image} alt='i' />
                        <div className='cart-details'>
                            <p>{item.name}</p>
                            <p>{item.color}</p>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}



            </Container>


        </div>
    )
}

export default AddTocart