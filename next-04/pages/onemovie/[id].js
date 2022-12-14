import useSWR from 'swr'
import { useRouter } from 'next/router'
import { HomeOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default function Movies3() {
    //const router = useRouter();
    const { id } = useRouter().query;
    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=fe65a93e&i=` + id, fetcher);
    if (error) return <div>falha na requisição...</div>
    if (!data) return <div>carregando...</div>

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
                            padding: 10,
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
                            <div style= {{textAlign: 'center'}}>
                                <img src={data.Poster}></img> <br /> <br />
                                <h1> {data.Title} </h1> <h2> {data.Year} </h2>
                            </div>
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

async function fetcher(url) {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function Home() {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button ghost href="../movies3"> <HomeOutlined /> </Button>
            </Space>
        </div>
    )
}

export function Pesquisa() {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button ghost href="../movies4"> <SearchOutlined /> </Button>
            </Space>
        </div>
    )
}