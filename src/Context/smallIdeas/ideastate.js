import React, { useState } from "react";
import ideaContext from "./ideascontext";

const IdeaState = (props) => {
  const host = "https://ideateit.onrender.com";
  const initialIdeas = [];

  const [ideas, setIdeas] = useState(initialIdeas);

  // GET ALL IDEAS
  const getAllIdeas = async () => {
    const response = await fetch(`${host}/api/ideas/fetchAllIdeas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    setIdeas(json);
};
 


  // ADD AN IDEA
  const addIdea = async (title, description, cover, amount, contact, ideasDesc) => {
    const response = await fetch(`${host}/api/ideas/addIdea`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, cover, amount, contact, ideasDesc }),
    });
    const json = await response.json();
    console.log(json);
    const idea = {
      _id: json._id,
      user: json.user,
      title: title,
      description: description,
      cover: cover,
      amount: amount,
      contact: contact,
      ideasDesc: ideasDesc,
      __v: 0,
    };
    setIdeas([...ideas, idea]);
  };
//Delete an idea
const deleteIdea = async(id) => {
  const response = await fetch(`${host}/api/ideas/deleteIdea/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "auth-token":localStorage.getItem('token')
    }
  });   
  const newIdea = ideas.filter((idea) => {
    return idea._id !== id;
  });
  setIdeas(newIdea);
};
  return (
    <ideaContext.Provider
      value={{
        ideas,
        addIdea,
        getAllIdeas,
        deleteIdea
      }}
    >
      {props.children}
    </ideaContext.Provider>
  );
};




export default IdeaState;
