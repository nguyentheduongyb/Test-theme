import React, { PropsWithChildren } from "react";
import Head from 'next/head'

import Header from "~/layout/common/Header";
import Footer from "~/layout/common/Footer";
const DefaultLayout = ({ children }: PropsWithChildren) => {
        return (
                <>
                        <Head>
                                <title>Entidy</title>
                                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                                <meta property="og:title" content="Entidy" key="title" />
                                <meta name="keywords" content="Entidy, Nguyễn Thế Dương"></meta>
                                <meta name="description" content="Entidy .'s personal information website"></meta>
                        </Head>
                        <Header />
                        <main className="w-full">
                                {children}
                        </main>
                        <Footer />
                </>
        );
};
export default DefaultLayout;