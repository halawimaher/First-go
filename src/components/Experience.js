import React from 'react';
import Carousel from 'react-elastic-carousel';
// import Item from "./ExpItem";
import './Experience.css'
 
function slider(){
    return (
        <div className="main-wrapper" id="Experience">
            <h1>My Experience</h1>
            <div className="exp-slider">
            <Carousel>
                {/* <Item>
                    <div className="Exp-Card">
                        <div className="exp-items">
                            <div className="exp-role">QA</div>
                            <div className="exp-company">Nymgo</div>
                            <div className="exp-duration">1990 - 2020</div>
                            <div className="exp-tasks">
                                <ul>
                                    <li>Lorem Ipsum has been the industry's</li> 
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item>
                    <div className="Exp-Card">
                        <div className="exp-items">
                            <div className="exp-role">QA</div>
                            <div className="exp-company">Nymgo</div>
                            <div className="exp-duration">1990 - 2020</div>
                            <div className="exp-tasks">
                                <ul>
                                    <li>Lorem Ipsum has been the industry's</li> 
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item>
                    <div className="Exp-Card">
                        <div className="exp-items">
                            <div className="exp-role">QA</div>
                            <div className="exp-company">Nymgo</div>
                            <div className="exp-duration">1990 - 2020</div>
                            <div className="exp-tasks">
                                <ul>
                                    <li>Lorem Ipsum has been the industry's</li> 
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item>
                <Item>
                    <div className="Exp-Card">
                        <div className="exp-items">
                            <div className="exp-role">QA</div>
                            <div className="exp-company">Nymgo</div>
                            <div className="exp-duration">1990 - 2020</div>
                            <div className="exp-tasks">
                                <ul>
                                    <li>Lorem Ipsum has been the industry's</li> 
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                    <li>Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Item> */}
                <div className="card">
                   <div className="card-avatar">
                        <img src="images/l1.jpeg" alt="company logo"></img>
                   </div>
                   <div className="card-details">
                      <div className="name">Quality Assurance Officer</div>
                      <div className="occupation">Nymgo</div>

                      <div className="card-about">
                         <div className="item">
                            <span className="value">2015</span>
                            <span className="separator">-</span>
                            <span className="value">2019</span>
                         </div>
                      </div>
                      <div className="skills">
                         <ul className="value">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li>
                        </ul>
                      </div>
                   </div>
                </div>
                <div className="card">
                <div className="card-avatar">
                     <img src="images/l2.jpeg" alt="company logo"></img>
                </div>
                <div className="card-details">
                   <div className="name">Account Manager</div>
                   <div className="occupation">Aramco</div>

                   <div className="card-about">
                      <div className="item">
                         <span className="value">From</span>
                         <span className="label">2013</span>
                      </div>
                      <div className="item">
                         <span className="value">Till</span>
                         <span className="label">2014</span>
                      </div>
                   </div>
                   <div className="skills">
                      <ul className="value">
                         <li>test</li>
                         <li>test</li>
                         <li>test</li>
                         <li>test</li>
                         <li>test</li>
                     </ul>
                   </div>
                </div>
                </div>
                <div className="card">
                   <div className="card-avatar">
                        <img src="images/l3.jpeg" alt="company logo"></img>
                   </div>
                   <div className="card-details">
                      <div className="name">Consultant</div>
                      <div className="occupation">Miracle</div>

                      <div className="card-about">
                         <div className="item">
                            <span className="value">From</span>
                            <span className="label">2012</span>
                         </div>
                         <div className="item">
                            <span className="value">Till</span>
                            <span className="label">2014</span>
                         </div>
                      </div>
                      <div className="skills">
                         <ul className="value">
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                      </div>
                   </div>
                </div>
            </Carousel>
            </div>
        </div>
    )
  }
export default slider