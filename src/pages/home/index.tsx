import React from 'react';
import { Card, Col, Row } from 'antd';
import  { useNavigate } from "react-launcher";
import pageData from './data.ts';

import './index.css';

const Home: React.FC = () => {

    const navigate = useNavigate();
    const onItemClick = (path: string) => {
        if(!path) { return }
        navigate(path)
    }
    return (
        <div className="home-container">
            <h1 className="home-title">Jotai Best Practices</h1>
            <Row gutter={[16, 48]}>
                {
                    pageData.menus.map(item => (
                        <Col span={8}>
                            <Card hoverable title={item.title} bordered={true} onClick={() => onItemClick(item.path)}>
                                {item.desc || 'To be supplemented'}
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
};

export default Home;
