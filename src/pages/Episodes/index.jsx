import React from 'react'
import ItemList from '../../containers/ItemList';
import banner from '@/assets/banner.png'
const API = 'https://rickandmortyapi.com/api/episode/'

const Episodes = () => {
  return (
    <section>
    <figure>
      <img src={banner}/>
    </figure>
    <ItemList API = {API} reference ={'episode'}/>
    </section>
  )
}

export default Episodes;