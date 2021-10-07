import NextHead from 'next/head';

export default function Head(props) {
    let Title = props.title;
    let pageTitle = 'Grimoires';
    
    if (typeof Title !== 'undefined') {
        pageTitle = Title+' - '+pageTitle;
    }
    
    return (
        <NextHead>
            <title>{pageTitle}</title>
            <meta name="description" content="Blog para registrar aprendizados, conhecimento e experiencias"></meta>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" href="/favicon/favicon.svg"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>

            {props.children}
        </NextHead>
    );
}