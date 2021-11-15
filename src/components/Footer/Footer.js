import React from "react"

import logoFaculty from "../../assets/images/logo-faculty.jpg"
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-faculty">
        <img src={logoFaculty} alt="logo-faculty" className="footer-faculty-logo"></img>
        <div className="footer-faculty-name">
          IT Faculty
          <br />
          The University of Danang - University of Science and Technology
        </div>
      </div>
      <div className="footer-infomation">
        <div className="footer-infomation-label">Fanpage:</div>
        <a href="https://www.facebook.com/itmediadut" target="_blank" rel="noreferrer" className="footer-infomation-content">facebook.com/itmediadut</a>
      </div>
      <div className="footer-infomation">
        <div className="footer-infomation-label">Website:</div>
        <a href="http://dut.udn.vn/KhoaCNTT" target="_blank" rel="noreferrer" className="footer-infomation-content">dut.udn.vn/KhoaCNTT</a>
      </div>
      <div className="footer-infomation">
        <div className="footer-infomation-label">Phone:</div>
        <div className="footer-infomation-content">093 173 38 53</div>
      </div>
      <div className="footer-infomation">
        <div className="footer-infomation-label">Email:</div>
        <div className="footer-infomation-content">itmedia@dut.udn.vn</div>
      </div>
      <div className="footer-infomation">
        <div className="footer-infomation-label">Address:</div>
        <div className="footer-infomation-content">54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang</div>
      </div>
      <div className="footer-infomation">
        <div className="footer-infomation-label">Copyright</div>
        <i className="fas fa-copyright"></i>
        <div className="footer-infomation-content">2021 | iTech Gen One</div>
      </div>
    </div>
  )
}

export default Footer