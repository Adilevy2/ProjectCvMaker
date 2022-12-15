import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeadBar extends Component {
    state={
    }
   
    render() {
        return (
            <div style={{height:'4rem',backgroundColor:'rgb(60, 109, 205)'}}  >    
                <h1 style={{fontSize:'3rem', fontFamily:'fantasy'}}><Link style={{color:'black'}} to="/">cvMaker</Link></h1>         
            </div>
        );
    }
}

export default HeadBar;
