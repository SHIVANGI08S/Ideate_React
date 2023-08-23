import React from 'react';
import '../asset/Profile.css';
import { Card } from 'antd';
const App = () => (
    <div style={{ backgroundColor: '#0c4981', height:"100%",paddingTop:"60px"}}>
  <Card
   hoverable 
    className='card'
    title={ <img style={{height:"150px",padding:"10px",borderRadius:"50%"}}src="https://media.istockphoto.com/id/144324264/photo/business-abroad.jpg?s=612x612&w=0&k=20&c=UgWVzVEya-YQOgGk4McE8vYQj_QDzo7fCip41Ian45A=" alt="Card Header" />}
    bordered={false}
    style={{
      width: 350,
      marginLeft:"40px",
      transition: "transform 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)'; // Scale up slightly on hover
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)'; // Reset scale when not hovered
    }}
   
  >
   <div style ={{color:'white'}}>
    <p><strong>User Name: </strong>Kritika Shah</p>
    <p><strong>Email Id:</strong> kritika123@gmail.com</p>
    <p>Contact No. : 12345678</p>
    </div>
  </Card>
  <Card 
  hoverable
  className="card" style={{ width: 450 ,  marginLeft:"530px",
      transition: "transform 0.3s ease", marginTop:"-350px" , border:"darkblue"}}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'; // Scale up slightly on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'; // Reset scale when not hovered
      }}>
    <div style ={{color:'white'}}>
    <p> Number of ideas invested in : &nbsp;&nbsp;&nbsp;&nbsp;2</p>
    <p>Total ideas posted by you : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</p>
    <p>Most viewed idea : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Urban harvesting</p>
    </div>
   
  </Card>

  </div>
 
);
export default App;