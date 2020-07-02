import React from "react";
import { Box, Container } from "@material-ui/core";

export default function boxContainer({ children, ...props }) {
    return (
        <Container>
            <Box pt={1} {...props}>
                {children}
            </Box>
        </Container>
    )
}