import React from 'react'
import {Form,Formik,ErrorMessage,Field} from 'formik'
import * as yup from 'yup'

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
    const data=[
        {   placeholder:'Category Name',
            type:'text',
            identiy:'Category_name'
        },
        {   placeholder:'Course',
            type:'text',
            identiy:'Course',
        },
        {   placeholder:'Date',
            type:'date',
            identiy:'Date'
        },
        {   placeholder:'Level of Education',
            type:'text',
            identiy:'Level_of_Education'
        },
        {   placeholder:'Shift',
            type:'text',
            identiy:'Shift'
        },
        {   placeholder:'Source of Information',
            type:'text',
            identiy:'Source_of_Information'
        },
        {   placeholder:'Stage',
            type:'text',
            identiy:'Stage'
        },
        {   placeholder:'Address',
            type:'text',
            identiy:'Address'
        },
        {   placeholder:'Contact no',
            type:'text',
            identiy:'Contact_no'
        },
        {   placeholder:'Created At',
            type:'text',
            identiy:'Created_At'
        },
        {   placeholder:'Discount',
            type:'text',
            identiy:'Discount'
        },
        {   placeholder:'Email',
            type:'email',
            identiy:'Email'
        },
        {   placeholder:'Guardian Name',
            type:'text',
            identiy:'Guardian_Name'
        },
        {   placeholder:'Guardian Number',
            type:'text',
            identiy:'Guardian_Number'
        },
        {   placeholder:'id',
            type:'text',
            identiy:'id'
        },
        {   placeholder:'image',
            type:'text',
            identiy:'image'
        },
        {   placeholder:'Name',
            type:'text',
            identiy:'Name'
        },
        {   placeholder:'Referal contact no',
            type:'text',
            identiy:'Referal_contact_no'
        },
        {   placeholder:'Refered by',
            type:'text',
            identiy:'Refered_by'
        },
        {   placeholder:'School Course Taken',
            type:'text',
            identiy:'School_Course_Taken'
        },
        {   placeholder:'School Name',
            type:'text',
            identiy:'School_Name'
        },
        {   placeholder:'Status',
            type:'text',
            identiy:'Status'
        },
    ]
  return (
    <div className='w-full  flex bg-white justify-center items-center'>
        <div className='w-8/12 mt-10 bg-gray-100 overflow-hidden  rounded-md'>
        <Formik
            ijnitalValues={{
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
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                {({handleSubmit})=>{
                    return <Form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-2 gap-2 font-poping text-sm font-normal'>
                            {data.map((val,i)=>{
                                return <div key={i} className='mb-5 ' >
                                    <Field type={val.type} name={val.identiy} placeholder={val.placeholder} 
                                    className='w-full px-3 py-1 bg-gray-200 rounded-md outline-none text-gray-500'/>
                                    <ErrorMessage name={val.identiy} component={'div'} className='text-red-500'/>
                                </div>
                            })}
                        </div>
                    </Form>
                }}
            </Formik>
        </div>
    </div>
  )
}

export default Login