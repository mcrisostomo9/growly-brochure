import React, { createContext, useState } from "react"

const defaultValues = {
  isModalOpen: false,
  toggleModalOpen: () => {},
}
export const Context = createContext(defaultValues)

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isRequestReceived, setRequestReceived] = useState(false)

  const toggleModalOpen = () => setModalOpen(!isModalOpen)

  const toggleRequestReceived = () => setRequestReceived(!isRequestReceived)

  return (
    <Context.Provider
      value={{
        isModalOpen,
        toggleModalOpen,
        isRequestReceived,
        toggleRequestReceived,
      }}
    >
      {children}
    </Context.Provider>
  )
}
