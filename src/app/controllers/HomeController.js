
class HomeController {
    async Home(req, res, next) {
        res.status(200).json("HOMEeeee");
    }
}

module.exports = new HomeController;