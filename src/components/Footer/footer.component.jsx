import React from 'react';
import './footer.styles.scss';

class Footer extends React.Component {
    render() {
        return (
            <section id="footer" className="pb-0 pt-5 mt-5">
                <div className="container">
                    <div className="row text-left text-xs-center text-sm-left text-md-left ml-5">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <h5>Web site content</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://hpb.health.gov.lk/en/api-documentation" target="_blank">Data Source</a></li>
                               
                            </ul>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <h5>Quick links</h5>
                            <ul className="list-unstyled quick-links">
                                <li><a href="https://hpb.health.gov.lk/en/covid-19" target="_blank">More COVID-19 details</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 ">
                            <ul className="list-unstyled list-inline social text-center">
                                <li className="list-inline-item"><a href="https://www.facebook.com/DasunEkanayak" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/dasunzx/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                                <li className="list-inline-item"><a href="https://twitter.com/dasunxz" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li className="list-inline-item"><a href="mailto:mwdasun@gmail.com"><i className="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    <hr/>
                    
                </div>
                <div className="row pb-2">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p>Designed and developed by<a href="http://dasunx.com"> Dasun Ekanayake</a></p>
					
				</div>
				
			</div>
            </div >
        </section >
        )
    }
}

export default Footer;