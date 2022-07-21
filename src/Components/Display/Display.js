import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {

  const count = useSelector(state => state.count.count);
  const text  = useSelector(state => state.text.text  );
  
  const user  = useSelector(state => state.user);


  const userList =  user.users.length > 0 ? (
    user.users.map(user => <p key={user.id}>{user.name}</p> )
  ) : null;

  return (
    <div className='component'>
      <p>Display</p>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      {user.users.length > 0 ? <><br/><br/>Userlist: <br/><br/>{userList}</> : ''}
      {user.error? `Error: ${user.error}` : ''}
    </div>
  )
}

export default Display