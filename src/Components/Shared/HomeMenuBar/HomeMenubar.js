import React from 'react';
import './HomeMenubar.css'
import icon from '../../assets/icon-logo/home-icon.jpg'
import icon2 from '../../assets/icon-logo/about-icon.png'
import icon3 from '../../assets/icon-logo/sp-icon.png'
import icon4 from '../../assets/icon-logo/spp-icon.png'
import icon5 from '../../assets/icon-logo/sppr-icon.png'
import icon6 from '../../assets/icon-logo/Vector.jpg'

const HomeMenubar = () => {
    return (
        <div className="home-menubar-container  ">
            <div class="navbar home-menubar flex justify-between rounded-b-lg ">
                <div class=" ">
                    <ul class="menu menu-horizontal ">
                        {/* Home menu */}
                        <li><a style={{ color: "#006D77",fontSize:"13px"  }}> <img src={icon} alt="" />Home</a></li>
                        {/* About menu */}
                        <li tabindex="0">
                            <a style={{ color: "#006D77",fontSize:"13px"  }}>
                                <img src={icon2} alt="" />
                                About
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>About DCNUP</a></li>
                            </ul>
                        </li>

                        {/* Sub Project Menu */}
                        <li tabindex="0">
                            <a style={{ color: "#006D77",fontSize:"13px"  }}>
                                <img src={icon3} alt="" />
                                Sub Project
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>Sub Project List</a></li>
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>Completed Sub Projects List</a></li>
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>Ongoing Sub Projects</a></li>
                            </ul>
                        </li>
                        {/* Sub Project planning */}
                        <li tabindex="0">
                            <a style={{ color: "#006D77",fontSize:"13px"  }}>
                                <img src={icon4} alt="" />
                                Sub Project Planning
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>Activity Planning</a></li>
                                
                            </ul>
                        </li>
                        {/* Sub Project Progress */}
                        <li tabindex="0">
                            <a style={{ color: "#006D77",fontSize:"13px"  }}>
                                <img src={icon5} alt="" />
                                Sub Project Progress
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>SPAR Progress</a></li>
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>DED Progress</a></li>
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>SPAR Progress</a></li>
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>SBD</a></li>
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>Procurement</a></li>
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>Construction</a></li>
                                
                            </ul>
                        </li>

                        {/* Gallery */}
                        <li tabindex="0">
                            <a style={{ color: "#006D77",fontSize:"13px" }}>
                                <img src={icon6} alt="" />
                                Gallery
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>3d Structure Models</a></li>
                                <li><a style={{ color: "#006D77",fontSize:"13px"  }}>Photo Gallery</a></li>
                               
                                
                            </ul>
                        </li>
                        {/* Contact menu */}
                        <li tabindex="0">
                            <a style={{ color: "#006D77",fontSize:"13px" }}>
                                <img src={icon6} alt="" />
                               Contact
                               
                            </a>
                           
                        </li>



                    </ul>

                </div>
                {/* <div className="Navbar-end mr-2">
                    <a class="bg-green-600 rounded-full">Log In</a>
                </div> */}

            </div>
        </div>
    );
};

export default HomeMenubar;