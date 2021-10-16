import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';
import { Row, Col } from 'antd';

const style = {
  item: {
    background: "#FFF",
    padding: "1rem"
  }
}

const Home = () => {

  return (
    <main>
      <Row gutter={16}>
        <Col md={8} >
          <div style={style.item}>
            Column 1
          </div>
        </Col>
        <Col md={8} style={style.col}>
          <div style={style.item}>
            Column 2
          </div>
        </Col>
        <Col md={8} style={style.col}>
          <div style={style.item}>
            Column 3
          </div>
        </Col>
        <Col md={8} style={style.col}>
          <div style={style.item}>
            Column 4
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Home;
