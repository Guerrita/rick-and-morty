import React, {useState} from 'react'
import banner from '@/assets/banner.png'
import ItemList from '@/containers/ItemList';
import {Location} from "@/components/Location";


const Locations = () => {
  // const [page, setpage] = useState(1);
  // const API = `https://rickandmortyapi.com/api/location/?page=${page}`;
  // const allItems = useGetItems(API);
  // const { info, results } = allItems;
  // console.log(info)
  // console.log(results)
  return (
    <section>
    <figure>
      <img src={banner}/>
    </figure>
    <ItemList >
      {results?.map(location => (
          <Location location = {location} key= {location.id}/>
        ))}
      </ItemList>
    </section>
  )
}

export default Locations;