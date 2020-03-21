import React from 'react';
import NavBar from '../navigationbar/navbar.component';
import PropTypes from 'prop-types';
import {
    setTranslations,
    getLanguage,
    translate,
} from 'react-switch-lang';
import en from '../../languages/en';
import si from '../../languages/si';
import ta from '../../languages/ta';
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon
} from "react-share";
import './main.styles.scss';
import Footer from '../Footer/footer.component';

setTranslations({ en, si, ta });


class Main extends React.Component {
    render() {

        const { t } = this.props;
        const datas = this.props.datas;
        const lang = this.props.lang;
        const url = "www.dasunx.com";
        const title = "Current status (" + (`${datas.local_total_cases}`) + " total cases) of the Covid-19 in Sri lanka";
        return (
            <div className="container-fluid justify-content-center">
                <NavBar language={getLanguage()} key="navbar">
                </NavBar>
                <div className="row m-2 ml-md-2 justify-content-center">
                    {(() => {
                        if (getLanguage()=="ta") {
                            return <div className="alert alert-danger" role="alert">
                            <h4 className="alert-heading">Hello there!</h4>
                            <p>We used google translate to translate and we know it's not good enough, so if you can help us translate, be kind to <a href="" target="_blank">contact us.</a></p>
                            <hr />
                            <p className="mb-0">Thank you for your support!</p>
                        </div>;
                        }
                    })()}
                    <div className="col-md-10 border border-dark x-bd m-2" id="my-node">
                        <div className="row title-max text-center justify-content-center p-2" >
                            {t("home.sl")} : {t("home.all_pations")} {datas.local_total_number_of_individuals_in_hospitals}
                        </div>
                        <div className="row  bg-white">
                            <div className="col-md-3 justify-content-center p-3 pb-md-4 pt-md-5 ">
                                <span className="row justify-content-center title">{t("home.new_cases")}:</span>
                                <span className="row justify-content-center total title text-info font-weight-bold">{datas.local_new_cases}</span>
                            </div>
                            <div className="col-md-3 justify-content-center p-3 pb-md-4 pt-md-5 ">
                                <span className="row justify-content-center title">{t("home.tc")}:</span>
                                <span className="row justify-content-center total title text-info font-weight-bold">{datas.local_total_cases}</span>
                            </div>
                            <div className="col-md-3 justify-content-center p-3 pb-md-4 pt-md-5  ">
                                <span className="row justify-content-center title">{t("home.recovered")}:</span>
                                <span className="row justify-content-center recovered title text-success font-weight-bold">{datas.local_recovered}</span>
                            </div>
                            <div className="col-md-3 justify-content-center p-3 pb-md-4 pt-md-5 ">
                                <span className="row justify-content-center title">{t("home.Deaths")}:</span>
                                <span className="row justify-content-center death title text-danger font-weight-bold">{datas.local_deaths}</span>
                            </div>
                        </div>
                        <div className="row justify-content-end bg-white p-2 xmin-marg">
                            <span className="mt-1 mr-1">Share this on</span>

                            <FacebookShareButton
                                url={url}>
                                <FacebookIcon size={32} round={true}></FacebookIcon>
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={url}
                                title={title}
                                via="dasunx.com"
                                hashtags={['covid-19', 'coronavirus', 'srilanka']}>
                                <TwitterIcon size={32} round="true" className="ml-2 mr-2"></TwitterIcon>
                            </TwitterShareButton>
                            <TelegramShareButton
                                url={url}
                                title={title}>
                                <TelegramIcon size={32} round="true" className="ml-2 mr-2"></TelegramIcon>
                            </TelegramShareButton>
                            <WhatsappShareButton
                                url={url}
                                title={title}
                                separator=" - "
                            >
                                <WhatsappIcon size={32} round="true" className="ml-2 mr-2"></WhatsappIcon>
                            </WhatsappShareButton>

                        </div>
                    </div>

                    <div className="col-md-10 border border-dark x-bd m-2">
                        <div className="row title-max justify-content-center p-2" >
                            {t("home.gb")}
                        </div>
                        <div className="row justify-content-center bg-white">
                            <div className="col-md-3 justify-content-center p-3 pb-md-5 pt-md-5 ">
                                <span className="row justify-content-center title">{t("home.new_cases")}:</span>
                                <span className="row justify-content-center total title text-info font-weight-bold">{datas.global_new_cases}</span>
                            </div>
                            <div className="col-md-3 justify-content-center p-3 pb-md-5 pt-md-5 ">
                                <span className="row justify-content-center title">{t("home.tc")}:</span>
                                <span className="row justify-content-center total title text-info font-weight-bold">{datas.global_total_cases}</span>
                            </div>
                            <div className="col-md-3 justify-content-center p-3 pb-md-5 pt-md-5  ">
                                <span className="row justify-content-center title">{t("home.recovered")}:</span>
                                <span className="row justify-content-center recovered title text-success font-weight-bold">{datas.global_recovered}</span>
                            </div>
                            <div className="col-md-3 justify-content-center p-3 pb-md-5 pt-md-5 ">
                                <span className="row justify-content-center title">{t("home.Deaths")}:</span>
                                <span className="row justify-content-center death title text-danger font-weight-bold">{datas.global_deaths}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-2 ml-md-2 justify-content-center">
                    {datas.hospital_data.map(data =>
                        <div className="card col-md-2 mt-2 ml-2 mr-md-2" key={data.hospital.name}>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    {(() => {
                                        switch (getLanguage()) {
                                            case "en": return data.hospital.name;
                                            case "si": return data.hospital.name_si;
                                            case "ta": return data.hospital.name_ta;
                                            default: return data.hospital.name;
                                        }
                                    })()}
                                </h5>
                                <hr />
                            </div>
                            <ul className="list-group list-group-flush pb-2">
                                <li className="list-group-item">{t("home.cl")} <span className="float-right">{data.cumulative_local}</span> </li>
                                <li className="list-group-item">{t("home.cf")}<span className="float-right">{data.cumulative_foreign}</span></li>
                                <li className="list-group-item">{t("home.tl")}<span className="float-right">{data.treatment_local}</span></li>
                                <li className="list-group-item">{t("home.tf")}<span className="float-right">{data.treatment_foreign}</span></li>
                                <li className="list-group-item"></li>
                            </ul>
                        </div>
                    )}

                </div>

                <Footer>

                </Footer>
            </div>

        )
    }
}

Main.propTypes = {
    t: PropTypes.func.isRequired,
};

export default translate(Main);