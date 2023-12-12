import { Button } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
            <div className="logo">
                <img
                    src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_app_icons/logo_wText_lightBG.png"
                    alt="Funtivity Logo"
                    style={{ width: '150px', height: 'auto' }}
                />
           
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', gap: '2px', margin: 0, padding: 0 }}>
                    <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_activities.svg"
                            alt="Activities Icon"
                            style={{ width: '20px', height: 'auto' }}
                        />
                        <a href="#" style={{ marginTop: '5px' }}>Activities</a>
                    </li>
                    <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_events.svg"
                            alt="Events Icon"
                            style={{ width: '20px', height: 'auto' }}
                        />
                        <a href="#">Events</a>
                    </li>
                    <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_upgrade.svg"
                            alt="Subscription Icon"
                            style={{ width: '20px', height: 'auto' }}
                        />
                        <a href="#">Subscription</a>
                    </li>
                    <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_customThemes.svg"
                            alt="My Content Icon"
                            style={{ width: '20px', height: 'auto' }}
                        />
                        <a href="#">My Content</a>
                    </li>
                    <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_tournaments_active.svg"
                            alt="Tournaments Icon"
                            style={{ width: '20px', height: 'auto' }}
                        />
                        <a href="#">Tournaments</a>
                    </li>
                    <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_profile.svg"
                            alt="Profile Icon"
                            style={{ width: '20px', height: 'auto' }}
                        />
                        <a href="#">Profile</a>
                    </li>
                    <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_profile.svg"
                            alt="Profile Icon"
                            style={{ width: '20px', height: 'auto' }}
                        />
                        <a href="#">Refer</a>
                    </li>
                </ul>
            </nav>
            </div>
            <div className="auth" style={{ display: 'flex', gap: '20px' }}>
                <Button sx={{backgroundColor:'#bd2e12',color:'#f8f8f8 '}}> Sign up</Button>
                <Button sx={{backgroundColor:'#bd2e12',color:'#f8f8f8 '}}>Log in</Button>
            </div>
        </header>
    );
};

export default Header;
