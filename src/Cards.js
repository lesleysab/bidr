import React, { Component } from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Post from './post.js';


class Cards extends Component {
  state = {
    posts: [{id: 0, author: 'Mr. Woof',  time: '1:32:14 PM', bid: "500"},],
    postInput: '',
    nameInput: '',
    bidInput: ''
    
 };

 renderPosts(){
     return this.state.posts.map((post, index) => {
         const description = `$${post.bid} by ${post.author} at ${post.time}`;
         return (
             <Post text={post.text}
                 author={description}
                 key={index}
             />
         )
     }).reverse()
 }

 handlePostInputChange(e){
     this.setState({postInput: e.target.value})
 }
 handleNameInputChange(e){
     this.setState({nameInput: e.target.value})
 }
 handleBidInputChange(e){
     this.setState({bidInput: e.target.value})
 }
 handleSubmitPost(){

    const bidTime = new Date();
     const newPost = {
         author: this.state.nameInput,
         id: this.state.posts.length + 1,
         time: bidTime.toLocaleTimeString('en-US'),
         bid: this.state.bidInput,
     };
     
     const posts = this.state.posts.map(post => post);
     posts.push(newPost);
     this.setState({posts, nameInput: '', bidInput: ''})
     
 }








  render() {
    return (
    
        
             <div id="wrapper">
                 <div className="card">
                     <div className="card-header">
                         <div className="card-header-mask">
                             <div className="card-header-date">
                                 <div className="card-header-date-day">$500</div>
                                 <div className="card-header-date-month">Current Bid</div>
                             </div>
                         </div>
                     </div>
                     <div className="card-body">
                         <div className="card-body-header">
                             <div className="card-body-header-category">Photos</div>
                             <h1>Kendra Scott Chalet</h1>
                             <p className="card-body-header-sentence">
                                Lovely Kendra original designed with love by the designer herself!
                             </p>
                         </div>
                         <div className ="card-body-description">
                             
                              <TextField value={this.state.nameInput} onChange={(e) => this.handleNameInputChange(e)} className = "input" placeholder="Name"/>
                              <TextField value={this.state.bidInput} onChange={(e) => this.handleBidInputChange(e)}  className = "input" placeholder="Amount"/>
                              <button variant="contained" color="primary" className="Button" onClick={() => this.handleSubmitPost()} >
                                Bid 
                            </button>
                            </div>
                            <div className = "posts">
                           
                                {this.renderPosts()}
                         </div>
                        

                    
                 </div>
              </div>
            </div>
       
       
        

    
    );
  }
}

export default Cards;





