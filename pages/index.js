import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>もゆぅのサイトです</p>
                <p>
                    (とりあえずのサイトです{' '}
                    <a href="/posts/first-post">適当なポスト</a>.)
                </p>
            </section>
        </Layout>
    )
}