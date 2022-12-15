import React, { Component } from 'react';
import { Route, Routes} from "react-router-dom";
import AboutMe from './aboutMe';
import ContactDetails from './contactDetails';
import Education from './education';
import Experience from './experience';
import HomePage from './homePage';
import PagePdf from './pagePdf';
import Skills from './skills';

class Master extends Component {
    state={
        colorValue:'',
        arrUrl:[],
        arrContactValues:['firstName','lastName','phoneNumber','email','role'],
        arrUrl2:[],
        arrAboutMeValues:[],
        arrExperienceValues:[{place:'',from:'',until:''},
        {place:'',from:'',until:''},
        {place:'',from:'',until:''},
        {place:'',from:'',until:''},
        {place:'',from:'',until:''},
        {place:'',from:'',until:''},
        {place:'',from:'',until:''}],
        arrSkillValues:[{skill:'',level:''},
        {skill:'',level:''},
        {skill:'',level:''},
        {skill:'',level:''},
        {skill:'',level:''},
        {skill:'',level:''},
        {skill:'',level:''},
        {skill:'',level:''}],
        arrEducationValues:[' ',' ',' ',' '],
        arrLanguageValues:[{language:'',level:''},
        {language:'',level:''},
        {language:'',level:''},
        {language:'',level:''}],
        arrExperience:[],
        arrEducations:[],
        arrLanguage:[],
        arrSkill:[]
    }
    handleSkill=(value)=>{
        let arrSkill=[];
       if(value.target.value=='1')
       arrSkill=[1];
       if(value.target.value=='2')
       arrSkill=[1,2];
       if(value.target.value=='3')
       arrSkill=[1,2,3];
       if(value.target.value=='4')
       arrSkill=[1,2,3,4];
       if(value.target.value=='5')
       arrSkill=[1,2,3,4,5];
       if(value.target.value=='6')
       arrSkill=[1,2,3,4,5,6];
       if(value.target.value=='7')
       arrSkill=[1,2,3,4,5,6,7];
       if(value.target.value=='8')
       arrSkill=[1,2,3,4,5,6,7,8];
        this.setState({arrSkill})    
    }
    handleUrl=(value)=>{
        let arrUrl=[];
        if(value.target.value==='1')
        arrUrl=[1];
        if(value.target.value==='2')
        arrUrl=[1,2];
        if(value.target.value==='3')
        arrUrl=[1,2,3]; 
        this.setState({arrUrl}); 
     };
     handleExperience=(value)=>{
        let arrExperience=[];
       if(value.target.value=='1')
       arrExperience=[1]
       if(value.target.value=='2')
       arrExperience=[1,2]
       if(value.target.value=='3')
       arrExperience=[1,2,3]
       if(value.target.value=='4')
       arrExperience=[1,2,3,4]
       if(value.target.value=='5')
       arrExperience=[1,2,3,4,5]
       if(value.target.value=='6')
       arrExperience=[1,2,3,4,5,6]
       if(value.target.value=='7')
       arrExperience=[1,2,3,4,5,6,7]
        this.setState({arrExperience})    
    }
    handleEducation=(value)=>{
        let arrEducations=[];
       if(value.target.value=='1')
       arrEducations=[1];
       if(value.target.value=='2')
       arrEducations=[1,2];
       if(value.target.value=='3')
       arrEducations=[1,2,3];
       if(value.target.value=='4')
       arrEducations=[1,2,3,4];
        this.setState({arrEducations})   ; 
    }
    handleLanguage=(value)=>{
        let arrLanguage=[];
       if(value.target.value=='1')
       arrLanguage=[1];
       if(value.target.value=='2')
       arrLanguage=[1,2];
       if(value.target.value=='3')
       arrLanguage=[1,2,3];
       if(value.target.value=='4')
       arrLanguage=[1,2,3,4];
       if(value.target.value=='5')
       arrLanguage=[1,2,3,4,5];
       if(value.target.value=='6')
       arrLanguage=[1,2,3,4,5,6];
        this.setState({arrLanguage})   ; 
    }
    handleContactDetailsValues=(ev,values)=>{
        ev.preventDefault();
        let arrContactValues=this.state.arrContactValues;
        arrContactValues[0]=values.firstName;
        arrContactValues[1]=values.lastName;
        arrContactValues[2]=values.phoneNumber;
        arrContactValues[3]=values.email;
        arrContactValues[4]=values.role;
        let arrUrl2=[1,2,3];
        arrUrl2=arrUrl2.map(ev=>ev=values.urlLink[arrUrl2.indexOf(ev)]);
        this.setState({arrContactValues,arrUrl2});
    }
    handleExperienceValues=(ev,values)=>{
        ev.preventDefault();
        let arrExperienceValues=this.state.arrExperienceValues;
        arrExperienceValues=arrExperienceValues.map(ev=>ev=values.arrExperience[arrExperienceValues.indexOf(ev)]);
        this.setState({arrExperienceValues});
    }
    handleSkillValues=(ev,values)=>{
        ev.preventDefault();
        let arrSkillValues=this.state.arrSkillValues;
        arrSkillValues=arrSkillValues.map(ev=>ev=values.arrSkill[arrSkillValues.indexOf(ev)]);
        this.setState({arrSkillValues});
    }
    handleEducateValues=(ev,values)=>{
        ev.preventDefault();
        let arrLanguageValues=[1,2,3,4];
        let arrEducationValues=this.state.arrLanguageValues;
        arrLanguageValues=arrLanguageValues.map(ev=>ev=values.arrLanguage[arrLanguageValues.indexOf(ev)]);
        arrEducationValues=arrEducationValues.map(ev=>ev=values.arrEducation[arrEducationValues.indexOf(ev)]);
        this.setState({arrLanguageValues});
        this.setState({arrEducationValues});
    }
    handleAboutMeValues=(ev,values)=>{
        ev.preventDefault();
        let arrAboutMeValues=[values.input];
        this.setState({arrAboutMeValues});    
    }
    handleColor=(value)=>{
        let colorValue= value.target.value;
        this.setState({colorValue})
    }
    render() {
        return (
                <React.Fragment>    
                        <Routes>
                          <Route path="/" element={<HomePage handleColor={(value)=>this.handleColor(value)}></HomePage>}></Route>
                          <Route path="/ContactDetails" element={<ContactDetails  handleContactDetailsValues={(ev,values)=>this.handleContactDetailsValues(ev,values)} handleUrl={(value)=>this.handleUrl(value)} arrUrl={this.state.arrUrl}></ContactDetails>}></Route>
                          <Route path="/Education" element={<Education handleEducateValues={(ev,values)=>this.handleEducateValues(ev,values)}  handleLanguage={(value)=>this.handleLanguage(value)} handleEducation={(value)=>this.handleEducation(value)} arrEducations={this.state.arrEducations} arrLanguage={this.state.arrLanguage}></Education>}></Route>
                          <Route path="/Skills" element={<Skills handleSkillValues={(ev,values)=>this.handleSkillValues(ev,values)} handleSkill={(value)=>this.handleSkill(value)} arrSkill={this.state.arrSkill}></Skills>}></Route>
                          <Route path="/Experience" element={<Experience handleExperienceValues={(ev,values)=>this.handleExperienceValues(ev,values)} handleExperience={(value)=>this.handleExperience(value)} arrExperience={this.state.arrExperience}></Experience>}></Route>
                          <Route path="/AboutMe" element={<AboutMe handleAboutMeValues={(ev,values)=>this.handleAboutMeValues(ev,values)}></AboutMe>}></Route>
                          <Route path="/PagePdf" element={<PagePdf colorValue={this.state.colorValue} arrUrl2={this.state.arrUrl2} arrContactValues={this.state.arrContactValues} arrAboutMeValues={this.state.arrAboutMeValues} arrEducationValues={this.state.arrEducationValues} arrLanguageValues={this.state.arrLanguageValues} arrExperienceValues={this.state.arrExperienceValues} arrSkillValues={this.state.arrSkillValues}></PagePdf>}></Route>
                      </Routes>
                
            </React.Fragment>
        );
    }
}

export default Master;
