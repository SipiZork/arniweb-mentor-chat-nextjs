import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { setUsers } from '../redux/actions/user.js';
import { getUsers, getMessage } from '../utils/getData.js';
import MessageIcon from '../components/icons/messageIcon.js';
import Button from '../components/ui/Button';

import classes from '../styles/homepage.module.scss';
import { connect } from 'react-redux';

const HomePage = ({ usersData, setUsers }) => {
  const router = useRouter();

  useEffect(() => {
    setUsers(usersData);
  }, [])

  const handleClick = () => {
    router.push('/create-account');
  }

  return (
    <div className={classes.homepage}>
      <div className={classes.icon}>
        <MessageIcon />
      </div>
      <p className={classes.bold}>Hello</p>
      <p>chat</p>
      <div className={classes.buttons}>
        <Button onClick={handleClick}>Create account</Button>
      </div>
    </div>
  )
}

export const getStaticProps = async(context) => {
  const users = await getUsers('https://randomuser.me/api/?results=30');
  const usersData = [];
  await Promise.all(users.map(async (user, i) => {
    const actualUser = {
      id: i,
      name: `${user.name.first} ${user.name.last}`,
      img: user.picture.thumbnail,
      messages: [
        {
          id: 1,
          message: await getMessage()
        }
      ]
    }
    usersData.push(actualUser);
  }));

  return {
    props: {
      usersData
    }
  }
}

const mapDispatchToProps = {
  setUsers
}


export default connect(null,mapDispatchToProps)(HomePage)
