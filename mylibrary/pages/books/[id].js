import Head from 'next/head'
import { Layout, Menu, Button, Space } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { HomeOutlined, SearchOutlined } from '@ant-design/icons';

export default function Books({ data }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/149/149286.png" type="image/x-icon"></link>
                <title> My Page </title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
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
                            <TheBook data={data} />
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
        </div >
    )
}

export function TheBook({ data }) {
    if (!data) return (<div>Carregando...</div>)
    if (!data.id) return (<div> Livro indispon??vel </div>)
    if (!data.volumeInfo.imageLinks)
        return (
            <div>
                <div> <h1> {data.volumeInfo.title} </h1> <br />
                    <h3>{data.volumeInfo.authors}</h3> </div>
                <div>
                    <p>{data.volumeInfo.description}</p>
                </div>
            </div>
        )

    if (data.volumeInfo.imageLinks)
        return (
            <div>
                <div>
                    <h1> {data.volumeInfo.title} </h1> <br/>
                    <h3> {data.volumeInfo.authors} </h3>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={data.volumeInfo.imageLinks.extraLarge} width="300" height="400" textAlign='center' /> <br />
                    <br />{data.volumeInfo.description}
                </div>
            </div>
        )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: "10zbngEACAAJ" } },
            { params: { id: "sevgAAAAQBAJ" } },
            { params: { id: "FpEnCgAAQBAJ" } },
            { params: { id: "e1vzCwAAQBAJ" } },
            { params: { id: "Mi7rDwAAQBAJ" } },
            { params: { id: "wUWyDwAAQBAJ" } },
            { params: { id: "7UOnCQAAQBAJ" } },
            { params: { id: "UZcvEAAAQBAJ" } },
            { params: { id: "Ba7tDwAAQBAJ" } }
        ],
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
    const data = await res.json();
    return {
        props: {
            data
        }
    }
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

export function Pesquisa() {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button ghost href="../search"> <SearchOutlined /> </Button>
            </Space>
        </div>
    )
}