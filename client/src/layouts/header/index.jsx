import React from 'react'
import logo from "../../img/logo.webp"
import { NavLink } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import "./index.scss"

const Header = () => {
  return (
    <div id='Header'>
        <div className="container">
            <div className="header">
                <div className="logo"> <img src={logo} alt="" /></div>
                 <ul>
                    <li> <NavLink to={"/"}> Home </NavLink></li>
                    
                    <li>
                  <Dropdown
                    overlay={
                      <Menu>
                        <div className="shop">
                          <div className="categoriesOne">
                            <Menu.Item key="1" className="menu">
                            Shop Category
                            </Menu.Item>
                            <Menu.Item key="2" className="menu">
                            Product Details
                            </Menu.Item>
                            <Menu.Item key="3" className="menu">
                            Product Checkout
                            </Menu.Item>
                            <Menu.Item key="4" className="menu">
                            Confirmation
                            </Menu.Item>
                            <Menu.Item key="5" className="menu">
                            Shopping Cart
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Shop<i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Dropdown>
                </li>

                    <li>  <Dropdown
                    overlay={
                      <Menu>
                        <div className="shop">
                          <div className="categoriesOne">
                            <Menu.Item key="1" className="menu">
                              Blog
                            </Menu.Item>
                            <Menu.Item key="2" className="menu">
                              Blog Details
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Blog <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Dropdown></li>

                   <li>  <Dropdown
                    overlay={
                      <Menu>
                        <div className="shop">
                          <div className="categoriesOne">
                            <Menu.Item key="1" className="menu">
                              Login
                            </Menu.Item>
                            <Menu.Item key="2" className="menu">
                              Register
                            </Menu.Item>
                            <Menu.Item key="2" className="menu">
                            Tracking
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Pages <i className="fa-solid fa-angle-down"></i>
                    </a>
                  </Dropdown></li>
                    <li> <NavLink> Contact </NavLink></li>
                    <li> <NavLink to={"/addProducts"}> Add </NavLink></li>
                 </ul>

                 <div className="icons">
                    <NavLink> <i className="fa-solid fa-magnifying-glass"></i> </NavLink>
                    <NavLink> <i className="fa-solid fa-cart-shopping"></i> </NavLink>
                   <button className='headerBtn'> Buy Now </button>
                 </div>

            </div>
        </div>
        
    </div>
  )
}

export default Header