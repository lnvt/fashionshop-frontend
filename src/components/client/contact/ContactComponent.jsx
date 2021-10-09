import React, { Component } from 'react';
import MenuHeaderTopComponent from '../menu-header-top/MenuHeaderTopComponent';
import FooterComponent from '../footer/FooterComponent';

class ContactComponent extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <div className="header">
                        <MenuHeaderTopComponent />
                    </div>
                    <div className="content_top mx-auto">
                        <div className="col span_2_of_3">
                            <div className="contact-form">
                                <h2>Contact Us</h2>
                                <form>
                                    <div>
                                        <span><label>Name</label></span>
                                        <span><input type="text" className="form-control" /></span>
                                    </div>
                                    <div>
                                        <span><label>E-mail</label></span>
                                        <span><input type="text" className="form-control" /></span>
                                    </div>
                                    <div>
                                        <span><label>Company Name</label></span>
                                        <span><input type="text" className="form-control" /></span>
                                    </div>
                                    <div>
                                        <span><label>Subject</label></span>
                                        <span><textarea defaultValue={" "} className="form-control" /></span>
                                    </div>
                                    <div>
                                        <span><input type="submit" defaultValue="Submit" className="myButton" /></span>
                                    </div>
                                </form>
                            </div>
                            <div className="clear" />
                        </div>
                        <div className="col span_1_of_3">
                            <div className="contact_info">
                                <h3>Find Us Here</h3>
                                <div className="map">
                                    <iframe 
                                        width="100%" height={175} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.365133826851!2d106.69243501428757!3d10.859808160619853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c17978287d%3A0xec48f5a17b7d5741!2zTmd1eeG7hW4gVOG6pXQgVGjDoG5oIFVuaXZlcnNpdHk!5e0!3m2!1sen!2s!4v1633406293900!5m2!1sen!2s" 
                                        style={{ color: '#666', textAlign: 'left', fontSize: '12px' }} 
                                        title="Shop Address"/>
                                </div>
                            </div>
                            <div className="company_address">
                                <h3>Company Information :</h3>
                                <p>500 Lorem Ipsum Dolor Sit,</p>
                                <p>22-56-2-9 Sit Amet, Lorem,</p>
                                <p>USA</p>
                                <p>Phone:(00) 222 666 444</p>
                                <p>Fax: (000) 000 00 00 0</p>
                                <p>Email: <span><a href="mailto:@example.com">info@mycompany.com</a></span></p>
                                <p>Follow on: <span>Facebook</span>, <span>Twitter</span></p>
                            </div>
                        </div>
                        <div className="section group">

                        </div>
                    </div>
                    <div className="footer">
                        <FooterComponent />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactComponent;