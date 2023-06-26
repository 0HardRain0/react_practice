// getStaticPath 다이나믹 라우팅 
// 버젼이 바뀌고 라우팅 방식 변경 및 app 디렉토리로 바뀐 시점에서 버전에 맞게 코드를 변경해야함.

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { ParsedUrlQuery } from 'querystring'

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const { id } = props
    const router = useRouter()

    // NextJS13에서는 사용하지 못함
    // 새로운 문법이므로 공부해야함.
    // if (router.isFallback) {
    //     return <div>Loading...</div>
    // }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p> 이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
                <p>{`/posts/${id}에 대응하는 페이지입니다.`}</p>
            </main>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const paths = [
        {
            params: {
                id: '1',
            },
        },
        {
            params: {
                id: '2',
            },
        },
        {
            params: {
                id: '3',
            },
        },
    ]

    return { paths, fallback: false }
}

interface PostParams extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    return {
        props: {
            id: context.params!['id']
        },
    }
}

export default Post