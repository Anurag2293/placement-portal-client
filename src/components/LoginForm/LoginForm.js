import React, { useState } from 'react'

import './LoginForm.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import { CgProfile } from 'react-icons/cg'
import { AiOutlineLock } from 'react-icons/ai'

const LoginForm = ({ title, handleSubmitClick, signupClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginClick = async (e) => {
        e.preventDefault()
        await handleSubmitClick(e, email, password)
    }

    return (
        <div className="login-container">
            <div><h2>{title}</h2></div>
            <div className="login-box">
                <div className="navigate">
                    <div className="btns signup" onClick={signupClick}>
                        <h3>Sign Up</h3>
                    </div>
                    <div className="btns login">
                        <h3>Login</h3>
                    </div>
                </div>
                <div className="form-content">
                    <div className='form-message'><h3>Welcome Back!</h3></div>
                    <div>
                        <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    <CgProfile size={30} />
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control value={email} onChange={(e) => { setEmail(e.target.value)}} type="email" placeholder="Your work email" required />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3 px-0 mr-0 ml-0" controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    <AiOutlineLock size={30} />
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control value={password} onChange={(e) => { setPassword(e.target.value)}} type="password" placeholder="Password" required />
                                </Col>
                            </Form.Group>
                            {/* <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Form.Check label="Remember me" />
                                </Col>
                            </Form.Group> */}

                            <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button className='login-button' type="submit" onClick={handleLoginClick}>Login</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm