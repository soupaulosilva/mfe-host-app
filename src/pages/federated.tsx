import { NextComponentType, NextPageContext } from "next"
import dynamic from "next/dynamic"
import Layout from 'app-pages/layout'
import { ComponentType } from "react";
const page = import('app-pages/pages/help/index');
const Page: NextComponentType = dynamic(() => import('app-pages/pages/help/index'))
const ActionProvider: ComponentType<{ children: React.ReactNode }> = dynamic(() => import('app-pages/context/action').then((m) => m.ActionProvider))

function Container() {
    return (
        <ActionProvider>
        <Layout>
            <Page />
        </Layout>
        </ActionProvider>
    )
}
Page.getInitialProps = async (ctx: NextPageContext) => {
    const getInitialProps = (await page).default?.getInitialProps;
    const { isFromRemote } = ctx.query

    if (getInitialProps) {
        return getInitialProps(ctx);
    }

    return { location: isFromRemote ? 'host' : undefined } 
}

export default Container