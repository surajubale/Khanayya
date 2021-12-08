import React, { Component } from 'react'
import SimpleReactFooter from "simple-react-footer";

 class Footer extends Component {
    render() {
        const description = "Ecommerce (or electronic commerce) is the buying and selling of goods (or services) on the internet. It encompasses a wide variety of data, systems, and tools for online buyers and sellers, including mobile shopping and online payment encryption.";
        const title = "Ecommerce";
        const columns = [
          {
              title: "Resources",
              resources: [
                  {
                      name: "About",
                      link: "/about"
                  },
                  {
                      name: "Careers",
                      link: "/careers"
                  },
                  {
                      name: "Contact",
                      link: "/contact"
                  },
                  {
                      name: "Admin",
                      link: "/admin"
                  }
              ]
          },
          {
              title: "Legal",
              resources: [
                  {
                      name: "Privacy",
                      link: "/privacy"
                  },
                  {
                      name: "Terms",
                      link: "/terms"
                  }
              ]
          },
          {
              title: "Visit",
              resources: [
                  {
                      name: "Locations",
                      link: "/locations"
                  },
                  {
                      name: "Culture",
                      link: "/culture"
                  }
              ]
          }
       ];
        return (
            <div className="SimpleFooter">
                <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="black"
    iconColor="black"
    backgroundColor="bisque"
    fontColor="black"
    copyrightColor="darkgrey"
 />;
            </div>
        )
    }
}

export default Footer