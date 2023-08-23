import React, { useState } from 'react';
import Background from '../asset/image/Background.jpg';
import { Button, Modal } from 'antd';
import { Card } from 'antd';
import '../asset/ideas.css';

const { Meta } = Card;



const cardData = [
  {
    hoverable: true,
    cover: "https://www.shutterstock.com/image-photo/studio-shot-young-happy-indian-260nw-574396939.jpg",
    meta: {
      name: "Rohan Singh",
      description: "Idea is to start a subscription-based service that delivers fresh, locally grown produce from urban farms to customers' doorsteps, promoting sustainable agriculture and providing access to healthy, locally sourced food.",
      date: "August 10, 2023",
      amount: "12 Lakhs",
      contact: "Contact: 123456778",
      email: "Email: rohan@gmail.com",
    }
  },
  {
    hoverable: true,
    cover: "https://media.istockphoto.com/id/144324264/photo/business-abroad.jpg?s=612x612&w=0&k=20&c=UgWVzVEya-YQOgGk4McE8vYQj_QDzo7fCip41Ian45A=",
    meta: {
      name: "Kritika Shah",
      description: "A company that offers personalized fitness and wellness retreats tailored to individuals' goals and preferences, providing a holistic approach to health improvement in serene and rejuvenating settings.",
      date: "July 3, 2022",
      amount: "5 Lakhs",
      contact: "Contact: 238856778",
      email: "Email: rohan@example.com"
    }
  },
  {
    hoverable: true,
    cover: "https://media.istockphoto.com/id/1036079862/photo/i-have-all-the-determination-to-succeed-big.jpg?s=612x612&w=0&k=20&c=AJGXyAarUUDQbgh_LhuqfHXeZQtGZy9P-y7KMb5jkAo=",
    meta: {
      name: "Rohan Singh",
      description: "www.instagram.com",
      date: "August 10, 2023",
      amount: "$5000",
      contact: "Contact: 123456778",
      email: "Email: rohan@example.com"
    }
  },
  {
    hoverable: true,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    meta: {
      name: "Rohan Singh",
      description: "",
      date: "August 10, 2023",
      amount: "$5000",
      contact: "Contact: 123456778",
      email: "Email: rohan@example.com"
    }
  },
  {
    hoverable: true,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    meta: {
      name: "Rohan Singh",
      description: "www.instagram.com",
      date: "July 3, 2022",
      amount: "$5000",
      contact: "Contact: 123456778",
      email: "Email: rohan@example.com"
    }
  },
  {
    hoverable: true,
    cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    meta: {
      name: "Rohan Singh",
      description: "www.instagram.com",
      date: "January 3, 2023",
      amount: "$5000",
      contact: "Contact: 123456778",
      email: "Email: rohan@example.com"
    }
  }
];


export default function Ideas() {
  const [open, setOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  // Function to open the modal with the selected card's index
  const openModal = (index) => {
    setSelectedCardIndex(index);
    setOpen(true);
  }

  // Function to close the modal
  const closeModal = () => {
    setOpen(false);
    setSelectedCardIndex(null);
  }


  const modalContent = [
    <div>
      <p>In a world where sustainable living is paramount, Urban Harvest Subscription emerges as a trailblazing solution that not only transforms the way we consume food but also nurtures our connection with urban agriculture. Our subscription-based service brings the abundance of locally grown, nutrient-rich produce straight from thriving urban farms to your doorstep, fostering a healthier lifestyle while supporting the environment.</p>
        <p><strong>How It Works:</strong><br/>
        <ul>
          <li>
          <strong>Curated Selection: </strong>
          Our team collaborates with a network of urban farms committed to sustainable farming practices. Each week, we handpick a diverse assortment of seasonal fruits, vegetables, herbs, and greens, ensuring you receive a well-balanced and flavorful variety.
          </li>
          <li>
          <strong>Customizable Plans: </strong>
          Choose from a range of subscription plans tailored to your preferences and household size. Whether you're an individual seeking fresh ingredients or a family aiming for a consistent supply of wholesome produce, we've got you covered.
          </li>
          <li>
          <strong>Farm-to-Door Delivery: </strong>
          Experience the convenience of having locally sourced goodness delivered to your doorstep. Our efficient delivery system ensures that your order arrives fresh, minimizing the time between harvest and consumption.
          </li>
        </ul>
        </p>
        <p><strong>Why Choose Urban Harvest Subscription:</strong>
        <ul>
          <li>
          <strong>Curated Selection: </strong>
          Our team collaborates with a network of urban farms committed to sustainable farming practices. Each week, we handpick a diverse assortment of seasonal fruits, vegetables, herbs, and greens, ensuring you receive a well-balanced and flavorful variety.
          </li>
          <li>
          <strong>Customizable Plans: </strong>
          Choose from a range of subscription plans tailored to your preferences and household size. Whether you're an individual seeking fresh ingredients or a family aiming for a consistent supply of wholesome produce, we've got you covered.
          </li>
          <li>
          <strong>Farm-to-Door Delivery: </strong>
          Experience the convenience of having locally sourced goodness delivered to your doorstep. Our efficient delivery system ensures that your order arrives fresh, minimizing the time between harvest and consumption.
          </li>
        </ul>
        </p>
        <p>At Urban Harvest Subscription, we're redefining how you engage with your food. Join us in this journey towards a more sustainable, healthier, and connected way of living. Embrace the harvest and savor the difference.</p>

    </div>,
    <div>
      <p>To a world where sustainable living is paramount, Urban Harvest Subscription emerges as a trailblazing solution that not only transforms the way we consume food but also nurtures our connection with urban agriculture. Our subscription-based service brings the abundance of locally grown, nutrient-rich produce straight from thriving urban farms to your doorstep, fostering a healthier lifestyle while supporting the environment.</p>
        <p><strong>How It Works:</strong><br/>
        <ul>
          <li>
          <strong>Curated Selection: </strong>
          Our team collaborates with a network of urban farms committed to sustainable farming practices. Each week, we handpick a diverse assortment of seasonal fruits, vegetables, herbs, and greens, ensuring you receive a well-balanced and flavorful variety.
          </li>
          <li>
          <strong>Customizable Plans: </strong>
          Choose from a range of subscription plans tailored to your preferences and household size. Whether you're an individual seeking fresh ingredients or a family aiming for a consistent supply of wholesome produce, we've got you covered.
          </li>
          <li>
          <strong>Farm-to-Door Delivery: </strong>
          Experience the convenience of having locally sourced goodness delivered to your doorstep. Our efficient delivery system ensures that your order arrives fresh, minimizing the time between harvest and consumption.
          </li>
        </ul>
        </p>
        <p><strong>Why Choose Urban Harvest Subscription:</strong>
        <ul>
          <li>
          <strong>Curated Selection: </strong>
          Our team collaborates with a network of urban farms committed to sustainable farming practices. Each week, we handpick a diverse assortment of seasonal fruits, vegetables, herbs, and greens, ensuring you receive a well-balanced and flavorful variety.
          </li>
          <li>
          <strong>Customizable Plans: </strong>
          Choose from a range of subscription plans tailored to your preferences and household size. Whether you're an individual seeking fresh ingredients or a family aiming for a consistent supply of wholesome produce, we've got you covered.
          </li>
          <li>
          <strong>Farm-to-Door Delivery: </strong>
          Experience the convenience of having locally sourced goodness delivered to your doorstep. Our efficient delivery system ensures that your order arrives fresh, minimizing the time between harvest and consumption.
          </li>
        </ul>
        </p>
        <p>At Urban Harvest Subscription, we're redefining how you engage with your food. Join us in this journey towards a more sustainable, healthier, and connected way of living. Embrace the harvest and savor the difference.</p>
    </div>,
    <div>
      {/* Content for Card 3 */}
    </div>,
    <div>
      {/* Content for Card 4 */}
    </div>,
    <div>
      {/* Content for Card 5 */}
    </div>,
    <div>
      {/* Content for Card 6 */}
    </div>
  ];

  return (
    <div className="ideas-container" style={{ backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat" }}>
      <h1 className="centered-title">Explore some innovative ideas</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            hoverable={card.hoverable}
            className="custom-card"
            cover={<img className="pro" alt="example" src={card.cover} />}
          >
            <Meta title={card.meta.name} description={card.meta.description} />
            <div style={{marginTop:"5px"}}>Date: {card.meta.date}</div>
            <div>Investment Amount: {card.meta.amount}</div>
            <div>{card.meta.contact}</div>
            <div>{card.meta.email}</div>
            <Button className='modal' style={{backgroundColor: "#80b1f5"}} onClick={() => openModal(index)}>
              Explore More
            </Button>
          </Card>
        ))}
      </div>


      {selectedCardIndex !== null && (
  <Modal
  style={{color:'black'}}
    title={cardData[selectedCardIndex].meta.name}
    centered
    visible={open}
    onOk={closeModal}
    onCancel={closeModal}
    width={1000}
  >
    {console.log('Modal Content:', modalContent[selectedCardIndex])}
    {modalContent[selectedCardIndex]}
  </Modal>

)}

    </div>
  );
}

