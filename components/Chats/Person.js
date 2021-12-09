import { useRouter } from 'next/router';

import classes from './person.module.scss';

const Person = ({ person, handleClick }) => {

  const router = useRouter();

  const goToChat = (id) => {
    router.push(`/chats/${id}`);
  }
  
  return (
    <div className={classes.person} onClick={() => handleClick(person.id)}>
      <img src={person.img} alt={person.img} />
      <p>{person.name}</p>
    </div>
  )
}

export default Person;
