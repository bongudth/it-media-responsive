import React from "react"

import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Information.scss"
import banchaphanh from "../../assets/images/bch/banchaphanh.jpg"
import bantruyenthong from "../../assets/images/bch/bantruyenthong.jpg"
import banphongtrao from "../../assets/images/bch/banphongtrao.jpg"
import ailinh from "../../assets/images/bch/ailinh.jpg"
import thevien from "../../assets/images/bch/thevien.jpg"
import thayduc from "../../assets/images/bch/thayduc.png"
import xuanthuan from "../../assets/images/bch/xuanthuan.jpg"
import khanhlinh from "../../assets/images/bch/khanhlinh.jpg"
import tanty from "../../assets/images/bch/tanty.jpg"
import tranbinh from "../../assets/images/bch/tranbinh.jpg"
import myduyen from "../../assets/images/bch/myduyen.jpg"
import quochuy from "../../assets/images/bch/quochuy.jpg"
import vanmanh from "../../assets/images/bch/vanmanh.jpg"
import hoangnhan from "../../assets/images/bch/hoangnhan.jpg"
import minhchau from "../../assets/images/bch/minhchau.jpg"
import quangdinh from "../../assets/images/bch/quangdinh.jpg"
import thunhu from "../../assets/images/bch/thunhu.jpg"
import nguyenminh from "../../assets/images/bch/nguyenminh.jpg"
import huuduc from "../../assets/images/bch/huuduc.jpg"
import minhhuy from "../../assets/images/bch/minhhuy.jpg"
import viettrieu from "../../assets/images/bch/viettrieu.jpg"
import huudinh from "../../assets/images/bch/huudinh.jpg"
import thaovy from "../../assets/images/bch/thaovy.jpg"
import siviet from "../../assets/images/bch/siviet.jpg"

function Information() {
  return (
    <>
      <Header />
      <div className="information-container">
        <div className="section-bch">
          <img src={banchaphanh} alt="banchaphanh" />
          <div className="section-bch-content">
            <div className="section-bch-content-title title">
              Ban Chấp Hành Liên Chi Đoàn Khoa Công Nghệ Thông Tin Nhiệm kỳ 2020 -
              2021
            </div>
            <div className="section-bch-content-description description">
              Ban Chấp Hành - nơi hội tụ những sinh viên mang trong mình một niềm
              đam mê cống hiến, đóng góp hết sức mình. Cùng trải qua những giờ họp
              nghiêm túc, những sự kiện, chương trình thú vị, những hoạt động ý
              nghĩa hay những buổi vui chơi cùng nhau đầy ắp niềm vui, tiếng cười,
              giống như một gia đình nhỏ thực sự. Với mong muốn LCĐ Khoa CNTT được
              “bùng cháy" rực rỡ nhất!
            </div>
          </div>
        </div>
        <div className="section-btv">
          <div className="section-btv-title title">Ban Thường Vụ</div>
          <div className="section-btv-image">
            <img
              src={ailinh}
              alt="uyvienbtv"
              className="section-btv-image-uyvien"
            />
            <img
              src={thevien}
              alt="phobithubtv"
              className="section-btv-image-phobithu"
            />
            <img
              src={thayduc}
              alt="bithubtv"
              className="section-btv-image-bithu"
            />
            <img
              src={xuanthuan}
              alt="phobithubtv"
              className="section-btv-image-phobithu"
            />
            <img
              src={khanhlinh}
              alt="uyvienbtv"
              className="section-btv-image-uyvien"
            />
          </div>
          <div className="section-btv-content">
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Huỳnh Thị Ái Linh</div>
            </div>
            <div className="introduce">
              <div className="role">Phó Bí Thư</div>
              <div className="name">Mai Thế Viễn</div>
            </div>
            <div className="introduce">
              <div className="role">Bí Thư</div>
              <div className="name">Lê Trần Đức</div>
            </div>
            <div className="introduce">
              <div className="role">Phó Bí Thư</div>
              <div className="name">Lê Xuân Thuận</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy viên</div>
              <div className="name">Huỳnh Thị Khánh Linh</div>
            </div>
          </div>
        </div>
        <div className="section-ban">
          <img src={bantruyenthong} alt="bantruyenthong" />
          <div className="section-ban-bg-black"></div>
          <div className="section-ban-title title">Ban Truyền Thông</div>
          <div className="section-ban-description description">
            Cúc kuuu... Chào mọi người, chúng mình là những chú chim bồ câu đưa
            thư nhà ITF nè. Với nhiệm vụ truyền đi những thông tin, sự kiện nóng
            hổi của Khoa Công nghệ Thông tin, Ban Truyền Thông chúng mình luôn là
            nơi hướng đến của các bạn đam mê với viết lách, thiết kế ấn phẩm đấy.
          </div>
          <div className="section-ban-core-image">
            <img src={tanty} alt="phoban" />
            <img src={tranbinh} alt="truongban" />
            <img src={myduyen} alt="phoban" />
          </div>
          <div className="section-ban-core-content">
            <div className="introduce">
              <div className="role">Phó Ban</div>
              <div className="name">Đoàn Tân Tỵ</div>
            </div>
            <div className="introduce">
              <div className="role">Trưởng Ban</div>
              <div className="name">Đỗ Trần Bình</div>
            </div>
            <div className="introduce">
              <div className="role">Phó Ban</div>
              <div className="name">Nguyễn Trần Mỹ Duyên</div>
            </div>
          </div>
          <div className="section-ban-member-image">
            <img src={quochuy} alt="memberban" />
            <img src={vanmanh} alt="memberban" />
            <img src={hoangnhan} alt="memberban" />
            <img src={minhchau} alt="memberban" />
            <img src={quangdinh} alt="memberban" />
          </div>
          <div className="section-ban-member-content">
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Lê Quốc Huy</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Cao Kiểu Văn Mạnh</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Nguyễn Văn Hoàng Nhân</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Nguyễn Thị Minh Châu</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Trương Quang Định</div>
            </div>
          </div>
        </div>
        <div className="section-ban">
          <img src={banphongtrao} alt="banphongtrao" />
          <div className="section-ban-bg-black"></div>
          <div className="section-ban-title title">Ban Phong Trào</div>
          <div className="section-ban-description description">
            Nơi hội tụ của những con người đầy nhiệt huyết, sáng tạo cùng với kỹ
            năng lãnh đạo và giải quyết vấn đề. Với nhiệm vụ đưa ra kế hoạch tổ
            chức các sự kiện, sân chơi dành cho các bạn khoa Công nghệ Thông tin,
            Ban Phong Trào là nơi có thể giúp các bạn rèn luyện kỹ năng tổ chức,
            quản lý cũng như khả năng giải quyết vấn đề dưới áp lực.
          </div>
          <div className="section-ban-core-image">
            <img src={thunhu} alt="phoban" />
            <img src={nguyenminh} alt="truongban" />
            <img src={huuduc} alt="phoban" />
          </div>
          <div className="section-ban-core-content">
            <div className="introduce">
              <div className="role">Phó Ban</div>
              <div className="name">Hoàng Thị Thu Như</div>
            </div>
            <div className="introduce">
              <div className="role">Trưởng Ban</div>
              <div className="name">Hồ Đắc Nguyên Minh</div>
            </div>
            <div className="introduce">
              <div className="role">Phó Ban</div>
              <div className="name">Nguyễn Hữu Đức</div>
            </div>
          </div>
          <div className="section-ban-member-image">
            <img src={minhhuy} alt="memberban" />
            <img src={viettrieu} alt="memberban" />
            <img src={huudinh} alt="memberban" />
            <img src={thaovy} alt="memberban" />
            <img src={siviet} alt="memberban" />
          </div>
          <div className="section-ban-member-content">
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Huỳnh Minh Huy</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Huỳnh Viết Triều</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Nguyễn Hữu Dinh</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Nguyễn Thị Thảo Vy</div>
            </div>
            <div className="introduce">
              <div className="role">Ủy Viên</div>
              <div className="name">Phạm Sĩ Việt</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Information