import React, { useState, useEffect } from 'react';
import { SahabatPeduli_backend } from 'declarations/SahabatPeduli_backend';

function App() {
  const [provinceName, setProvinceName] = useState('');
  const [cities, setCities] = useState('');
  const [totalFund, setTotalFund] = useState('');
  const [allocatedAmount, setAllocatedAmount] = useState('');
  const [fetchedProvince, setFetchedProvince] = useState(null);
  const [allProvinces, setAllProvinces] = useState([]);
  const [fetchError, setFetchError] = useState('');

  const addProvince = async () => {
    const citiesArray = cities.split(',').map(city => city.trim());
    const fund = BigInt(totalFund);
    const response = await SahabatPeduli_backend.addProvince(provinceName, citiesArray, fund);
    alert(response);
  };

  
  const allocateFund = async () => {
    const amount = BigInt(allocatedAmount);
    const response = await SahabatPeduli_backend.allocateFund(provinceName, amount);
    alert(response);
  };

  const getProvince = async () => {
    const response = await SahabatPeduli_backend.getProvince(provinceName);
    if (response.Err) {
      setFetchError(response.Err);
      setFetchedProvince(null);
    } else {
      setFetchedProvince(response.Ok);
      setFetchError('');
    }
  };

  const getAllProvinces = async () => {
    const provinces = await SahabatPeduli_backend.getAllProvinces();
    setAllProvinces(provinces);
  };

  return (
    <main>
      <h1>Sahabat Peduli - Fund Management</h1>
      
      <section>
        <h2>Add Province</h2>
        <input
          type="text"
          placeholder="Province Name"
          value={provinceName}
          onChange={(e) => setProvinceName(e.target.value)}
        />
        <input
          type="text"
          placeholder="City (separate with commas)"
          value={cities}
          onChange={(e) => setCities(e.target.value)}
        />
        <input
          type="text"
          placeholder="Total Funds"
          value={totalFund}
          onChange={(e) => setTotalFund(e.target.value)}
        />
        <button onClick={addProvince}>Tambah Provinsi</button>
      </section>

      <section>
        <h2>Allocate Funds</h2>
        <input
          type="text"
          placeholder="Province Name"
          value={provinceName}
          onChange={(e) => setProvinceName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Total Funds"
          value={allocatedAmount}
          onChange={(e) => setAllocatedAmount(e.target.value)}
        />
        <button onClick={allocateFund}>Allocate Funds</button>
      </section>

      <section>
        <h2>View Province Data</h2>
        <input
          type="text"
          placeholder="Province Name"
          value={provinceName}
          onChange={(e) => setProvinceName(e.target.value)}
        />
        <button onClick={getProvince}>View Province</button>
        {fetchError && <p style={{color: 'red'}}>{fetchError}</p>}
        {fetchedProvince && (
          <div>
            <h3>Province Data</h3>
            <p>Name: {fetchedProvince.name}</p>
            <p>City: {fetchedProvince.cities.join(', ')}</p>
            <p>Total Funds: {fetchedProvince.total_fund.toString()}</p>
            <p>Allocated Funds: {fetchedProvince.allocated_fund.toString()}</p>
          </div>
        )}
      </section>

      <section>
        <h2>View All Provinces</h2>
        <button onClick={getAllProvinces}>View All Provinces</button>
        {allProvinces.length > 0 && (
          <div>
            <h3>List All Provinces</h3>
            {allProvinces.map((province, index) => (
              <div key={index}>
                <p>Name: {province.name}</p>
                <p>City: {province.cities.join(', ')}</p>
                <p>Total Funds: {province.total_fund.toString()}</p>
                <p>Allocated Funds: {province.allocated_fund.toString()}</p>
                <hr />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
