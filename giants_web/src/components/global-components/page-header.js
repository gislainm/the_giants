import React, { Component } from 'react';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let Subheader = this.props.subheader ? this.props.subheader : ""
		

        return (
			<section className="page-header">
				  <div className="container">
				    <h2>{ HeaderTitle }</h2>
				    <ul className="list-unstyled thm-breadcrumb">
				      {/* <li><a href="#">Home</a></li> */}
				      <li><span>{ Subheader }</span></li>
				    </ul>{/* /.list-unstyled thm-breadcrumb */}
				  </div>{/* /.container */}
			</section>

        )
    }
}


export default Page_header