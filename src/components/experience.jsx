import React, { Component } from 'react';
import HeadBar from './headBar';
import BottomBar from './bottomBar';
import { Link } from "react-router-dom";
import {useFormik} from 'formik'

    const Experience = (props) => {
        const formik=useFormik({
            initialValues:{
               arrExperience:[{place:'',from:'',until:'',job:''},
               {place:'',from:'',until:'' ,job:''},
               {place:'',from:'',until:'',job:''},
               {place:'',from:'',until:'',job:''},
               {place:'',from:'',until:'',job:''},
               {place:'',from:'',until:'',job:''},
               {place:'',from:'',until:'',job:''}]}});  
        return (
            <div>
            <HeadBar></HeadBar>
            
            <div className='row g-3'>
                    <div className='col' style={{marginLeft:'10%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-1-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z"/></svg>
                    </div>
                    <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-2-circle-fill" viewBox="0 0 16 16">
                     <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"/></svg>
                    </div>
                    <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-3-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"/></svg>
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
           
            <div className=' rounded-4 ' style={{backgroundColor:'white', width:'60%',marginLeft:'20%',marginTop:'5%',borderColor:'black'}}>
            <form className="row g-3 needs-validation rounded-4" style={{backgroundColor:'rgb(211, 229, 227 )'}}> 
            <h1 className="text-center">Work Experience</h1>
                        <label className="form-label">Add the jobs or positions you have held. </label>
            <div className="col-md-4">
                        <select onChange={(ev)=>props.handleExperience(ev)} class="form-select" required>
                        <option selected disabled value=""></option>
                        <option selected>choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        </select>
                    </div>
                    <div>
                        {props.arrExperience.map(ev=>ev=<div class="row g-3 mb-3 ">
                        <div className="col-sm-3">
                            <div className="input-group">
                            <div className="input-group-text">place</div>
                            <input type="text" onChange={formik.handleChange} name={props.arrExperience.indexOf(ev)===0?'arrExperience[0].place':props.arrExperience.indexOf(ev)===1?'arrExperience[1].place':props.arrExperience.indexOf(ev)===2?'arrExperience[2].place':props.arrExperience.indexOf(ev)===3?'arrExperience[3].place':props.arrExperience.indexOf(ev)===4?'arrExperience[4].place':props.arrExperience.indexOf(ev)===5?'arrExperience[5].place':'arrExperience[6].place'} className="form-control" required />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="input-group">
                            <div className="input-group-text">from : </div>
                            <input type="text" onChange={formik.handleChange} name={props.arrExperience.indexOf(ev)===0?'arrExperience[0].from':props.arrExperience.indexOf(ev)===1?'arrExperience[1].from':props.arrExperience.indexOf(ev)===2?'arrExperience[2].from':props.arrExperience.indexOf(ev)===3?'arrExperience[3].from':props.arrExperience.indexOf(ev)===4?'arrExperience[4].from':props.arrExperience.indexOf(ev)===5?'arrExperience[5].from':'arrExperience[6].from'} className="form-control" required/>
                            </div></div>
                        <div className="col-sm-2">
                            <div className="input-group">
                            <div className="input-group-text">to : </div>
                            <input type="text" onChange={formik.handleChange} name={props.arrExperience.indexOf(ev)===0?'arrExperience[0].until':props.arrExperience.indexOf(ev)===1?'arrExperience[1].until':props.arrExperience.indexOf(ev)===2?'arrExperience[2].until':props.arrExperience.indexOf(ev)===3?'arrExperience[3].until':props.arrExperience.indexOf(ev)===4?'arrExperience[4].until':props.arrExperience.indexOf(ev)===5?'arrExperience[5].from':'arrExperience[6].from'} className="form-control" required/>
                            </div></div>
                        <div className="col-sm-3">
                            <div className="input-group">
                            <div className="input-group-text">as : </div>
                            <input type="text" onChange={formik.handleChange} name={props.arrExperience.indexOf(ev)===0?'arrExperience[0].job':props.arrExperience.indexOf(ev)===1?'arrExperience[1].job':props.arrExperience.indexOf(ev)===2?'arrExperience[2].job':props.arrExperience.indexOf(ev)===3?'arrExperience[3].job':props.arrExperience.indexOf(ev)===4?'arrExperience[4].job':props.arrExperience.indexOf(ev)===5?'arrExperience[5].from':'arrExperience[6].from'} className="form-control" required/>
                            </div></div>

                           
                    </div>)}
                    </div>
               
                <div className="d-flex justify-content-between">     
                <div className="justify-content-start">
                <Link to='/AboutMe'><button className='btn btn-primary ' type="button">previos</button></Link>
                </div>
                <div className="justify-content-end">
                    <button onClick={(ev)=>props.handleExperienceValues(ev,formik.values)} className='btn btn-primary' type="submit"><Link style={{color:'white',textDecoration: 'none'}} to='/Skills'>next</Link></button>

                </div>  
               
                </div>
                </form>
                  </div>                            
                </div>
            
                
        );
    }


export default Experience;
