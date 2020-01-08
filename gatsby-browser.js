import React from "react"
import { ModalProvider } from "./src/context/Context"

export const wrapRootElement = ({ element }) => (
  <ModalProvider>{element}</ModalProvider>
)
