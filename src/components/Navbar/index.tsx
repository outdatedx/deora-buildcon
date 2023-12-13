import React from 'react'

import { Container } from '../container'
import Logo from '../Logo'

export const Navbar = () => {
  return (
    <Container className="navbar director-font">
      <Logo />
      <a href="#">About</a>
      <a href="#">GPW</a>
      <a href="#">Catalog</a>
      <a href="#">Contact</a>
    </Container>
  )
}
