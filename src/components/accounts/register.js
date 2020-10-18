import React, { useState, useEffect } from "react";
import * as actions from '../../store/actions/auth';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/H&S-Circle.png'
import './register.scss'
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';  
import { connect } from 'react-redux';


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


const Flexbox = styled.div`
  position: absolute;
  background: #8FC2E9;
  top:0;
  left:0;
  bottom:0;
  right:0;
  height:100%;
  width:100%;
  `;


const FlexboxForm = styled.div`
  position: relative;
  top: 15vh;
  background: white;
  width: 100%;
  max-width: 450px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #000;
  margin: 0 auto;
`;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  }};
const RegistrationForm = (props) => {
  const [form] = Form.useForm();
  const state = {
    confirmDirty: false,
  };

  const handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  const validateToNextPassword = (rule, value, callback) => {
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  const onFinish = (values) => {
        console.log(values)
        props.onAuth(
            values.first_name,
            values.last_name,
            values.email,
            values.password,
            values.password2,
            values.number,
            values.waiver,);
        props.history.push('/');
      };

  const onChange = (e) => { props.setState({ [e.target.name]: e.target.value });
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="64">+64</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Flexbox>
    <FlexboxForm className="Flexbox-Form">
    <img src={Logo} alt="HSLogo" width="100" height="100"></img>
        <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            prefix: '64',
        }}
        scrollToFirstError
        >

        <Form.Item
            style={{ marginTop: 30, marginRight: 80}}
            name="first_name"
            label="First Name"
            rules={[
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input />
        </Form.Item>
        
        <Form.Item
            style={{marginRight: 80}}
            name="last_name"
            label="Last Name"
            rules={[
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            style={{marginRight: 80}}
            name="email"
            label="E-mail"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            style={{marginRight: 80}}
            name="password"
            label="Password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            style={{marginRight: 80}}
            name="password2"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
                },
            }),
            ]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            style={{marginRight: 80}}
            name="number"
            label="Phone Number"
            rules={[
            {
                required: true,
                message: 'Please input your phone number!',
            },
            ]}
        >
            <Input
            addonBefore={prefixSelector}
            style={{
                width: '100%',
            }}
            />
        </Form.Item>


        <Form.Item
            name="waiver"
            valuePropName="checked"
            rules={[
            {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
            },
            ]}
            {...tailFormItemLayout}
        >
            <Checkbox>
            I have read the <a href="">agreement</a>
            </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
            Register
            </Button>
            <br></br>
           Already have an account?
        <NavLink
            style={{marginRight: 100}} 
            to='/login/'> Login
        </NavLink>
        </Form.Item>
        </Form>
      </FlexboxForm>
      </Flexbox>
  );
}



const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (first_name, last_name, email, number, password, password2, waiver) => dispatch(actions.authSignup(first_name, last_name, email, number, password, password2, waiver)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
