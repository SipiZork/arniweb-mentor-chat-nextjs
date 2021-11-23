import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import parseCookies from '../../utils/parseCookies';
import userMockedData from '../../datas/userMockedData';
import { IoSearchOutline } from 'react-icons/io5';

import classes from '../../styles/chats.module.scss';

const ChatsPage = ({ username }) => {
  
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`chats/${id}`);
  }

  return (
    <div className={classes.chats}>
      <div className={classes.top}>
        <p className={classes.name}>Hi, {username}</p>
        <div className={classes.menu}>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.shortline}></div>
        </div>
      </div>
      <h1>Start a new chat</h1>
      <div className={classes.newchat}>
        <div className={classes.newchatleft}>
          <div className={classes.newchatimage}></div>
          <p>New chat</p>
        </div>
        <div className={classes.searchicon}>
          <p><IoSearchOutline /></p>
        </div>
      </div>
      <div className={classes.peoples}>
        {userMockedData.map(chat => {
          return (<div className={classes.people} key={chat.id} onClick={() => handleClick(chat.id)}>
            <img src={`/profile-pictures/${chat.img}`} alt='chat-image' />
            <div className={classes.content}>
              <p className={classes.chatname}>
                {chat.name}
              </p>
              <p className={classes.lastmessage}>
                {chat.messages[chat.messages.length - 1].message}
              </p>
            </div>
          </div>
        )})}
      </div>
    </div>
  )
}

ChatsPage.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    username: cookies.username
  }
}


export default ChatsPage
