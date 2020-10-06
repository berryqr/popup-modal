import React from "react";
import {usePopupModal} from './index.js';
import './style.css';

import {SimpleMessage} from './SimpleMessage';
import {ProgressMessage} from './ProgressMessage';


const PopupModalRender = () => {
  const {data, modal} = usePopupModal();
  let Popup = null;
  let params = { ...data, hide : modal.hide }

  if('simple' == data.type) {
    Popup = <SimpleMessage {...params} />
  }
  else if('progress' == data.type) {
    Popup = <ProgressMessage {...params} />
  }
  else {
    Popup = null;
  }

  return (
    <div className={data.display ? 'popup-modal-fadeIn' : 'popup-modal-fadeOut'}>
      {Popup}
    </div>
  )
}



export default PopupModalRender;
