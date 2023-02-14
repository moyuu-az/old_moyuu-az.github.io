import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// 画像をインポートする
import Image from "next/image"
import myImage from '../public/images/amz.png'


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

// 画像とキャプションを表示する関数を定義する
function ImageWithCaption(props) {
    return (
        <div className={utilStyles.imageContainer}>
            <Image src={props.src} alt={props.alt} className={utilStyles.image} />
            <p className={utilStyles.imageCaption}>{props.caption}</p>
        </div>
    )
}

export default function Home() {

    const url1 = "https://lh3.googleusercontent.com/XKEPMn6AdtJyNPYV8RA9lkfudUK054nmzUXkj0ThVNojDO-B4phL6VsMwyZNHffQONmwRh7p_xqfOEqadFCpYSSW3reK60zDgJfaubzDGhtCYkz_FBAIfqa5CpDoe_Aobu39Uu59tWw9Fc3YXS3Jmenn8JboqtXoO1dXTsuBPwdNkYsjpJGrG0yOffu5eiHXWKnXcW_HXK4RRc1daW1LECShILaKg3jTuOmxK3lcCQite3hBEf9gY13mTWeCGR_GJhlKFQL-x6ZbDVluTmeyVcnDnaQtMrbownqjbwClZrY_4XCRgVsF0mZcNZCfH_M2uFDiD42RPEGTPUpJQK27TRDMEMFuxVpG3g4c38-jdUcBjLSSK4G1DRRo60dknmluHeJ0oU46JkA9uOA1-ebuEj_1LTCifvuFE5ySjG8-YUDBswHsGEXIRSM7vFVgG3YZoGyNrf5HlnefjnrixHpC4XPl0zFVsXJCmV_6xdYQ6VOWcqlcVcZIYQMvAO7tnElQEL2GODpOEWAkGqP5a9_CZkJVyrlBmY6bPUR1QYZZuih6w-HOgyLKwbt-7nYZwUKOVaS95uMAXvGNT1kdqufF2-sVDlWAV1iYQbjcsyXW5cpGp5oqiqzfNxF-1gy4xx9kVMeiKO7GSHhFte-e1zbbBcDOf08WzJxP8LQBZ8AzL7EpoohGhfoNvlnZT5nh8vMesiD0s0UqMQb9_WCe5BdkVZWVkFUJq4AezKvoE7OajAKOBsFbIS44N1MSoWa_4dkD-mqM2UE_T3nH98rAcJquriQ2YJU7kxF_o150eCvmV1qVmvDkn4ufZ-CewsMI9qV_K9MMLtnOGzBxn-c8bANztVvYP67g0_fQRATvK6xeEqdvMEYzMcvEsRLJG8gmQozMoZW_zeTEXEYc8H_dl4U602_4LE5EGESxplyDHKwKwwTxDPHencFcE_shqYek_Q2IgOCQpGwKIptwM1DZT6BouPM9Nh3nvBlBmAFjrSKKHRvPXpx4iowLtViCUefvksL2K6aTRLzUUK51EieO_5d9T2taLX8=w1865-h1399-no?authuser=0"
    const url2 = "https://lh3.googleusercontent.com/jpeWR4jsrGfFeLv1RCf_lcpSxVyaJYTEtYVed7fg_tKyAe0A9-4InWu6qoLe9lktkFzGNtM5CFjlK3cjWsjbJ5zqhyHzg0OtmsIBAWKZdZfqxbOvfExEgovV1wvEwJBVOgQEYr38yxW2ayXkomk2swjrVTbfMkXyG2XrOVKQhEox_WwQ_TAgEciMWzKBPn4eOfzaAxBCOqV5SWQvYkl7bz6vNF0lvApkle8LREfO4s0RoJC8y3gDUiluGbN1AsxAA2m-7BjA7BXPFrkmWTIcMS_Pjh-zFIEXJkt6ml7UUgLNwkeokrVgJFD72PgQ5Rj00MsW4ToLJYQZBXmKych_5EePqYNYAuKA7jBDFodszxYwOlpjoTk73-_5D0LTHnrI0D8sg1S03raRPksXHhPobZo3PRICcL_HFK81UGayOyFMsklT7SyQfWV2L8oMzYw3Jk-96l-chVdKnhmX4Rv2qSpXzPKhDX2WmHWnnCm2EwcoVBomDotu0zTAJBV-zMvs6UFundeX8L7ZUa04-TwCaMCaiVJuBwwQ0keO2UQZ44UFDK9_l0HaScns6Eh8aI6D38FVbQ8yiA8tIBcMM3bD-h4gLPIDUo4SsEVY3JPfR0P0_kA_rmAXvdCpQUANIacq2h-kwn_UTmZ8h0yyouGcjCyoqWLltm96d1oJjjuqxAryZNd0xnZCDUM5ts4EGTWfM382fvcQZ7toJIhU7TcmqTd1LO10DydSf5HqUiT_iRWiInloz7AqX2AFY7QuakhT50TNejST8D8EbqoUD_BYnbelhrJEie-p1nw9Tjyjn6ycV8iPRDYtUxyW03v--1q63P4uhWthmda0lgtkn0mkAAGX40jj3AdiIBhWASJvia0UzPxJAZyULBqGlnfcnEVzkQFBOsDhVxD7iajV6GddLmCodfWjWRvsE5YFjdgoVr83KD14tsmU5UlUJk_WoeisoR-8P_w7NCqxOFzc4IN91M0jrggD76H8hrTygilrU3N7h7iHxwz8YlCmePKm97rnYS6hUWAPmOPlVH911UOaWMSQlfI=w680-h609-no?authuser=0"
    const url3 = ""
    const url4 = ""

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>もゆぅのサイトです</p>
                <p></p>
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
            <ImageWithCaption src={url1} alt="My image 1" caption="イラスト1" />
            <ImageWithCaption src={url2} alt="My image 2" caption="イラスト2" />
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
