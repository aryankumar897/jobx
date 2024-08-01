"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import General from "./general"
export default function PaymentSettins() {
    const [activeTab, setActiveTab] = useState('v-pills-home');

    useEffect(() => {
        // Check if there is a saved active tab in localStorage
        const savedActiveTab = localStorage.getItem('activeTab');
        if (savedActiveTab) {
            setActiveTab(savedActiveTab);
        }
    }, []);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        // Save the active tab to localStorage
        localStorage.setItem('activeTab', tabId);
    };


    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-auto">
                    <div className="col shadow  p-5">
                        <h2 className="mb-4 text-center">Site settings</h2>

                        <div className="container ">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                        <span
                                            className={`nav-link ${activeTab === 'v-pills-home' ? 'active' : ''}`}
                                            onClick={() => handleTabChange('v-pills-home')}
                                            role="tab"
                                            aria-selected={activeTab === 'v-pills-home'}
                                        >
                                            Genral settings
                                        </span>
                                        <span
                                            className={`nav-link ${activeTab === 'v-pills-profile' ? 'active' : ''}`}
                                            onClick={() => handleTabChange('v-pills-profile')}
                                            role="tab"
                                            aria-selected={activeTab === 'v-pills-profile'}
                                        >
                                            Profile
                                        </span>
                                        <span
                                            className={`nav-link ${activeTab === 'v-pills-messages' ? 'active' : ''}`}
                                            onClick={() => handleTabChange('v-pills-messages')}
                                            role="tab"
                                            aria-selected={activeTab === 'v-pills-messages'}
                                        >
                                            contact
                                        </span>

                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="tab-content" id="v-pills-tabContent">
                                        <div className={`tab-pane fade ${activeTab === 'v-pills-home' ? 'show active' : ''}`}
                                            id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><General /></div>
                                        <div className={`tab-pane fade ${activeTab === 'v-pills-profile' ? 'show active' : ''}`}
                                            id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> Stripe</div>
                                        <div className={`tab-pane fade ${activeTab === 'v-pills-messages' ? 'show active' : ''}`}
                                            id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Rozarpay.</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div></div>

        </>
    );
};

