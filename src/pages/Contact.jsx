import React from 'react';
import Footer from '../components/Footer';


const Contact = () => {
    return (
        <>
            <div className='container'>
                <div className='sub_container'>
                    <h1>Contact Me</h1>
                    <h5>Hi there, contact me to ask me about anything you have in mind.</h5>

                    <form action="contact" className='contactform'>
                        <div className='identity'>
                            <div class="input-box">
                                <label htmlFor="first_name" className='values'>Firstname</label>
                                <input type="text" placeholder='Enter your first name' id='first_name' />
                            </div>

                            <div class="input-box">
                                <label htmlFor="last_name" className='values'>Lastname</label>
                                <input type="text" placeholder='Enter your last name' id='last_name' />
                            </div>
                        </div>

                        <div class="input-box">
                            <label htmlFor="email" className='values'>Email</label>
                            <input type="email" placeholder='youremail@email.com' id='email' />
                        </div>

                        <div class="input-box">
                            <label htmlFor="email" className='values'>Message</label>
                            <textarea type="text" placeholder="Send me a message and I'll reply you as soon as possible..."
                                id='message'>
                            </textarea>
                        </div>

                        <div className='checkbox' >
                            <label for="t and c">You agree to providing your data to Fisayo who may contact you</label>
                            <input type="checkbox" name="t and c" value="t and c" />
                        </div>
                        <button type="submit" className="submit">Send message</button>

                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;