import * as React from 'react';
import Contents from '../../Content';

export class UserManage extends React.Component {
    render() {
        const linkList = [{
            key: 'user',
            linkTo: '/userManage/user',
            value: 'user',
        }];
        return (
            <Contents children={this.props.children} linkList={linkList} />
        );
    }
}
