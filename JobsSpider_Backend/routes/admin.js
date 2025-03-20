var express = require("express");
var router = express.Router();
var pool = require("./pool");

router.post("/check_admin", function (req, res, next) {
  pool.query(
    "select * from jobsspider_admin where (emailid=? or mobileno=?) and password=?",
    [req.body.emailid, req.body.emailid, req.body.password],
    function (error, result) {
      if (error) {
       return res.status(500).json({
          status: false,
          message: "Database Error Pls Contact DBA...",
        });
      } else {
        if (result.length == 1) {
         return res.status(200).json({
            status: true,
            data: result[0],
            message: "Success...",
          });
        } else {
         return res.status(200).json({
            status: false,
            data: [],
            message: "Invalid Emailid/MobileNo...",
          });
        }
      }
    }
  );
});

module.exports = router;
