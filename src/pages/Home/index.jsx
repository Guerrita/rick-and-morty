import React, { useEffect, useState } from "react";
import banner from "@/assets/home-banner.png";

import ItemList from "@/containers/ItemList";
import { Character } from "@/components/CharacterCard";
import axios from "axios";

const Home = () => {

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
        if (response.status === 200) {
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
    <React.Fragment>
      <figure className="banner">
        <img src={banner} alt="Banner of Rick and Morty" />
      </figure>
      <section>
        <ItemList >
          {characters?.map(character => (
            <Character character={character} key={character.id} />
          ))}
        </ItemList>
        {/* <button onClick={() => {updatePageNumber(pageNumber+1);}}>Click me</button> */}
      </section>
    </React.Fragment>
  );
};

export default Home;
