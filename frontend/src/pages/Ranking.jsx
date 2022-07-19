import React from "react";
import RankingContent from '../component/RankingContent';
import NavBar from '../component/Navbar';
import HeaderBar from '../component/HeaderBar';
import { Layout } from 'antd';

const Results = () => {
    return (
        <>
            <NavBar page='Ranking' />
            <Layout>
                <HeaderBar page='Ranking'/>
                <RankingContent />
            </Layout>
        </>
    );
}

export default Results;