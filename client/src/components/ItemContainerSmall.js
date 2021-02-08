import React from "react";
import styled from "styled-components";

const ItemContainerSmall = () => {

    return (
        <Container>
        let's pretend this is a small items container!
        <h1>Name</h1>    
        <p>Price</p>
        </Container>
    )
};

const Container = styled.div`
    border: 3px solid gray;
    border-radius: 8px;
    width: 175px;
    height: 175pxl
`;

export default ItemContainerSmall;
