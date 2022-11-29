import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import useLocalStorage from '../lib/useLocalStorage';
import useSessionStorage from '../lib/useSessionStorage';
import axios from 'axios';
import { useCallback } from 'react';

import {
    useNavigate
} from 'react-router-dom';
import {
    Box,
    Flex,
    Link,
    useColorModeValue,
    Stack,
    Button,
    useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


export const NavPixer = () => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode();

    const [user, setUser] = useSessionStorage('user');
    const setToken = useSessionStorage('token')[1];

    const setStorageMode = useLocalStorage('darkmode')[1];
    const token = useSessionStorage('token')[0];
    const handleChangeMode = useCallback(
        (e) => {
            if (user != null) {
                if (colorMode === "dark") {
                    setStorageMode("light");
                    user.theme = 'light'
                } else {
                    setStorageMode("dark");
                    user.theme = 'dark'
                }
                axios.put('http://localhost:8080/api/user/' + user._id + '?secret_token=' + token, user);
            }
        },
        [setStorageMode, token, user, colorMode],
    );
    const logout = () => {
        setUser(null);
        setToken(null);
        navigate('/');
    };

    if (user != null) {
        if (colorMode !== user.theme)
            toggleColorMode();
    }

    function IsLoggedIn(user) {
        let res;
        if (user.user !== null && user.user !== undefined) {
            res = <><Button onClick={logout} variant="outline-danger">Logout</Button>
                <Navbar.Text>
                    &nbsp;Logged in as: <a href="/profile">{user.user.username}</a>
                </Navbar.Text></>
        }
        else res = <Nav> <Nav.Link href="/signin"><Button>Register</Button></Nav.Link>{' '}<Nav.Link href="/login">Login</Nav.Link></Nav>
        return res
    }
    let adminRender = <></>
    if (user !== null && user !== undefined) {

        if (user.role === "admin") {
            adminRender = <Button><Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} href={'/pixelBoardCreate'}>Create PixelBoard</Link></Button>
        }
    }

    return (
        <>
            <Box mb={5} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Link href="/">PixerArt</Link>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            {adminRender}
                            <IsLoggedIn user={user} />
                            <Button onClick={() => {
                                toggleColorMode();
                                handleChangeMode();
                            }}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
