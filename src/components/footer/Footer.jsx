import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>This is my digital home, where I offer unfiltered advice and offerings about how to choose self expression, inner healing, ancient wisdom, and alignment as the pathway to real and lasting abundance.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +123 456 789</span>
          {/* <span>YouTube: WebDevMania</span> */}
          <span>GitHub: manokrish104525</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          {/* <span>Continent: Europe</span> */}
          <span>Country: India</span>
          <span>Current Location: Coimbatore</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer