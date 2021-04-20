import { useState } from "react";
import { FixedSizeList } from "react-window";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import { Skeleton } from '@material-ui/lab'
import { v4 } from "uuid";

function RenderRow(props) {
  const [isLoading, setIsLoading] = useState(true)
  const { index, style, data } = props;
  return (
    <ListItem button style={style} key={v4()}>
      <ListItemIcon>
      <div>
      <img
        src={data[index].flag}
        alt=''
        style={{ height: "10px", display: `${isLoading ? 'none': 'flex'}` }}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && <Skeleton height={20} width={20} />}
    </div>
      </ListItemIcon>
      <ListItemText primary={data[index].name} />
    </ListItem>
  );
}

const LazyList = ({ countries }) => (
  <FixedSizeList
    height={400}
    width={"60vw"}
    itemSize={46}
    itemCount={countries.length}
    itemData={countries}
  >
    {RenderRow}
  </FixedSizeList>
);

export default LazyList;
