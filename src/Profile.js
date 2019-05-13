import React from 'react';
import Button from './Button';
import EventList from './EventList';

const Profile = (props) => {
	const { name, login, avatar_url, handleLogOut, forkEvents, pullRequestEvents } = props;
	const user = name ? name : login;
	return (
	  <div className="profile">
	    <h2>Hello {user}</h2>
	    <img src={avatar_url} alt={`${user}'s avatar`} />
	    <Button 
	    	value="Log Out" 
	    	handleClick={handleLogOut} 
	    />
	    <EventList events={forkEvents} type="ForkEvent" title="Forked Repo(s)" />
	    <EventList events={pullRequestEvents} type="PullRequestEvent" title="Pull Request Event(s)" />
	  </div>
  );
}

export default Profile;