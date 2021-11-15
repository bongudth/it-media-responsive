import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Profile.scss"
import avatar from "../../assets/images/avatar.jpg"
import { Divider } from "antd"

function Profile() {
  return (
    <>
      <Header />
      <div className="profile-container">
        <img src={avatar} alt="avatar" className="profile-image"></img>
        <div className="profile-name">Huynh Thi Khanh Linh</div>
        <div className="profile-button-group">
          <button className="profile-button">Change password</button>
          <button className="profile-button">Edit profile</button>
        </div>

        <Divider />

        <div className="profile-form">
          <div className="profile-title">Detail Information</div>
          <div className="profile-label">Username</div>
          <input className="profile-input" placeholder="Input your username" />
          <div className="profile-label">Full name</div>
          <input className="profile-input" placeholder="Input your full name" />
          <div className="profile-label">Email</div>
          <input className="profile-input" placeholder="Input your email" />
          <div className="profile-label">Date of birth</div>
          <input className="profile-input" placeholder="Input your date of birth" />
          <div className="profile-label">Gender</div>
          <input className="profile-input" placeholder="Input your gender" />
        </div>
        <div className="profile-button-group">
          <button className="profile-button">Cancel</button>
          <button className="profile-button">Save</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Profile