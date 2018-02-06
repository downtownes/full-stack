import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/users'; //getUserInfo has to be deconstructed because it is not exported by default
// import axios from 'axios'

class Private extends Component {


    componentDidMount() {
        this.props.getUserInfo()
    }


    render() {
        const user = this.props.user;
        return (
            <div className=''>
                {user ? <img className='avatar' src={user.image} /> : null}
                <p>Username: {user ? user.username : null}</p>
                <p>Email: {user ? user.email : null}</p>
                <p>ID: {user ? user.auth_id : null}</p>
                <a href='http://localhost:3000/auth/logout'><button>Log out</button></a>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { getUserInfo })(Private); //connect sends info to the store