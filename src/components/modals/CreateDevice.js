import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>Додати новий пристрій</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <div className="d-flex justify-content-between">
                        <Dropdown className="">
                            <Dropdown.Toggle>Оберіть тип</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type =>
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="">
                            <Dropdown.Toggle>Оберіть бренд</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brands.map(brand =>
                                    <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Form.Control
                         className="mt-3"
                         placeholder="Введіть назву пристрою"
                    />
                    <Form.Control
                         className="mt-3"
                         placeholder="Введіть вартість пристрою"
                         type="number"
                    />
                    <Form.Control
                         className="mt-3"
                         type="file"
                    />
                </Form>
                <hr/>
                <Button
                    variant={"outline-dark"}
                    onClick={addInfo}
                >
                    Додати нову властивість
                </Button>
                {info.map(i =>
                    <div key={i.number} className="d-flex gap-2 mt-2 justify-content-between">
                        <div>
                            <Form.Control
                                placeholder="Введіть назву властивості"
                            />
                        </div>
                        <div>
                            <Form.Control
                                placeholder="Введіть опис властивості"
                            />
                        </div>
                        <div>
                            <Button
                                onClick={() => removeInfo(i.number)}
                                variant={"outline-danger"}
                            >
                                Видалити
                            </Button>
                        </div>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрити
                </Button>
                <Button variant="outline-success" onClick={onHide}>
                    Додати
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;