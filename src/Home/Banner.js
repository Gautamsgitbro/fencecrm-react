import React from "react";
const Banner = () => {
    return (
        <React.Fragment>
        <section className="banner-block-area">
            <div className="container-fluid">
                <h1 className="banner-heading">Fencing Builder For Your Home</h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="default-padding-left">

                            <ul className="nav nav-pills custom-nav-pills" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link custom-tab active" data-toggle="pill" href="#home">CRM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-tab" data-toggle="pill" href="#menu1">Tasks & Projects</a>
                                </li>
                            </ul>


                            <div className="tab-content">
                                <div id="home" className="container tab-pane custom-tab-content active">
                                    <li><a href="">Leads, Deals, Contacts, Companies</a></li>
                                    <li><a href="">Quotes, Invoices</a></li>
                                    <li><a href="">Online payments</a></li>
                                    <li><a href="">Sales automation</a></li>
                                    <li><a href="">Rules and triggers</a></li>
                                    <li><a href="">Contact center</a></li>
                                    <li><a href="">Marketing</a></li>
                                    <li><a href="">Sales Intelligence</a></li>
                                </div>
                                <div id="menu1" className="container tab-pane fade">
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div className="start-for-btn">
                                <a href="" className="btn start-free-btn">START FOR FREE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-image">
                            <img src="frontend/images/banner.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>);
}
export default Banner;