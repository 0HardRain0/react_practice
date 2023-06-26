// import { NextPage } from 'next'

// import Head from 'next/head'

// type SSGProps = {}

// const SSG: NextPage<SSGProps> = () => {
//     return (
//         <div>
//             <head>
//                 <title>Static Site Generation</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </head>
//             <main>
//                 <p>
//                     이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.
//                 </p>
//             </main>
//         </div>
//     )
// }

// export default SSG

import { GetStaticProps, NextPage, NextPageContext } from "next";
import Head from "next/head";

type SSGProps = {
    message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
    const{ message } = props;

    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href = "/favicon.ico" />
            </Head>
            <main>
                <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
                <p>{message}</p>
            </main>
        </div>
    );
};

// npm run dev 또는 build 시에 터미널에서 콘솔 로그가 나와야 하지만 나오지 않음 무슨 에러인지 확인해야함.
// npm run dev로 실행하여 페이지 확인은 가능
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
    const timestamp = new Date().toLocaleString();
    const message = `${timestamp}에 getStaticProps가 실행됐습니다.`;
    console.log(message);
    return{
        props: {
            message,
        },
    };
};

export default SSG;
