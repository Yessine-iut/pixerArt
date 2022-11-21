import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

import './NavPixer.scss';


export const NavPixer = ({ user,storageMode }) => {
    function IsLoggedIn(user) {
        let res;
        if (user.user !== null) {
            res = <Navbar.Text className={`ProfileCard ${storageMode ? 'dark' : 'light'}`}>
                Signed in as: <a className={`ProfileCard ${storageMode ? 'dark' : 'light'}`} href="#login">{user.user.username}</a>
            </Navbar.Text>
        }
        else res = <Button variant="outline-success">Login</Button>
        return res
    }
    return (
        <Navbar  className={`NavPixer ${storageMode ? 'dark' : 'light'}`}>
            <Container>
                <Navbar.Brand className={`ProfileCard ${storageMode ? 'dark' : 'light'}`} href="#home">PixerArt</Navbar.Brand>
                <Nav.Link href="#home">Home</Nav.Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <IsLoggedIn user={user} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
