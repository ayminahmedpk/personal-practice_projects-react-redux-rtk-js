import React from 'react'

import { useDispatch } from 'react-redux'

import { fetchUsers } from '../../features/user/userSlice'

const UserController = () => {

  const dispatch = useDispatch();

  return (
    <div className="component">
      <button onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
    </div>
  )
}

export default UserController