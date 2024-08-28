import React from 'react'
import './header.css'
import logo from '../../Assets/Images/demo-logo.png'
import { Container } from 'react-bootstrap'
import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";


const Header = () => {
    return (
        <div className='header-container'>
            <Container>
                <div className='header-contents'>
                    <div className='header-left'>
                        <img src={logo} alt='logo' height={100} />

                    </div>
                    <div className='header-middle'>
                        <p>Shop</p>
                        <p>Collection</p>
                        <p>Explore</p>

                    </div>
                    <div className='header-right'>
                        <div className='cart-container'>
                            <IoBagOutline />
                            <p>Cart</p>

                        </div>
                        <div className='user-container'>
                            <CiUser />

                            <p>My account</p>


                        </div>


                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header