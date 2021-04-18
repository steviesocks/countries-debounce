import React from 'react';
import { FixedSizeList } from 'react-window';
import {
    ListItem,
    ListItemText
} from '@material-ui/core';
import { v4 } from 'uuid';

function renderRow(props) {
    const { index, style, data } = props;
    return (
      <ListItem button style={style} key={v4()}>
        <ListItemText primary={data[index].name} />
      </ListItem>
    );
  }

const CountryList = ({ countries }) => {

    return (
        <FixedSizeList height={400} width={"60vw"} itemSize={46} itemCount={countries.length} itemData={countries}>
            {renderRow}
        </FixedSizeList>
    )
};

export default CountryList;
