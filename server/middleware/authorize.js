// This function checks if the user role is included in the allowed roles
const authorize = (roles = []) => {
    // roles param can be a single role string (e.g., 'admin') or an array of roles (e.g., ['admin', 'user'])
    if (typeof roles === 'string') {
      roles = [roles];
    }
  
    return (req, res, next) => {
      if (req.user && roles.length && !roles.includes(req.user.role)) {
        // user's role is not authorized
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      // authentication and authorization successful
      next();
    };
  };
  
  module.exports = authorize;
  