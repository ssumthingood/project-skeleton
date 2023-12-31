import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function AfterTake() {
  return (
    <Layout>
      <div className="fixed top-4 left-4 h-10 text-blue-600">After Take</div>
      <Link to="/finish">finish</Link>
    </Layout>
  );
}

export default AfterTake;
