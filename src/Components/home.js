import React, { useContext, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { DUMMY_DATA } from '../store/data'
import './home.css'
import { Link } from 'react-router-dom'
import AddTocart from './addTocart'
import StoreContext from '../store/StoreContext'

const Home = () => {
    const [show, setShow] = useState(false)
    const storeCtx = useContext(StoreContext)
    const addData = storeCtx.items


    const addDatahandler = (value) => {
        storeCtx.addDataHandler(value)
        setShow(true)




    }

    console.log(storeCtx.items);


    return (
        <Container>
            <div className='home-container'>

                <div className='home-title-row'>
                    <h1>Get Inspired</h1>
                </div>

                <div className='product-container'>

                    {DUMMY_DATA.map((li) => (


                        <div className='product-details'>
                            <img src={li.image} alt='i' />
                            <p>
                                {li.name}
                            </p>
                            <p>
                                {li.color}
                            </p>
                            <p>
                                {`${li.price}$`}
                            </p>
                            <div className='button-box'>

                                <button onClick={() => addDatahandler(li)}>Add to cart</button>

                            </div>
                        </div>


                    ))}
                    {/* <AddTocart data={data} /> */}
                    <div className='button-box'>
                        <Link to={`add-cart`}>
                            <button>View Cart</button>
                        </Link>
                    </div>

                </div>




            </div>
        </Container>
    )
}

export default Home