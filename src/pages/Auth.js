import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизація' : 'Реєстрація'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введіть ваш email...'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Введіть ваш пароль...'
                    />
                    <div className='d-flex justify-content-between mt-3'>
                        {isLogin ?
                            <div>Немає аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зареєструйтеся!</NavLink></div>
                            :
                            <div>Вже зареєстровані? <NavLink to={LOGIN_ROUTE}>Увійдіть!</NavLink></div>
                        }
                        <Button variant={'outline-success'}>{isLogin ? 'Увійти' : 'Зареєструватися'}</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;