import React, { createContext, useState } from "react"

const defaultValues = {
  isModalOpen: false,
  toggleModalOpen: () => {},
}
export const Context = createContext(defaultValues)

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false)

  const toggleModalOpen = () => {
    setModalOpen(!isModalOpen)
  }

  return (
    <Context.Provider
      value={{
        isModalOpen,
        toggleModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  )
}
