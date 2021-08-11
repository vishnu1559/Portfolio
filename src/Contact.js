import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_head">
        <h3>Contact</h3>
      </div>
      <div className="contact_para">
        <p>Have a question or want to work together?</p>
      </div>

      <div className='form'>
            <input type='text' placeholder='Name' />
            <input type='text' placeholder='Enter Email' />
            <textarea type='text' placeholder='Message' />
            <button>submit</button>
      </div>
    

    </div>

   
    
  );
};

export default Contact;
