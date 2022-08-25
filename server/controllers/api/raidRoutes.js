const router = require('express').Router();
const { Post, Advice } = require('../../models');
const withAuth = require('../../utils/auth');
/* api routes:
 get post by id:/api/posts/:id
 get all advice: /api/posts/advice
 get advice by id: /api/posts/advice/:id
 post a new post: /api/posts
 post a new advice: /api/posts/advice  */

// get post by ID /api/posts/:id
router.get('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    const post = postData.get({ plain: true });
    // figure out where to send this data
    res.render('homepage', {
      post,
      logged_in: req.session.logged_in,
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

