import React from "react";


export const SimpleMessage = ({message, hide}) => {
  let dangerous_html = {__html: message}

  return (
    <div className="popup-modal">
      <div className="popup-modal-content">
        <span className="popup-modal-close-button" onClick={() => {hide()}}>&times;</span>
        <div id="popup-modal-msg" dangerouslySetInnerHTML={dangerous_html} />
      </div>
    </div>
  )
}