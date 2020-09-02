const fetch = require("node-fetch");

const play = fetch("https://api.github.com/users/kabaros/repos")
    .then(data => data.json())
    .then(function (response) {
        let result = response.map(function (rep) {
            return rep.name;
        })
        console.log(result);
    });

