import React from 'react';
import {Input, Form, Button, Checkbox, Row, Col } from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom";
import App from '../App.css'
const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
            <Row justify={'center'}>
                <Col xs={8}
                    sm={12}
                     md={16}
                     lg={20}
                     xl={10}
                >
                    <diV className={'login'}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined/>} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Link className="login-form-forgot" to="">
                                Forgot password
                            </Link>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <Link to="/signup">register now!</Link>
                        </Form.Item>
                    </Form>
                    </diV>
                </Col>
            </Row>
    );
}
export default Login;
