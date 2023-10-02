import { GetServerSideProps, NextPageContext } from "next";
import dynamic from "next/dynamic";
// import page from 'remote-latam/pages/latam/index'
// const page = import("remote-latam/pages/latam/index")
const Page = dynamic(() => import("remote-latam/pages/latam/index"));


export default function Latam(params: any) {
    // console.log(params, 'sherno')
    return (
        <div>
            <h2>alguma coisa</h2>
            <Page  {...params} />
        </div>
    )
}

// export const getServerSideProps = page.getServerSideProps


// export const getServerSideProps = (await page)
// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const { getServerSideProps } = await import("remote-latam/pages/latam/index")
//     console.log({getServerSideProps} )

//     // return getServerSideProps(ctx)
//     if (getServerSideProps) {
//         return getServerSideProps(ctx);
//     }

//     return {}
// }

export const getServerSideProps = async (ctx: NextPageContext) => {
    const page = await import("remote-latam/pages/latam/index")
    
    const { getServerSideProps } = page;

    if (getServerSideProps) {
        return getServerSideProps(ctx);
    }

    return {}
    // const resp = await page.getServerSideProps(ctx)

    // console.log({ resp }, 'teste')

    // return resp
}