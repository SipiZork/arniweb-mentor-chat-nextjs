import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

import Button from '../../components/ui/Button';

import classes from './create-account.module.scss';

const CreateAccountPage = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const router = useRouter();
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    text.length > 2 ? setButtonDisabled(false) : setButtonDisabled(true);
  }

  const handleLogIn = () => {
    Cookie.set('username', nameRef.current.value);
    router.push('/chats');
  }

  return (
    <div className={classes.createAccount}>
      <h2>Now, tell who you are</h2>
      <input type="text" ref={nameRef} placeholder="type" onChange={handleChange} />
      <div className={classes.buttons}>
        <Button disabled={buttonDisabled} onClick={handleLogIn}>Next</Button>
      </div>
    </div>
  )
}

export default CreateAccountPage
