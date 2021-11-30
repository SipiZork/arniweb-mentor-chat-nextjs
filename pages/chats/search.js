import { useRouter } from 'next/router';
import { useState, useEffect, Fragment } from 'react';

import Person from '../../components/Chats/Person';
import { FaTimes } from 'react-icons/fa';

import classes from '../../styles/search.module.scss';
import userMockedData from '../../datas/userMockedData';

const SearchPage = () => {

  const data = userMockedData;
  const router = useRouter();
  const [searchField, setSearchField] = useState('');
  
  const sortIt = (array) => {
    return array.sort((a, b) => a.name.toUpperCase() < b.name.toLocaleUpperCase() ? -1 : 1);
  }
  const [people, setPeople] = useState(sortIt(userMockedData));

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const goChats = () => {
    router.push('/chats');
  }

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  useEffect(() => {
    setPeople(sortIt(data.filter(person => person.name.toUpperCase().includes(searchField.toUpperCase()))));
  }, [searchField]);

  return (
    <div className={classes.search}>
      <div className={classes.close} onClick={goChats}><FaTimes /></div>
      <input type="text" placeholder='search' className={classes.searchinput} onChange={handleChange} value={searchField} />
      <div className={classes.people}>
        {searchField.length > 0 ? people.map(person => <Person person={person} key={person.id} />)
          :
          letters.map(letter => {
            const peopleWithLetter = data.filter(p => p.name.toUpperCase().startsWith(letter));
            if (peopleWithLetter.length > 0) {
              return (
                <div className={classes.personwithletter} key={letter}>
                  <p className="letter">{letter.toLowerCase()}</p>
                    <div className={classes.peoplewithletter}>
                    {peopleWithLetter.map(person => <Person person={person} key={person.id} />)}
                    </div>
                </div>
              );
            }
          })
        }
      </div>
    </div>
  )
}

export default SearchPage;
