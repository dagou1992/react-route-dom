import * as React from 'react';
import Contents from '../../Content';

export class ControlPanel extends React.Component {
    render() {
        const linkList = [
            {
                key: 'settingTime',
                linkTo: '/controlPanel/settingTime',
                value: 'Setting Time',
            },
            {
                key: 'settingTopic',
                linkTo: '/controlPanel/settingTopic',
                value: 'Setting Topic',
            },
            {
                key: 'liveControl',
                linkTo: '/controlPanel/liveControl',
                value: 'Live Control',
            },
        ];
        return (
            <Contents children={this.props.children} linkList={linkList} />
        );
    }
}
