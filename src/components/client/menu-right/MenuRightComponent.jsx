import React, { Component } from 'react';
import bags from '../menu-header-bottom/img-menu/bags.png';
import caps from '../menu-header-bottom/img-menu/caps.png';
import clothes from '../menu-header-bottom/img-menu/clothes.png';
import cosmetics from '../menu-header-bottom/img-menu/cosmetics.png';
import shoes from '../menu-header-bottom/img-menu/shoes.png';
import './MenuRightStyle.css';


class MenuRightComponent extends Component {
    render() {
        return (
            <div>
                <div className="menuright">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators count-slideshow">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-300" src={bags} alt="First slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>1</h5>
                                    <p>1.1</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-300" src={caps} alt="Second slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>2</h5>
                                    <p>2.2</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-300" src={clothes} alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>3</h5>
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