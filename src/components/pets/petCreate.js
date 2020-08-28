import React, {useEffect, useState} from 'react'
import {
    Form,
    Input,
    Spin,
    Checkbox,
    Button,
    Select,
    Switch,
    InputNumber,
    DatePicker
} from 'antd';



import './pets.scss'
import ContentDiv from '../layout/title';


const health_flags = [
    {name: 'allergies',verbose: 'Allgergie issues:'},{name: 'anal_gland',verbose: 'Anal gland issues:'},
    {name: 'arthritis',verbose: 'Arthritis:'},{name: 'blind',verbose: 'Blind / Poor Vision:'},
    {name: 'trachea',verbose: 'Collapsing Trachea:'},{name: 'deaf', verbose: 'Deaf/Poor hearing:'},
    {name: 'diabetic', verbose: 'Diabetic:'},{name: 'standing', verbose: 'Difficulty Standing:'},
    {name: 'epileptic', verbose: 'Epileptic:'},{name: 'heart', verbose: 'Heart Problems:'},
    {name: 'hot', verbose: 'Hot Spots:'}, {name: 'hip', verbose: 'Hip Dysplasia:'},
    {name: 'incontinince', verbose: 'Incontinence:'}, {name: 'kidney', verbose: 'Kidney Disease:'},
    {name: 'moles', verbose: 'Moles & Warts:'}, {name: 'pancreatitis', verbose: 'Pancreatitis:'},
    {name: 'ear', verbose: 'Prone to ear infection:'}, {name: 'skin', verbose: 'Sensitive Skin:'}, {name: 'tooth', verbose: 'Tooth Decay:'},
    {name: 'tumors', verbose: 'Tumors / Cysts:'},
]

const service_flags = [
    {name: 'anxiety',verbose: 'Anxiety:'}, {name: 'perfumes',verbose: 'No Perfumes:'}, {name: 'cage',verbose: 'Cage Aggressive:'},
    {name: 'photo',verbose: 'No Public Photos:'}, {name: 'clippers',verbose: 'Fear of Clippers:'}, {name: 'animals',verbose: 'Potential Aggression w/ animals:'},
    {name: 'people',verbose: 'Potential Aggression w/ people:'}, {name: 'dryer',verbose: 'Fear of Dryer:'}, {name: 'nail',verbose: 'Fear of nail clipping:'},
    {name: 'water',verbose: 'Fear of water:'}, {name: 'clipper_burn',verbose: 'Prone to clipper burn:'}, {name: 'shedding',verbose: 'Heavy Shedding:'},
    {name: 'senior',verbose: 'Senior pet:'}, {name: 'energy',verbose: 'High energy:'}, {name: 'hernia',verbose: 'Hernia:'},
    {name: 'table',verbose: 'Table/Kennel diver:'}, {name: 'team',verbose: 'Team lift:'}, {name: 'biting',verbose: 'History of biting:'},
    {name: 'chew',verbose: 'Tends to chew:'}, {name: 'leash',verbose: 'Leash required:'}, {name: 'soiler',verbose: 'Nervous soiler:'},
    {name: 'barker',verbose: 'Vocal/Barker:'},
]


export function PetCreateForm(){
    const [form] = Form.useForm();

    return (
        <div className="contentDiv">
            <ContentDiv icon={<i className="ion-ios-paw"></i>} title="Register a Pet" />
            <Form
            form={form}
            name="petcreate"
            //onFinish={}
            scrollToFirstError
            >

        <Form.Item
            style={{ marginTop: 30, width: 400}}
            name="name"
            label="Name"
            rules={[
            {
                required: true,
                message: 'Please input your Pets name!',
            },
            ]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Pet Type" style={{width: 400}}>
            <Select>
                <Select.Option value="Dog">Dog</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item
            style={{ marginTop: 30, width: 400}}
            name="breed"
            label="Pet Breed"
            rules={[
            {
                required: true,
                message: 'Please input your Pets name!',
            },
            ]}
            >
                <Input />
            </Form.Item>
            
            <Form.Item label="Pet Weight" style={{float: 'left'}}>
                <Form.Item name="weight" noStyle>
                    <InputNumber min={1} max={100} />
                </Form.Item>
                <span className="ant-form-text"> Kilograms</span>
            </Form.Item>

            <Form.Item name="sex" label="Pet Sex" style={{paddingLeft: 50, width: 200}}>
            <Select>
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item name="birthday" label="Pet Birth Date" style={{float: 'left'}}>
                <DatePicker />
            </Form.Item>

            <Form.Item name="son" label="Sprayed / Neutered" valuePropName="true" style={{ float: 'left', marginTop: 0, marginLeft: 10}}>
            <Switch />
            </Form.Item>

            <Form.Item
                style={{ marginTop: -55, marginLeft: 500, width: 400}}
                name="colour"
                label="Pet Coat Colour"
                rules={[
                {
                    required: false,
                    message: 'Please input your Pets name!',
                },
                ]}
                >
                    <Input />
            </Form.Item>
                <div>
                {health_flags.map((flag, index)=>
                    <Form.Item key={index} name={flag.name} label={flag.verbose} valuePropName="true" style={{textAlign: 'left', marginLeft: 10}}>
                        <Switch />
                    </Form.Item>)}
                </div>

                
                {service_flags.map((flag, index)=>
                    <Form.Item key={index} name={flag.name} label={flag.verbose} valuePropName="true" style={{textAlign: 'left', marginTop: 0, marginLeft: 10}}>
                        <Switch />
                    </Form.Item>)}
                
            

            </Form>
        </div>
    )
}



export default PetCreateForm;