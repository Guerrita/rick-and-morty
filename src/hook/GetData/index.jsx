import { useContext, useState, useEffect } from "react"
import { APIContext  } from "../../Context";
import axios from "axios";

const GetData = () => {
  const context = useContext(APIContext)
  const [response, setResponse] = useState();
  let api = `https://rickandmortyapi.com/api/${context.detail}/?page=${context.page}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api)
        if (response.status === 200) {
          // console.log(response.data)
          setResponse(response.data);
        }

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, [api]);

  return response
}

export default GetData