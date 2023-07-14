import React from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

function Start(){
    return (
    <Layout>
        <>
        <img alt="logo" src="../../public/assets/logo1.png"/>
        <Sidebar/>
        </>
    </Layout>
    )
}

export default Start;