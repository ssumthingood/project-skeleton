import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Finish() {
  return (
    <Layout>
      <div className="fixed top-4 left-4 h-10 text-blue-600">Finish</div>
      <Link to="/">Go home</Link>
    </Layout>
  );
}

export default Finish;
