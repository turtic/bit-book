import React from 'react';
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const NavHeader = (props) => {
    return (
        <Menu borderless>
            <Menu.Menu position='left'>
                <Menu.Item as={Header} position="left">Bitbook</Menu.Item>
            </Menu.Menu>
            {/*checking if the user is logged in, so that buttons are rendered or not*/}
            {sessionStorage.getItem('sessionId') ?
                <Menu.Menu position='right'>
                    <Menu.Item as={Link} to="/" active={window.location.hash === '#/feed'}> Feed</Menu.Item>
                    <Menu.Item as={Link} to="/people" active={window.location.hash === '#/people'}>People</Menu.Item>
                    <Menu.Item as={Link} to="/profile" active={window.location.hash === '#/profile'}>Profile</Menu.Item>
                    <Menu.Item as={Link} onClick={props.onLogout} to="/login">Logout</Menu.Item>
                </Menu.Menu> :
                <React.Fragment />}
        </Menu>
    )
}

export default NavHeader