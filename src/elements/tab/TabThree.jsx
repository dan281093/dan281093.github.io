import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const TabOne = [
    {
        image: '/assets/images/portfolio/sigmalogo.png',
        category: 'React',
        title: 'Demoday for SigmaLabs',
        url: 'https://demo.sigmalabs.co/'
    },
    {
        image: 'https://i.pinimg.com/564x/aa/95/8b/aa958bf1e2b87128e593b6c5b6d95fd5.jpg',
        category: 'React',
        title: 'Crown Clothing App',
        url: 'http://crwn-clothing-ecommerce.herokuapp.com/'
    },
    {
        image: 'https://www.greenupcity.com/79a4d9b1fbb19fd7aa5320fc73a1c78d.png',
        category: 'React',
        title: 'Greenup City',
        url: 'https://www.greenupcity.com/'
    },
    {
        image: 'https://sarona-partners.com/images/Sarona%20Partners%20Logo.png',
        category: 'HTML CSS JS',
        title: 'Sarona Partners',
        url: 'https://sarona-partners.com/'
    },
    {
        image: 'https://flamingo-captiva-cay.herokuapp.com/assets/img/logo.svg',
        category: 'HTML CSS JS',
        title: 'Flamingo Gardens Capital LTD',
        url: 'https://flamingo-captiva-cay.herokuapp.com/'
    },
    {
        image: 'https://s3.amazonaws.com/media.365x.io/wp-content/uploads/2018/04/final-logo.png',
        category: 'WordPress',
        title: '365x',
        url: 'https://www.365x.io/'
    },
    {
        image: '/assets/images/portfolio/saronavc.png',
        category: 'WordPress',
        title: 'Sarona Ventures',
        url: 'https://sarona.vc/'
    },
    {
        image: '/assets/images/portfolio/sigmalogo.png',
        category: 'WordPress',
        title: 'SigmaLabs',
        url: 'https://sigmalabs.co/'
    },
    {
        image: 'https://saronaspace.com/wp-content/uploads/2019/11/Space.png',
        category: 'WordPress',
        title: 'Sarona Space',
        url: 'https://saronaspace.com/'
    },
]


const TabTwo = [
    {
        image: '/assets/images/portfolio/sigmalogo.png',
        category: 'React',
        title: 'Demoday for SigmaLabs',
        url: 'https://demo.sigmalabs.co/'
    },
    {
        image: 'https://i.pinimg.com/564x/aa/95/8b/aa958bf1e2b87128e593b6c5b6d95fd5.jpg',
        category: 'React',
        title: 'Crown Clothing App',
        url: 'http://crwn-clothing-ecommerce.herokuapp.com/'
    },
    {
        image: 'https://www.greenupcity.com/79a4d9b1fbb19fd7aa5320fc73a1c78d.png',
        bigImage: '/assets/images/portfolio/big/dp-big--portfolio-06.jpg',
        category: 'React',
        title: 'Greenup City',
        url: 'https://www.greenupcity.com/'
    },
]

const TabThree = [
    {
        image: 'https://sarona-partners.com/images/Sarona%20Partners%20Logo.png',
        category: 'HTML CSS JS',
        title: 'Sarona Partners',
        url: 'https://sarona-partners.com/'
    },
    {
        image: 'https://flamingo-captiva-cay.herokuapp.com/assets/img/logo.svg',
        category: 'HTML CSS JS',
        title: 'Flamingo Gardens Capital LTD',
        url: 'https://flamingo-captiva-cay.herokuapp.com/'
    },
]

const TabFour = [
    {
        image: 'https://s3.amazonaws.com/media.365x.io/wp-content/uploads/2018/04/final-logo.png',
        category: 'WordPress',
        title: '365x',
        url: 'https://www.365x.io/'
    },
    {
        image: '/assets/images/portfolio/saronavc.png',
        category: 'WordPress',
        title: 'Sarona Ventures',
        url: 'https://sarona.vc/'
    },
    {
        image: '/assets/images/portfolio/sigmalogo.png',
        category: 'WordPress',
        title: 'SigmaLabs',
        url: 'https://sigmalabs.co/'
    },
    {
        image: 'https://saronaspace.com/wp-content/uploads/2019/11/Space.png',
        category: 'WordPress',
        title: 'Sarona Space',
        url: 'https://saronaspace.com/'
    },
]

class TabStyleThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            tab2: 0,
            tab3: 0,
            tab4: 0,
            isOpen: false,
        };
    }
    render() {
        const {column } = this.props;
        const { tab1, tab2, tab3, tab4, isOpen } = this.state;
        return (
            <div>
                <Tabs>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <div className="tablist-inner">
                                <TabList className="pv-tab-button text-center mt--0">
                                    <Tab><span>All Project</span></Tab>
                                    <Tab><span>React Website</span></Tab>
                                    <Tab><span>HTML CSS JS</span></Tab>
                                    <Tab><span>WordPress</span></Tab>
                                </TabList>
                            </div>
                        </div>
                    </div>

                    <TabPanel className="row row--35">
                        {TabOne.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabOne[tab1].bigImage}
                                        nextSrc={TabOne[(tab1 + 1) % TabOne.length]}
                                        prevSrc={TabOne[(tab1 + TabOne.length - 1) % TabOne.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab1: (tab1 + 1) % TabOne.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={value.url} target='_blank' rel="noopener noreferrer">
                                                        <img src={value.image} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href={value.url} target='_blank' rel="noopener noreferrer">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>
            
                    <TabPanel className="row row--35">
                        {TabTwo.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabTwo[tab2].bigImage}
                                        nextSrc={TabTwo[(tab2 + 1) % TabTwo.length]}
                                        prevSrc={TabTwo[(tab2 + TabTwo.length - 1) % TabTwo.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab2: (tab2 + TabTwo.length - 1) % TabTwo.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab2: (tab2 + 1) % TabTwo.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab2: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={value.url} target='_blank' rel="noopener noreferrer">
                                                        <img src={value.image} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabThree.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabThree[tab3].bigImage}
                                        nextSrc={TabThree[(tab3 + 1) % TabThree.length]}
                                        prevSrc={TabThree[(tab3 + TabThree.length - 1) % TabThree.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab3: (tab3 + TabThree.length - 1) % TabThree.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab3: (tab3 + 1) % TabThree.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab3: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={value.url} target='_blank' rel="noopener noreferrer">
                                                        <img src={value.image} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>

                    <TabPanel className="row row--35">
                        {TabFour.map((value , index) => (
                            <div className={`${column}`} key={index}>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={TabFour[tab4].bigImage}
                                        nextSrc={TabFour[(tab4 + 1) % TabFour.length]}
                                        prevSrc={TabFour[(tab4 + TabFour.length - 1) % TabFour.length]}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            tab4: (tab4 + TabFour.length - 1) % TabFour.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                            this.setState({
                                                tab4: (tab4 + 1) % TabFour.length,
                                            })
                                        }
                                        imageLoadErrorMessage = 'Image Loading ...'
                                        enableZoom={false}
                                    />
                                )}
                                <div className="item-portfolio-static">
                                    <div onClick={() => this.setState({ isOpen: true, tab4: index })}>
                                        <div className="portfolio-static">
                                            <div className="thumbnail-inner">
                                                <div className="thumbnail">
                                                    <a href={value.url} target='_blank' rel="noopener noreferrer">
                                                        <img src={value.image} alt="Portfolio Images"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <div className="inner">
                                                    <p>{value.category}</p>
                                                    <h4><a href="#portfolio-details">{value.title}</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </TabPanel>



                </Tabs>
            </div>
        )
    }
}


export default TabStyleThree
