import React from "react"
import { Pagination } from 'antd'

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import event from "../../assets/images/event.jpg"
import "./EventList.scss"

function EventList() {
  return (
    <>
      <Header />

      <div className="event-container">
        <div className="event-title">Events</div>

        {/* <div className="event-primary">
          <div className="event-primary-header">
            <img src={event} alt="event" className="event-primary-image"></img>
            <div className="event-primary-info">
              <div className="event-primary-title">IT League 2021</div>
              <div>27/03/2021 - 10/04/2021</div>
              <div>Sân bóng đá nhân tạo X7 - đường số 2 KCN Hòa Khánh</div>
            </div>
          </div>
          <div className="event-primary-summary">Chắc chắn rằng, đây không chỉ là một mùa giải gay cấn, hấp dẫn, mà còn mang cả yếu tố "hài hước" cùng với đội cổ động viên nồng nhiệt. Liệu có những chiến binh sân cỏ nào đang ẩn mình trong lớp áo ITers hay không? Các bạn đã sẵn sàng để tận hưởng những trận cầu cháy bỏng trong cuộc đua tìm kiếm "The Champion" chưa nào!!!</div>
        </div>

        <Divider /> */}

        <div className="event-list-container">
          <div className="event-item-container">
            <img src={event} alt="event" className="event-item-image"></img>
            <div className="event-item-info">
              <div>27/03/2021 - 10/04/2021</div>
              <div>Sân bóng đá nhân tạo X7 - đường số 2 KCN Hòa Khánh</div>
              <div className="event-item-title">IT League 2021</div>
            </div>
            <div className="event-item-summary">Chắc chắn rằng, đây không chỉ là một mùa giải gay cấn, hấp dẫn, mà còn mang cả yếu tố "hài hước" cùng với đội cổ động viên nồng nhiệt. Liệu có những chiến...</div>
          </div>

          <div className="event-item-container">
            <img src={event} alt="event" className="event-item-image"></img>
            <div className="event-item-info">
              <div>27/03/2021 - 10/04/2021</div>
              <div>Sân bóng đá nhân tạo X7 - đường số 2 KCN Hòa Khánh</div>
              <div className="event-item-title">IT League 2021</div>
            </div>
            <div className="event-item-summary">Chắc chắn rằng, đây không chỉ là một mùa giải gay cấn, hấp dẫn, mà còn mang cả yếu tố "hài hước" cùng với đội cổ động viên nồng nhiệt. Liệu có những chiến...</div>
          </div>

          <div className="event-item-container">
            <img src={event} alt="event" className="event-item-image"></img>
            <div className="event-item-info">
              <div>27/03/2021 - 10/04/2021</div>
              <div>Sân bóng đá nhân tạo X7 - đường số 2 KCN Hòa Khánh</div>
              <div className="event-item-title">IT League 2021</div>
            </div>
            <div className="event-item-summary">Chắc chắn rằng, đây không chỉ là một mùa giải gay cấn, hấp dẫn, mà còn mang cả yếu tố "hài hước" cùng với đội cổ động viên nồng nhiệt. Liệu có những chiến...</div>
          </div>
        </div>

        <Pagination size="small" total={50} />
      </div>

      <Footer />
    </>
  )
}

export default EventList