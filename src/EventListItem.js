import React from 'react';

const EventListItem = props => {
  return (
    <a href={props.url} target="_blank">
      {props.name}
    </a>
  );
};

export default EventListItem;
