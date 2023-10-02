import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { lazy } from 'react';
const Header = lazy(() => import('app_remote/header'));
const Sidebar = lazy(() => import('app_remote/sidebar'));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main>
        <div>
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="w-full p-3">
              <Component {...pageProps} />
            </div>
          </div>
          
        </div>
      </main>
    </>
  )
}
