const axios = require('axios');

exports.index = function(req, res) {
    // axios
    axios.get('https://adrianwii.pl/api/tweets')
        .then(result => {
            console.log(result.data);
            res.render('index', {
                tweets: result.data,
                title: 'Motorola Solutions Academy'
            })
        })
        .catch(error => {
            console.log(error);
        })

}