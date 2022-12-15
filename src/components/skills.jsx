import React, { Component } from 'react';
import HeadBar from './headBar';
import BottomBar from './bottomBar';
import { Link } from "react-router-dom";
import {useFormik} from 'formik'
    const Skills = (props) => {
        const formik=useFormik({
            initialValues:{
                arrSkill:[{skill:'',level:''},
               {skill:'',level:''},
               {skill:'',level:''},
               {skill:'',level:''},
               {skill:'',level:''},
               {skill:'',level:''},
               {skill:'',level:''},
               {skill:'',level:''}
            ]}});  
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-4-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"/></svg>
                    </div>
                    <div className='col'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-5-circle" viewBox="0 0 16 16">
                        <path d="M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8Zm15 0A8 8 0 1 0 0 8a8 8 0 0 0 16 0Zm-8.006 4.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>
                        </svg>
                    </div>
                </div>
           

            <div className=' rounded-4' style={{backgroundColor:'white', width:'50%',marginLeft:'25%',marginTop:'5%',borderColor:'black'}}>
            <form className="row g-3 needs-validation rounded-4" style={{backgroundColor:'rgb(211, 229, 227 )'}} >
            <h1 className="text-center">skills</h1>
                        <label for="validationCustom04" className="form-label">Choose up to 8 of the most important skills to show your talents! Make sure they match the keywords of the job listing if applying via an online system.</label>
            <div className="col-md-4">
                        <select onChange={(ev)=>props.handleSkill(ev)} class="form-select" id="validationCustom04" required>
                        <option selected disabled value=""></option>
                        <option selected>choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        </select>
                    </div>
                    <div>
                        {props.arrSkill.map(ev=>ev=<div class="row g-3 mb-3 ">
                        <div className="col-sm-5">
                            <div className="input-group">
                            <div className="input-group-text">skill</div>
                            <input  onChange={formik.handleChange}  name={props.arrSkill.indexOf(ev)===0?'arrSkill[0].skill':props.arrSkill.indexOf(ev)===1?'arrSkill[1].skill':props.arrSkill.indexOf(ev)===2?'arrSkill[2].skill':props.arrSkill.indexOf(ev)===3?'arrSkill[3].skill':props.arrSkill.indexOf(ev)===4?'arrSkill[4].skill':props.arrSkill.indexOf(ev)===5?'arrSkill[5].skill':props.arrSkill.indexOf(ev)===6?'arrSkill[6].skill':'arrSkill[7].skill'} type="text" className="form-control"/>
                            </div>
                        </div >
                        <div className="col-sm-5">
                        <select onChange={formik.handleChange} name={props.arrSkill.indexOf(ev)===0?'arrSkill[0].level':props.arrSkill.indexOf(ev)===1?'arrSkill[1].level':props.arrSkill.indexOf(ev)===2?'arrSkill[2].level':props.arrSkill.indexOf(ev)===3?'arrSkill[3].level':props.arrSkill.indexOf(ev)===4?'arrSkill[4].level':props.arrSkill.indexOf(ev)===5?'arrSkill[5].level':props.arrSkill.indexOf(ev)===6?'arrSkill[6].level':'arrSkill[7].level'} className="form-select " required>
                        <option selected disabled value=""></option>
                        <option selected>choose level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Proficient">Proficient</option>
                        <option value="Expert">Expert</option>
                        </select>
                        </div>
                        </div>
                           )}
                    </div>
               
                <div className="d-flex justify-content-between">     
                <div className="justify-content-start">
                <Link to='/Experience'><button className='btn btn-primary ' type="button">previos</button></Link>
                </div>
                <div className="justify-content-end">
                    <button onClick={(ev)=>props.handleSkillValues(ev,formik.values)} className='btn btn-primary' type="submit"><Link style={{color:'white',textDecoration: 'none'}} to='/Education'>next</Link></button>

                </div>
              
                </div>
                </form>
                  </div>                            
                </div>
        );
    }


export default Skills;
