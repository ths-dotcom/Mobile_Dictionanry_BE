const express = require('express');
const router = express.Router();
const WordController = require('../app/controllers/WordController');

router.get("/search/:word", WordController.search);
router.get("/lookUp/:word", WordController.lookUp);
router.get("/favorite", WordController.showFavorite);
router.get("/yourWord", WordController.showYourWord);
router.put("/like/:word", WordController.like);
router.put("/unlike/:word", WordController.unlike);
router.get("/recent", WordController.recent);
router.post("/add", WordController.add);
router.delete("/delete/:word", WordController.delete);
router.put("/update/:currentWord", WordController.update);

module.exports = router;