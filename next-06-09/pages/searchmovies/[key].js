import useSWR from 'swr'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { FileSearchOutlined, SearchOutlined, HomeOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import { Button, Space, Layout, Menu } from 'antd';
import React from 'react';
import Head from 'next/head'
const { Header, Content, Footer, Sider } = Layout;

export default function Movies3() {
    //const router = useRouter();
    const { key } = useRouter().query;
    const [url, setUrl] = useState('')
    const { data, error } = useSWR(url, theFetcher)

    const onClickHandler = (e) => {
        e.preventDefault()
        if (url === '') setUrl('https://www.omdbapi.com/?apikey=fe65a93e&s=' + key)
        else setUrl('')
    }

    return (
        <div>
            <Head>
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/149/149286.png" type="image/x-icon"></link>
                <title> My Page </title>
            </Head>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        items={[
                            {
                                key: '1',
                                icon: <br />,
                                label: '',
                            },
                            {
                                key: '2',
                                icon: <Home />,
                                label: '',
                            },
                            {
                                key: '3',
                                icon: <Pesquisa1 />,
                                label: '',
                            },
                            {
                                key: '3',
                                icon: <Pesquisa2 />,
                                label: '',
                            },
                            {
                                key: '4',
                                icon: <TheLink url={url} handler={onClickHandler} />,
                                label: '',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        className="site-layout-sub-header-background"
                        style={{
                            padding: 0,
                        }}
                    />
                    <Content
                        style={{
                            margin: '50px 40px 0',
                        }}
                    >
                        <div
                            className="site-layout-background"
                            style={{
                                padding: 0,
                                minHeight: 480,
                            }}
                        >
                            <TheMovies data={error ? { error: 'Erro na pesquisa' } : data ? data : { Search: '' }} show={url !== ''} />
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ??2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

async function theFetcher(url) {
    if (url === null || url === '') return { Search: '' }
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function TheMovies({ data, show }) {
    if (!show) return (<div></div>)
    if (data.error) return (<div>Falha na requisi????o</div>)
    if (data.Error) return (<div><h1>Filme n??o encontrado.</h1></div>)
    if (data.Search === '') return (<div> <Button type="primary" size="small" loading> Carregando...</Button></div>)
    return (
        <div className="table-responsive" style={{ marginLeft: '1rem' }}>
            <table className="table table-striped table-hover">
                <thead className='table-primary'>
                    <tr align='center'>
                        <th scope="col"> Capa </th>
                        <th scope="col"> Titulo </th>
                        <th scope="col"> Ano de Lan??amento </th>
                    </tr>
                </thead>
                <tbody>
                    {data.Search.map((m) => <tr>
                        <td align='center'><a key={m.imdbID} href={"../onemovie/" + m.imdbID}><img src={m.Poster} width="40%" /></a></td>
                        <td align='center'><a key={m.imdbID} href={"../onemovie/" + m.imdbID}>{m.Title} </a></td>
                        <td align='center'><a key={m.imdbID} href={"../onemovie/" + m.imdbID}>{m.Year}</a></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export function TheLink({ url, handler }) {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button type="primary" ghost href="/movies3.js" onClick={handler}> {url === '' ? <DownOutlined /> : <UpOutlined />} </Button>
            </Space>
        </div>
    )
}

export function Home() {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button ghost href="../"> <HomeOutlined /> </Button>
            </Space>
        </div>
    )
}

export function Pesquisa1() {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button ghost href="../movies34"> <FileSearchOutlined /> </Button>
            </Space>
        </div>
    )
}

export function Pesquisa2() {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button ghost href="../movies35"> <SearchOutlined /> </Button>
            </Space>
        </div>
    )
}