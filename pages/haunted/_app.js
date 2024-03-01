import { useState, useEffect } from "react"
import useDarkMode from "use-dark-mode"
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Layout from "../../haunted/components/Layout";
import GlobalStyle from "../../styles/GlobalStyle";
import { darkTheme, lightTheme } from "../../styles/theme.config";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';

function MyApp({ Component, pageProps }) {
    const darkMode = useDarkMode(true, { storageKey: null, onChange: null })
    const [isMounted, setIsMounted] = useState(false)

    // const [theme, setTheme] = useState(lightTheme)
    const theme = darkMode.value ? darkTheme : lightTheme;

    useEffect(() => {
        setIsMounted(true);
    }, [])

    return (
        <>
            <GoogleAnalytics />
            <ThemeProvider theme={theme}>
                <Head>
                    <meta content="width=device-width, initial-scale=1" name="viewport" />
                    <link rel="icon" href="/favicon.png" />

                </Head>
                <GlobalStyle />
                <Layout>
                    <DefaultSeo
                        canonical={SEO.haunted.url}
                        {...SEO}
                        additionalMetaTags={[{
                            name: 'keywords',
                            content: SEO.openGraph.keywords,
                        },
                        {
                            name: 'twitter:image',
                            content: SEO.haunted.images[0].url
                        },
                        {
                            name: 'twitter:title',
                            content: SEO.haunted.title,
                        },
                        {
                            name: 'twitter:description',
                            content: SEO.haunted.description,
                        },
                        {
                            httpEquiv: 'x-ua-compatible',
                            content: 'IE=edge; chrome=1'
                        }]}
                    />
                    {isMounted && <Component {...pageProps} />}
                </Layout>
            </ThemeProvider>
        </>

    )
}
export default MyApp