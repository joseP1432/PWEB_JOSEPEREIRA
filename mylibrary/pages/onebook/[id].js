import useSWR from 'swr'
import { useRouter } from 'next/router'
import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Space, Layout, Menu } from 'antd';
import 'antd/dist/reset.css';
import React from 'react';
import Head from 'next/head'
const { Header, Content, Footer, Sider } = Layout;

export default function Books() {
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
                                icon: <Pesquisa />,
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
                            <TheBook />
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export function TheBook() {
    const { id } = useRouter().query;
    const { data, error } = useSWR(`https://www.googleapis.com/books/v1/volumes/` + id, fetcher);
    if (error) return <div>Falha na requisição...</div>
    if (!data) return (<div>Carregando...</div>)
    if (!data.id) return (<div> Livro indisponível </div>)
    if (!data.volumeInfo.imageLinks)
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1> {data.volumeInfo.title} </h1>
                    <h3>{data.volumeInfo.authors}</h3>
                </div>
                <div>
                    <p>{data.volumeInfo.description}</p>
                </div>
            </div>
        )

    if (data.volumeInfo.imageLinks)
        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1> {data.volumeInfo.title} </h1> <br />
                    <h3>{data.volumeInfo.authors}</h3>
                </div>
                <div>
                    <img src={data.volumeInfo.imageLinks.extraLarge} width="300" height="400" textAlign='center' /> <br />
                    <br />{data.volumeInfo.description}
                </div>
            </div>
        )
}

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function Home() {
    return (
        <div>
            <Space>
                <Button ghost href="../"> <HomeOutlined /> </Button>
            </Space>
        </div>
    )
}

export function Pesquisa() {
    return (
        <div>
            <Space>
                <Button ghost href="../search"> <SearchOutlined /> </Button>
            </Space>
        </div>
    )
}