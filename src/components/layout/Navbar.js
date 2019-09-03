import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class Navbar extends Component {
    static defaultProps = {
        icon:'navbar bg-primary',
        title:'Github Finder'
    };
    static propTypes = {
        title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
    }
    render() {
        return (
            <nav className={this.props.icon}>
                <h1>
                    <i className="fab fa-github" /> {''}
                    {this.props.title}
                </h1>
            </nav>
        )
    }
}

export default Navbar
