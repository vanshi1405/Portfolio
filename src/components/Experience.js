import React from 'react';

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
      <h5 className="section-title">Experience</h5>
      <ul className="list timeline">
            <li className="timeline-item">
              <div className="experience-header">
                <h4 className="job-title">Software Development Engineer</h4>
                <h5 className="company">Augean Enterprise Solutions (Techstile)</h5>
                <span className="duration">Aug 2023 – Present</span>
              </div>
              
              <div className="experience-content">
                <p className="achievement">
                  Developed the Head Office (HO) Dashboard to manage business units by aggregating data from multiple branches and displaying key insights like highest/lowest margin values, percentage trends, and current financial year data.
                </p>
                
                <p className="achievement">
                  Implemented cron jobs to store processed data in a dedicated table, optimizing dashboard performance by retrieving precomputed results instead of relying on real-time calculations.
                </p>
                
                <p className="achievement">
                  Designed and developed interactive dashboards that allow management to track sales, purchases, and job work data, with filtering capabilities by date ranges (monthly, yearly, etc.).
                </p>
                
                <p className="achievement">
                  Developed a comprehensive reporting system to generate detailed financial reports for business units, including profit/loss statements, balance sheets, and cash flow analysis.
                </p>
              </div>
            </li>
            
            <li className="timeline-item">
              <div className="experience-header">
                <h4 className="job-title">Software Development Intern</h4>
                <h5 className="company">Augean Enterprise Solutions (Techstile)</h5>
                <span className="duration">Jan 2023 – Jul 2023</span>
              </div>
              
              <div className="experience-content">
                <p className="achievement">
                  Contributed to the development of the Techstile (ERP) product by working on transaction modules such as Sales Orders and Purchase Inward and Created analytical reports.
                </p>
                
                <p className="achievement">
                  Optimized SQL queries and backend logic for better application performance.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* <div className="panel">
   
      </div> */}
      
    </section>
  );
}

export default Experience;



