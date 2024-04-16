import React from 'react';
import { Button, MantineProvider, Title } from '@mantine/core';
import '@mantine/core/styles.css';

export const Checking = () => {
    return (
        <MantineProvider>
            <Title order={1} c={"dimmed"}>Checking namre</Title>
            <Button>Verdana button</Button>
        </MantineProvider>
    )
}