import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import '../style/main.css';

const { Header, Content } = Layout;

class Main extends React.Component {

    render() {

        const managers = [
            {key: 'controlPanel', name: 'ControlPanel'},
            {key: 'content', name: 'Content'},
            {key: 'analysis', name: 'Analysis'},
            {key: 'finance', name: 'Finance'},
            {key: 'userManage', name: 'User'},
        ];

        const pageHeight = Number(document.body.clientHeight) - 170;

        const defaultSelectedKeys = () => {
            let hash = window.location.href;
            let hostKey = '';
            if (hash.includes('#')) {
                hostKey = hash.split('#/')[1].split('/')[0];
            } else {
                let arrHash = hash.split('/');
                hostKey = arrHash[arrHash.length - 2];
            }
            return hostKey;
        };

        return (
            <div className="main">
                <LocaleProvider locale={enUS} >
                    <Layout className="layout">
                        <Header>
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={[defaultSelectedKeys() === '' ? 'controlPanel' : defaultSelectedKeys()]}
                                style={{ lineHeight: '64px', fontSize: '15px' }}
                            >
                                {managers.map(item =>
                                    <Menu.Item key={item.key}>
                                        <Link to={`/${item.key}`}>{item.name}</Link>
                                    </Menu.Item>
                                )}
                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px', marginTop: '30px', minHeight: pageHeight }}>
                            <Layout style={{ background: '#fff', height: '100%' }}>
                                <Content style={{ minHeight: pageHeight }}>
                                    {this.props.children}
                                </Content>
                            </Layout>
                        </Content>
                    </Layout>
                </LocaleProvider>
            </div>
        );
    }
}

export default Main;