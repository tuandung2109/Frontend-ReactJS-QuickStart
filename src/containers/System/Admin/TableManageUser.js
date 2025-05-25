import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './TableManageUser.scss';
import * as actions from "../../../store/actions"



class TableManageUser extends Component {

    state = {

    }

    constructor(props) {
        super(props);
        this.state = {
                usersRedux : []
            }
        };
    
    componentDidMount() {
        this.props.fetchUserRedux();
    }

    // componentDidUpdate(prevState, prevProps, snapshot) {
    //     if (prevProps.listUsers !== this.props.listUsers) {
    //         this.setState({
    //             usersRedux: this.props.listUsers
    //         })
    //     }
    // }

    componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.listUsers) !== JSON.stringify(this.props.listUsers)) {
        this.setState({
            usersRedux: this.props.listUsers
        });
    }
}
    handleDeleteUser = (user) => {
        this.props.deleteAUserRedux(user.id);
    }
    render() {
        const { listUsers } = this.props;
        console.log('tuandung2109 check all users: ' , this.props.listUsers);
        console.log('tuandung2109 check state' , this.state.usersRedux);

        let arrUsers = this.state.usersRedux;
        return (                    
                    <table id='TableManageUser'>
                        <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers && arrUsers.length > 0 &&

                        arrUsers.map((item, index) => {

                            return (
                                <tr key = {index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit" ><i className ="fa-solid fa-pencil"></i></button>
                                        <button 
                                        onClick={() => this.handleDeleteUser(item)}
                                        className="btn-delete" ><i className ="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                        }
                        </tbody>
                        </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
    deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
