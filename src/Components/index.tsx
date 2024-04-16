import Checking from './Checking';
import './tailwind.css';
import '@mantine/core/styles.css';
import { Container, MantineProvider } from '@mantine/core';
import NavBar from './NavBar/Navbar';
import { Button } from "./Button";
import React from 'react';

const CheckinNavbar = () => {
  return (
    <MantineProvider>
      <Container fluid className="flex flex-col min-h-screen bg-white-bg !p-0 w-full">
        <NavBar />
      </Container>
    </MantineProvider>
  );
}




export { Checking, Button, NavBar, CheckinNavbar };


