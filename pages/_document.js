import { Html, Head, Main, NextScript } from 'next/document'
import process from "process";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}

if (process.env.NEXT_MANUAL_SIG_HANDLE) {
    // this should be added in your custom _document
    process.on('SIGTERM', () => {
        console.log('Received SIGTERM: ', 'cleaning up')
        process.exit(0)
    })
    process.on('SIGINT', () => {
        console.log('Received SIGINT: ', 'cleaning up')
        process.exit(0)
    })
}