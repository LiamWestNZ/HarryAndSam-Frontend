import React, { Component } from 'react';
import Icon from '@ant-design/icons';
import { FormInstance } from 'antd/lib/form';
import {
  Form,
  Input,
  Spin,
  Checkbox,
  Button,
  
} from 'antd';
import { connect } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import * as actions from '../../store/actions/auth';
import Logo from '../../assets/H&S-Circle.png'
import styled from 'styled-components';


const FormItem = Form.Item;

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

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

//const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


export function LoginForm(props){

  const [form] = Form.useForm();

  const onFinish = (e) => {
        props.onAuth(e.email, e.password);
        props.history.push("/")
      };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        );
      }
  
  return (
    <Flexbox>
    <FlexboxForm>
      <img src={Logo} alt="HSLogo" width="100" height="100"></img>
      
      {errorMessage}

      {
        props.loading ?

        //<Spin indicator={antIcon} />
        <p>Loading...</p>

        :

        <Form
        form={form}
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          style={{ marginTop: 30, marginRight: 80}}
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          style={{marginRight: 80}}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button
            type="primary"
            htmlType="submit"
            >
            Submit
          </Button>
            Don't have an account?
          <NavLink
              style={{marginRight: 100}} 
              to='/register/'> Register
          </NavLink>
        </Form.Item>
      </Form>
        }
      </FlexboxForm>
      </Flexbox>
    );
  };




const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password) => dispatch(actions.authLogin(email, password)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);