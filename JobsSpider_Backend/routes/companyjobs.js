var express = require("express");
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.post("/edit_companyjobs",function (req,res,next) {
  try{
    pool.query("update company_jobs set companyid=?,categoryid=?,subcategoryid=?,skills=?,educationqualification=?,experience=?,jobdescription=?,jobtype=?,minsalary=?,maxsalary=?,schedule=?,benefits=?,worklocationcity=?,supplementalpay=?,postdate=?,applicationdeadline=?,expectedstart=?,applicationquestion=?,contactperson=?,emailaddress=?,mobileno=? where jobid=?",[req.body.companyid,
      req.body.categoryid,
      req.body.subcategoryid,
      req.body.skills,
      req.body.educationqualification,
      req.body.expereince,
      req.body.jobdescription,
      req.body.jobtype,
      req.body.minsalary,
      req.body.maxsalary,
      req.body.schedule,
      req.body.benefits,
      req.body.worklocationcity,
      req.body.supplementalpay,
      req.body.postdate,
      req.body.applicationdeadline,
      req.body.expectedstart,
      req.body.applicationquestion,
      req.body.contactperson,
      req.body.emailaddress,
      req.body.mobileno, 
      req.body.jobid],function(error,result){
        if(error){
          console.log(error)
            res.status(500).json({status:false, message:'Database Error Pls Contact DBA...'})
        }
        else {
            res.status(200).json({status:true, message:'Company Job Updated Successfully'})
        }
    })
  }
  catch(e){
    console.log(e)
    res.status(404).json({status:false, message:'There is technical issue..pls Contact Server Administrator'})
  }
})

router.post("/delete_companyjobs", function (req, res, next) {
  try {
    console.log(req.body);
    pool.query(
      "delete from company_jobs where jobid=?",[req.body.jobid],function (error, result) {
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
              message: "Company_jobs Deleted Successfully",
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

router.post("/submit_companyjobs", function (req, res, next) {
  try {
    console.log(req.body);
    pool.query(
      "INSERT INTO company_jobs (companyid, categoryid, subcategoryid, skills, educationqualification, experience, jobdescription, jobtype, minsalary, maxsalary, schedule, benefits, worklocationcity, supplementalpay, postdate, applicationdeadline, expectedstart, applicationquestion, contactperson, emailaddress, mobileno) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        req.body.companyid,
        req.body.categoryid,
        req.body.subcategoryid,
        req.body.skills,
        req.body.educationqualification,
        req.body.expereince,
        req.body.jobdescription,
        req.body.jobtype,
        req.body.minsalary,
        req.body.maxsalary,
        req.body.schedule,
        req.body.benefits,
        req.body.worklocationcity,
        req.body.supplementalpay,
        req.body.postdate,
        req.body.applicationdeadline,
        req.body.expectedstart,
        req.body.applicationquestion,
        req.body.contactperson,
        req.body.emailaddress,
        req.body.mobileno,
      ],
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
              message: "Company_jobs Submitted Successfully",
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

router.get("/display_all_category", function (req, res, next) {
  try {
    pool.query("select * from category", function (error, result) {
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
            message: "Category SuccessFully Fetch",
            data: result,
          });
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

router.post("/display_all_subcategory", function (req, res, next) {
  try {
    pool.query(
      "select * from subcategory where categoryid=?",
      [req.body.categoryid],
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
              message: "Subcategory SuccessFully Fetch",
              data: result,
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

router.post("/display_all_skills", function (req, res, next) {
  try {
    pool.query(
      "select * from requiredskills where subcategoryid=?",
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
              message: "Skills SuccessFully Fetch",
              data: result,
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

router.get("/display_all_educations", function (req, res, next) {
  try {
    pool.query("select * from education_qual ", function (error, result) {
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
            message: "Skills SuccessFully Fetch",
            data: result,
          });
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

router.get("/display_all_companyjobs", function (req, res, next) {
  try {
    pool.query(
      "select C.*, ( select A.categoryname from category A where A.categoryid = C.categoryid )as categoryname, ( select B.subcategoryname from subcategory B where B.subcategoryid = C.subcategoryid )as subcategoryname, ( select D.companyname from companies D where D.companyid = C.companyid )as companyname from company_jobs C ",
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
              message: "CompanyJobs SuccessFully Fetch",
              data: result,
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
