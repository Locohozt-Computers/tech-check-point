import React from 'react'
import { useHistory } from 'react-router'
import { Container } from './style'

const Navbar = () => {
    const history = useHistory();

    return (
        <Container>
            <div className="menu">
                <p>John Doe</p>
                <p onClick={() => history.push('/auth/signin')}>Logout</p>
            </div>
        </Container>
    )
}

export default Navbar
