import useSWR from 'swr'
import { useState } from 'react'
import { Button, Space } from 'antd';
import { DownOutlined, UpOutlined, SearchOutlined, SortDescendingOutlined, SortAscendingOutlined } from '@ant-design/icons';
import React from 'react';
import Head from 'next/head'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

let onClickSort;
let order = 'ASC';

export default function Books() {
    const [state, setState] = useState({ url: '', orderBy: { index: '', order: 'ASC' } });
    const { data, error } = useSWR(state.url, theFetcher);

    if (state.orderBy && state.orderBy.index !== '') {
        if (data) {
            data.items.sort((a, b) => {
                if (state.orderBy.order === 'ASC') {
                    return (a[state.orderBy.index] > b[state.orderBy.index]) ? 1 : -1;
                } else {
                    return (b[state.orderBy.index] > a[state.orderBy.index]) ? 1 : -1;
                }
            });
        }
    }

    onClickSort = (dataIndex) => {
        setState({
            url: 'https://www.googleapis.com/books/v1/volumes?q=trono+intitle:trono%20de%20vidro',
            orderBy: { index: dataIndex, order: state.orderBy.order === 'ASC' ? 'DESC' : 'ASC' }
        });
        order = state.orderBy.order === 'ASC' ? 'DESC' : 'ASC';
    }

    const onClickHandler = e => {
        e.preventDefault()
        if (state.url === '') {
            setState({ url: 'https://www.googleapis.com/books/v1/volumes?q=trono+intitle:trono%20de%20vidro', orderBy: state.orderBy });
        } else {
            setState({ url: '' })
        }
    }

    return (
        <div>
            <Head>
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/1164/1164620.png" type="image/x-icon"></link>
                <title> My Library </title>
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
                                icon: <Pesquisa />,
                                label: '',
                            },
                            {
                                key: '3',
                                icon: <TheLink url={state.url} handler={onClickHandler} />,
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
                            <TheBooks data={error ? { error: 'Erro na pesquisa' } : data ? data : { items: '' }} show={state.url !== ''} />
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

async function theFetcher(url) {
    if (url === null || url === '') return { items: '' }
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

export function TheBooks({ data, show }) {
    if (!show) return (<div></div>)
    if (data.error) return (<div>Falha na requisição</div>)
    if (data.Error) return (<div><h1>Livro não encontrado.</h1></div>)
    if (data.items === '') return (<div> <Button type="primary" size="small" loading> Carregando...</Button></div>)
    return (
        <div className="table-responsive" style={{ marginLeft: '1rem' }}>
            <table className="table table-striped table-hover">
                <thead className='table-primary'>
                    <tr align='center'>
                        <th scope="col"><>Título <SortIcon dataIndex="Title" /></></th>
                        <th scope="col"><>Autor <SortIcon dataIndex="Autor" /></></th>
                        <th scope="col"><>Editora <SortIcon dataIndex="Type" /></></th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((m) => <tr>
                        <td align='center'><a key={m.id} href={"/onebook/" + m.id}>{m.volumeInfo.title}</a></td>
                        <td align='center'><a key={m.id} href={"/onebook/" + m.id}>{m.volumeInfo.authors}</a></td>
                        <td align='center'><a key={m.id} href={"/onebook/" + m.id}>{m.volumeInfo.publisher}</a></td></tr>)}
                </tbody>
            </table>
        </div>
    )
}

export function TheLink({ url, handler }) {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button type="primary" ghost href="/books.js" onClick={handler}> {url === '' ? <DownOutlined /> : <UpOutlined />} </Button>
            </Space>
        </div>
    )
}

export function Pesquisa() {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button ghost href="search"> <SearchOutlined /> </Button>
            </Space>
        </div>
    )
}

export function SortIcon({ dataIndex, type = "letter" }) {
    return (
        <Button onClick={() => onClickSort(dataIndex)} ghost="true" type="white" shape="circle" icon={<SortAscendingOutlined color='#1890ff' icon={type === 'letter' ? (order === 'ASC' ? <SortAscendingOutlined /> : <SortDescendingOutlined />) : (order === 'ASC' ? <SortAscendingOutlined /> : <SortDescendingOutlined />)} />} />
    )
}

