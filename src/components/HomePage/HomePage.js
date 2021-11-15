import React from "react"
import { Divider } from "antd"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import avatar from "../../assets/images/avatar.jpg"
import event from "../../assets/images/event.jpg"
import banchaphanh from "../../assets/images/bch/banchaphanh.jpg"
import banthuongvu from "../../assets/images/bch/banthuongvu.jpg"
import bantruyenthong from "../../assets/images/bch/bantruyenthong.jpg"
import banphongtrao from "../../assets/images/bch/banphongtrao.jpg"
import "./HomePage.scss"

function HomePage() {
  return (
    <>
      <Header />

      <div className="home-container">
        <div className="home-event">
          <img src={event} alt="event" className="home-event-image"></img>
          <div className="home-event-name">IT League 2021</div>
          <div className="home-event-info">
            <div>Time: 27/03/2021 - 10/04/2021</div>
            <div>Address: Sân bóng đá nhân tạo X7 - đường số 2 KCN Hòa Khánh</div>
          </div>
          <div className="home-event-button">See more</div>
        </div>

        <Divider />

        <div className="home-topic">
          <div className="home-topic-container">
            <i className="far fa-calendar-alt home-topic-icon"></i>
            <div className="home-topic-title">Event</div>
          </div>
          <div className="home-topic-container">
            <i className="fas fa-book home-topic-icon"></i>
            <div className="home-topic-title">Admissions</div>
          </div>
          <div className="home-topic-container">
            <i className="far fa-calendar-alt home-topic-icon"></i>
            <div className="home-topic-title">Education program</div>
          </div>
          <div className="home-topic-container">
            <i className="far fa-calendar-alt home-topic-icon"></i>
            <div className="home-topic-title">Competition</div>
          </div>
          <div className="home-topic-container">
            <i className="far fa-calendar-alt home-topic-icon"></i>
            <div className="home-topic-title">Scholarship</div>
          </div>
          <div className="home-topic-container">
            <i className="far fa-calendar-alt home-topic-icon"></i>
            <div className="home-topic-title">Other</div>
          </div>
        </div>

        <Divider />

        <div className="home-question">
          <div className="home-question-container">
            <div className="home-question-header">
              <div className="home-question-info">
                <img src={avatar} alt="avatar" className="home-question-avatar"></img>
                <div>
                  <div className="home-question-name">Huynh Thi Khanh Linh</div>
                  <div className="home-question-time">1 hour</div>
                </div>
              </div>
              <div className="home-question-topic">#Event</div>
            </div>
            <div className="home-question-body">
              <div className="home-question-title">Thành viên nữ tham gia giải đấu</div>
              <div>Dạ chào mọi người, không biết sự kiện IT League lần này, các đội nữ có thể...</div>
            </div>
          </div>
          <div className="home-question-container">
            <div className="home-question-header">
              <div className="home-question-info">
                <img src={avatar} alt="avatar" className="home-question-avatar"></img>
                <div>
                  <div className="home-question-name">Huynh Thi Khanh Linh</div>
                  <div className="home-question-time">1 hour</div>
                </div>
              </div>
              <div className="home-question-topic">#Event</div>
            </div>
            <div className="home-question-body">
              <div className="home-question-title">Thành viên nữ tham gia giải đấu</div>
              <div>Dạ chào mọi người, không biết sự kiện IT League lần này, các đội nữ có thể...</div>
            </div>
          </div>
          <div className="home-question-container">
            <div className="home-question-header">
              <div className="home-question-info">
                <img src={avatar} alt="avatar" className="home-question-avatar"></img>
                <div>
                  <div className="home-question-name">Huynh Thi Khanh Linh</div>
                  <div className="home-question-time">1 hour</div>
                </div>
              </div>
              <div className="home-question-topic">#Event</div>
            </div>
            <div className="home-question-body">
              <div className="home-question-title">Thành viên nữ tham gia giải đấu</div>
              <div>Dạ chào mọi người, không biết sự kiện IT League lần này, các đội nữ có thể...</div>
            </div>
          </div>
        </div>

        <Divider />

        <div className="home-information">
          <img src={banchaphanh} alt="banchaphanh" className="home-information-image"></img>
          <img src={banthuongvu} alt="banthuongvu" className="home-information-image"></img>
          <img src={bantruyenthong} alt="bantruyenthong" className="home-information-image"></img>
          <img src={banphongtrao} alt="banphongtrao" className="home-information-image"></img>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default HomePage