import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BottomBar from './bottomBar';
import HeadBar from './headBar';
import {useFormik} from 'formik'

     
      const ContactDetails = (props) => {
        
        const formik=useFormik({
            initialValues:{
               firstName:'',
               lastName:'',
               phoneNumber:'',
               email:'',
               urlLink:[' ',' ',' '],
               role:''
            }
        });  
        return ( 
            <div>
            <div>
                
                <HeadBar></HeadBar>
                <div className='row g-3'>
                    <div className='col' style={{marginLeft:'10%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/></svg>
                    </div>
                    <div className='col'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-2-circle" viewBox="0 0 16 16">
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z"/></svg>
                    </div>
                    <div className='col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-3-circle" viewBox="0 0 16 16">
                        <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z"/>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>
                        </svg>
                    </div>
                    <div className='col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-4-circle" viewBox="0 0 16 16">
                        <path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"/>
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z"/>
                        </svg>
                    </div>
                    <div className='col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-5-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0Zm-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>
                        </svg>
                    </div>
                </div>
                <div className=' rounded-4' style={{backgroundColor:'white', width:'60%',marginLeft:'20%',marginTop:'5%',borderColor:'black'}}>
                <form className="row g-3 needs-validation rounded-4" style={{backgroundColor:'rgb(211, 229, 227 )'}} novalidate>
                <h1 className="text-center">contact details & info</h1>
                    <div className="col-md-4">
                        <label for="validationCustom01" className="form-label">First name</label>
                        <input onChange={formik.handleChange} name="firstName" type="text" className="form-control" id="validationCustom01" required/>
                        <div className="valid-feedback">
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Last name</label>
                        <input  onChange={formik.handleChange} name="lastName" type="text" className="form-control" required/>
                        <div className="valid-feedback">
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">Role</label>
                        <input  onChange={formik.handleChange} name="role" type="text" className="form-control" required/>
                        <div className="valid-feedback">
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label className="form-label">phone number</label>
                        <input  onChange={formik.handleChange} name="phoneNumber" type="text" className="form-control" required/>
                        <div className="valid-feedback">
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">email</label>
                        <input  onChange={formik.handleChange} name="email" type="text" className="form-control" required/>
                        <div className="invalid-feedback">
                        Please provide a valid email.
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label for="validationCustom04" className="form-label">url links</label>
                        <select onChange={(ev)=>props.handleUrl(ev)} className="form-select" required>
                        <option selected disabled value=""></option>
                        <option selected>choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        </select>
                    </div>
                    <div>
                        {props.arrUrl.map(ev=>ev=<div class="col-md-4">
                        <label className="form-label">url {props.arrUrl.indexOf(ev)+1}</label>
                        <input onChange={formik.handleChange} name={props.arrUrl.indexOf(ev)===0?'urlLink[0]':props.arrUrl.indexOf(ev)===1?'urlLink[1]':'urlLink[2]'} type="text" className="form-control" required/>
                    </div>)}
                    </div>
                    <div className="col-12">
                    </div>
                    <div className="d-flex justify-content-between">     
                <div className="justify-content-start">
                <Link to='/'><button className='btn btn-primary ' type="button">previos</button></Link>
                </div>
                <div className="justify-content-end">
                    <button onClick={(ev)=>props.handleContactDetailsValues(ev,formik.values)} className='btn btn-primary' type="submit"><Link style={{color:'white',textDecoration: 'none'}} to='/AboutMe'>next</Link></button>
                
                </div>  
                
                </div>
                    </form>
                      </div>                            
                    </div>
                    
                    </div>
         );
      }
       
      export default ContactDetails;
