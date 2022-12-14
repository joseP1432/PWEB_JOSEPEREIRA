import { HomeOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default function Movies3() {
    return (
        <div>
            <div> <Head>
                <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/54/54481.png" type="image/x-icon"></link>
                <title> Pesquisar </title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            </Head> </div>
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
                            <NameForm />
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

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        window.open("/searchmovies/" + this.state.value, '_self');
        event.preventDefault();
    }

    render() {
        return (
            <form class="form-inline" onSubmit={this.handleSubmit}>
            <label class="sr-only" for="inlineFormInputName2">T??tulo</label>
            <input type="text" class="form-control mb-2 mr-sm-2" value={this.state.value} onChange={this.handleChange} placeholder="Digite o t??tulo..."/>
            <button type="submit" class="btn btn-primary mb-2">Buscar</button>
          </form>
        );
    }
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
