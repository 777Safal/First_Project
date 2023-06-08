// import React from 'react'
// // import {BsFillPinFill} from 'react-icons/bs'
// // import {BiSolidPlaneAlt} from 'react-icons/bi'
// // import {IoEarth} from 'react-icons/io'
// import {Form,Formik,Field,ErrorMessage} from 'formik'
// import * as yup from 'yup'

// const schema=yup.object().shape({
//     firstName:yup.string().min(3,'Not sufficent').required('Enter First Name'),
//     lastName:yup.string().min(3,'Not sufficent').required('Enter Last Name'),
//     lastName:yup.string().min(3,'Not sufficent').required('Enter Last Name'),
//     email:yup.string().min(3,'Not sufficent').required('Enter your Email'),
//     address:yup.string().required('Enter your address'),
//     city:yup.string().required('Enter your city name'),
//     country:yup.string().required('Enter your country name'),
//     msg:yup.string().required('Enter your message'),
//     primarycolor:yup.required('Enter Primary color'),
//     secondarycolor:yup.string().required('Enter Secondary color'),
//     accentcolor:yup.string().required('Enter Assent color'),
// })
// function FormElement() {
//     const data=[
//         {type:'text', placeholder:'First Name', identiy:'firstName',},
//         {type:'text', placeholder:'Last Name', identiy:'lastName',},
//         {type:'text', placeholder:'Last Name', identiy:'lastName',},
//         {type:'email', placeholder:'Email address', identiy:'email',},
//         // {type:'text', placeholder:'Address', identiy:'address', icon:<BsFillPinFill/>,},
//         // {type:'text', placeholder:'City', identiy:'city', icon:<BiSolidPlaneAlt/>,},
//         // {type:'text', placeholder:'Country', identiy:'country', icon:<IoEarth/>,},
//     ]
//     const color=[
//         {type:'text', placeholder:'Primary color', identiy:'primarycolor'},
//         {type:'text', placeholder:'Secondary color', identiy:'secondarycolor'},
//         {type:'text', placeholder:'Accent color', identiy:'accentcolor'},
//     ]
//     const msg=[
//         {type:'text',placeholder:'Message', identiy:'msg'}
//     ]
//   return (
//     <div>
//         <Formik 
//         initialValues={{
//             firstName:'',
//             lastName:'',
//             lastName:'',
//             email:'',
//             address:'',
//             city:'',
//             country:'',
//             msg:'',
//             primarycolor:'',
//             secondarycolor:'',
//             accentcolor:'',
//         }}
//             // validationSchema={schema}
//             onSubmit={(values)=>{
//                 console.log(values)
//             }}
//             >
//                 {({handleSubmit})=>{
//                     return <Form onSubmit={handleSubmit}>
//                         <div>
//                         {data.map((val,i)=>{
//                             return <div key={i}>
//                                 <Field type={val.type} placeholder={val.placeholder} name={val.identiy}/>
//                                 <ErrorMessage name={val.identiy} component={'div'}/>
//                             </div>
//                         })}
//                         </div>
//                         <div>
//                             <textarea type={msg[0].type} name={msg[0].identiy} placeholder={msg[0].placeholder}/>
//                         </div>
//                         <div>
//                             {color.map((val,i)=>{
//                                 return <div key={i}>
//                                     <Field type={val.type} name={val.identiy} placeholder={val.placeholder}/>
//                                 </div>
//                             })}
//                         </div>
//                     </Form>
//                 }}
//             </Formik>
//     </div>
//   )
// }

// export default FormElement