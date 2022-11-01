import React from 'react';
import Banner from '../../HomeComponent/Banner/Banner';
import Founded from '../../HomeComponent/Founded/Founded';
import MonitoringSection from '../../HomeComponent/MonitoringSection/MonitoringSection';
import PersonCard from '../../HomeComponent/PersonCard/PersonCard';
import SubProject from '../../HomeComponent/SubProject/SubProject';
import Header from '../../Shared/Header/Header';
import HomeMenubar from '../../Shared/HomeMenuBar/HomeMenubar';

const Home = () => {
    return (
        <div >
            <Header/>
           <Banner/>
           <HomeMenubar/>
           <MonitoringSection/>
           <PersonCard/>
           <SubProject/>
           <Founded/>
            
        </div>
    );
};

export default Home;