import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title ,description , imageUrl ,newsUrl ,author ,publishedAt}= this.props;
    return (
      <div >
      <div  className="card">
        {/* //red badge on top  in span*/}
        <span class="badge badge-pill badge-danger" style={{display: 'flex',
  position: 'absolute',
  top: '10px',
  left: '85%',
  transform: 'translateX(-50%)',
  zIndex: '1'}}>{this.props.author}</span>
      <img src={imageUrl}  className="card-img-top" alt="..."style={{ objectFit: 'cover', height: '200px' }}/>
      <div  className="card-body">
        <h5  className="card-title">{title}...</h5>
        <p  className="card-text">{description}..</p>
        <p className="font-weight-light"> By {author} on { new Date(publishedAt).toGMTString()}</p>
        {/* since newsUrl is javascript variable so 
        we are passing it in {} target=_blank means open on  new tab */}
        <a href={newsUrl}  target='_blank' className="btn btn-sm btn-dark">Read more</a>
      </div>
    </div>
  
    </div>
   
    )
  }
}

export default NewsItem