import React, {useEffect, useState} from 'react'
import history from '../../history'
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
import axios from 'axios';



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
    {name: 'tumors', verbose: 'Tumors / Cysts:'}
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



    const onFinish = (values) =>{

        const formValues = {name: values.name, pet_type: values.pet_type,breed: values.breed,gender: values.gender,son: values.son,
            weight: values.weight,coat: values.coat,birthday: values.birthday,allergies: values.allergies,anal_gland: values.anal_gland,
            arthirits: values.arthritis,blind: values.blind,trachea: values.trachea,deaf: values.deaf,diabetic: values.diabetic,
            standing: values.standing,epileptic: values.epileptic,heart: values.heart,hot: values.hot,hip: values.hip,
            incontinince: values.incontinince,kidney: values.kidney,moles: values.moles,pancreatitis: values.pancreatitis,ear: values.ear, 
            skin: values.skin, tooth: values.tooth,tumors: values.tumors,anxiety: values.anxiety, perfumes: values.perfumes, cage: values.cage,
            photo: values.photo, clippers: values.clippers, animals: values.animals,people: values.people, dryer: values.dryer, nail: values.nail,
            water: values.water, clipper_burn: values.clipper_burn, shedding: values.shedding,senior: values.senior, energy: values.energy, 
            hernia: values.hernia,table: values.table, team: values.team, biting: values.biting,chew: values.chew, leash: values.leash, 
            soiler: values.soiler,barker: values.barker}

        console.log(values)
        const username = localStorage.getItem('userName')
        return axios.post(`http://localhost:8000/api/pets/${username}/create`, formValues)
            .then((response) => {
                 console.log("QUOTE:",response, "Response Message:", response.request.response)
                   }) .catch((error)=> {
                        console.log(error);
                  });
            
            
}
    
    const [form] = Form.useForm();

    return (
        <>
        <ContentDiv icon='ion-ios-paw' title='Create a pet profile' />
            <Form
            form={form}
            name="petcreate"
            onFinish={onFinish}
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

            <Form.Item label="Pet Type" name="pet_type" style={{width: 400}}>
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

            <Form.Item name="gender" label="Pet Sex" style={{paddingLeft: 50, width: 200}}>
            <Select>
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
            </Select>
            </Form.Item>

            <Form.Item name="birthday" label="Pet Birth Date" style={{float: 'left'}}>
                <DatePicker format="DD/MM/YYYY" />
            </Form.Item>

            <Form.Item name="son" label="Sprayed / Neutered" valuePropName="true" style={{ float: 'left', marginTop: 0, marginLeft: 10}}>
            <Switch />
            </Form.Item>

            <Form.Item
                style={{ marginTop: -55, marginLeft: 500, width: 400}}
                name="coat"
                label="Pet Coat Colour"
                rules={[
                {
                    required: true,
                    message: 'Please input your Pets name!',
                },
                ]}
                >
                    <Input />
            </Form.Item>
                <div>
                {health_flags.map((flag, index)=>
                    <Form.Item key={index} name={flag.name} label={flag.verbose} style={{textAlign: 'left', marginLeft: 10}}>
                        <Switch />
                    </Form.Item>)}
                </div>

                
                {service_flags.map((flag, index)=>
                    <Form.Item key={index} name={flag.name} label={flag.verbose} style={{textAlign: 'left', marginTop: 0, marginLeft: 10}}>
                        <Switch />
                    </Form.Item>)}
                
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                        Register Pet
                        </Button>
                    </Form.Item>
            

            </Form>
            </>
    )
}



export default PetCreateForm;