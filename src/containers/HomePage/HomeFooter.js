import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {
    render() {
        
        return (
            <div className="home-footer">
                <p>&copy; 2024 copyrighter by tuandung2109 .  
                    <a target = "_blank" href='https://www.facebook.com/bookingcare'>More information , &#8594; click here &#8592;</a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);


