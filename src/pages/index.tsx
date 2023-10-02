import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <button className="bg-gray-400" onClick={() => localStorage.setItem('token', '123')}>clicar</button>
    </main>
  )
}
