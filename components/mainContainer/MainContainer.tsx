import React, {ComponentPropsWithoutRef} from 'react';
import {NavBar} from "../navBar/NavBar";
import Head from "next/head";

type TMainContainerProps = {
    children: React.ReactNode;
    keywords?: string;
    // style?: React.CSSProperties;
} & ComponentPropsWithoutRef<'div'>

export const MainContainer: React.FC<TMainContainerProps> = ({children, keywords, ...rest}) => {
    return (
        <>
            <Head>
                <title>Main Page | MyApp</title>
                <meta name="keywords" content={"bars, next js" + keywords}/>
            </Head>
            <NavBar />
            <div {...rest}>
                {children}
            </div>
        </>
    );
}

