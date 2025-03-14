import React from 'react'
import { logo } from '../../assets'
import './Header.css'
import { Link } from 'antd-icons'
const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} id='imglogo' alt="" />
            <ul className='header-menu'>
                <li><a href="">HOME</a></li>
                <li><a href="">BMI</a></li>
                <li><a href="">Exercises</a></li>
                <li><a href="">DIetPlan</a></li>
                <li><a href="">ContactUs</a></li>
            </ul>
        </div>
    )
}

export default Header