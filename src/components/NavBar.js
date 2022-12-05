import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Happy Monkey</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button
                            variant={'outline-light'}
                            className='me-2'
                            onClick={() => {history(ADMIN_ROUTE)
                                }}
                        >
                            Адміністрування
                        </Button>
                        <Button
                            variant={'outline-light'}
                            onClick={() => {
                                user.setIsAuth(false)
                                history(LOGIN_ROUTE)
                            }
                        }
                        >
                            Вийти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button
                            variant={'outline-light'}
                            onClick={() => {
                                user.setIsAuth(true)
                                history(LOGIN_ROUTE)
                            }
                        }
                        >
                            Увійти
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;