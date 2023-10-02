import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { revalidate, flushChunks, FlushedChunks } from '@module-federation/nextjs-mf/utils';

export default function Documento({ chunks }: { chunks: any[]}) {
  return (
    <Html lang="en">
      <Head>
          <FlushedChunks chunks={chunks} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

Documento.getInitialProps = async (ctx: DocumentContext) => {
    await revalidate().then((shouldUpdate) => {
      if (shouldUpdate) {
        ctx.res?.writeHead(302, { Location: ctx.req?.url });
        ctx?.res?.end();
      }
    })

    const chunks = await flushChunks();
    const initialProps = await Document.getInitialProps(ctx);

    return {
    ...initialProps,
     chunks
    }
}

