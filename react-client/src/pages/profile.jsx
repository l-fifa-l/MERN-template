import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const params = useParams();
  const { username } = params;
  return <div>{username}'s Profile page </div>;
}

export default Profile;
