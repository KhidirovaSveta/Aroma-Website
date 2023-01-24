import React from 'react'
import { Formik, Form, Field } from 'formik';
import { SignupSchema } from './schema';
import axios from 'axios';
import "./index.scss"
import { useNavigate } from "react-router-dom";
import {Helmet} from 'react-helmet'

const AddProducts = () => {
  const navigate = useNavigate();
  return (
    <div className='add'>
      <Helmet>
      <title>Add Product</title>
      <meta name="description" content="Your description" />
     </Helmet>
     <h1 className='addProd'>Add Product</h1>
     <Formik
       initialValues={{
        img: '',
        type: '',
        name: '',
        price: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         axios.post(`http://localhost:8080/`, values)
         navigate("/")
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>

            <div className="input">
           <Field name="img" placeholder="img"/>
           {errors.img && touched.img ? (
             <div>{errors.img}</div>
           ) : null}
            </div>

           <div className="input">
           <Field name="type" placeholder="type"/>
           {errors.type && touched.type ? (
             <div>{errors.type}</div>
           ) : null}
           </div>

           <div className="input">
           <Field name="name" placeholder="name"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           </div>

           <div className="input">
           <Field name="price" placeholder="price"/>
           {errors.price && touched.price ? (
             <div>{errors.price}</div>
           ) : null}
           </div>

           <button type="submit" className='subBtn'>Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default AddProducts