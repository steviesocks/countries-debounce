import { useState } from 'react';

import useStyles from './app.styles';

import Search from './components/search/search.component';


import CountryList from './components/country-list/country-list.component';

function App() {
  const [searchField, setSearchField] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const classes = useStyles()

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <Search search={searchField} setSearch={setSearchField} dropdown={dropdown} setDropdown={setDropdown}/>
        {
          dropdown ?
              <CountryList search={searchField}/>
              : null
        }
      </header>
      <footer className={classes.footer}>
        <p>*API: <a href="https://restcountries.eu/rest/v2/all" target="_blank" rel="noreferrer">REST Countries</a> </p>
      </footer>
    </div>
  );
}

export default App;
