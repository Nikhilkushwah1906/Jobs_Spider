var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.get("/display_all", function (req, res, next) {
  try {
    pool.query(
      "select C.*,(select S.name from states S where S.id = C.stateid) as statename ,( select A.city from cities A where A.id = C.stateid ) as cityname  from companies C",
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
            .json({ status: true, message: "Success", data: result });
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

router.get("/display_all_verify_company", function (req, res, next) {
  try {
    pool.query(
      "select C.*,(select S.name from states S where S.id = C.stateid) as statename ,( select A.city from cities A where A.id = C.stateid ) as cityname  from companies C where C.verified = 1",
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
            .json({ status: true, message: "Success", data: result });
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

router.get("/display_all_unverify_company", function (req, res, next) {
  try {
    pool.query(
      "select C.*,(select S.name from states S where S.id = C.stateid) as statename ,( select A.city from cities A where A.id = C.stateid ) as cityname  from companies C where C.verified = 0",
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
            .json({ status: true, message: "Success", data: result });
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
  "/submit_companies",
  upload.single("icon"),
  function (req, res, next) {
    try {
      pool.query(
        "INSERT INTO companies (companyname, companyowner, companyaddress, stateid, cityid,emailid, mobileno, contactperson, aboutcompany, registrationno,  pancard, password, verified , companypicture) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          req.body.companyname,
          req.body.companyowner,
          req.body.companyaddress,
          req.body.stateid,
          req.body.cityid,
          req.body.emailid,
          req.body.mobileno,
          req.body.contactperson,
          req.body.aboutcompany,
          req.body.registrationno,
          req.body.pancard,
          req.body.password,
          req.body.verified,
          req.file.filename,
        ],
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
              message: "Company Submitted Successfully",
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

router.post(
  "/update_companies_verify",
  function (req, res, next) {
    try {
      pool.query(
        "update companies set verified=? where companyid=? ",
        [
          req.body.verified,
          req.body.companyid
        ],
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
              message: "Company Status Updated Successfully",
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


router.post("/edit_companies_data", function (req, res, next) {
  try {
    pool.query(
      "update companies set companyname=?, companyowner=?, companyaddress=?, stateid=?, cityid=?,emailid=?, mobileno=?, contactperson=?, aboutcompany=?, registrationno=?,  pancard=? where companyid=?",
      [
        req.body.companyname,
        req.body.companyowner,
        req.body.companyaddress,
        req.body.stateid,
        req.body.cityid,
        req.body.emailid,
        req.body.mobileno,
        req.body.contactperson,
        req.body.aboutcompany,
        req.body.registrationno,
        req.body.pancard,
        req.body.companyid,
      ],
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
            message: "Company Name Updated Successfully",
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
  "/edit_companies_picture",
  upload.single("icon"),
  function (req, res, next) {
    try {
      pool.query(
        "update companies set companypicture=? where companyid=?",
        [req.file.filename, req.body.companyid],
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
              message: "Company Picture Updated Successfully",
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

router.post("/delete_companies", function (req, res, next) {
  try {
    pool.query(
      "delete from companies where companyid=?",
      [req.body.companyid],
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
            .json({ status: true, message: "Company Deleted Successfully" });
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

module.exports = router;
