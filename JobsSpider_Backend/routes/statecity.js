var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.get("/display_all_states", function (req, res, next) {
  try {
    pool.query("select * from states", function (error, result) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({
            status: false,
            message: "Database Error Pls Contact DBA...",
          });
      } else {
        res
          .status(200)
          .json({ status: true, message: "Success", data: result });
      }
    });
  } catch (e) {
    console.log(e);
    res
      .status(404)
      .json({
        status: false,
        message: "There is technical issue..pls Contact Server Administrator",
      });
  }
});

router.post("/display_all_citys", function (req, res, next) {
  try {
    pool.query(
      "select * from cities where state_id = ? ",
      [req.body.stateid],
      function (error, result) {
        if (error) {
          console.log(error);
          res
            .status(500)
            .json({
              status: false,
              message: "Database Error Pls Contact DBA...",
            });
        } else {
          res
            .status(200)
            .json({ status: true, message: "Success", data: result });
        }
      }
    );
  } catch (e) {
    console.log(e);
    res
      .status(404)
      .json({
        status: false,
        message: "There is technical issue..pls Contact Server Administrator",
      });
  }
});

router.get("/display_all_city", function (req, res, next) {
  try {
    pool.query("select * from cities ", function (error, result) {
      if (error) {
        console.log(error);
        res
          .status(500)
          .json({
            status: false,
            message: "Database Error Pls Contact DBA...",
          });
      } else {
        res
          .status(200)
          .json({ status: true, message: "Success", data: result });
      }
    });
  } catch (e) {
    console.log(e);
    res
      .status(404)
      .json({
        status: false,
        message: "There is technical issue..pls Contact Server Administrator",
      });
  }
});

module.exports = router;
