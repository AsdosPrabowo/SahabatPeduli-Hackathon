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
      <h1>Sahabat Peduli - Manajemen Dana</h1>
      
      <section>
        <h2>Tambah Provinsi</h2>
        <input
          type="text"
          placeholder="Nama Provinsi"
          value={provinceName}
          onChange={(e) => setProvinceName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Kota (pisahkan dengan koma)"
          value={cities}
          onChange={(e) => setCities(e.target.value)}
        />
        <input
          type="text"
          placeholder="Total Dana"
          value={totalFund}
          onChange={(e) => setTotalFund(e.target.value)}
        />
        <button onClick={addProvince}>Tambah Provinsi</button>
      </section>

      <section>
        <h2>Alokasikan Dana</h2>
        <input
          type="text"
          placeholder="Nama Provinsi"
          value={provinceName}
          onChange={(e) => setProvinceName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Jumlah Dana"
          value={allocatedAmount}
          onChange={(e) => setAllocatedAmount(e.target.value)}
        />
        <button onClick={allocateFund}>Alokasikan Dana</button>
      </section>

      <section>
        <h2>Lihat Data Provinsi</h2>
        <input
          type="text"
          placeholder="Nama Provinsi"
          value={provinceName}
          onChange={(e) => setProvinceName(e.target.value)}
        />
        <button onClick={getProvince}>Lihat Provinsi</button>
        {fetchError && <p style={{color: 'red'}}>{fetchError}</p>}
        {fetchedProvince && (
          <div>
            <h3>Data Provinsi</h3>
            <p>Nama: {fetchedProvince.name}</p>
            <p>Kota: {fetchedProvince.cities.join(', ')}</p>
            <p>Total Dana: {fetchedProvince.total_fund.toString()}</p>
            <p>Dana Dialokasikan: {fetchedProvince.allocated_fund.toString()}</p>
          </div>
        )}
      </section>

      <section>
        <h2>Lihat Semua Provinsi</h2>
        <button onClick={getAllProvinces}>Lihat Semua Provinsi</button>
        {allProvinces.length > 0 && (
          <div>
            <h3>Daftar Semua Provinsi</h3>
            {allProvinces.map((province, index) => (
              <div key={index}>
                <p>Nama: {province.name}</p>
                <p>Kota: {province.cities.join(', ')}</p>
                <p>Total Dana: {province.total_fund.toString()}</p>
                <p>Dana Dialokasikan: {province.allocated_fund.toString()}</p>
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
