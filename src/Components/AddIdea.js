import React, { useState, useContext, useEffect } from 'react';
import { Input } from 'antd';
import '../asset/addidea.css';
import Backgrounds from '../asset/image/Background.jpg';
import ideaContext from '../Context/smallIdeas/ideascontext';

const { TextArea } = Input;

export default function AddIdea() {
  const [idea, setIdea] = useState({
    title: '',
    description: '',
    amount: '',
    contact: '',
    ideasDesc: '',
    cover: 'https://media.istockphoto.com/id/470100848/vector/male-profile-icon-white-on-the-blue-background.jpg?s=612x612&w=0&k=20&c=2Z3As7KdHqSKB6UDBpSIbMkwOgYQtbhSWrF1ZHX505E=', 
  });
  const [totalIdeasCount, setTotalIdeasCount] = useState(0); 
  const [fieldStatus, setFieldStatus] = useState({
    title: true, 
    description: true,
    amount: true,
    contact: true,
    ideasDesc: true,
    cover: true, 
  });

  const context = useContext(ideaContext);
  const { addIdea } = context;
  useEffect(() => {
    const fetchTotalIdeasCount = async () => {
      try {
        // Make a GET request to the server endpoint
        const response = await fetch('https://ideateit.onrender.com/api/ideas/getTotalIdeasCount', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token'  : localStorage.getItem('token')
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setTotalIdeasCount(data.totalIdeasCount);
        } else {
          console.error('Failed to fetch total ideas count');
          alert('idea not added')
        }
      } catch (error) {
        console.error('Error fetching total ideas count:', error);
      }
    };
  
    fetchTotalIdeasCount();
  }, []);
  

  const handleChange = (e) => {
    setIdea({ ...idea, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    let isValid = true; 
  
    if (idea.title.trim() === '') {
      setFieldStatus((prevState) => ({ ...prevState, title: false }));
      isValid = false;
    }
    if (idea.description.trim() === '') {
      setFieldStatus((prevState) => ({ ...prevState, description: false }));
      isValid = false;
    }
    if (idea.amount.trim() === '') {
      setFieldStatus((prevState) => ({ ...prevState, amount: false }));
      isValid = false;
    }
    if (idea.contact.trim() === '') {
      setFieldStatus((prevState) => ({ ...prevState, contact: false }));
      isValid = false;
    }
    if (idea.ideasDesc.trim() === '') {
      setFieldStatus((prevState) => ({ ...prevState, ideasDesc: false }));
      isValid = false;
    }
  
    if (isValid) {
      if (totalIdeasCount < 3) {
        addIdea(idea.title, idea.description, idea.cover, idea.amount, idea.contact, idea.ideasDesc);
  
        // Clear the fields immediately after adding an idea
        setIdea({
          title: '',
          description: '',
          amount: '',
          contact: '',
          ideasDesc: '',
          cover: 'https://media.istockphoto.com/id/470100848/vector/male-profile-icon-white-on-the-blue-background.jpg?s=612x612&w=0&k=20&c=2Z3As7KdHqSKB6UDBpSIbMkwOgYQtbhSWrF1ZHX505E=', // Reset the cover URL
        });
  
        setFieldStatus({
          title: true,
          description: true,
          amount: true,
          contact: true,
          ideasDesc: true,
          cover: true,
        });
  alert('Idea added successfully !!');
      } else {
        alert('You can have only 3 ideas at a time.');
      }
    } else {
      alert('Please fill in all the required fields.');
    }
  };
  
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px', height: '100%', backgroundImage: `url(${Backgrounds})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h1 style={{ color: 'white', padding: '10px' }}>Add your Idea here</h1>

      <p style={{ color: 'white', marginTop: '20px' }}>You can have only 3 ideas at a time, so make sure that you don't add the fourth one before removing the previous ones !!</p>

      <TextArea autoComplete="off" className="custom-textarea" style={{ width: '60%', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'lightblue', marginBottom: '0px' }} placeholder="Enter the title of your idea" autoSize name="title" onChange={handleChange} />
      <div style={{ margin: '15px 0' }} />
      <TextArea autoComplete="off" className="custom-textarea" style={{ width: '60%', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'lightblue', marginBottom: '0px' }} placeholder="Enter a short description of your idea" autoSize={{ minRows: 2, maxRows: 6 }} name="description" onChange={handleChange} />
      <div style={{ margin: '15px 0' }} />
      <TextArea autoComplete="off" className="custom-textarea" style={{ width: '60%', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'lightblue', marginBottom: '20px' }} placeholder="Enter a detailed description of your idea" autoSize={{ minRows: 3, maxRows: 5 }} name="ideasDesc" onChange={handleChange} />
      <TextArea className="custom-textarea" style={{ marginTop: '0px', width: '60%', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'lightblue', marginBottom: '0px' }} placeholder="Enter the amount you want to ask for" autoSize name="amount" onChange={handleChange} />
      <div style={{ margin: '15px 0' }} />
      <TextArea autoComplete="off" className="custom-textarea" style={{ marginTop: '10px', width: '60%', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'lightblue', marginBottom: '0px' }} placeholder="Cover Image Link (Optional)" autoSize name="cover" onChange={handleChange} />
      <div style={{ margin: '15px 0' }} />
      <TextArea autoComplete="off" className="custom-textarea" style={{ width: '60%', backgroundColor: 'rgba(0, 0, 0, 0.3)', color: 'lightblue', marginBottom: '0px' }} placeholder="Contact No." autoSize name="contact" onChange={handleChange} />
      <div style={{ margin: '13px 0' }} />

      <button  onClick={handleClick} style={{ marginBottom: '15px' }}>Add Idea</button>

    </div>
  );
}
