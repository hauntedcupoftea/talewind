import { Container, Grid } from '@nextui-org/react'
import { useState } from "react";
import { } from '@nextui-org/react'
import { useSpring } from "@react-spring/core"

import Siteheader from '../components/Siteheader'
import Inputcard from '../components/Inputcard'
import Outputcard from '../components/Outputcard'

export default function Home() {
  return (
    <Container className='pt-5'>
      {/* NavBar */}
      <Siteheader />

      {/* Main Content*/}
      <Grid.Container gap={2} justify='center'>

        {/* Input */}
        <Grid xs={6} justify='center'>
          <Inputcard />
        </Grid>

        {/* Output */}
        <Grid xs={6} justify='center'>
          <Outputcard />
        </Grid>

      </Grid.Container>
    </Container>
  )
}