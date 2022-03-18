import React from "react"
import { useRouter } from "next/router" 
import Transition from './Transition'
import Header from "../header/Header"
// import "./styles.scss"

export default function Layout ({ children }) {
  const router = useRouter() 
  return (
    <div style={{ position: 'relative' }} className="layout">
      {/* Header component that doesn't animate */}
      <Header />
      <Transition location={router.pathname}>
	<main className="main">{children}</main>
      </Transition>
    </div>
  )
}
