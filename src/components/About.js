import React from 'react'
import aboutConvert from '../assets/about_city.png';
import aboutCity from '../assets/about_convert.png';
import analytics from '../assets/analytics.svg';
import calculator from '../assets/calculator.svg';
import quality from '../assets/quality.svg';
import support from '../assets/support.svg';
import team from '../assets/team.svg';
import design from '../assets/design.svg';


export default function About(props) {

    const prefData1 = [
        {
            img: quality,
            text: "High quality"
        },
        {
            img: calculator,
            text: "Reasonable cost"
        },
        {
            img: design,
            text: "Responsive designs"
        },
    ]
    const prefData2 = [
        {
            img: team,
            text: "Experienced team",
            margin: "ml-md-5"
        },
        {
            img: support,
            text: "24/7 Support",
            margin: "ml-md-5"
        },
        {
            img: analytics,
            text: "Talented Business Analysts",
            margin: "ml-md-5"
        }
    ]

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 mb-5  col-lg-5 row flex-column">
                        <div className="order-2 order-lg-1">
                            <div className="position-relative aboutPic">
                                <img className="aboutCity" src={aboutCity} alt=""/>
                                <img className="aboutConvert" src={aboutConvert} alt=""/>
                            </div>
                        </div>
                        <div className="order-1 order-lg-2">
                            <h2 className="text-uppercase about-who border-0 text-white">who we are?</h2>
                        </div>
                    </div>
                    <div className="col-sm-12  pl-md-0 col-lg-7">
                        <div className="about-text">
                            <p className="mb-5">"{props.data ? props.data.paragraph1 : 'loading...'}</p>
                            <p>{props.data ? props.data.paragraph2 : 'loading...'}"</p>
                        </div>
                        <div className="row" style={{marginTop: 150}}>
                            {prefData1 ? prefData1.map((data, i) => (
                                <div className="col-xl-3 col-md-4 mr-xl-5 pl-xl-0 text-center" key={i}>
                                    <img src={data.img} alt=""/>
                                    <p className="prefName">{data.text}</p>
                                </div>
                            )) : null}
                        </div>
                        <div className="row ml-xl-5 flex-md-nowrap">
                            {prefData2 ? prefData2.map((data, i) => (
                                <div className="col-md-4 ml-lg-4 text-center" key={i}>
                                    <img src={data.img} alt=""/>
                                    <p className="prefName">{data.text}</p>
                                </div>
                            )) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


