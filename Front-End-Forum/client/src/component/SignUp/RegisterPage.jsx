import React from 'react'

import Register from "../../Pages/Register/Register";
import Classes from "./RegisterPage.module.css";
function RegisterPage() {
  return (
    <div>

      <div className={Classes.background_image}>
        <Register />
      </div>

    </div>
  );
}

export default RegisterPage
