import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


const data = [
    {
        title: 2020,
        content:
            "test",
    },
    {
        title: 2019,
        content:
            "test",
    },
    {
        title: 2018,
        content:
            "test",
    },
    {
        title: 2017,
        content:
            "test",
    },
];

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
            <div className="timeline">
                {data.map((bloc, index) => {
                    return <TimeLineBloc data={bloc} direction={"right"} key={index} />;
                })}
            </div>
        </Layout>
    )
}

function TimeLineBloc({ data, direction }) {
    return (
        <div className={`container ${direction}`}>
            <article className="content">
                <h2>{data.title}</h2>
                <p>{data.content}</p>
            </article>
        </div>
    );
}
