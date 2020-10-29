const txt = require('./generatefile');


module.exports = (app) => {
    app.route('/txtfile')
        .post(txt.execute);
}