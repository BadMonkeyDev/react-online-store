import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom'
import {CartCheckFill, CartFill} from "react-bootstrap-icons";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        history(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <div>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Happy Monkey</NavLink>
                </div>
                <div className="d-flex gap-2">
                    <Nav className="ml-auto">
                        <Button
                            variant={'outline-light'}
                            onClick={() => {
                                history(BASKET_ROUTE)
                            }}
                        >
                            { user.basket.length ?
                                <CartCheckFill />
                                :
                                <CartFill/>
                            }
                        </Button>
                    </Nav>
                    {user.isAuth ?
                        <Nav>
                            <Button
                                variant={'outline-light'}
                                className='me-2'
                                onClick={() => {
                                    history(ADMIN_ROUTE)
                                }}
                            >
                                Адміністрування
                            </Button>
                            <Button
                                variant={'outline-light'}
                                onClick={logOut}
                            >
                                Вийти
                            </Button>
                        </Nav>
                        :
                        <Nav>
                            <Button
                                variant={'outline-light'}
                                onClick={() => {
                                    history(LOGIN_ROUTE)
                                }}
                            >
                                Увійти
                            </Button>
                        </Nav>
                    }
                </div>
            </Container>
        </Navbar>
    );
});

export default NavBar;