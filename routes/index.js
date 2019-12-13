const express = require("express");
const router = express.Router();
const QuoteController = require("./../controllers/quote_controller")

// router.use((req, res) => {
//     console.log(req);
// })

router.get("/quotes", QuoteController.index)

router.post("/quotes", QuoteController.create)

router.get("/quotes/:id", QuoteController.show)

router.get("/quotes/:id/edit", QuoteController.edit)

router.patch("/quotes/:id", QuoteController.update)
router.put("/quotes/:id", QuoteController.update)

router.delete("/quotes/:id", QuoteController.destroy)


module.exports = router;