import { useRef } from "react";
import useStyles from "./search.styles";
import { TextField, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const Search = ({ search, setSearch, dropdown, setDropdown }) => {
  const input = useRef();
  const button = useRef();
  const classes = useStyles();

  const handleChange = (e) => {
    setSearch(e.target.value);
    !dropdown && setDropdown(true);
  };

  const handleDropdown = (e) => {
    e.preventDefault();
    input.current.focus();
  };

  return (
    <TextField
      label='Search Countries'
      className={classes.textField}
      value={search}
      onChange={handleChange}
      inputRef={input}
      InputProps={{
        endAdornment: (
          <IconButton ref={button} size='small' onMouseDown={handleDropdown}>
            {dropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        ),
        className: classes.input
      }}
      onClick={() => setDropdown(!dropdown)}
      onBlur={() => setDropdown(false)}
    />
  );
};

export default Search;
