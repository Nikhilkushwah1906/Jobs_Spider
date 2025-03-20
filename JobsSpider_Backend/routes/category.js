var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.post(
  "/submit_category",
  upload.single("icon"),
  function (req, res, next) {
    try {
      pool.query(
        "INSERT INTO category (categoryname, categorypicture) VALUES (?,?)",
        [req.body.categoryname, req.file.filename],
        function (error, result) {
          if (error) {
            console.log(error);
            res.status(500).json({
              status: false,
              message: "Database Error Pls Contact DBA...",
            });
          } else {
            res.status(200).json({
              status: true,
              message: "Category Submitted Successfully",
            });
          }
        }
      );
    } catch (e) {
      console.log(e);
      res.status(404).json({
        status: false,
        message: "There is technical issue..pls Contact Server Administrator",
      });
    }
  }
);

router.post("/edit_category_data", function (req, res, next) {
  try {
    pool.query(
      "update category set categoryname=? where categoryid=?",
      [req.body.categoryname, req.body.categoryid],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).json({
            status: false,
            message: "Database Error Pls Contact DBA...",
          });
        } else {
          res.status(200).json({
            status: true,
            message: "Category Name Updated Successfully",
          });
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.status(404).json({
      status: false,
      message: "There is technical issue..pls Contact Server Administrator",
    });
  }
});

router.post(
  "/edit_category_picture",
  upload.single("icon"),
  function (req, res, next) {
    try {
      pool.query(
        "update category set categorypicture=? where categoryid=?",
        [req.file.filename, req.body.categoryid],
        function (error, result) {
          if (error) {
            console.log(error);
            res.status(500).json({
              status: false,
              message: "Database Error Pls Contact DBA...",
            });
          } else {
            res.status(200).json({
              status: true,
              message: "Category Picture Updated Successfully",
            });
          }
        }
      );
    } catch (e) {
      console.log(e);
      res.status(404).json({
        status: false,
        message: "There is technical issue..pls Contact Server Administrator",
      });
    }
  }
);

router.post("/delete_category", function (req, res, next) {
  try {
    pool.query(
      "delete from category where categoryid=?",
      [req.body.categoryid],
      function (error, result) {
        if (error) {
          console.log(error);
          res.status(500).json({
            status: false,
            message: "Database Error Pls Contact DBA...",
          });
        } else {
          res
            .status(200)
            .json({ status: true, message: "Category Deleted Successfully" });
        }
      }
    );
  } catch (e) {
    console.log(e);
    res.status(404).json({
      status: false,
      message: "There is technical issue..pls Contact Server Administrator",
    });
  }
});

router.get("/display_all", function (req, res, next) {
  try {
    pool.query("select * from category", function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).json({
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
    res.status(404).json({
      status: false,
      message: "There is technical issue..pls Contact Server Administrator",
    });
  }
});

module.exports = router;
