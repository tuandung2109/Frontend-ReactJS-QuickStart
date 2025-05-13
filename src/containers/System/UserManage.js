import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers } from '../../services/userService';


class UserManage extends Component {

    state = {

    }

    constructor(props) {
        super(props);
        this.state = {
            arrUssers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    render() {
        console.log('check state', this.state);
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <div className="title text-center">Manage users with Eric</div>
                <div className="users-table mt-3 mx-3">
                    <table id="customers">
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        
                            {arrUsers && arrUsers.map((item, index) => {
                                console.log('eric check map' ,item , index);
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit"><i class="fa-solid fa-pencil"></i></button>
                                            <button className="btn-delete"><i class="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    )
                                })
                        }
                        

                        </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
