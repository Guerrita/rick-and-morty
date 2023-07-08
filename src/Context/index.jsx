import { createContext, useState } from 'react'

export const APIContext = createContext()


const PageProvider = ({children}) => {
  const [page, setPage] = useState(1)
  const [detail, setDetail] = useState("character")

  return (
    <APIContext.Provider
    value={{
      page,
      setPage,
      detail,
      setDetail
    }}>
      {children}
    </APIContext.Provider>
  )
}

export default PageProvider