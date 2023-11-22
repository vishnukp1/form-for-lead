import React from 'react';
import './styles/sigma.css';
import { Button, Form } from 'react-bootstrap';
import iconone from './assets/Vector (1).png';
import icontwo from './assets/Vector (2).png';
import iconthree from './assets/Vector (3).png';
import iconfour from './assets/Vector (4).png';
import iconfive from './assets/Rectangle.png';
import iconsix from './assets/Vector (6).png';
import iconseven from './assets/Vector.png';
import iconeight from './assets/Vector9.png';
import times from './assets/Times.png';
import lead from "./assets/Lead.png"
import sigmaImage from './assets/3sigma-logo (4) 2.png';



function App() {


  return (
    <div style={{background:"#EBF0F4"}} className="App">
      <div className='top-div-one' >  <h1>Magnabox Private limited</h1>
      <img src={sigmaImage} alt="Sigma Logo" /></div>
      <div  className='top-div-two'>  <h3>Add new lead form</h3>
      <Button variant="outline-danger">Cancel</Button></div>
     <div style={{paddingLeft:"22px"}}>
    
<h6>Lead name</h6>
      <div className="inputWithIcon">
      <img className='icon-input' src={lead} alt=''></img>
        <input type="text" placeholder="Enter lead name" />
   
      </div>
<h6>Email ID</h6>
      <div className="inputWithIcon">
      <img className='icon-input' src={iconeight} alt=''></img>
        <input type="text" placeholder="Example@anyemail.com" />
        
      </div>
<h6>Phone number</h6>
      <div className="inputWithIcon">
      <img className='icon-input' src={iconseven} alt=''></img>
        <input type="text" placeholder="+91 8800688763" />
      
      </div>
<h6>Address</h6>
      <div className="inputWithIcon inputIconBg">
      <img className='icon-input' src={iconone} alt=''></img>
        <input type="text" placeholder="Gugurgram ,India" />
     
      </div>
 <div className='img-div'>
  <img style={{width:"100%",height:"160px",marginBottom:"22px"}} src={iconfive} alt=''></img>
 </div>
   {/* <MapContainer /> */}
<h6>Sale value</h6>
      <div className="inputWithIcon inputIconBg">
      <img className='icon-input' src={icontwo} alt=''></img>
        <input type="text" placeholder="50,00,000" />
       
      </div>
<h6>Date</h6>
      <div className="inputWithIcon inputIconBg">
      <img className='icon-input' src={iconthree} alt=''></img>
        <input type="text" placeholder="29 August 2023" />
      
      </div>
<h6>Time</h6>
     
      <div className="inputWithIcon inputIconBg">
      <img className='icon-input' src={times} alt=''></img>
        <input type="text" placeholder="20:21 pm" />
     
      </div>
<h6>Options</h6>
      <div className="inputWithIcon inputIconBg">
      <img className='icon-input' src={iconfour} alt=''></img>
        <input type="text" placeholder="Email" />
       
      </div>
      <h6>Products</h6>
      <div className="inputWithIcon inputIconBg">
      <img className='icon-input' src={iconfour} alt=''></img>
        <input type="text" placeholder="Select option" />
      
      </div>
      <h6>Notes</h6>
      <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows="4" placeholder="Enter note" />
  </Form.Group>
  
      <Button style={{background:"#3A4B86"}} className='add-lead'>Add Lead</Button>
    </div>
    </div>
    
  );
}

export default App;
