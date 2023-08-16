"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
;
router.get('/hero', (req, res) => {
    const hero = {
        name: "Julia",
        gender: "female",
        height: 160
    };
    res.status(200).json(hero);
});
module.exports = router;
