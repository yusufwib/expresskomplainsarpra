'use strict';

module.exports = function(app) {
    
    var authMethod = require('./Controller/AuthController');
    var getMethod = require('./Controller/GetController');
    var postMethod = require('./Controller/PostController');
    var putMethod = require('./Controller/PutController');
    var delMethod = require('./Controller/DelController');


    app.route('/')
        .get(getMethod.index);

    // LOGIN

    app.route('/api/login/user')
        .post(authMethod.postLoginUser);

    app.route('/api/login/guru')
        .post(authMethod.postLoginGuru);

    app.route('/api/login/admin')
        .post(authMethod.postLoginAdmin);

    //GET ADMIN

    app.route('/api/admin/getReportAll')
        .get(getMethod.getReportAll);

    app.route('/api/admin/getReportReq')
        .get(getMethod.getReportReq);

    app.route('/api/admin/getReportOnGoing')
        .get(getMethod.getReportOnGoing);

    app.route('/api/admin/getReportFinish')
        .get(getMethod.getReportFinish);

    //GET USER

    app.route('/api/siswa/getReport/:idUser')
        .get(getMethod.getReportUser);
        
    app.route('/api/guru/getReport/:idGuru')
        .get(getMethod.getReportGuru);

    //POST USER
        
    app.route('/api/siswa/postReportSiswa')
        .post(postMethod.postReportUser);
        
    app.route('/api/guru/postReportGuru')
        .post(postMethod.postReportGuru);

    //PUT ADMIN

    app.route('/api/admin/putOnGoing/:idProblem')
        .put(putMethod.putOnGoing);
        
    app.route('/api/admin/putFinish/:idProblem')
        .put(putMethod.putFinish);

    //DEL ADMIN
    
    app.route('/api/admin/delProblem/:idProblem')
        .delete(delMethod.delProblem);
    
};