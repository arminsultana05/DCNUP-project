import React from 'react';
import '../PersonCard/PersonCard.css'
import logo from '../../assets/icon-logo/batch-icon.png'

const PersonCard = () => {
    return (
        <div className='mid-container '>
            <div className="mt-20 grid lg:grid-cols-3 gap-12">
                {/* Card For Mayor */}
                <div className="card-container ">
                    <div className="top-container pb-5 flex justify-around items-center">
                        <div className="icon-size ml-4 flex items-center justify-center">
                            <img className='w-6 h-8' src={logo} alt="" />
                        </div>
                        <p className='card-taxt mr-10'>Honourable Mayor</p>

                    </div>
                    <div className="middle-container">
                        <div className="img-container mx-auto mt-5">


                        </div>
                        <div className="text-center  pt-4">
                            <p className='text1'>Barrister Sheikh Fazle Noor Taposh</p>
                            <p className='text2'>Mayor</p>
                            <p className='text3'>Dhaka South City Corporation</p>
                            <a className='text4 pb-5 cursor-pointer' href="http://dscc.portal.gov.bd/site/page/284a426a-cdb8-43be-b9ba-221294df2343" target='_blank'>Details...</a>
                            
                        </div>


                    </div>

                </div>
                {/* Card for Chief Executive Officer */}
                <div className="card-container ">
                    <div className="top-container pb-5 flex justify-around items-center">
                        <div className="icon-size ml-4 flex items-center justify-center">
                            <img className='w-6 h-8' src={logo} alt="" />
                        </div>
                        <p className='card-taxt mr-10'>Chief Executive Officer</p>

                    </div>
                    <div className="middle-container">
                        <div className="img-container1 mx-auto mt-5">


                        </div>
                        <div className="text-center  pt-4">
                            <p className='text1'>Farid Ahmed</p>
                            <p className='text2'>Chief Executive Officer</p>
                            <p className='text3'>Dhaka South City Corporation</p>
                            <a className='text4 pb-5 cursor-pointer' href="http://dscc.portal.gov.bd/sites/default/files/files/dscc.portal.gov.bd/npfblock//2021-05-31-06-32-eb17ca77e32eef120927090b4f1cd2cf.pdf" target='_blank'>Details...</a>
                            
                        </div>


                    </div>

                </div>
                {/* Card for Project Director */}
                <div className="card-container ">
                    <div className="top-container pb-5 flex justify-around items-center">
                        <div className="icon-size ml-4 flex items-center justify-center">
                            <img className='w-6 h-8' src={logo} alt="" />
                        </div>
                        <p className='card-taxt mr-10'>Project Director</p>

                    </div>
                    <div className="middle-container">
                        <div className="img-container mx-auto mt-5">


                        </div>
                        <div className="text-center  pt-4">
                            <p className='text1'>Mohammad Sirajul Islam</p>
                            <p className='text2'>Project Director</p>
                            <p className='text3'>Dhaka South City Corporation</p>
                            <a className='text4 pb-5 cursor-pointer' href="http://dscc.portal.gov.bd/site/page/284a426a-cdb8-43be-b9ba-221294df2343" target='_blank'>Details...</a>
                            
                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default PersonCard;