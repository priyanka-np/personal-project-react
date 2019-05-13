import React from 'react';

const EventListItem = props => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.name}
    </a>
  );
};

export default EventListItem;
