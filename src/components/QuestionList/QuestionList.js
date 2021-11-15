import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./QuestionList.scss"
import avatar from "../../assets/images/avatar.jpg"

function QuestionList() {
  return (
    <>
      <Header />
      <div className="question-list-container">
        <div className="question-item-container">
          <div className="question-item-header">
            <img src={avatar} alt="avatar" className="question-item-image"></img>
            <div className="question-item-info">
              <div className="question-item-name">Huynh Thi Khanh Linh</div>
              <div className="question-item-time">1 hour</div>
            </div>
          </div>
          <div className="question-item-title">
            TÀI TRỢ CHO CÁC SINH VIÊN IT TÀI NĂNG
          </div>
          <div className="question-item-description">
            Xin chào, mình là founder của một công ty IT tại Singapore. Mình thấy các bạn khoa IT DUT rất năng động và tài giỏi. Mình muốn tài trợ một vài suất học bổng cho sinh viên trong khoa. Cho mình hỏi mình phải làm thế nào để tiếp cận với các bạn cũng như tổ chức một buổi trao học bổng tại trường. Trân trọng cảm ơn!
          </div>
          <div className="question-item-topic">
            #Scholarship
          </div>
          <div>
            <i className="far fa-heart"></i>
            <span>12</span>
            <i className="far fa-comment"></i>
            <span>Comment</span>
          </div>
        </div>

        <div className="question-item-container">
          <div className="question-item-header">
            <img src={avatar} alt="avatar" className="question-item-image"></img>
            <div className="question-item-info">
              <div className="question-item-name">Huynh Thi Khanh Linh</div>
              <div className="question-item-time">1 hour</div>
            </div>
          </div>
          <div className="question-item-title">
            TÀI TRỢ CHO CÁC SINH VIÊN IT TÀI NĂNG
          </div>
          <div className="question-item-description">
            Xin chào, mình là founder của một công ty IT tại Singapore. Mình thấy các bạn khoa IT DUT rất năng động và tài giỏi. Mình muốn tài trợ một vài suất học bổng cho sinh viên trong khoa. Cho mình hỏi mình phải làm thế nào để tiếp cận với các bạn cũng như tổ chức một buổi trao học bổng tại trường. Trân trọng cảm ơn!
          </div>
          <div className="question-item-topic">
            #Scholarship
          </div>
          <div>
            <i className="far fa-heart"></i>
            <span>12</span>
            <i className="far fa-comment"></i>
            <span>Comment</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default QuestionList