import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const eneteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: eneteredFeedback };
    console.log(reqBody);

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then((data) => console.log(data));

  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <labal htmlFor='email'>Your Email</labal>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <labal htmlFor='feedback'>Your Feedback</labal>
          <textarea id="feedback" rows='5' ref={feedbackInputRef}></textarea>
          <button>Send Feedback</button>
        </div>
      </form>
    </div>
  )
}
