import React from 'react';
import '../Header/Header.css'
import logo from '../../assets/icon-logo/logo-icon.png'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="header-left-content">
                <div className="header-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="header-content">
                   <p className="header-text1">Project Monitoring & Evaluation System (PMES)</p>
                   <p className="header-text2">Dhaka City Neighborhood Upgrading Project (DCNUP)</p>
                   <p className="header-text3">Dhaka South City Corporation (DSCC</p>

                </div>

            </div>
            <div className="header-right-content">
                <p className='header-left-text1'>সোমবার ৮ই কার্তিক ১৪২৯ বঙ্গাব্দ, হেমন্ত-কাল</p>
                <p className='header-left-text2'>Monday 24th October 2022, Late Autumn</p>
            </div>
            
        </div>
    );
};

export default Header;