import React from 'react';
import {NavBar} from "../components/navBar/NavBar";
import Head from "next/head";
import {MainContainer} from "../components/mainContainer/MainContainer";



type TIndexProps = {}

const Index: React.FC<TIndexProps> = (props) => {
    return (

            <MainContainer style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "10px"
            }}
            >
                <h1>Main page</h1>
            </MainContainer>


    );
}

export default Index;