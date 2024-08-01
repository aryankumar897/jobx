// components/Navigation.js
"use client"
import Link from 'next/link';


import { useState } from 'react';
import CompanyInfo from "./CompanyInfo"
import FoundingInfo from './FoundingInfo';
import AccountSetting from "./AccountSetting"
import AccountPassword from "./AccountPassword"

export default function Navigation() {
    const [activeTab, setActiveTab] = useState('nav-home');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div >

            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                        className={`nav-link m-4 ${activeTab === 'nav-home' ? 'active-tab' : ''}`}
                        id="nav-home-tab"
                        onClick={() => handleTabClick('nav-home')}
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected={activeTab === 'nav-home' ? 'true' : 'false'}
                    >
                        Company info
                    </button>
                    <button
                        className={`nav-link m-4  ${activeTab === 'nav-profile' ? 'active-tab' : ''}`}
                        id="nav-profile-tab"
                        onClick={() => handleTabClick('nav-profile')}
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected={activeTab === 'nav-profile' ? 'true' : 'false'}
                    >
                        Founding info
                    </button>
                    <button
                        className={`nav-link m-4 ${activeTab === 'nav-contact' ? 'active-tab' : ''}`}
                        id="nav-contact-tab"
                        onClick={() => handleTabClick('nav-contact')}
                        type="button"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected={activeTab === 'nav-contact' ? 'true' : 'false'}
                    >
                        Account Setting
                    </button>
                </div>
            </nav>
            <div className="tab-content  p-3" id="nav-tabContent">
                <div
                    className={`tab-pane  fade ${activeTab === 'nav-home' ? 'show active' : ''}`}
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                >



                    <CompanyInfo />
                </div>
                <div
                    className={`tab-pane  m-1 fade ${activeTab === 'nav-profile' ? 'show active' : ''}`}
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                >
                    <FoundingInfo />
                </div>
                <div
                    className={`tab-pane m-1  fade ${activeTab === 'nav-contact' ? 'show active' : ''}`}
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                >

                    <AccountSetting />


                    <AccountPassword />



                </div>
            </div>

        </div>
    );
};


