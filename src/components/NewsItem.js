import React, { Component } from "react";

export class NewsItem extends Component {
   render() {
      let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
      return (
         <div className="my-3">
            <div className="card">
               <div className="my-1" style={{display:"flex",justifyContent:"right",position:"absolute", right:"2px"}}>

               <span className=" badge rounded-pill bg-danger"> {source}</span>
               </div>

               <img src={imageUrl} className="card-img-top" alt="" />
               <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text">
                     <small className="text-muted">
                        By {author ? author : "unknown"} on {new Date(date).toGMTString()}
                     </small>
                  </p>
                  <p className="card-text">
                     <small className="text-muted">{new Date(date).toLocaleString("en-GB", { timeZone: "Asia/Kolkata" })} IST</small>
                  </p>

                  <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
                     Read more
                  </a>
               </div>
            </div>
         </div>
      );
   }
}

export default NewsItem;
