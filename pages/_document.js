// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '@/blog.config'
import CommonScript from '@/components/CommonScript'
import Ouo from '@/components/Ouo'
import Loading from '@/components/Loading'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
            <Html lang={BLOG.LANG}>
                <Head>
                    <link rel='icon' href='/favicon.ico' />
                    <CommonScript />
                </Head>

                <body className={`${BLOG.FONT_STYLE} font-light bg-day dark:bg-night`}>
                    <Main />
                    <NextScript />
                </body>
                <Ouo />
                <Loading />
            </Html>
    )
  }
}

export default MyDocument
