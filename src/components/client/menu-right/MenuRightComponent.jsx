import React, { Component } from 'react';
import bags from '../menu-header-bottom/img-menu/bags.png';
import caps from '../menu-header-bottom/img-menu/caps.png';
import clothes from '../menu-header-bottom/img-menu/clothes.png';
import './MenuRightStyle.css';


class MenuRightComponent extends Component {
    render() {
        return (
            <div>
                <div className="menuright">
                    <div id="carouselExampleIndicators "
                         className="carousel slide width-menu" 
                         data-ride="carousel">
                        <ol className="carousel-indicators count-slideshow">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-300 mx-auto" src={bags} alt="First slide" />
                                <div className="carousel-caption d-none d-md-block ">
                                    <p>1.1</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-300 mx-auto" src={caps} alt="Second slide" />
                                <div className="carousel-caption d-none d-md-block ">
                                    <p>2.2</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-300 mx-auto" src={clothes} alt="Third slide" />
                                <div className="carousel-caption d-none d-md-block ">
                                    <p>3.3</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon btn btn-success" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon btn btn-success" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuRightComponent;