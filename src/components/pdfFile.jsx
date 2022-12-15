import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import PagePdf from "./pagePdf";
 

const PdfFile = (props) => {
    let firstName=props.arrContactValues.filter(ev=>props.arrContactValues.indexOf(ev)==0);
    let lastName=props.arrContactValues.filter(ev=>props.arrContactValues.indexOf(ev)==1);
    let phoneNumber=props.arrContactValues.filter(ev=>props.arrContactValues.indexOf(ev)==2);
    let email=props.arrContactValues.filter(ev=>props.arrContactValues.indexOf(ev)==3);
    let role=props.arrContactValues.filter(ev=>props.arrContactValues.indexOf(ev)==4);
    let url=props.arrUrl2;
    let skills=props.arrSkillValues.map(ev=>ev=props.arrSkillValues[props.arrSkillValues.indexOf(ev)]);
    let experience=props.arrExperienceValues;
    let education=props.arrEducationValues;
    let language=props.arrLanguageValues;
    const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("cv-cvMaker.pdf");
    });
  };
    return (  
        <div>
            
        <div classNam="mb5">
        <button onClick={printDocument}>Print</button>
      </div>
    <div style={{width:'40%', height:'800px'}} className='row '  id="divToPrint" ref={inputRef}>
<div className="col-4" style={{backgroundColor:'rgb(80, 144, 138)'}}>
    <div>
        <br></br>
        <h4 style={{fontSize:'15px'}} className="fw-bold text-decoration-underline">contact</h4>
        <hr></hr>
        {phoneNumber.map(ev=>ev=<h6  style={{fontSize:'10px'}} className="fw-bold "> phone number: {phoneNumber[phoneNumber.indexOf(ev)]} </h6>)}
        {email.map(ev=>ev=<h6 style={{fontSize:'10px'}} className="fw-bold"> email: {email[email.indexOf(ev)]} </h6>)}
        <ul>
        {url.map(ev=>url[url.indexOf(ev)]!==' '?ev=<li><h6 style={{fontSize:'10px'}} className="fw-bold"> {url[url.indexOf(ev)]} </h6></li>:'')}
        </ul>
        <hr></hr>
        <h4  style={{fontSize:'15px'}} className="fw-bold text-decoration-underline">Skills</h4>
        {skills.map(ev=>ev.skill!==''?ev=<span  className="fw-bold"> <h6 style={{fontSize:'10px'}}>{skills[skills.indexOf(ev)].skill} - {skills[skills.indexOf(ev)].level} </h6> </span>:'')}
        <hr></hr>
        <br></br>
        <h4  style={{fontSize:'15px'}} className="fw-bold text-decoration-underline">Languages</h4>
        {language.map(ev=>ev.language!==''?ev=<span  className="fw-bold"> <h6 style={{fontSize:'10px'}}>{language[language.indexOf(ev)].language} - {language[language.indexOf(ev)].level} </h6> </span>:'')}

    </div>
</div>
<div class="col-8">
    <br></br>
    <h1 className="text-center">
  {firstName.map(ev=>ev=<span style={{fontSize:'20px'}} className="fw-bold">{firstName[firstName.indexOf(ev)]} </span>)}
  {lastName.map(ev=>ev=<span style={{fontSize:'20px'}} className="fw-bold">{lastName[lastName.indexOf(ev)]}</span>)}
    </h1>
    <h4 className="text-center text-secondary">  {role.map(ev=>ev=<span style={{fontSize:'15px'}}>{role[role.indexOf(ev)]}</span>)}</h4>
    <hr></hr>
    <div>
    <div style={{width:"100px"}}>
    <p>
         {props.arrAboutMeValues.map(ev=>ev=<span style={{fontSize:'10px'}} className="fw-bold">{props.arrAboutMeValues[props.arrAboutMeValues.indexOf(ev)]} </span>)} 
    </p>
    </div>
    </div>
    <hr></hr>
    <h2 style={{fontSize:'20px'}}>Experience</h2>
    <hr></hr>
    <p>
        <ul>
        {experience.map(ev=>experience[experience.indexOf(ev)].place!==''?ev=<li><p   className="fw-bold" style={{wordSpacing: '3px', fontSize:'10px'}}>  worked at <span>{experience[experience.indexOf(ev)].place}</span > as {experience[experience.indexOf(ev)].job}  <span style={{marginLeft:'20%'}}>{experience[experience.indexOf(ev)].from} - {experience[experience.indexOf(ev)].until}</span> </p></li>:'')}
        </ul>
    </p>
    <hr></hr>
    <h2 style={{fontSize:'20px'}}>Education</h2>
    <ul>
    {education.map(ev=>education[education.indexOf(ev)]!==' '?ev=<li><h6 style={{fontSize:'10px'}} className="fw-bold"> {education[education.indexOf(ev)]} </h6></li>:'')}
    </ul>
    <hr></hr>
     </div>
</div>

    </div>
    );
}
 
export default PdfFile;