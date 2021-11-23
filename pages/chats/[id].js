import { Fragment, useRef } from 'react';
import { useRouter } from 'next/router';
import { FaCamera, FaMicrophone, FaAngleRight, FaTimes } from 'react-icons/fa';

import Message from '../../components/Messages/Message';
import userMockedData from "../../datas/userMockedData";

import classes from './chat.module.scss';

const ChatPage = () => {
  
  const router = useRouter();
  const msgRef = useRef();
  const userId = router.query.id;
  const data = userMockedData[userId - 1];

  const handleClose = () => {
    router.push('/chats');
  }

  return (
    <Fragment>
      <div className={classes.chat}>
        <div className={classes.userinfo}>
          <div className={classes.topleft}>
            <img src={`/profile-pictures/${data.img}`} alt={data.name} />
            <div className={classes.userinfoname}>
              <p>
                {data.name}
              </p>
              <p className={classes.paddingtop}>
                <FaAngleRight />
              </p>
            </div>
          </div>
          <div className={classes.back} onClick={handleClose}>
            <p><FaTimes /></p>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.msgs}>
            {data && data.messages.map(message => (
              <Message msg={message.message} key={message.id} />
            ))}
          </div>
          <div className={classes.inputline}>
            <input type="text" ref={msgRef} placeholder="Type a message" />
            <div className={classes.inputlineicon}>
              <p><FaCamera /></p>
            </div>
            <div className={classes.inputlineicon}>
              <p><FaMicrophone /></p>
            </div>
          </div>
          <div className={classes.actions}>
            <p className={classes.actionicon}>🤭</p>
            <p className={classes.actionicon}>😓</p>
            <p className={classes.actionicon}>😋</p>
            <p className={classes.actionicon, classes.moreactionicon}>😷</p>
            <p>...</p>
            <p>GIF</p>
            <p>STICKERS</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ChatPage
