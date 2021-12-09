import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';
import { IoSearchOutline } from 'react-icons/io5';

import parseCookies from '../../utils/parseCookies';
import Search from '../../components/Search/Search';
import userMockedData from '../../datas/userMockedData';
import Chat from '../../components/Chats/Chat';

import classes from '../../styles/chats.module.scss';

const ChatsPage = ({ user, username }) => {
  
  const router = useRouter();

  const [showSearch, setShowSearch] = useState(false);

  const handleClick = (id) => {
    router.push(`chats/${id}`);
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  }

  const sortIt = (array) => {
    return array.sort((a, b) => a.name.toUpperCase() < b.name.toLocaleUpperCase() ? -1 : 1);
  }

  return (
    <Fragment>
      <Search toggleSearch={toggleSearch} showSearch={showSearch} handleClick={handleClick} sortIt={sortIt} />
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
        <div className={classes.newchat} onClick={toggleSearch}>
          <div className={classes.newchatleft}>
            <div className={classes.newchatimage}></div>
            <p>New chat</p>
          </div>
          <div className={classes.searchicon}>
            <p><IoSearchOutline /></p>
          </div>
        </div>
        <div className={classes.peoples}>
          {sortIt(user.users).map(chat => <Chat data={chat} key={chat.id} handleClick={handleClick} />)}
        </div>
      </div>
    </Fragment>
  )
}


const mapStateToProps = state => ({
  user: state.user
})


export default connect(mapStateToProps)(ChatsPage)
