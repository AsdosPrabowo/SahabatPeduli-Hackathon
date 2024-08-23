import React, { useEffect, useState } from 'react';
import { listDocs } from "@junobuild/core";
import '../../../assets/styles/user/home/DanaProspects.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Tracker() {
  const [provinces, setProvinces] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docs = await listDocs({ collection: "Provinsi" });
        setProvinces(docs.items || []);
      } catch (error) {
        console.error('Error fetching provinces:', error);
        setErrorMessage('Failed to fetch province data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const normalizedQuery = searchQuery.toLowerCase();

  const filteredProvinces = provinces.filter((province) => {
    const provinceName = province.data.provinceName.toLowerCase();
    const fundType = province.data.fundType.toLowerCase();
    const hiddenDatetime = new Date(province.data.hiddenDatetime).toISOString().split('T')[0];

    return (
      provinceName.includes(normalizedQuery) ||
      fundType.includes(normalizedQuery) ||
      hiddenDatetime.includes(normalizedQuery)
    );
  });

  return (
    <>
      <Navbar />

      <div className='mb-5 mt-5'>
        <h4 className="subtitle-prospek">Fund Prospect</h4>
        <h1 className="title-prospek">Monitoring Fund Prospect</h1>

        <div className="search-container mb-3 mt-5" style={{ position: 'relative', maxWidth: '300px', marginLeft: 'auto' }}>
          <input
            type="text"
            placeholder="Search by Province Name, Fund Type, or Date"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
            style={{ paddingRight: '30px', fontSize: '14px', height: '30px' }}
          />
          <i className="fas fa-search" style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '14px',
            color: '#999'
          }}></i>
        </div>


        <div className="table-prospects">
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <table className="table table-hover mt-5">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Province Name</th>
                  <th>Date</th>
                  <th>Fund Type</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredProvinces.length > 0 ? (
                  filteredProvinces.map((doc, index) => (
                    <tr key={doc.key}>
                      <td>{index + 1}</td>
                      <td>{doc.data.provinceName}</td>
                      <td>{new Date(doc.data.hiddenDatetime).toLocaleDateString()}</td>
                      <td>{doc.data.fundType}</td>
                      <td>ICP{doc.data.totalAmount}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center">No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tracker;
