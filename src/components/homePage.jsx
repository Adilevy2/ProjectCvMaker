
import { Link } from 'react-router-dom';
import BottomBar from './bottomBar';
import HeadBar from './headBar';
const HomePage = (props) => {
    return ( <div>

        <div  style={{backgroundColor:'rgb(163, 179, 209)',height:'36rem'}}>
            <HeadBar></HeadBar>
            <h1 class="fw-bold font-monospace" style={{marginLeft:'71vh',marginTop:'5vh'}} >welcome to cvMaker</h1>
           <p></p>
            <div >
             <h3 style={{marginLeft:'60vh',marginTop:'10vh'}} class="form-label">First, lets choose a color theme for your cv</h3>
            <input style={{marginLeft:'100vh'}} onChange={(value)=>props.handleColor(value)} type="color" class="form-control form-control-color"/>
            </div>
             <Link className=" d-grid gap-2 col-4 mx-auto"  style={{color:'white',textDecoration: 'none',marginTop:'10vh'}} to="/ContactDetails"><button className="btn btn-primary" type="button">start your cv!</button></Link>  
        </div>
      
            <BottomBar></BottomBar>
    </div>
     );
}
 
export default HomePage;