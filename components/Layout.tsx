import Head from 'next/head'
import Link from "next/link";
import { PropsWithChildren } from "react";


export default function Layout({ children }: PropsWithChildren) {
    return (
        <>
            <Head>
                <title>Amazona</title>
                <meta name='description' content="Ecommerce Website" />

            </Head>
            <div className="flex flex-col min-h-screen p-3">
                <header>
                    <nav className="flex h-12 justify-between">
                            <Link className='font-bold text-lg' href='/'>Amazona</Link>
                        <div className=''>
                            <Link className='px-2' href='/cart'>Cart</Link>
                            <Link className='px-2' href='/login'>Login</Link>
                        </div>
                    </nav>
                </header>
                <main className="container mt-4 px-4 m-auto">
                    {children}
                </main>
                <footer className='flex justify-center items-center'>
                    footer
                </footer>
            </div>
        </>

    )
}