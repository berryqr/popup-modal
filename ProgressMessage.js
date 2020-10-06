import React from "react";


export const ProgressMessage = ({message, hide}) => {
  let dangerous_html = {__html: message}

  return (
    <div className="popup-modal">
      <div className="popup-modal-content">
        <div id="popup-modal-msg" dangerouslySetInnerHTML={dangerous_html} />
        <div className="popup-modal-loading-bar"></div>
      </div>
    </div>
  )
}