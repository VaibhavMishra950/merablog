import React, { useState } from 'react'
import Head from 'next/head';
import styles from '@/styles/Contact.module.css'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };

    fetch('http://localhost:3000/api/contact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Success:', data);
        alert("Thanks for contacting us");
        setPhone('');
        setName('');
        setDesc('');
        setEmail('');
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }


  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setDesc(e.target.value)
    }
  }

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [desc, setDesc] = useState('');

  return (
    <>
      <Head>
        <title>Contact Us | Mera Blog</title>
      </Head>

      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <input className={styles.input} value={name} onChange={handleChange} type="text" name="name" placeholder="Enter Name" /><br />
          <input className={styles.input} value={email} onChange={handleChange} type="email" name="email" placeholder="Enter Email" /><br />
          <input className={styles.input} value={phone} onChange={handleChange} type="phone" name="phone" placeholder="Enter Mobile Number" /><br />
          <textarea className={styles.input} value={desc} onChange={handleChange} name="desc" placeholder="Enter Your Concern" cols="30" rows="4"></textarea><br />
          <button className={styles.input} type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact;