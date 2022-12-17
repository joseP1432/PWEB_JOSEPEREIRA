import useSWR from 'swr'
import { useState } from 'react'

import { Button, Space, Layout, Menu } from 'antd';
import { DownOutlined, UpOutlined, HomeOutlined, FileSearchOutlined } from '@ant-design/icons';
import React from 'react';
import Head from 'next/head'
const { Header, Content, Footer, Sider } = Layout;


export default function Books() {
    const [state, setState] = useState({ url: '', titleSearchString: '', authorSearchString: '', isbnSearchString: '' })
    const [validate, setValidate] = useState({ message: '' });
    const { data, error } = useSWR(state.url, async (u) => {
        if (!state.url && !state.titleSearchString && !state.authorSearchString && !state.isbnSearchString) return { items: '' }
        if (state.url === '' && state.titleSearchString === '' && state.authorSearchString === '' && state.isbnSearchString === '') return { items: '' }
        if (state.url === '' && state.titleSearchString === '' && !state.authorSearchString && !state.isbnSearchString) return { items: '' }
        if (state.url === '' && state.titleSearchString === '' && state.authorSearchString === '' && !state.isbnSearchString) return { items: '' }
        const res = await fetch(`${state.url}?q=+intitle:${state.titleSearchString}+inauthor:${state.authorSearchString}+isbn:${state.isbnSearchString}`)
        const json = await res.json();
        return json;
    })

    const onClickHandler = e => {
        e.preventDefault()
        let s = document.getElementById('titleSearchString').value
        let t = document.getElementById('authorSearchString').value
        let v = document.getElementById('isbnSearchString').value
        if (s === '' || t === '') {
            setValidate({ message: 'Campo título ou autor vazios!' });
        } else {
            if (state.url === '') {
                setState({ url: 'https://www.googleapis.com/books/v1/volumes', titleSearchString: s, authorSearchString: t, isbnSearchString: v })
            } else {
                setState({ url: '', titleSearchString: state.titleSearchString, authorSearchString: state.authorSearchString, isbnSearchString: state.authorSearchString })
            }
            setValidate({ message: '' });
        }
    }

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
                            <TheForm message={validate.message} />
                            <TheLink url={state.url} handler={onClickHandler} />
                            <TheBooks data={data ? data : { items: '' }} show={state.url !== ''} />
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
        </div >
    )
}

export function TheForm({ message }) {
    return (
        <div>
            <form>
                <Space>
                    <label htmlFor="titleSearchString">Título do Livro: </label>
                    <input id="titleSearchString" name="titleSearchString" type="text" autoComplete="true" required /> <br /> <br />
                    <label htmlFor="authorSearchString">Autor(a) do Livro: </label>
                    <input id="authorSearchString" name="authorSearchString" type="text" autoComplete="true" required /> <br /> <br />
                    <label htmlFor="isbnSearchString">ISBN: </label>
                    <input id="isbnSearchString" placeholder='"movie", "series", "video"' name="isbnSearchString" type="text" autoComplete="true" required />
                </Space>
                <p style={{ color: 'red' }}>{message}</p>
            </form>
        </div>
    )
}

export function TheBooks({ data, show }) {
    if (!show) return (<div></div>)
    if (!data) return (<div></div>)
    if (data.error) return (<div>Falha na pesquisa</div>)
    if (data.totalItems === 0) return (<div>Filme não encontrado na pesquisa</div>)
    if (data.items === '') return (<div> <Button type="primary" size="small" loading> Carregando...</Button></div>)
    return (
        <div className="table-responsive" style={{ marginLeft: '1rem' }}>
            <table className="table table-striped table-hover">
                <thead className='table-primary'>
                    <tr align='center'>
                        <th scope="col">Filme</th>
                        <th scope="col">Ano</th>
                        <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.items.map((m) => <tr>
                        <td align='center'><a key={m.id} href={"/onebook/" + m.id}>{m.volumeInfo.title}</a></td>
                        <td align='center'><a key={m.id} href={"/onebook/" + m.id}>{m.volumeInfo.authors}</a></td>
                        <td align='center'><a key={m.id} href={"/onebook/" + m.id}>{m.volumeInfo.publisher}</a></td></tr>)}
                </tbody>
            </table>
        </div >
    )
}

export function TheLink({ url, handler }) {
    return (
        <div>
            <Button type="primary" ghost href="/movies33.js" onClick={handler}> {url === '' ? <DownOutlined /> : <UpOutlined />} </Button>
            <br /><br />
        </div>
    )
}

export function Home() {
    return (
        <div style={{ marginLeft: '2rem' }}>
            <Space>
                <Button ghost href="/"> <HomeOutlined /> </Button>
            </Space>
        </div>
    )
}