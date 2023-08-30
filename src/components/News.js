import React, { Component, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import  PropTypes from  'prop-types';
import InfinitScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps={
    country:'in'
  }
  static propTypes={
    country:PropTypes.string 
  }
  
   articles= []
  constructor(props)

  {
    super(props);
    console.log("hello this is constructor from news component");
    this.state={
      articles:[], 
      loading:false,
      page:1,
    category:'general',
    totalResults:0



    }
  }
    async componentDidMount()
   {
     let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed19e08a8f204ec2b8051ecd1a3b7447&page=1&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parseddata=await data.json();
      console.log(parseddata);
      // most important line
      this.setState({articles :parseddata.articles ,totalResults:parseddata.totalResults 
        ,loading: false});
     
   }
    handlePrevClick= async()=>
   {
    console.log("previous click");
    this.setState({
       page:this.state.page-1 ,
       loading:true })
      
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed19e08a8f204ec2b8051ecd1a3b7447&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let data= await fetch(url);
      let parseddata=await data.json();
      // console.log(parseddata);
      // most important line
      this.setState({articles :parseddata.articles,
       loading: false});
    

   }
   handleNextClick= async ()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
    {
       console.log(" No more news...")
    }
    else{
    console.log("next click");
    this.setState({
      loading: true
    })
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed19e08a8f204ec2b8051ecd1a3b7447&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data=  await  fetch(url);
    let parseddata= await data.json();
    this.setState({page:this.state.page + 1});
    
    this.setState({ articles:parseddata.articles ,
    loading: false});
    }
      

   }
   fetchMoreData=async()=>
   {
    this.setState({page:this.state.page + 1});
    let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ed19e08a8f204ec2b8051ecd1a3b7447&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parseddata=await data.json();
    console.log(parseddata);
    // most important line
    this.setState({articles :this.state.articles.concat(parseddata.articles) ,totalResults:parseddata.totalResults 
      ,loading: false});
   }
   
  render() {
    return (
      
      <div className='container my-3 '>
        <h2 className='text-center'>  News-Hub {this.props.category.toUpperCase()} top Headlines </h2>
         {/* {this.state.loading &&<Spinner/> */}
           <InfinitScroll
           dataLength = {this.state.articles.length}
           next = {this.fetchMoreData}
           hasMore = {this.state.articles.length!=this.state.totalResults}
           loader={<Spinner/>}
         >
                  <div className='row'>

     { this.state.articles.map((element ,index)=>{
            return<div className='col-md-4' key={index}>
           <NewsItem title={ element.title?element.title.slice(0,45):""} description={ element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:'https://images.pexels.com/photos/9967888/pexels-photo-9967888.jpeg?auto=compress&cs=tinysrgb&w=800'} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author?element.author:"unknown"} category={element.category}/>
        </div>
          
           
        })}
         
         
        </div>
        </InfinitScroll>
    
          <div className='container d-flex justify-content-between '>
            {/* since it is class based component so we are using this.handleNextClick */}
          <button type="button" disabled={this.state.page<=1} class="btn btn-dark" onClick={this.handlePrevClick}>Previous</button>
      <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next</button>
          </div>
        
      </div>
      
    )
  }
}

export default News