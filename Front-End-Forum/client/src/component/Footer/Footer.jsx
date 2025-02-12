import React from "react";
import  classes from "./footer.module.css"
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
import evangadiLogo from "../../image/evangadi-logo.png";

function Footer() {
  return (
    <footer>
      <div className={classes.footer_container}>
        <div className={classes.footer_left}>
          <img src={evangadiLogo} alt="Evangadi Logo" />

          <div className={classes.footer_left}>
            <CiFacebook />
            <CiInstagram />
            <CiYoutube />
          </div>
        </div>
        <div className={classes.footer_middle}>
          <div className={classes.footer_links}>
            <h2>Useful Links</h2>
            <li>
              <Link to="/how-it-works">How it works</Link>
            </li>
            <li>
              <Link to="/TermsOfService">Terms of Service</Link>
            </li>
            <li>
              <Link to="/PrivacyPolicy">Privacy Policy</Link>
            </li>
          </div>
        </div>
        <div
          className={classes.footer_right}
          style={{ fontSize: "15px", textlign: "center" }}
        >
          <h2>Contact Info</h2>
          <Link to="https://www.evangadi.com/">Evangadi Networks</Link>
          <p> Phone: +1202386-2702</p>
          <Link to={"mailto:support@evangadi.com"}>
            {" "}
            Email:support@evangadi.com
          </Link>
          {/* <p>Address: Addis Ababa, Ethiopia</p> */}
        </div>
        {/* Footer Bottom Section */}
        {/* <div className={classes.footer_bottom}>
          &copy; 2024 Evangadi Networks. All Rights Reserved.
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
