import * as reviewsAPIUtil from '../utils/reviews_api_util';

export const INSERT_REVIEW = 'INSERT_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CLEAR_TRAIL_REVIEWS = 'CLEAR_TRAIL_REVIEWS';
export const RECEIVE_TRAIL_REVIEWS = 'RECEIVE_TRAIL_REVIEWS';

const insertReview = (review) => dispatch => ({
  type: INSERT_REVIEW,
  review
})

const removeReview = (review) => dispatch => ({
  type: REMOVE_REVIEW,
  review
})

const receiveTrailReviews = (reviews) => dispatch => ({
  type: RECEIVE_TRAIL_REVIEWS,
  reviews
})

export const clearTrailReviews = () => dispatch => ({
  type: CLEAR_TRAIL_REVIEWS
})

export const fetchTrailReviews = (trailId) => dispatch => {
  reviewsAPITUtil.getTrailReviews(trailId)
    .then(reviews => dispatch(receiveTrailReviews(reviews)))
    .catch(err => dispatch(receiveErrors(err)))
}

export const createReview = (review, trailId) => dispatch => {
  reviewsAPIUtil.postReview(review, trailId)
    .then(review => dispatch(insertReview(review)))
    .catch(err => dispatch(receiveErrors(err)))
}

export const updateReview = (review, trailId) => dispatch => {
  reviewsAPIUtil.patchReview(review, trailId)
    .then(review => dispatch(insertReview(review)))
    .catch(err => dispatch(receiveErrors(err)))
}

export const deleteReview = (review, trailId) => dispatch => {
  reviewsAPIUtil.destroyReview(review, trailId)
    .then(review => dispatch(removeReview(review)))
    .catch(err => dispatch(receiveErrors(err)))
}