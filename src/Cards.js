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
import Post from './post.js';


class Cards extends Component {
  state = {
    posts: [{id: 0, author: 'Mr. Woof',  time: 'Mon May 28 2018 16:12:25 GMT-0500 (CDT)', location: "500"},],
    postInput: '',
    userNameInput: '',
    locationInput: ''
 };

 renderPosts(){
     return this.state.posts.map((post, index) => {
         const description = `Bid $${post.location} by ${post.author} at ${post.time}`;
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
 handleUserNameInputChange(e){
     this.setState({userNameInput: e.target.value})
 }
 handleLocationInputChange(e){
     this.setState({locationInput: e.target.value})
 }
 handleSubmitPost(){
     const newPost = {
         author: this.state.userNameInput,
         id: this.state.posts.length + 1,
         time: new Date(),
         location: this.state.locationInput,
     };
     const posts = this.state.posts.map(post => post);
     posts.push(newPost);
     this.setState({posts, userNameInput: '', locationInput: ''})
 }

 renderSubmit(){
    if (this.state.userNameInput && this.state.locationInput) {
        return <button className = "mdc-button--contained" onClick={() => this.handleSubmitPost()}>Submit My Bid</button>
    }
 }





  render() {
    return (
      <div>
        {/* <Grid container spacing={500} style={{padding: 10}}> */}
               <Card className="my-whole-card">
                    
                        <div className="image-holder"></div>
                        <div className="card-content">
                         <h3>Kendra Scott Chalet</h3>
                         <p>This lovely Kendra original was designed with love by the designer herself!</p>
                         </div>
                <Divider />        
                       
                       
                    <div className="mdc-card__actions">
                      <p> Current Bid: $500</p>
                     
                     </div>


                  <div className = "input-style">
                     <input value={this.state.userNameInput} onChange={(e) => this.handleUserNameInputChange(e)} placeholder="Name"/>
                   </div>  
                   <div className = "more-input-style">
                     <input value={this.state.locationInput} onChange={(e) => this.handleLocationInputChange(e)} placeholder="Bid Amount"/>
                    </div>
                     {this.renderSubmit()}
                 <div className = "bid-style">
                     {this.renderPosts()}
                  </div> 
             </Card> 

            {/* </Grid> */}
        </div>          

    
    );
  }
}

export default Cards;





