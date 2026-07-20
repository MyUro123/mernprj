const router = require("express").Router();
const db = require("../db");

// Get All Items
router.get("/items", (req, res) => {

    const sql = `
    SELECT
        i.itemid,
        i.itemname,
        i.itemdescription,
        i.rate,
        i.img,
        s.subcatname
    FROM itemmst i
    INNER JOIN subcatmst s
    ON i.subcatid=s.subcatid
    ORDER BY i.itemid DESC
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            data: result
        });

    });

});

module.exports = router;