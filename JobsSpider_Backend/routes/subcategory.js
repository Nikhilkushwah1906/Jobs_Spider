var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.post(
  "/submit_subcategory",
  upload.single("icon"),
  function (req, res, next) {
    try {
      pool.query(
        "INSERT INTO subcategory (categoryid , subcategoryname, subcategorypicture ) VALUES (?,?,?)",
        [req.body.categoryid, req.body.subcategoryname, req.file.filename],
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
              .json({
                status: true,
                message: "SubCategory Submitted Successfully",
              });
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
  }
);

router.get("/display_all", function (req, res, next) {
  try {
    pool.query(
      "select S.* ,(select C.categoryname from category C where C.categoryid = S.categoryid )as categoryname from subcategory S",
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

router.post("/edit_subcategory_data", function (req, res, next) {
  try {
    console.log(req.body.subcategoryid);
    pool.query(
      "update subcategory set subcategoryname=?  where subcategoryid=?",
      [req.body.subcategoryname, req.body.subcategoryid],
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
          console.log(result);
          res
            .status(200)
            .json({
              status: true,
              message: "SubCategory Name Updated Successfully",
            });
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

router.post(
  "/edit_subcategory_picture",
  upload.single("icon"),
  function (req, res, next) {
    try {
      pool.query(
        "update subcategory set subcategorypicture=? where subcategoryid=?",
        [req.file.filename, req.body.subcategoryid],
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
              .json({
                status: true,
                message: "Sub Category Picture Updated Successfully",
              });
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
  }
);

router.post("/delete_Subcategory", function (req, res, next) {
  try {
    pool.query(
      "delete from subcategory where subcategoryid=?",
      [req.body.subcategoryid],
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
            .json({
              status: true,
              message: "SubCategory Deleted Successfully",
            });
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

module.exports = router;
