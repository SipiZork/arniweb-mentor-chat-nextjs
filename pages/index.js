import { useRouter } from 'next/router';

import MessageIcon from '../components/icons/messageIcon.js';
import Button from '../components/ui/Button';

import classes from '../styles/homepage.module.scss';

const HomePage = () => {
  const router = useRouter();

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

export default HomePage
