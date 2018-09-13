import React, { Component } from "react";
import "./App.css";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Post from "./post";
import TextField from "@material-ui/core/TextField";
import "./MenuAppBar";
import { throws } from "assert";

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

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBid: this.props.startBid,
      posts: this.props.posts,
      expanded: false
    };
  }

  componentDidMount() {
    return this.getStartingBid();
  }

  getStartingBid() {
    const posts = this.props.posts.sort((a, b) => {
      return parseInt(b.bid) - parseInt(a.bid);
    });
    const lastPost = (posts.length && posts[0]) || { bid: this.props.startBid };
    this.setState({ currentBid: lastPost.bid });
  }

  handleBidInputChange(e) {
    this.setState({ bidInput: e.target.value });
  }

  renderPosts() {
    return this.state.posts
      .sort((a, b) => {
        return parseInt(b.bid) - parseInt(a.bid);
      })
      .map((post, index) => {
        const description = `$${post.bid} by ${post.author} at ${post.time}`;
        return <Post text={post.text} author={description} key={index} />;
      });
  }

  handleSubmitPost() {

    const bidTime = new Date();
    const newPost = {
      id: this.state.posts.length + 1,
      time: bidTime.toLocaleTimeString("en-US"),
      bid: this.state.bidInput
    };

    // const copy = this.state.posts.map(item => item);
    const copy = this.state.posts;
    const oldBid = copy.length && copy[copy.length - 1].bid || { bid: this.props.startBid };
    if (!newPost.bid || parseInt(newPost.bid) - parseInt(oldBid) < 100) {
      return this.setState({
        bidError: "Please increment in amounts of $100 or more"
      });
    }

    const posts = this.state.posts.map(item => item);
    posts.push(newPost);
    this.setState({
      posts,
      nameInput: "",
      bidInput: "",
      bidError: "",
      currentBid: newPost.bid
    });
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <div
            className="card-header"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              textAlign: "justify"
            }}>
            <CardHeader title={this.props.itemTitle} />
            <Chip
              className="my-chip"
              style={{
                marginTop: "11px",
                marginRight: "20px",
                backgroundColor: "teal",
                color: "white",
                width: "80px",
                height: "40px"
              }}
              label={`$${this.state.currentBid}`}
              color="teal"
            />

          </div>


          <div
            className="my-card_media" >
            <img src={this.props.image} />
          </div>


          <CardContent>
            <Typography component="p" style={{ fontSize: "18px", textAlign: "justify" }}>
              {this.props.itemDescription}
            </Typography>

          </CardContent>
          <CardActions
            className={classes.actions}
            disableActionSpacing
            style={{
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <Button
              color="primary"
              className={classes.button}
              style={{ fontSize: "20px" }}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
            >
              Bid
            </Button>
          </CardActions>

          <Collapse
            in={this.state.expanded}
            timeout="auto"
            unmountOnExit
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start"
            }}
          >
            <CardContent>
              <Typography paragraph variant="body2" />
              <Typography paragraph>
                <div
                  className="input-button"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <div className="input">
                    <TextField
                      value={this.state.bidInput}
                      onChange={e => this.handleBidInputChange(e)}
                      placeholder="Increments of $100"
                    />
                  </div>
                  <div className="bid-button">
                    <Button
                      variant="contained"
                      size="small"
                      style={{ color: "white", backgroundColor: "teal" }}
                      onClick={() => this.handleSubmitPost()}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
                <div className="error-messaging">
                  {this.state.bidError && this.state.bidError}
                </div>
              </Typography>
              <div className="render-bid">
                <Typography paragraph>{this.renderPosts()}</Typography>
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </React.Fragment>
    );
  }
}

export default CardComponent;
