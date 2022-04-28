const Donate = require('../models/Donate');

class DonateController {
    // [POST] /donate/count
    Count(req, res, next) {
        Donate.count()
            .then(count => {
                res.json(count);
            })
            .catch(next);
    }

    // [POST] /donate/list
    List(req, res, next) {
        Donate.find()
        .then(Donates => {
            res.json(Donates);
        })
        .catch(next);
    }

    // [POST] /donate/create
    Create(req, res, next) {
        const donate = new Donate({
            Amount: req.body.amount,
            Method: req.body.method
        })
        donate.save()
            .then(() => {
                res.json({
                    success: true,
                    message: 'Đã thêm mới'
                })
            })
            .catch(next);
    }

    // [POST] /donate/delete
    Delete(req, res, next) {
        Donate.deleteOne({_id: req.body.id})
            .then(() => {
                res.json({
                    success: true,
                    message: 'Xóa thành công'
                })
            })
            .catch(next);
    }

    // [POST] /donate/bulk-delete
    BulkDelete(req, res, next) {
        Donate.deleteMany({})
            .then(() => {
                res.json({
                    success: true,
                    message: 'Xóa tất cả thành công'
                })
            })
            .catch(next);
    }
}

module.exports = new DonateController;