import React from 'react';
import {NavBar} from "../components/navBar/NavBar";



type TIndexProps = {}

const Index: React.FC<TIndexProps> = (props) => {
    return (
        <div style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
            }}
        >
            <NavBar/>
            <h1>Main page</h1>
        </div>
    );
}

export default Index;