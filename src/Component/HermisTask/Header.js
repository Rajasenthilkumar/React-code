// import { Button } from '@mui/material';
// import React from 'react';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// const Header = () => {
//     return (
//         <div>
//         <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px'  }}>
//             <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
//                 <img
//                     src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_app_icons/logo_wText_lightBG.png"
//                     alt="Funtivity Logo"
//                     style={{ width: '70px', height: 'auto', marginRight:'20px' }}
//                 />
           
//                 <nav>
//                     <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
//                     <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                         <img
//                             src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_activities.svg"
//                             alt="Activities Icon"
//                             style={{ width: '18px', height: 'auto' }}
//                         />
//                         <Typography  style={{ marginTop: '5px',  fontSize: '12px' }}>Activities</Typography>
//                     </li>
//                     <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                         <img
//                             src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_events.svg"
//                             alt="Events Icon"
//                             style={{ width: '18px', height: 'auto' }}
//                         />
//                      <Typography  style={{ marginTop: '5px',  fontSize: '12px'  }}>Events</Typography>
//                     </li>
//                     <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                         <img
//                             src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_upgrade.svg"
//                             alt="Subscription Icon"
//                             style={{ width: '18px', height: 'auto' }}
//                         />
//                     <Typography  style={{ marginTop: '5px', fontSize: '12px'  }}>Subscription</Typography>
//                     </li>
//                     <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                         <img
//                             src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_customThemes.svg"
//                             alt="My Content Icon"
//                             style={{ width: '18px', height: 'auto' }}
//                         />
//                         <Typography  style={{ marginTop: '5px',  fontSize: '12px'  }}>My Content</Typography>
//                     </li>
//                     <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                         <img
//                             src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_tournaments_active.svg"
//                             alt="Tournaments Icon"
//                             style={{ width: '18px', height: 'auto' }}
//                         />
//                      <Typography  style={{ marginTop: '5px',  fontSize: '12px' }}>Tournaments</Typography>
//                     </li>
//                     <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                         <img
//                             src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_profile.svg"
//                             alt="Profile Icon"
//                             style={{ width: '18px', height: 'auto' }}
//                         />
//                         <Typography  style={{ marginTop: '5px',  fontSize: '12px' }}>Profile</Typography>
//                     </li>
//                     <li style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                         <img
//                             src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_profile.svg"
//                             alt="Profile Icon"
//                             style={{ width: '18px', height: 'auto' }}
//                         />  
//                         <Typography  style={{ marginTop: '5px', fontSize: '12px' }}>Refer</Typography>
//                     </li>
//                     </ul>
//                 </nav>
//             </div>
            
//             <div className="auth" style={{ display: 'flex', gap: '20px' }}>
//                 <Button sx={{backgroundColor:'#bd2e12',color:'#f8f8f8 '}}> Sign up</Button>
//                 <Button sx={{backgroundColor:'#bd2e12',color:'#f8f8f8 '}}>Log in</Button>
//             </div>
         
//         </header>
//         <Divider/>
//         </div>
//     );
// };

// export default Header;

// Header.js
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Header = () => {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px' }}>
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/">
                        <img
                            src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_app_icons/logo_wText_lightBG.png"
                            alt="Funtivity Logo"
                            style={{ width: '70px', height: 'auto', marginRight: '20px' }}
                        />
                    </Link>

                    <nav>
                        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
                            <li>
                                <Link to="/activities">
                                    <img
                                        src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_activities.svg"
                                        alt="Activities Icon"
                                        style={{ width: '18px', height: 'auto' }}
                                    />
                                    <Typography style={{ marginTop: '5px', fontSize: '12px' }}>Activities</Typography>
                                </Link>
                            </li>
                            <li>
                                <Link to="/events">
                                    <img
                                        src="https://dzkqr8d3sax4r.cloudfront.net/app_assets/funtivity_portal_icons/icon_funtivityPortal_events.svg"
                                        alt="Events Icon"
                                        style={{ width: '18px', height: 'auto' }}
                                    />
                                    <Typography style={{ marginTop: '5px', fontSize: '12px' }}>Events</Typography>
                                </Link>
                            </li>
                            {/* Add similar Link components for other navigation items */}
                        </ul>
                    </nav>
                </div>

                <div className="auth" style={{ display: 'flex', gap: '20px' }}>
                    <Button sx={{ backgroundColor: '#bd2e12', color: '#f8f8f8 ' }}> Sign up</Button>
                    <Button sx={{ backgroundColor: '#bd2e12', color: '#f8f8f8 ' }}>Log in</Button>
                </div>
            </header>
            <Divider />
        </div>
    );
};

export default Header;
