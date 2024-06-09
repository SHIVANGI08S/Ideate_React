import React from 'react';
import { useParams } from 'react-router-dom';
import ideasData from './constant';
import Background from "../asset/image/Background.jpg"
const IdeaDetailPage = () => {
  const { index } = useParams();
  const ideaIndex = parseInt(index);
  console.log(ideaIndex);
  const idea = ideasData[ideaIndex];

  if (!idea) {
    return <div>Idea not found.</div>;
  }

  return (
    <div style={{color:"white", backgroundImage: `url(${Background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" , marginTop:"-18px", padding:"40px",fontFamily: "'Montserrat', sans-serif"}}>
      <h2>{idea.meta.title}</h2>
      <p>{idea.meta.name}</p>
      <div>{idea.ideasDesc}</div>
    </div>
  );
};

export default IdeaDetailPage;
