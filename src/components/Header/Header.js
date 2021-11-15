import React from "react"
import { Link } from "react-router-dom"
import { Menu, Dropdown } from 'antd'

import "./Header.scss"
import avatar from "../../assets/images/avatar.jpg"

const menuNav = (
  <Menu>
    <Menu.Item key="0">
      <Link to="/">Home Page</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <Link to="/events">Events</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Link to="/information">Information</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Link to="/questions">Questions</Link>
    </Menu.Item>
  </Menu>
)

const menuAva = (
  <Menu className="menu-avatar">
    <Menu.Item key="0">
      <img src={avatar} alt="avatar" className="menu-avatar-image"></img>
    </Menu.Item>
    <Menu.Item key="1">
      <div className="menu-avatar-name">Huynh Thi Khanh Linh</div>
    </Menu.Item>
    <Menu.Item key="2">
      <div className="menu-avatar-email">bongudth@gmail.com</div>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <i className="fas fa-user"></i>
      <Link to="/profile">Profile</Link>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">
      <i className="fas fa-question"></i>
      <div>Create question</div>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">
      <i className="fas fa-sign-out-alt"></i>
      <div>Sign out</div>
    </Menu.Item>
  </Menu>
)

function Header() {
  return (
    <div className="header-container">
      <Dropdown overlay={menuNav} trigger={['click']}>
        <i className="fas fa-bars header-menu-icon" onClick={e => e.preventDefault()}></i>
      </Dropdown>
      <div className="header-right-container">
        <i className="fas fa-search header-right-icon"></i>
        <div className="header-right-icon header-translate-icon">VI</div>
        <Dropdown overlay={menuAva} trigger={['click']}>
          <img src={avatar} alt="avatar" className="header-right-avatar"></img>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header