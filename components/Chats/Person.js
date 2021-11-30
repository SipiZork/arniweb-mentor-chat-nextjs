import { useRouter } from 'next/router';

import classes from './person.module.scss';

const Person = ({ person }) => {

  const router = useRouter();

  const goToChat = (id) => {
    console.log('hi');
    router.push(`/chats/${id}`);
  }
  
  return (
    <div className={classes.person} onClick={() => goToChat(person.id)}>
      <img src={`/profile-pictures/${person.img}`} alt={person.img} />
      <p>{person.name}</p>
    </div>
  )
}

export default Person;
