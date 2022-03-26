import React from "react"
import { useRouter } from "next/router" 
import Transition from './Transition'
import Header from "../header/Header"
import Footer from "../footer/Footer"
import styles from './Layout.module.css'
import Head from "next/head"

export default function Layout ({ children }) {
  const router = useRouter() 
  return (
    <>
      <Head>
	<title>Futurama nowy sezon</title>
	<meta name="description" content="Nowy sezon Futurama już teraz dostępny w Niderlandach" />
	<link rel="preconnect" href="<https://app.snipcart.com>"/>
	<link rel="preconnect" href="<https://cdn.snipcart.com>"/>
	<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css" />
<script async src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"></script>
<div id="snipcart" data-config-modal-style="side" data-api-key="NWU4MGNhNmUtYWE0Yy00MjA3LTlkOTItZDVlYjFkMmE5NWUxNjM3ODM5MDgzMDIzNjQyMTQy" hidden></div>
	<link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.layout}>
	<div hidden id="snipcart" data-api-key="NWU4MGNhNmUtYWE0Yy00MjA3LTlkOTItZDVlYjFkMmE5NWUxNjM3ODM5MDgzMDIzNjQyMTQy"></div>
	{/* Header component that doesn't animate */}
	<Header />
	<Transition location={router.pathname}>
	  <main className="main">{children}</main>
	</Transition>
	<Footer />
      </div>
    </>
  )
}
