import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

interface LinkType {
    key: string;
    linkTo: string;
    value: string;
}

type ContentProps = {
    linkList: LinkType[];
    children: React.ReactNode;
};

export default class Contents extends React.Component<ContentProps, {}> {

    componentWillMount() {
        window.localStorage.removeItem('subKey');
    }

    render() {
        const {Sider, Content} = Layout;
        const { linkList, children } = this.props;

        const pageHeight = Number(document.body.clientHeight) - 170;
        return (
            <div style={{height: '100%'}} className="layoutContainer">
                <Layout style={{background: '#fff', height: '100%'}}>
                    <Sider
                        width={200}
                        style={{background: '#fff', minHeight: pageHeight}}
                    >
                        <Menu
                            mode="inline"
                            selectedKeys={window.localStorage.subKey ? [window.localStorage.subKey] : [linkList[0].key]}
                            style={{ height: '100%' }}
                            onSelect={({ item, key, selectedKeys}) => window.localStorage.setItem('subKey', selectedKeys[0])}
                        >
                            {linkList.map(item =>
                                <Menu.Item key={item.key}>
                                    <Link to={item.linkTo} style={{fontSize: '14px', fontWeight: 'bold'}}>
                                        {item.value}
                                    </Link>
                                </Menu.Item>
                            )}
                        </Menu>
                    </Sider>
                    <Content style={{minHeight: pageHeight, padding: '24px'}}>
                        {children}
                    </Content>
                </Layout>
            </div>
        );
    }
}