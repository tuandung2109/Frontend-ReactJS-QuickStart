import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss'
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";


// import sectionImg from "../../../assets/section/test1.jpg";



class Specialty extends Component {
    render() {
        let settings = this.props.settings;
        
        return (
            <div className="section-share section-specialty">
                <div className="section-container">
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div>Cơ xương khớp 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div>Cơ xương khớp 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div>Cơ xương khớp 6</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty'/>
                                <div>Cơ xương khớp 7</div>
                            </div>
                        </Slider>                        
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
