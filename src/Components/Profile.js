import React, { useState, useEffect } from 'react';
import '../asset/Profile.css';
import { Card, Input, Button, Modal } from 'antd';

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [isCardHovered, setIsCardHovered] = useState(false);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newContact, setNewContact] = useState('');
  
  useEffect(() => { 
    fetchUserInfo();
  }, []); 

  const fetchUserInfo = async () => {
    try {

      
      const response = await fetch('https://ideateit.onrender.com/api/auth/getUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        }, 
      });  
  
      if (response.ok) { 
        const data = await response.json();
        console.log('Received data:', data); // Add this line for debugging
        setUsername(data.name);
        setEmail(data.email);  
        setContact(data.contact);
      } else {
        console.error('Failed to fetch user info');
      } 
    } catch (error) {
      console.error('Error fetching user info:', error);
      
    }
  };
  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    // Prepare the updated user data object
    const updatedUserData = {
      newUsername,
      newEmail,
      newContact,
    };
  
    // Send a PUT request to update user data
    try {
      const response = await fetch('https://ideateit.onrender.com/api/auth/updateUser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify(updatedUserData),
      });
  
      if (response.ok) {
        setUsername(newUsername);
        setEmail(newEmail);
        setContact(newContact);
        setIsModalVisible(false);
      } else {
        console.error('Failed to update user info');
      }
    } catch (error) {
      console.error('Error updating user info:', error);
    }
  };
  

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="pro-back" style={{ backgroundColor: '#0c4981', height: '100%', paddingTop: '60px' }}>
      <Card
        hoverable
        className={`carde ${isCardHovered ? 'card-hovered' : ''}`}
        title={<img style={{ height: '150px', padding: '10px', borderRadius: '50%' }} src="https://media.istockphoto.com/id/144324264/photo/business-abroad.jpg?s=612x612&w=0&k=20&c=UgWVzVEya-YQOgGk4McE8vYQj_QDzo7fCip41Ian45A=" alt="Card Header" />}
        bordered={false}
        style={{
          width: 355,
          height: "85%",
          marginLeft: '40px',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        <div style={{ color: 'white' }}>
          <p><strong>User Name:</strong> {username}</p>
          <p><strong>Email Id:</strong> {email}</p>
          <p>Contact No.: {contact}</p>
          <Button onClick={showModal} style={{ backgroundColor: "lightblue", marginTop: "0px" }}>Edit</Button>
        </div>
        <Card
          hoverable
          className={`card ${isCardHovered ? '' : 'card-hovered'}`}
           style={{
            width: 450, marginLeft: "530px",
            transition: "transform 0.3s ease", marginTop: "-350px", border: "darkblue"
          }}
          onMouseEnter={() => setIsCardHovered(false)}
          onMouseLeave={() => setIsCardHovered(true)}
          >
          <div style={{ color: 'white' }}>
            <p> Number of ideas invested in : &nbsp;&nbsp;&nbsp;&nbsp;0</p>
            <p>Total ideas posted by you : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3</p>
            <p>Most viewed idea : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Urban harvesting</p>
            <p>Amount Invested : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0 Rupees</p>

          </div>
        </Card> 
      </Card>

      <Modal
        title="Edit Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        <Input placeholder="Email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        <Input placeholder="Contact" value={newContact} onChange={(e) => setNewContact(e.target.value)} />
      </Modal>
    </div>
  );
};

export default App;
