import React, { Component } from 'react';
import HeadBar from './headBar';
import {useFormik} from 'formik'
import BottomBar from './bottomBar';
import { Link } from "react-router-dom";

    const Education = (props) => {
        const formik=useFormik({
            initialValues:{
               arrEducation:[' ',' ',' ',' '],
               arrLanguage:[{language:'',level:''},
               {language:'',level:''},
               {language:'',level:''},
               {language:'',level:''}
            ]
            
            }});  
             
        return (
            <div >
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-4-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"/></svg>
                    </div>
                    <div className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-5-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.006 4.158c1.74 0 2.924-1.119 2.924-2.806 0-1.641-1.178-2.584-2.56-2.584-.897 0-1.442.421-1.612.68h-.064l.193-2.344h3.621V4.002H5.791L5.445 8.63h1.149c.193-.358.668-.809 1.435-.809.85 0 1.582.604 1.582 1.57 0 1.085-.779 1.682-1.57 1.682-.697 0-1.389-.31-1.53-1.031H5.276c.065 1.213 1.149 2.115 2.72 2.115Z"/></svg>
                    </div>
                </div>
           
            
            <div className=' rounded-4' style={{backgroundColor:'white', width:'50%',marginLeft:'25%',marginTop:'5%',borderColor:'black'}}>
            <form className="row g-3 needs-validation rounded-4" style={{backgroundColor:'rgb(211, 229, 227 )'}} >
                <h1 class="text-center">Education</h1>
                        <label className="form-label">Add your educational qualification, such as a university degree, master's degree and doctorate. Do not add a high school diploma unless you have not completed your university studies.</label>
            <div className="col-md-4">
                        <select onChange={(ev)=>props.handleEducation(ev)} className="form-select" required>
                        <option selected disabled value=""></option>
                        <option selected>choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                        {props.arrEducations.map(ev=>ev=<div class="row g-3 mb-3 ">
                        <div className="col-sm-10">
                            <div className="input-group">
                            <div className="input-group-text">{props.arrEducations.indexOf(ev)+1} </div>
                            <input  onChange={formik.handleChange} name={ev===4?'arrEducation[3]':ev===3?'arrEducation[2]':ev===2?'arrEducation[1]':'arrEducation[0]'} type="text" className="form-control"  required />
                            </div>
                        </div>
                        </div>
                           )}
                    </div>

                    <div class="col-md-4">
                        <label for="validationCustom04" className="form-label">spoken Languages</label>
                        <select onChange={(ev)=>props.handleLanguage(ev)} class="form-select" id="validationCustom04" required>
                        <option selected disabled value=""></option>
                        <option selected>choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                    {props.arrLanguage.map(ev=>ev=<div class="row g-3 mb-3 ">
                        <div className="col-sm-5">
                            <div className="input-group">
                            <div className="input-group-text">{props.arrLanguage.indexOf(ev)+1} </div>
                            <input onChange={formik.handleChange} name={props.arrLanguage.indexOf(ev)===0?'arrLanguage[0].language':props.arrLanguage.indexOf(ev)===1?'arrLanguage[1].language':props.arrLanguage.indexOf(ev)===2?'arrLanguage[2].language':'arrLanguage[3].language'} type="text" className="form-control" required />
                            </div>
                        </div>
                        <div className="col-sm-5">
                        <select onChange={formik.handleChange} name={props.arrLanguage.indexOf(ev)===0?'arrLanguage[0].level':props.arrLanguage.indexOf(ev)===1?'arrLanguage[1].level':props.arrLanguage.indexOf(ev)===2?'arrLanguage[2].level':'arrLanguage[3].level'} className="form-select " required>
                        <option selected disabled value=""></option>
                        <option selected>choose level</option>
                        <option value="Basic">Basic</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Native">Native</option>
                        </select>
                        </div>
                        </div>
                           )}
                    </div>
               
                    <div className="d-flex justify-content-between">     
                <div className="justify-content-start">
                <Link to='/Skills'><button className='btn btn-primary ' type="button">previos</button></Link>
                </div>
                <div className="justify-content-end">
                    <button onClick={(ev)=>props.handleEducateValues(ev,formik.values)} className='btn btn-primary' type="submit"><Link style={{color:'white',textDecoration: 'none'}} to='/PagePdf'>next</Link></button>
                    
                </div>  
             
                </div>
                </form>
                  </div>                            
                
                
            </div>
        );
    }


export default Education;
