import React, { useContext, useEffect } from 'react';
import Background from '../asset/image/Background.jpg';
import IdeaContext from '../Context/smallIdeas/ideascontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Card } from 'antd';

const { Meta } = Card;

export default function Users() {
  const context = useContext(IdeaContext);
  const { ideas, getAllIdeas, deleteIdea } = context;

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getAllIdeas();
    } else {
    }
  }, [getAllIdeas]);

  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        paddingTop: '60px',
      }}
    >
      <div className="card-container">
        {ideas.map((idea, index) => (
          <Card
            key={index}
            hoverable={idea.hoverable}
            className="custom-card"
            style ={{marginTop:"-20px"}}
            cover={<img className="pro" alt="example" src={idea.cover} />}
          >
            <Meta title={idea.title} />
            <div style={{ marginTop: '5px', color: 'darkblue' }}>
              <div style={{ marginTop: '5px', color: 'darkblue',wordWrap: 'break-word'}}>{idea.description}</div>
            </div>
            <div style={{ marginTop: '5px' }}>Date: {idea.date}</div>
            <div>Investment Amount: {idea.amount}</div>
            <div>Contact: {idea.contact}</div>
            <div>{idea.email}</div>
            <FontAwesomeIcon
              icon={faTrash}
              style={{ cursor: 'pointer', color: 'darkblue', fontSize: '20px', marginTop: '10px' }}
              onClick={() => {
                deleteIdea(idea._id);
              }}
            />
          </Card>
        ))}
      </div>
    </div>
  );
}
