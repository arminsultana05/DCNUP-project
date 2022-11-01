import React, { useEffect, useState } from 'react';
import '../SubProject/SubProject.css'
import Slider from "react-slick";
import card from '../../assets/card-images/W-08A.png'

const SubProject = () => {
    const [subProject, setSubProject] = useState([])
    // const token = `PBprvm6vuLaNCiP8zzFl3Xge_6A4uG3HbpaUILek-PnZfa3LpNI1pr3N4WKJ3XGBg83QbDWabXUNFNipbXPztrLmAjexye0_2YHd6WaYn9VndumNzNfWy3YbiV5MZ44lKY5WulZd-au4Ix_JBSwn2U4IoKE2k8epBLFBC4iE_tMCQmi5dTXK1b9R-5NDBKy22k-VX_0Sij3nLslLGEBGyFWG6l22BG0NXXyzFhkHkZWe-GaQ_WY9YrMxlYl7aH27GtVVhgSW2WoGIS20F2olF4fb0VGbaysZ3lwVRPOAi8JhVSbqrjx1MOzKAGA4Rh88IeSDiPH-ri_oiPhlFVP8x1mKz87OOUpEJyFCp8uFGZj8fDxdDbmvGJK8_2qCf0iU
    // `
    const getDataWithToken = async () => {
        const response = await fetch('https:/aide.centerpointbd.xyz/api/subproject/getsubprojectlist', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                // 'Authorization': `Bearer ${token}`

            },
            body: JSON.stringify({ Id: 0 }),
        });
        const data = await response.json();
        setSubProject(data.OBJ)

    };
    useEffect(() => {
        getDataWithToken()
    }, [])

    console.log(subProject);
    // Card Slider...absconst settings = {
    const settings = {

        infinite: true,
        autoplay: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className=' sub-projecr-container '>
            <div className="projecr-container mid-container">
                <div className="sub-project-text text-center ">
                    <p className='project-text '>PROJECTS</p>
                    <p className='project-text2'> ON GOING SUB PROJECTS</p>
                </div>
                <div className="">
                    <Slider {...settings}>
                        {
                            subProject.map((sub) => <div class="card-body">
                                <div class="card__image-container">
                                    <img
                                        src={card}
                                        alt="Detailed image description would go here."
                                    />
                                </div>
                                <div className="card-text">
                                    <p className='card-title'>{sub.ProjectArea}</p>
                                    <p className='card-desc'>{sub.SPName.slice(0, 50)}.....</p>
                                    <button className='btn-style rounded-full'><span>Show Details</span></button>
                                </div>


                            </div>)

                        }

                    </Slider>

                </div>



            </div>

            <div className="w-full  flex justify-center mt-8">
                <button className='show-all-btn '><span>Show All Sub-Projects</span></button>
            </div>
        </div>


    );
};

export default SubProject;