import React from 'react'
import '../../../assets/styles/user/home/DanaProspects.css'

function DanaProspects() {
  return (
    <>
    <h4 class="subtitle-prospek">PROSPEK DANA</h4>
    <h1 class="title-prospek">Pantau Prospek Dana Bantuan Sosial</h1>
    <div className="table-prospects">

    <table className="table table-hover ">
        <thead>
            <tr>
                <th>No</th>
                <th>Name Provincy</th>
                <th>Date</th>
                <th>Social Assistance</th>
                <th>From</th>
                <th>Transaction</th>
            </tr>
        </thead>

    </table>
    </div>
    </>
  );
}

export default DanaProspects
