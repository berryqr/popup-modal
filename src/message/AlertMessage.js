import React from "react";


export const AlertMessage = ({message, hide}) => {
  let dangerous_html = {__html: message}

  return (
    <div className="popup-modal">
      <div className="popup-modal-content alert-danger">
        <div className="popup-modal-header alert-heading">
        <h3>Alert</h3>
        <span className="popup-modal-close-button" onClick={() => {hide()}}>&times;</span>
        </div>
        <hr />
  
        <div id="popup-modal-msg" dangerouslySetInnerHTML={dangerous_html} />
      </div>
    </div>
  )
}