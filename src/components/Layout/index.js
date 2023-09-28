import React from "react";

import { Container } from './styles'

import Header from "../Header";
import Main from "../Calculator";
import Footer from "../Footer"

export default function Layout(props) {
  return (
    <>
      <Container>
        {/* <Header /> */}
        <Main />
        {/* <Footer /> */}
      </Container>
    </>
  )
}
