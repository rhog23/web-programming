import ReviewsDAO from "../dao/reviewsDAO.js";

export default class ReviewsController {
  static async apiTest(req, res, next) {
    try {
      res.json({ status: "OK" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiPostReview(req, res, next) {
    try {
      const movieId = req.body.movieId;
      const review = req.body.review;
      const user = req.body.user;

      const reviewResponse = await ReviewsDAO.addReview(movieId, user, review);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetReview(req, res, next) {
    try {
      const id = req.params.id || {};
      const review = await ReviewsDAO.getReview(id);
      if (!review) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(review);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }

  static async apiUpdateReview(req, res, next) {
    try {
      const reviewId = req.params.id;
      const review = req.body.review;
      const user = req.body.user;

      const reviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        user,
        review
      );

      let { error } = reviewResponse;

      if (error) {
        res.status(404).json({ error });
      }

      /* response from mongoDB, if modifiedCount = 0, then it means nothing was modified */
      if (reviewResponse.modifiedCount === 0) {
        throw new Error("unable to update review");
      }

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiDeleteReview(req, res, next) {
    try {
      const reviewId = req.params.id;
      const reviewResponse = await ReviewsDAO.deleteReview(reviewId);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetReviews(req, res, next) {
    try {
      const id = req.params.id || {};
      const reviews = await ReviewsDAO.getReviewsByMovieId(id);
      if (!reviews) {
        res.status(404).json({ error: "not found" });
        return;
      }
      res.json(reviews);
    } catch (e) {
      console.log(`api: ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
