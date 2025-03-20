var express = require('express');
var router = express.Router();
var upload = require("./multer");
var pool = require("./pool");

router.get("/user_top_company_display", function (req, res, next) {
    try {
      pool.query(
        "select C.*,(select S.name from states S where S.id = C.stateid) as statename ,( select A.city from cities A where A.id = C.stateid ) as cityname  from companies C limit 7",
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

  router.get("/trending_jobs", function (req, res, next) {
    try {
      pool.query(
        "select company_jobs.jobtype, jobtype.picture , dense_rank() over(order by count(company_jobs.jobtype) desc) as trending from company_jobs,jobtype where company_jobs.jobtype=jobtype.jobtype group by company_jobs.jobtype limit 5",
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

  router.post('/main_search_jobs', function (req, res, next) {
    try {
    pool.query("SELECT C.*,CM.*,CT.*,SCT.*,(select city from cities where id=CM.cityid) as cityname,(select name from states where id=CM.stateid) as statename FROM company_jobs C,companies CM,category CT,subcategory SCT  where C.categoryid=? and C.subcategoryid=? and  C.companyid=CM.companyid and C.categoryid=CT.categoryid and C.subcategoryid=SCT.subcategoryid ",[req.body.categoryid,req.body.subcategoryid],
          function (error, result) {
            if (error) {
                console.log(error)
                res.status(500).json({ status: false, message: 'Database Error...pls Contact with DBA...' })
            }
            else {
                res.status(200).json({ status: true, message: 'Success', data: result })
            }
        })
    }
    catch (e) {
      console.log("Error:",e)
        res.status(200).json({ status: false, message: 'There is Technical issue...pls contact with server Admistrator... ' })
    }
  
  });

  router.get('/fetch_all_skills', function (req, res, next) {
    try {
    pool.query("select * from requiredskills"
    ,
          function (error, result) {
            if (error) {
                console.log(error)
                res.status(500).json({ status: false, message: 'Database Error...pls Contact with DBA...' })
            }
            else {
                res.status(200).json({ status: true, message: 'Success', data: result })
            }
        })
    }
    catch (e) {
      console.log("Error:",e)
        res.status(200).json({ status: false, message: 'There is Technical issue...pls contact with server Admistrator... ' })
    }
  
  });

module.exports = router;
