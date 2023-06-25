import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { animated, config, useSpring } from 'react-spring';
import mockData from '../ContactDetailsPage/characterDetailsMockData.json';
import "./style.css"



export const Test = () => {
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const ColRowTest = () => {
        return (
            <>
                <div className="test-container">
                    <div className='text-container'>
                        <h1 className='test-text'>This is a Test Page</h1>
                        <h3 > paragraph 1</h3>

                    </div>
                </div>

                <div>
                    <Container >
                        <Row>
                            <Col className='col-style' style={{ background: "yellow" }} sm={4}>sm=4</Col>
                            <Col className='col-style' style={{ background: "yellow" }} sm={8}>sm=8</Col>
                        </Row>
                        <Row>
                            <Col className='col-style' style={{ background: "yellow" }} xl>sm=true</Col>
                            <Col className='col-style' style={{ background: "yellow" }} xl>sm=true</Col>
                            <Col className='col-style' style={{ background: "yellow" }} xl>sm=true</Col>
                        </Row>
                    </Container>
                </div>

                <div>

                    <Container>
                        <Row>
                            <Col style={{ background: "orange" }} md={4}>md=4</Col>
                            <Col style={{ background: "orange" }} md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
                        </Row>
                        <Row>
                            <Col style={{ background: "orange" }} md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                            <Col style={{ background: "orange" }} md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
                        </Row>
                        <Row>
                            <Col style={{ background: "orange" }} md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
                        </Row>
                    </Container>

                    <Container>
                        <Row xs={2} md={4} lg={6}>
                            <Col style={{ background: "red" }} >2 of 2</Col>
                            <Col style={{ background: "red" }} >1 of 2</Col>
                        </Row>
                        <Row xs={1} md={2}>
                            <Col style={{ background: "red" }}>1 of 3</Col>
                            <Col style={{ background: "red" }}>2 of 3</Col>
                            <Col style={{ background: "red" }}>3 of 3</Col>
                        </Row>
                        <Row xs="auto">
                            <Col style={{ background: "red" }}>1 of 3</Col>
                            <Col style={{ background: "red" }}>2 of 3</Col>
                            <Col style={{ background: "red" }}>3 of 3</Col>
                        </Row>
                    </Container>
                </div>

                <Container>
                    {/* Stack the columns on mobile by making one full-width and the other half-width */}
                    <Row >
                        <Col style={{ background: "orange" }} xs={12} md={8}>
                            xs=12 md=8
                        </Col>
                        <Col style={{ background: "orange" }} xs={6} md={4}>
                            xs=6 md=4
                        </Col>
                    </Row>

                    {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                    <Row>
                        <Col style={{ background: "orange" }} xs={6} md={4}>
                            xs=6 md=4
                        </Col>
                        <Col style={{ background: "orange" }} xs={6} md={4}>
                            xs=6 md=4
                        </Col>
                        <Col style={{ background: "orange" }} xs={6} md={4}>
                            xs=6 md=4
                        </Col>
                    </Row>

                    {/* Columns are always 50% wide, on mobile and desktop */}
                    <Row>
                        <Col style={{ background: "orange" }} xs={6}>xs=6</Col>
                        <Col style={{ background: "orange" }} xs={6}>xs=6</Col>
                    </Row>
                </Container>
            </>


        )
    }
    const props =
        useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })


    const TestSpring = () => {
        if (isClicked) {
            return <animated.div style={props} className="springTest">I will fade in</animated.div>
        }
    }

    const TestSpring2 = () => {
        return <animated.div style={props} className="springTest">Default Fade in </animated.div>

    }

    const TestSpring3 = () => {

        const [flip, set] = useState(false)
        const props2 = useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            reset: true,
            reverse: flip,
            delay: 200,
            config: config.molasses,
            onRest: () => set(!flip),
        })

        return <animated.h1 style={props2}>hello</animated.h1>

    }

    return (
        <>
            <div>
                {/* {ColRowTest()} */}
            </div>
            <div>
                {TestSpring2()}
            </div>
            <Button onClick={() => { setIsClicked(!isClicked) }}>Button</Button>
            <div>
                {TestSpring()}
            </div>
            {TestSpring3()}


        </>
    )
}
