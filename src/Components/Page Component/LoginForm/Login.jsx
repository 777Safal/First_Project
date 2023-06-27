import React,{useState} from 'react'
import {Form,Formik,ErrorMessage,Field} from 'formik'
import * as yup from 'yup'
import View from './View'

const schema=yup.object().shape({
    Category_name:yup.string().min(3,'Not sufficent').required('Category Name is required'),
    Course:yup.string().required('Course is required'),
    Date:yup.string().required('Date is required'),
    Gender:yup.string().required('Gender is required'),
    Level_of_Education:yup.string().required('Level of Education is required'),
    Shift:yup.string().required('Shift is required'),
    Source_of_Information:yup.string().required('Source of Information is required'),
    Stage:yup.string().min(3,'Not sufficent').required('Stage is required'),
    Address:yup.string().min(3,'Not sufficent').required('Address is required'),
    Contact_no:yup.string().min(3,'Not sufficent').required('Contact no. is required'),
    Created_At:yup.string().required('Created At is required'),
    Email:yup.string().required('Email is required'),
    Guardian_Name:yup.string().min(3,'Not sufficent').required('Guardian Name is required'),
    Guardian_Number:yup.string().required('Guardian Number is required'),
    id:yup.string().min(6,'Not sufficent').required('id is required'),
    Name:yup.string().min(3,'Not sufficent').required('Name is required'),
    School_Name:yup.string().required('School Name is required'),
    Status:yup.string().required('Status is required'),
})
function Login() {
    const [action,setaction] =useState('add')

    const data=[
        {   label:'Name',
            type:'text',
            identiy:'Name'
        },
        {   label:'Gender',
            identiy:'Gender',
            subdata: [
                {
                    label:'Male',
                    type:'radio',
                },
                {
                    label:'Female',
                    type:'radio',
                },
                {
                    label:'Others',
                    type:'radio',
                },]
        },
        {   label:'Address',
            type:'text',
            identiy:'Address'
        },
        {   label:'Contact no',
            type:'text',
            identiy:'Contact_no'
        },
        {   label:'Guardian Name',
            type:'text',
            identiy:'Guardian_Name'
        },
        {   label:'Guardian Number',
            type:'text',
            identiy:'Guardian_Number'
        },
        {   label:'School Name',
            type:'text',
            identiy:'School_Name'
        },
        {   label:'Category Name',
            type:'text',
            identiy:'Category_name'
        },
        {   label:'Course',
            type:'select',
            identiy:'Course',
            options: [
                {
                    name:'Mern',
                },
                {
                    name:'PHP',
                },
                {
                    name:'MySQL',
                },
                {
                    name:'JAVA',
                },
            ]
        },
        {   label:'Date',
            type:'date',
            identiy:'Date'
        },
        
        {   label:'Level of Education',
            type:'text',
            identiy:'Level_of_Education'
        },
        {   label:'Shift',
            type:'select',
            identiy:'Shift',
            options:[
                {name:'Morning'},
                {name:'Day'},
                {name:'Evening'},
            ]
        },
        {   label:'Source of Information',
            type:'text',
            identiy:'Source_of_Information'
        },
        {   label:'Stage',
            type:'text',
            identiy:'Stage'
        },
        
        
        {   label:'Created At',
            type:'text',
            identiy:'Created_At'
        },
        {   label:'Discount',
            type:'text',
            identiy:'Discount'
        },
        {   label:'Email',
            type:'email',
            identiy:'Email'
        },
        
        {   label:'id',
            type:'text',
            identiy:'id'
        },
        {   label:'image',
            type:'text',
            identiy:'image'
        },
        {   label:'Referal contact no',
            type:'text',
            identiy:'Referal_contact_no'
        },
        {   label:'Refered by',
            type:'text',
            identiy:'Refered_by'
        },
        {   label:'School Course Taken',
            type:'text',
            identiy:'School_Course_Taken'
        },
    
        {   label:'Status',
            type:'text',
            identiy:'Status'
        },
    ]
  return (
    <div className='w-full pb-10 flex bg-white justify-center items-center'>
     {
        action==='view'?<View />:   <div className='w-8/12 mt-10 overflow-hidden  rounded-md'>
        <Formik
            initialValues={{
                Category_name:'',
                Course:'',
                Date:'',
                Gender:'',
                Level_of_Education:'',
                Shift:'',
                Source_of_Information:'',
                Stage:'',
                Address:'',
                Contact_no:'',
                Created_At:'',
                Discount:'',
                Email:'',
                Guardian_Name:'',
                Guardian_Number:'',
                id:'',
                image:'',
                Name:'',
                Referal_contact_no:'',
                Refered_by:'',
                School_Course_Taken:'',
                School_Name:'',
                Status:'',
            }}
                // validationSchema={schema}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                {({handleSubmit})=>{
                    return <Form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-2'>
                            {data.map((val,i)=>{                          
                                if (val.type==='select'){
                                    return (
                                        <div key={i} className='flex flex-col'>
                                            <label className='text-base text-gray-500
                                        font-bbbb font-medium'>{val.label}</label>
                                            <select className='bg-gray-100 mt-1 px-1 py-2 w-full rounded-md'>
                                                {val.options.map((item,index)=>{
                                                    return <option className='text-sm text-gray-500
                                                    font-bbbb font-medium'>{item.name}</option>
                                                })}
                                            </select>
                                        </div>
                                    )
                                }
                                else {
                                    if(val.subdata){
                                        return <div key={i} className='flex flex-col text-base text-gray-500
                                        font-bbbb font-medium'>
                                            <label >{val.label}</label>
                                            <div className='mt-3 pl-14 flex flex-row'>
                                                {val.subdata && val.subdata.map((item,index)=>{
                                                    return <div key={index} className='mr-3 '>
                                                        <lable className='mr-1 text-sm text-gray-500
                                             font-bbbb font-medium'>{item.label}</lable>
                                                        <Field type={item.type} name={val.label} />
                                                        
                                                    </div>
                                                })}
                                            </div>
                                            <ErrorMessage name={val.label} component={'div'}
                                                        className='text-red-400 text-sm font-bbbb font-semibold'/>
                                        </div>
                                    }
                                    else {
                                        return <div key={i} className='flex flex-col mb-2 justify-center'>
                                            <label className='text-base text-gray-500
                                             font-bbbb font-medium mb-1'>
                                                {val.label}
                                            </label>
                                            <Field type={val.type} name={val.identiy} 
                                            className='bg-gray-100 text-gray-500
                                            outline-none px-1 py-2 rounded-md'
                                            />
                                            <ErrorMessage name={val.identiy} component={'div'}
                                            className='text-red-400 text-sm font-semibold'/>
                                        </div>
                                    }
                                }
                            })}
                        </div>
                        <div><button 
                        className='mt-5 w-60 h-16 text-base font-bbbb font-semibold tracking-widest text-hov border-2 border-hov rounded-md hover:text-white hover:bg-hov'
                        >Submit</button></div>
                        <div className='flex justify-between my-10'>
                            <div><button onClick={()=>setaction('add')} className='w-56 h-14 bg-scholarship2 text-white font-bbbb text-base rounded-md' >Add</button></div>
                            <div><button onClick={()=>setaction('view')} className='w-56 h-14 bg-scholarship2 text-white font-bbbb text-base rounded-md'>View</button></div>
                        </div>
                    </Form>
                }}
            </Formik>
        </div>
     }
    </div>
  )
}

export default Login

