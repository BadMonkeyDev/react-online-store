import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image} from "react-bootstrap";
import {Star} from "react-bootstrap-icons"
import {useParams} from "react-router-dom";
import {readDevice} from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] =  useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        readDevice(id).then(data => setDevice(data))
    }, [])
    return (
        <Container className={'mt-3'}>
            <div className={'d-flex flex-wrap justify-content-between gap-5'}>
                <Col>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
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
                {device.info.map((info, index) =>
                    <div key={info.id} style={{background: index % 2 !== 0 ? 'lightgray' : 'transparent', padding: '5px'}}>
                        {info.title}: {info.description}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default DevicePage;