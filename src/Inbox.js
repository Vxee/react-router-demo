import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

export const Message = ({ match }) => {console.log(match);
  return (
    <div>
      <h3>new Message</h3>
      <h3>{match.params.id}</h3>
    </div>
  )
}

const  Inbox = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h1>Inbox</h1>
      <Link to={`${match.url}/message/12`} >message12</Link>
      <Route path={`${match.url}/message/:id`} component={Message} />
    </div>

  )
}

export default Inbox;
