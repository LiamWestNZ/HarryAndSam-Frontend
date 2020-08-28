import React, { useState, useEffect } from "react";

import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom';
import history from '../../history'
import './profile.scss'
import {apiProfileUpdate} from '../profile/lookup'

import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    AutoComplete,
  } from 'antd';  
import ContentDiv from "../layout/title";



const { Option } = Select;




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

  
export const ProfileUpdateForm = (props) => {
  console.log(props)
  const username = localStorage.getItem('userName')
  const [form] = Form.useForm();
  
  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        );
      }

  useEffect( () =>{
    fetch(`http://localhost:8000/api/profile/${username}`)
          .then(results=>{
            return results.json()
          })
          .then(data=>{
            form.setFieldsValue({
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                number: "0" + data.number.slice(3,15),
                address1: data.address1,
                address2: data.address2,
                city: data.city,
                postal: data.postal
            })


          })
  })


  const handleBackendUpdate = (response, status) =>{
    if (status === 200){
      history.push("/profile/")
      console.log("res:", response, "status:", status)
    } else {
      console.log("res:", response, "status:", status)
      alert("An error occured please try again")
     }
  }



  const onFinish = (values, event) => {
    console.log(values, props)
    apiProfileUpdate(`${username}`, handleBackendUpdate, values)
    props.onFinish()
  }


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
    <div className="contentDiv">
      <ContentDiv icon={<i className="ion-ios-person"></i>} title="Edit Profile" />
        <Form
        {...formItemLayout}
        form={form}
        name="profile"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
            //addonBefore={prefixSelector}
            style={{
                width: '100%',
            }}
            />
        </Form.Item>

        <Form.Item
            style={{marginRight: 80}}
            name="address1"
            label="Address 1"
            rules={[
            {
                required: false,
                message: 'Please input your phone number!',
            },
            ]}
        >
            <Input
            style={{
                width: '100%',
            }}
            />
        </Form.Item>

        <Form.Item
            style={{marginRight: 80}}
            name="address2"
            label="Address 2"
            rules={[
            {
                required: false,
                message: 'Please input your phone number!',
            },
            ]}
        >
            <Input
            style={{
                width: '100%',
            }}
            />
        </Form.Item>

        <Form.Item
            style={{marginRight: 80}}
            name="city"
            label="city"
            rules={[
            {
                required: false,
                message: 'Please input your city',
            },
            ]}
        >
            <Input
            style={{
                width: '100%',
            }}
            />
        </Form.Item>

        <Form.Item
            style={{marginRight: 80}}
            name="postal"
            label="Postal"
            rules={[
            {
                required: false,
                message: 'Please input your phone number!',
            },
            ]}
        >
            <Input
            style={{
                width: '100%',
            }}
            />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" >
            Update
            </Button>
            <Button onClick={(event)=>props.onCancel()} type="button">
            Cancel
            </Button>
            
            <br></br>
        </Form.Item>
        </Form>
        </div>
  );
}





export default ProfileUpdateForm;
