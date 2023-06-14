import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import womanImg from '../../assets/woman.jpg'
import { useState } from 'react'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>My Blogs</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem} >Home</li>
          <Link className={classes.listItem} to='/footer'>About</Link>
          {/* <a className={classes.listItem} href='/footer'>About</a> */}

          <Link className={classes.listItem} to='/footer' >Contacts</Link>
          {/* <li className={classes.listItem}>Categories</li> */}
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={womanImg} className={classes.img} alt='image1' />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
              <button onClick={logOut}>Logout</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar