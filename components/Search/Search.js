import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

import Person from '../Chats/Person';
import userMockedData from "../../datas/userMockedData";

import classes from './search.module.scss';

const Search = ({ toggleSearch, showSearch, handleClick, sortIt }) => {
  const data = userMockedData;
  const [searchField, setSearchField] = useState('');

  const [people, setPeople] = useState(sortIt(userMockedData));

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  useEffect(() => {
    setPeople(sortIt(data.filter(person => person.name.toUpperCase().includes(searchField.toUpperCase()))));
  }, []);

  useEffect(() => {
    setPeople(sortIt(data.filter(person => person.name.toUpperCase().includes(searchField.toUpperCase()))));
  }, [searchField]);

  return (
    <div className={`${classes.searchbg} ${!showSearch ? classes.hide : ''}`}>
      <div className={classes.search} >
        <div className={classes.close} onClick={toggleSearch}><FaTimes /></div>
        <input type="text" placeholder='search' className={classes.searchinput} onChange={handleChange} value={searchField} />
        <div className={classes.people}>
          {searchField.length > 0 ? people.map(person => <Person person={person} key={person.id} handleClick={handleClick} />)
            :
            letters.map(letter => {
              const peopleWithLetter = data.filter(p => p.name.toUpperCase().startsWith(letter));
              if (peopleWithLetter.length > 0) {
                return (
                  <div className={classes.personwithletter} key={letter}>
                    <p className="letter">{letter.toLowerCase()}</p>
                      <div className={classes.peoplewithletter}>
                      {peopleWithLetter.map(person => <Person person={person} key={person.id} handleClick={handleClick} />)}
                      </div>
                  </div>
                );
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Search
