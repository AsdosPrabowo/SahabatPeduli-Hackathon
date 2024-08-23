import React, { useEffect, useState } from 'react';
import { listDocs } from "@junobuild/core"; // Ensure correct import path
import '../../../assets/styles/user/home/DanaProspects.css';
import { Link } from 'react-router-dom';

function DanaProspects() {
    const [provinces, setProvinces] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docs = await listDocs({
                    collection: "Provinsi"
                });
                setProvinces(docs.items || []); // Adjusted to use the items array
            } catch (error) {
                console.error('Error fetching provinces:', error);
                setErrorMessage('Failed to fetch province data');
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h4 className="subtitle-prospek">Fund Prospect</h4>
            <h1 className="title-prospek">Monitoring Fund Prospect</h1>
            <div className="table-prospects">
                {errorMessage && <p className="error-message">{errorMessage}</p>}
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
                        {provinces.length > 0 ? (
                            provinces.slice(0, 5).map((doc, index) => (
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
                <div className="d-flex justify-content-end">
                    <Link
                        className="btn"
                        to="/tracker"
                        style={{
                            "backgroundColor": "#12A592",
                            "color": "#fff",
                            "width": "163px",
                            "height": "67px",
                            "borderRadius": 40,
                            "display": "flex",
                            "alignItems": "center",
                            "justifyContent": "center"
                        }}
                    >
                        <span style={{ "marginRight": "8px" }}>See more</span>
                        <i className="fas fa-arrow-right"></i>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default DanaProspects;
