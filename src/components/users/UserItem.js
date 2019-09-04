import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class UserItem extends Component {
    // static propTypes = {

    // }

    render() {
        const {login , avatar_url, html_url} = this.props.user;
        return (
            <div className="card text-center">
                <img 
                src={avatar_url} 
                alt="" 
                className='round-img' 
                style={{ width:'60px' }}
                />
                <h3>{login}</h3>
                <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
            </div>
        )
    }
}

export default UserItem
