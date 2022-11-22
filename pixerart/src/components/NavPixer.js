import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import useLocalStorage from '../lib/useLocalStorage';

import './NavPixer.scss';


export const NavPixer = ({ user }) => {
    const storageMode = useLocalStorage('darkmode')[0];

    function IsLoggedIn(user) {
        let res;
        if (user.user !== null) {
            res = <Navbar.Text className={`ProfileCard ${storageMode ? 'dark' : 'light'}`}>
                Signed in as: <a className={`ProfileCard ${storageMode ? 'dark' : 'light'}`} href="#login">{user.user.username}</a>
            </Navbar.Text>
        }
        else res = <Nav> <Button href="/signin" variant="outline-primary">Sign in</Button>{' '}<Button variant="outline-success">Login</Button></Nav>
        return res
    }
    return (
        <Navbar className={`NavPixer ${storageMode ? 'dark' : 'light'}`}>
            <Container>
                <Navbar.Brand className={`ProfileCard ${storageMode ? 'dark' : 'light'}`} href="/">PixerArt</Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <IsLoggedIn user={user} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
