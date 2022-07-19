import React from "react";
import ResultsContent from '../component/SettingsContent';
import NavBar from '../component/Navbar';
import HeaderBar from '../component/HeaderBar';
import { Layout } from 'antd';

const Results = () => {
    return (
        <>
            <NavBar page='Results' />
            <Layout>
                <HeaderBar page='Results'/>
                <ResultsContent />
            </Layout>
        </>
    );
}

export default Results;