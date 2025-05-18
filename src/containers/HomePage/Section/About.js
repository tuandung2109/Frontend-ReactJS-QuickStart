import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import vtvImage from '../../../assets/about/vtv.png'
import haiTuGioImage from '../../../assets/about/chuyendong24h.jpg'
import VNExpress from '../../../assets/about/VNExpress.jpg'


class About extends Component {
    render() {
        
        return (
            <div className="section-share section-about">
                <div className='section-about-header'>
                    Truyền thông nói gì về BookingCare
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="90%" height="400" src="https://www.youtube.com/embed/FyDQljKtWnI?si=2z0Qe6QagyDTj7fG" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>        
                        </iframe>
                    </div>  
                    <div className='content-right'>
                        <p>BookingCare là một nền tảng công nghệ y tế tại Việt Nam, được truyền thông đánh giá cao về vai trò kết nối người bệnh với các cơ sở y tế và bác sĩ uy tín. Nhiều bài báo trên các trang như VnExpress, Cafebiz hay Dân trí ghi nhận BookingCare giúp người dùng dễ dàng đặt lịch khám trực tuyến, tra cứu thông tin bác sĩ và bệnh viện một cách minh bạch, tiết kiệm thời gian và chi phí. Truyền thông cũng nhấn mạnh vai trò của nền tảng này trong việc số hóa ngành y tế, nâng cao trải nghiệm chăm sóc sức khỏe cho người dân.</p>
                        <a href='https://bookingcare.vn/' target='_blank'>
                            <img src={haiTuGioImage} alt="VTV nói về BookingCare" style={{ width: '36%', height: '136px' }} />
                        </a>
                        <a href='https://vnexpress.net/bookingcare-ra-mat-tro-ly-ai-4798819.html' target='_blank'>
                            <img 
                                src={VNExpress} 
                                alt="VNExpress nói về BookingCare" 
                                style={{ 
                                    width: '50%', 
                                    height: '35%', 
                                    transform: 'translateX(19px)', 
                                    border: '1px solid red' 
                                }} 
                            />
                        </a>
                    </div>           
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
