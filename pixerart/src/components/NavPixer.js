import Navbar from 'react-bootstrap/Navbar';
import useLocalStorage from '../lib/useLocalStorage';
import useSessionStorage from '../lib/useSessionStorage';
import axios from 'axios';
import React, { useEffect } from 'react';

import {
    useNavigate
} from 'react-router-dom';
import {
    Box,
    Flex,
    Link,
    useColorModeValue,
    HStack,
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

    const handleChangeMode = () => {
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
    }
    const logout = () => {
        setUser(null);
        setToken(null);
        navigate('/');
    };

    useEffect(() => {
        if (user != null) {
            if (colorMode !== user.theme)
                toggleColorMode();
        }
    }, [colorMode, toggleColorMode, user])

    function IsLoggedIn(user) {
        let res;
        if (user.user !== null && user.user !== undefined) {
            res = <><Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} onClick={logout}>Logout</Link>
                <Navbar.Text>
                    &nbsp;Logged in as: <a href="/profil">{user.user.username}</a>
                </Navbar.Text></>
        }
        else {
            res = <><Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} href={'/login'}>Login</Link>
                <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} href={'/register'}>Register</Link></>
        }
        return res
    }
    let adminRender = <></>
    if (user !== null && user !== undefined) {

        if (user.role === "admin") {
            adminRender = <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none' }} href={'/pixelBoardCreate'}>Create PixelBoard</Link>
        }
    }

    return (
        <>
            <Box mb={5} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={8} alignItems={'center'}>
                        <Link href="/">PixerArt</Link>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {adminRender}

                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <IsLoggedIn user={user} />
                        <Button mx={2} onClick={() => {
                            toggleColorMode();
                            handleChangeMode();
                        }}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
