import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Dan Amouyal Portfolio </title>
                    <meta name="description" content="Dan Amouyal Portfolio" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
