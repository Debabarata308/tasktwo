import React from "react";
import "./Companydetails.css"

const CompanyDetails = () => {
  return (
    <div className="container ">
      <div className="fullcontainer">
        <div className="rowstyle">
          <div className="row ">
            <div className="col">
              <div className="card">
                <div className="d-flex">
                  <div>Company</div>:<div>Geeksynergy Technologies Pvt Ltd</div>
                </div>
                <div className="d-flex">
                  <div>Phone</div>: <div>XXXXXXXXX09</div>
                </div>
                <div className="d-flex">
                  <div>Email</div> :<div> XXXXXX@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
