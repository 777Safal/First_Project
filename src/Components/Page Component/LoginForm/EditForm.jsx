import React from 'react'
import {Form,Field,Formik,ErrorMessage} from 'formik'
import * as yup from 'yup'
import axios from 'axios'

const schema=yup.object().shape({
    Category_name:yup.string().min(3,'Not sufficent').required('Category Name is required'),
    Course:yup.string().required('Course is required'),
    Date:yup.string().required('Date is required'),
    Gender:yup.string().required('Gender is required'),
    Level_of_Education:yup.string().required('Level of Education is required'),
    Shift:yup.string().required('Shift is required'),
    SourceOfInformation:yup.string().required('Source of Information is required'),
    Stage:yup.string().min(3,'Not sufficent').required('Stage is required'),
    address:yup.string().min(3,'Not sufficent').required('Address is required'),
    contact_no:yup.string().min(3,'Not sufficent').required('Contact no. is required'),
    email:yup.string().required('Email is required'),
    gurdain_name:yup.string().min(3,'Not sufficent').required('Guardian Name is required'),
    gurdain_no:yup.string().required('Guardian Number is required'),
    id:yup.string().min(6,'Not sufficent').required('id is required'),
    name:yup.string().min(3,'Not sufficent').required('Name is required'),
    schoolName:yup.string().required('School Name is required'),
    status:yup.string().required('Status is required'),
    discount:yup.string(),
    image:yup.string()
})
function EditForm() {

    const data=[
        {   label:'Name',
            type:'text',
            identiy:'name'
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
            identiy:'address'
        },
        {   label:'Contact no',
            type:'text',
            identiy:'contact_no'
        },
        {   label:'Guardian Name',
            type:'text',
            identiy:'gurdain_name'
        },
        {   label:'Guardian Number',
            type:'text',
            identiy:'gurdain_no'
        },
        {   label:'School Name',
            type:'text',
            identiy:'schoolName'
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
                    name:'Select',
                },
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
                {name:'Select',},
                {name:'Morning'},
                {name:'Day'},
                {name:'Evening'},
            ]
        },
        {   label:'Source of Information',
            type:'text',
            identiy:'SourceOfInformation'
        },
        {   label:'Stage',
            type:'text',
            identiy:'Stage'
        },
        {   label:'Discount',
            type:'text',
            identiy:'discount'
        },
        {   label:'Email',
            type:'email',
            identiy:'email'
        },
        
        {   label:'id',
            type:'text',
            identiy:'id'
        },
        {   label:'image',
            type:'file',
            identiy:'image'
        },
        {   label:'Referal contact no',
            type:'text',
            identiy:'referal_contact_no'
        },
        {   label:'Refered by',
            type:'text',
            identiy:'refered_by'
        },
        {   label:'School Course Taken',
            type:'text',
            identiy:'schoolCourseTaken'
        },
    
        {   label:'Status',
            type:'text',
            identiy:'status'
        },
    ]
  return (
    <div className='flex justify-center items-center'>
        <div className='w-8/12 my-5 rounded-md '>
            <Formik
            initialValues={{
                Category_name:'',
                Course:'',
                Date:'',
                Gender:'',
                Level_of_Education:'',
                Shift:'',
                SourceOfInformation:'',
                Stage:'',
                address:'',
                contact_no:'',
                discount:'',
                email:'',
                gurdain_name:'',
                gurdain_no:'',
                id:'',
                image:'',
                name:'',
                referal_contact_no:'',
                refered_by:'',
                schoolCourseTaken:'',
                schoolName:'',
                status:'',
            }}
            validationSchema={schema}
            onSubmit={(values)=>{
                console.log(values)
                try {

                }catch(error) {
                    console.log(error)
                }
            }}
            >
                {({handleSubmit,})=>{
                    return <Form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-2'>
                        {data.map((val,i)=>{                          
                                if (val.type==='select'){
                                    return (
                                        <div key={i} className='flex flex-col'>
                                            <label className='text-base text-gray-500
                                        font-bbbb font-medium'>{val.label}</label>
                                            <Field as={'select'} name={val.identiy} className='bg-gray-100 mt-1 px-1 py-2 w-full rounded-md'>
                                                {val.options.map((item,index)=>{
                                                    return <option className='text-sm text-gray-500
                                                    font-bbbb font-medium' value={item.name}>{item.name}</option>
                                                })}
                                            </Field>
                                        </div>
                                    )
                                }
                                else {
                                    if(val.subdata){
                                        return <div key={i} className='h-20  flex flex-col text-base text-gray-500
                                        font-bbbb font-medium'>
                                            <label >{val.label}</label>
                                            <div className=' pl-14 flex flex-row'>
                                                {val.subdata && val.subdata.map((item,index)=>{
                                                    return <div key={index} className='mr-3 '>
                                                        <lable className='mr-1 text-sm text-gray-500
                                             font-bbbb font-medium'>{item.label}</lable>
                                                        <input type={item.type} name={val.label} />     
                                                    </div>
                                                })}
                                            </div>
                                            <ErrorMessage name={val.label} component={'div'}
                                                        className='text-red-400 text-sm font-bbbb font-semibold'/>
                                        </div>
                                    }
                                    else {
                                        if(val.type==='file'){
                                            return <div key={i} className='h-20 flex flex-col'>
                                                <label className='text-base text-gray-500
                                             font-bbbb font-medium mb-1'>{val.label}</label>
                                             <input type={'file'} name={val.identiy} className='bg-gray-100 
                                             text-gray-500 outline-none px-1  rounded-md'/>
                                            </div>
                                        }
                                        else{
                                            return <div key={i} className='h-20 flex flex-col'>
                                            <label className='text-base text-gray-500
                                             font-bbbb font-medium mb-1'>
                                                {val.label}
                                            </label>
                                            <Field type={val.type} name={val.identiy} 
                                            className='bg-gray-100 text-gray-500
                                            outline-none px-1 py-1 rounded-md'
                                            />
                                            <ErrorMessage name={val.identiy} component={'div'}
                                            className='text-red-400 text-sm font-semibold'/>
                                        </div>
                                        }
                                    }
                                }
                            })}
                        </div>
                        <div><button
                        type='submit' 
                        className='mt-5 w-60 h-16 text-base font-bbbb font-semibold tracking-widest text-hov border-2 border-hov rounded-md hover:text-white hover:bg-hov'
                        >Done</button></div>
                    </Form>
                }}
            </Formik>
        </div>
    </div>
  )
}

export default EditForm