import React from "react";
import PicSideBar from "../components/PicSideBar";
import Layout from "../components/Layout";

function TakePic(){
    return (
    <Layout>
        <div className="fixed top-4 left-4 h-10 text-blue-600">
            Code : XXX_XXX_XXX
        </div>
        <PicSideBar/>
    </Layout>
    )
}

export default TakePic;