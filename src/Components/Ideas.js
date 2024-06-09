import React, { useState, useEffect } from 'react';
import Background from '../asset/image/Background.jpg';
import { Button, Modal } from 'antd';
import { Card } from 'antd';
import { Link } from 'react-router-dom'; // Import Link component
import '../asset/ideas.css';
import ideasData from './constant';

const { Meta } = Card;

export default function Ideas() {
  const [open, setOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  
  const openModal = (index) => {
    setSelectedCardIndex(index);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedCardIndex(null);
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
            <Link to="/login" className='modal'> 
              <Button className='modal' style={{ backgroundColor: "#80b1f5" }}>Invest</Button>
            </Link>
          </Card>
        ))}
      </div>

      {selectedCardIndex !== null && (
        <Modal
          style={{ color: 'black' ,fontFamily: "'Montserrat', sans-serif"}}
          title={username} // Set the title to the username
          centered
          visible={open}
          onOk={closeModal}
          onCancel={closeModal}
          width={1000}
        >
          {ideasData[selectedCardIndex].ideasDesc}
        </Modal>
      )}
    </div>
  );
}
