import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {readBrands, readDevices, readTypes} from "../http/deviceAPI";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        readTypes().then(data => device.setTypes(data))
        readBrands().then(data => device.setBrands(data))
        readDevices().then(data => device.setDevices(data.rows))
    }, [])
    return (
        <Container>
            <Row className='pt-3' >
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;