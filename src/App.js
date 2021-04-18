import { useEffect, useState, Suspense, lazy } from 'react';

import useStyles from './app.styles';

import Search from './components/search/search.component';
import { CircularProgress } from '@material-ui/core'

const CountryList = lazy(() => import('./components/country-list/country-list.component'));

function App() {
  const [searchField, setSearchField] = useState("");
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [dropdown, setDropdown] = useState(false)

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(data => setCountries(data))
      .catch(err => console.log('oops', err))
  }, []);

  useEffect(() => {
    let filtered = countries.filter((c) => {
      if (c.name.toLowerCase().includes(searchField.toLowerCase())) return true;
      
      for (let i=0; c.altSpellings && i < c.altSpellings.length; i++) {
        if (c.altSpellings[i].toLowerCase().includes(searchField.toLowerCase())) return true;
      }
      return false;
    })
    if (filtered.length < 1) filtered = [{name: "No results..."}]
    setFilteredCountries(filtered)
  }, [searchField, countries])

  const classes = useStyles()

  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <Search search={searchField} setSearch={setSearchField} dropdown={dropdown} setDropdown={setDropdown}/>
        {
          dropdown ?
            <Suspense fallback={<CircularProgress size={20} className={classes.progress}/>}>
              <CountryList countries={filteredCountries}/>
            </Suspense> :
            null
        }
      </header>
      <footer className={classes.footer}>
        <p>*Search results take into account alternate spellings included in countries API.</p>
        <p>**API: <a href="https://restcountries.eu/rest/v2/all" target="_blank" rel="noreferrer">REST Countries</a> </p>
      </footer>

    </div>
  );
}

export default App;
