import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {Star} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card
                style={{width: 150, cursor: 'pointer'}}
                border={'light'}
            >
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className={'d-flex justify-content-between align-items-center mt-1'}>
                    <div>{device.name}</div>
                    <div className={'d-flex align-items-center gap-1'}>
                        <div>{device.rating}</div>
                        <Star size={18} />
                    </div>
                </div>
            </Card>

        </Col>
    );
};

export default DeviceItem;