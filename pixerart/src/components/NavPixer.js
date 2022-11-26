import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import useLocalStorage from '../lib/useLocalStorage';
import useSessionStorage from '../lib/useSessionStorage';
import {
	useNavigate
} from 'react-router-dom';
import './NavPixer.scss';


export const NavPixer = () => {
    const navigate = useNavigate();
    const storageMode = useLocalStorage('darkmode')[0];
    const [user,setUser] = useSessionStorage('user');
    const setToken = useSessionStorage('token')[1];

    const logout = () => {
        setUser(null);
        setToken(null);
        navigate('/');
        };
    function IsLoggedIn(user) {
        let res;
        if (user.user !== null) {
            res = <><Button onClick={logout} variant="outline-danger">Logout</Button>
            <Navbar.Text className={`ProfileCard ${storageMode}`}>
                &nbsp;Signed in as: <a className={`ProfileCard ${storageMode}`} href="/profile">{user.user.username}</a>
            </Navbar.Text></>
        }
        else res = <Nav> <Button href="/signin" variant="outline-primary">Sign in</Button>{' '}<Button variant="outline-success" href="/login">Login</Button></Nav>
        return res
    }
    return (
        <Navbar className={`NavPixer ${storageMode}`}>
            <Container>
                <Navbar.Brand className={`ProfileCard ${storageMode}`} href="/">PixerArt</Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <IsLoggedIn user={user} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};
