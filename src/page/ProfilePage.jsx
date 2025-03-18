import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_SOCIAL_FEED_BY_CREATOR } from '../graphql/queries';



function ProfilePage() {

    // const { username } = useParams(); 
    let username = "kesolink"
    const { loading, error, data } = useQuery(GET_SOCIAL_FEED_BY_CREATOR, {
        variables: { username },
    });
    console.log(error)
  return (
    <div>ProfilePage</div>
  )
}

export default ProfilePage