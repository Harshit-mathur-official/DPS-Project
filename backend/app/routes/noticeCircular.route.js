module.exports = (app) => {
    const noticeCircular = require('../controllers/noticeCircular.controller');
    const router = require('express').Router();

    router.post('/add', noticeCircular.addNoticeCircular);
    router.delete('/delete/:id', noticeCircular.deleteNoticeCircular);
    router.get('/filter/:filter', noticeCircular.filterNoticecircular);
    router.put('/update/:id', noticeCircular.updateNoticeCircular)
    router.get('/view', noticeCircular.viewNoticeCircular);
    
    app.use('/api/notice', router);
}