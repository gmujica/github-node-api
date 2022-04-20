const express = require('express');
const router = express.Router();
const { getUserInfo, getRepoInfo, getCommitInfo } = require('../controllers');

router.get('/github/userinfo/:user', getUserInfo);
router.get('/github/repoinfo/:user/:reponame', getRepoInfo);
router.get('/github/commitinfo/:user/:reponame', getCommitInfo);

module.exports = router;