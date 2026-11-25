import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => 
{
  //variables listed here are variables that will be searched by the script based on the names available in the input field
  //setting the function and default State of the variables
  const [formData, setFormData] = useState(
      {
        name: '',
        email: '',
        feedback: '',
        rating: '',
      });
  
  //a customer event handler to trigger whenever user updates form data
  //prevFormData takes  the state of the form
  const handleChange = (event) => 
  {
    const { name, value } = event.target;
    setFormData((prevFormData) => (
        {
      ...prevFormData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (event) =>
  {
    //prevent the submission of blank options
    event.preventDefault();

    if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.feedback.trim() ||
        !formData.rating
    ) {
      alert('Please fill out all fields and select a rating before submitting.');
      return;
    }
    
    
    const confirmationData = `
      Name: ${formData.name}
      Email: ${formData.email}
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    
    const isConfirmed = window.confirm(`Please confirm your details: \n\n ${confirmationData}`);
    
    if(isConfirmed)
    {
      console.log('Submitting Feedback', formData);
      setFormData({
        name: '',
        email: '',
        feedback: '',
        rating: ''
      });
      alert('Thank you for your feedback!');
    }
  };
  
  //Note: value = {} assigns a value from the State function above
  //onChange={event Function name} binds the customer event hook made above
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit}  className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
        <input type='text' name='name' placeholder='Your Name' value={formData.name} onChange={handleChange} />
        <input type='email' name='email' placeholder='Your Email' value={formData.email} onChange={handleChange}/>
        <textarea name='feedback' placeholder='Your Feedback' value={formData.feedback} onChange={handleChange}></textarea>
        
        <div style={{display:'flex',gap:'10px',flexDirection:'row',justifyContent:'center'}}>
          <span>Rate Us:</span>
          <p><input type="radio" name="rating" value="1" onChange={handleChange}/> 1</p>
          <p><input type="radio" name="rating" value="2" onChange={handleChange}/> 2</p>
          <p><input type="radio" name="rating" value="3" onChange={handleChange}/> 3</p>
          <p><input type="radio" name="rating" value="4" onChange={handleChange}/> 4</p>
          <p><input type="radio" name="rating" value="5" onChange={handleChange}/> 5</p>
        </div>
        
        <button type='submit'>Submit Feedback</button>
        
      </form>
    </>
  );
};

export default FeedbackForm;
