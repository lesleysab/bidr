import React from "react";
import CardComponent from "./CardComponent";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Post from "./post";
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      marginRight: -8
    }
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  chip: {
    color: "secondary",
    alignItem: "flex-start"
  }
});

class Cards2 extends React.Component {
  state = {
    posts: [{ id: 0, author: "Mr. Woof", time: "1:32:14 PM", bid: "500" }],
    postInput: "",
    nameInput: "",
    bidInput: "",
    bidError: "",
    currentBid: 0,
    expanded: false,
    items: []
  };

  getInitialBid = () => {
    this.setState({
      currentBid: this.state.posts[this.state.posts.length - 1].bid
    });
  };

  componentDidMount() {
    this.getInitialBid();

    fetch("/biditems")
      .then(res => res.json())
      .then(items => {
        this.setState({ items });
      });

    // app.get("/biditems", function (req, res) {

    //   const fetch = require('node-fetch');
    //   fetch('/biditems')

    //     .then(res => res.json())
    //     .then(data => {
    //       return res.json(data.image);
    //     });
    // });
  }

  // renderPosts() {
  //   return this.state.posts
  //     .map((post, index) => {
  //       const description = `$${post.bid} by ${post.author} at ${post.time}`;
  //       return <Post text={post.text} author={description} key={index} />;
  //     })
  //     .reverse();
  // }

  // handlePostInputChange(e) {
  //   this.setState({ postInput: e.target.value });
  // }
  // handleNameInputChange(e) {
  //   this.setState({ nameInput: e.target.value });
  // }
  // handleBidInputChange(e) {
  //   this.setState({ bidInput: e.target.value });
  // }
  // handleSubmitPost() {
  //   const bidTime = new Date();
  //   const newPost = {
  //     author: this.state.nameInput,
  //     id: this.state.posts.length + 1,
  //     time: bidTime.toLocaleTimeString("en-US"),
  //     bid: this.state.bidInput
  //   };

  //   const copy = this.state.posts.map(item => item);
  //   const oldBid = copy.pop().bid;
  //   if (!newPost.bid || parseInt(newPost.bid) - parseInt(oldBid) < 100) {
  //     return this.setState({
  //       bidError: "Please increment in amounts of $100 or more"
  //     });
  //   }

  //   const posts = this.state.posts.map(item => item);
  //   posts.push(newPost);
  //   this.setState({
  //     posts,
  //     nameInput: "",
  //     bidInput: "",
  //     bidError: "",
  //     currentBid: newPost.bid
  //   });
  // }

  // handleExpandClick = () => {
  //   this.setState(state => ({ expanded: !state.expanded }));
  // };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.state.items.map(biditem => (
          <CardComponent
            classes={classes}
            itemTitle={biditem.itemTitle}
            itemDescription={biditem.itemDescription}
            image={biditem.image}
            startBid={biditem.startBid}
            posts={biditem.log}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Cards2);
