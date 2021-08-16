import React, { Component } from 'react';

class FooterHomepageComponent extends Component {
    render() {
        return (
            <div>
                 {/* Footer */}
                 <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Daisy House Website 2021</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
            </div>
        );
    }
}

export default FooterHomepageComponent;