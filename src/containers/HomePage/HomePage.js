import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader'
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutStandingDoctor from './Section/OutStandingDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import './HomePage.scss';


class HomePage extends Component {

    render() {

        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div className="home-header-container">
                <HomeHeader/>
                <Specialty 
                    settings={settings}
                />
                <MedicalFacility 
                    settings={settings}
                />
                <OutStandingDoctor
                    settings={settings}                
                />
                <HandBook
                    settings={settings}                
                />
                <About/>
                <HomeFooter/>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
