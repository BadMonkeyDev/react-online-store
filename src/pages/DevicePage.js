import React from 'react';
import {Button, Card, Col, Container, Image} from "react-bootstrap";
import {Star} from "react-bootstrap-icons"

const DevicePage = () => {
    const device = {id: 1, name: "Холдер Baseus Wireless Charger Gravity Car Mount Black (WXYL-A01)", price: 657, rating: 5, img: "http://localhost:5000/c2429367-6c77-41e3-9566-a4600a5d9a13.jpg"}
    const description = [
        {id: 1, title: 'Колір', description:'Чорний'},
        {id: 2, title: 'Наявність зарядки', description:'Ні'},
        {id: 3, title: 'Спосіб кріплення', description:'Зажим'},
        {id: 4, title: 'Гарантія', description:'6 міс.'},
    ]

    return (
        <Container className={'mt-3'}>
            <div className={'d-flex flex-wrap justify-content-between gap-5'}>
                <Col>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col>
                    <div className={'d-flex flex-column'}>
                        <h5>{device.name}</h5>
                        <div
                            className={'d-flex justify-content-center align-items-center'}
                            style={{width:240, height:240, position: "relative"}}
                        >
                            <span style={{position: "absolute", fontSize: 64, fontWeight: "bold"}}>{device.rating}</span>
                            <Star size={240}/>
                        </div>

                    </div>
                </Col>
                <Col>
                     <Card
                        className="d-flex flex-column justify-content-around align-items-center"
                        style={{width:300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                     >
                         <h3> Від {device.price} грн.</h3>
                         <Button variant={"outline-dark"}>Додати у кошик</Button>
                     </Card>
                </Col>
            </div>
            <div className="d-flex flex-column m-3">
                <h2>Характеристики</h2>
                {description.map((info, index) =>
                    <div key={info.id} style={{background: index % 2 !== 0 ? 'lightgray' : 'transparent', padding: '5px'}}>
                        {info.title}: {info.description}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default DevicePage;