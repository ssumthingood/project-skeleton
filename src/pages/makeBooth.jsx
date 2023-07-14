import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import UserSideBar from '../components/UserSideBar';

function MakeBooth() {
  return (
    <Layout>
      <div className="fixed top-4 left-4 h-10 text-blue-600">
        Code : XXX_XXX_XXX
      </div>
      <UserSideBar />
      <Link to="/takepic">Take Picture</Link>
    </Layout>
  );
}

export default MakeBooth;
