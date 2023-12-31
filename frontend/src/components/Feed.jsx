import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { feedQuery, searchQuery } from '../utils/data';

import {client} from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [pins, setPins] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    if(categoryId){
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query).then((data) => {
        setPins(data);
        setLoading(false);
      })
    }else{
      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      }
    )}
  }, [categoryId]);

  if(loading) return <Spinner message="We are adding new ideas to your feed!"/>

  return (
    <div>
      {pins && <MasonryLayout pins={pins} /> }
    </div>
  )
}

export default Feed