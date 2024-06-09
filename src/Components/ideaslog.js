import React, { useState, useEffect } from 'react';
import Background from '../asset/image/Background.jpg';
import { Button, Modal, Input, Select, Row,Col } from 'antd';
import { Card } from 'antd';
import '../asset/ideas.css';
import ideasData from './constant';

const { Meta } = Card;
const { Option } = Select; 
export default function Ideas() {
  const [open, setOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const [investModalOpen, setInvestModalOpen] = useState(false);
  const [name, setName] = useState(localStorage.getItem('username') || '');
  const [amountUnit, setAmountUnit] = useState('lakhs'); // State variable for amountDigitsunit
  const [amountDigits, setAmountDigits] = useState(''); 
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('contact') || '');


  const [amountError, setAmountError] = useState(false);
  const [username, setUsername] = useState('');
  const[contact, setContact] = useState('');
  const openModal = (index) => {
    setSelectedCardIndex(index);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedCardIndex(null);
  };

  // Function to open the Invest modal
  const openInvestModal = () => {
    setInvestModalOpen(true);
  };

  // Function to close the Invest modal
  const closeInvestModal = () => {
    setInvestModalOpen(false);
    console.log('Invest modal closed');
    setAmountDigits('');
  };
  

  const handleSubmit = () => {
    console.log('Submit button clicked');
    if (username && amountDigits && contact) {
      alert('Offer Sent');
      console.log('Before closing modal: investModalOpen', investModalOpen);
      closeInvestModal();  
      console.log('After closing modal: investModalOpen', investModalOpen);
    } else {
      if (!username || !amountDigits || !contact) {
        setAmountError(true);
      }
    }
  };
  
  
  

  // State variable to track the error state of the "Amount" input
 

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
        setContact(data.contact) // Set the username from the API response
      } else {
        console.error('Failed to fetch user info');
      } 
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  return (
    <div className="ideas-container" style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat" }}>
      <h1 className="centered-title">Explore some Top innovative ideas</h1>
      <div className="card-container">
        {ideasData.map((card, index) => (
          <Card
            key={index} 
            hoverable={card.hoverable}
            className="custom-card"
            cover={<img className="pro" alt="example" src={card.cover} />}
          >
            <Meta title={card.meta.name} />
            <div style={{ marginTop: "5px", color: "darkblue" }}>{card.meta.description}</div>
            <div style={{ marginTop: "5px" }}>Date: {card.meta.date}</div>
            <div>Investment Amount: {card.meta.amount}</div>
            <div>{card.meta.contact}</div>
            <div>{card.meta.email}</div>
            <Button className='modal' style={{ backgroundColor: "#80b1f5" }} onClick={() => openModal(index)}>
              Explore More
            </Button>
            <Button style={{ backgroundColor: "#80b1f5" }} onClick={openInvestModal} className='modal'>
              Invest
            </Button>
          </Card>
        ))}
      </div>

      {selectedCardIndex !== null && (
        <Modal
          style={{ color: 'black', fontFamily: "'Montserrat', sans-serif" }}
          title={username} 
          centered
          visible={open}
          onOk={closeModal}
          onCancel={closeModal}
          width={1000}
        >
          {ideasData[selectedCardIndex].ideasDesc}
        </Modal>
      )}

      {/* Investment Modal */}
      <Modal
        title="Investment Details"
        visible={investModalOpen}
        onCancel={closeInvestModal}
        footer={[
          <Button key="cancel" onClick={closeInvestModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Submit
          </Button>,
        ]}
      >
        <Input
          placeholder="Name"
          value={username}
          style ={{marginTop:"10px"}}
          onChange={(e) => setName(e.target.value)}
        />
       <Row>
        <Col span ={12}>
        <Input
          placeholder= 'Amount'
          value={amountDigits}
          style ={{marginTop:"10px"}}
          status={amountError ? 'error' : ''}
          onChange={(e) => setAmountDigits(e.target.value)}
        />
        </Col>
        <Col span ={12}>
        <Select
          style={{ width: '100%', marginBottom: '10px' , marginTop:"10px", height:"50px"}}
        
          onChange={(value) => setAmountUnit(value)} 
        >
          <Option value="thousands">Thousands</Option>
          <Option value="lakhs">Lakhs</Option>
          <Option value="crores">Crores</Option>
        </Select>
        </Col>
        </Row>
        <Input
          placeholder="Phone Number"
          value={contact}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </Modal>
    </div>
  );
}
