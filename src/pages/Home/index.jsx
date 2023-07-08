import React, { useEffect, useState, useContext } from "react";
import banner from "@/assets/home-banner.png";

import ItemList from "@/containers/ItemList";
import { Character } from "@/components/CharacterCard";
import GetData from "@/hook/GetData";


const Home = () => {

  const [characters, setCharacters] = useState([])
  const [info, setInfo] = useState({})
  let allData = GetData()

  useEffect(() => {
    setInfo(allData?.info)
    setCharacters(allData?.results)
  }, [allData])

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
