import React, { useEffect, useState } from "react";
import { useDebounce, apiCall } from "../../utils";
import Fallback from "../fallback/fallback.component";
import LazyList from "../lazy-list/lazy-list.component";

const CountryList = ({ search }) => {
  const [countries, setCountries] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
      setIsFetching(true);
      apiCall(debouncedSearch).then((data) => {
        data.length
          ? setCountries(data)
          : setCountries([{ name: "No results..." }]);
        setIsFetching(false);
      });
  }, [debouncedSearch]);

  return !isFetching ? <LazyList countries={countries} /> : <Fallback />;
};

export default CountryList;
