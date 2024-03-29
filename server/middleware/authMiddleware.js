const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    -   authorize user and get token
// @route   -   POST /api/auth/login
// @access  -   Public
// @return  -   JWT token
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      //   Get token from Bearer header
      token = req.headers.authorization.split(' ')[1];
      //   Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // get user from token
      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized to access this route');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized to access this route, no token');
  }
});

module.exports = { protect };
