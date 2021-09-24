import React from "react"
import "react-toastify/dist/ReactToastify.css"
import "../../styles/custom.css"
import mPlogo from "../../../public/icons/logo-circle.svg"

const ToastSuccess = props => {
  return (
    <div className="success-toast">
      <div
      className="logo"
        style={{
          backgroundImage: `url(${mPlogo})`,
          backgroundRepeat: "no-repeat",   
          backgroundSize: "cover",
          width: "45px",
          height: "45px",
          marginLeft: "20px",
          marginRight: "15px"
        }}
      ></div>
      <p>
        Sent to mParticle: <br />
        {props.eventName} {props.eventCategory} for <br />
        {props.product}
      </p>
    </div>
  )
}

export default ToastSuccess
