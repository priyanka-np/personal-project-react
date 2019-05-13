import React from 'react';
import EventListItem from './EventListItem';
import PullRequestStatus from './PullRequestStatus';

const EventList = (props) => {
  const { events, title, type } = props;
  
  const lists = events.map( event => (
    <li key={event.id}>
      {type === "PullRequestEvent" ? (
        <React.Fragment>
          <EventListItem
            url={event.payload.pull_request.html_url}
            name={event.payload.pull_request.title}
          />
          <PullRequestStatus url={event.payload.pull_request.url} />
        </React.Fragment>
      ) : (
        <EventListItem
          url={"https://github.com/" + event.repo.name}
          name={event.repo.name}
        />
      )}
    </li>
  ));

  return (
    <ul>
      <h2>{title}</h2>
      {lists.length === 0 ? "No Events" : lists}
    </ul>
  );
};

export default EventList;
