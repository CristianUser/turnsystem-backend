const { verifyAuth } = require('agradon/lib/services/auth/utils');

export default router => {
  router.get('/me', verifyAuth(), (req, res) => {
    res.send(req.user);
  });
};
