import Document, {Html, Head, Main, NextScript} from "next/document";

class ErgidaDocument extends Document {
    render() {
        return (
            <Html lang="tr">
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

                <link rel="shortcut icon" type="image/x-icon" href="../static/images/favicon.png"/>
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TXF288V');`
                }}/>
            </Head>
            <body>
            <noscript dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXF288V"
                              height="0" width="0" style="display:none;visibility:hidden"></iframe>`
            }}></noscript>
            <Main/>
            <NextScript/>
            </body>
            </Html>
        )
    }
}

export default ErgidaDocument;
