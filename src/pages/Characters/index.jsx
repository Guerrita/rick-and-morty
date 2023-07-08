import React, {useEffect, useState} from "react";
import ItemList from "@/containers/ItemList";
import banner from "@/assets/banner.png";
import {Character} from "@/components/CharacterCard";
import axios from "axios";



const Characters = () => {
  const [pageNumber, setPageNumber] = useState(1);  
  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  
  // let allItems = useGetItems(api)
  // let { info, results } = allItems;

  useEffect(() => {
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(api)
        if(response.status===200){
          setCharacters(response.data.results);
          setInfo(response.data.info);
        }        
          
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, [pageNumber])

  return (
    <section>
        <img className="characters-banner" src={banner} />
      <ItemList >
      {characters?.map(character => (
          <Character character = {character} key= {character.id}/>
        ))}
      </ItemList>
      {/* <button onClick={() => {updatePageNumber(pageNumber+1);}}>Click me</button> */}
    </section>
  );
};

export default Characters;
