import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="/about">
                <span style={{ color: 'blue' }}>  About    </span>
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="contact">
                <span style={{ color: 'blue' }}> Contact us     </span>
            </a>
        ),


    },
    {
        key: '3',
        danger: true,
        label: (
            <a target="_blank" rel="noopener noreferrer" href="/error">

                <span style={{ color: 'blue' }}> 404 page   </span>
            </a>
        ),

    },

];
export default function Dropdowna() {
    return (

        <Dropdown
            menu={{
                items,
            }}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    <span style={{ color: 'blue' }}>Page</span>
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>


    )
}
