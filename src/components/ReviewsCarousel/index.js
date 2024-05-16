// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }
  onClickRight = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }
  onClickLeft = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }
  reviewDetails = reviews => {
    const {imgUrl, username, companyName, description} = reviews
    return (
      <div className="review-page">
        <img src={imgUrl} alt={username} />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="about-company">{description}</p>
      </div>
    )
  }
  render() {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props
    const reviewDetailedInformation = reviewsList[activeReviewIndex]
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="page-container">
          <button
            type="button"
            onClick={this.onClickLeft}
            testid="leftArrow"
            className="arrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.reviewDetails(reviewDetailedInformation)}
          <button
            type="button"
            onClick={this.onClickRight}
            testid="rightArrow"
            className="arrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
