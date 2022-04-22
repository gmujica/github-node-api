const https = require('https');

const GITHUB_TOKEN = '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';

const getUserInfo = async (req, res) => {
    const user = req.params.user;
    const options = {
        hostname: 'api.github.com',
        path: '/users/' + user,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: GITHUB_TOKEN
    }
    https.get(options, (apiResponse) => {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something wnent wrong!');
    });
};

const getRepoInfo = async (req, res) => {
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = {
        hostname: 'api.github.com',
        path: '/repos/' + user + '/' + reponame,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: GITHUB_TOKEN
    }
    https.get(options, (apiResponse) => {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something wnent wrong!');
    });
};

const getCommitInfo = async (req, res) => {
    const user = req.params.user;
    const reponame = req.params.reponame;
    const options = {
        hostname: 'api.github.com',
        path: '/repos/' + user + '/' + reponame + '/commits',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'
        },
        OAUth: GITHUB_TOKEN
    }
    https.get(options, (apiResponse) => {
        apiResponse.pipe(res);
    }).on('error', (e) => {
        console.log(e);
        res.status(500).send('Something wnent wrong!');
    });
};

module.exports = { getUserInfo, getRepoInfo, getCommitInfo };