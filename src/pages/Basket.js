import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {Button, Container} from "react-bootstrap";
import {readDevicesByIds} from "../http/deviceAPI";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const Basket = () => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const [basket, setBasket] = useState([])
    useEffect(() => {
        readDevicesByIds(Object.values(user.basket)).then(data =>
            setBasket(data.rows)
        )
    }, [])


    return (
        <Container>
            <div className="d-flex flex-column m-3">
                <h2 className="mb-3">Кошик</h2>
                {basket.length ? (
                    basket.map((item, index) =>
                        <div key={index}
                             style={{
                                 backgroundColor: index % 2 !== 0 ? 'lightgray' : 'transparent',
                                 border: '2px solid black'
                             }}
                             className="d-flex"
                        >
                            {/*<div className="p-2" style={{fontWeight: "bold", borderRight: '2px solid black'}}>{index + 1}</div>*/}
                            <div className="p-2">{item.name}</div>
                            <div className="d-flex justify-content-center w-25 p-2 ms-auto"
                                 style={{fontWeight: "bold", borderLeft: '2px solid black'}}>{item.price} грн.
                            </div>
                        </div>
                    )
                ) : (
                    <div>
                        <h3>Ой, тут пусто :(</h3>
                        <Button
                            variant={"success"}
                            className="mt-2"
                            onClick={() => history(SHOP_ROUTE)}
                        >
                            Повернутися до вибору товарів
                        </Button>
                    </div>
                )
                }
            </div>
        </Container>
    );
};

export default Basket;