// import React, { createContext, useState, useEffect } from 'react';

// export const CustomerContext = createContext();

// export const CustomerProvider = ({ children }) => {
//   const [customers, setCustomers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCustomers = async () => {
//       const response = await fetch('http://localhost:8000/customers');
//       const data =await response.json();
//       setCustomers(data);
//       setLoading(false);
//     };
//     fetchCustomers();
//   }, []);

//   const addCustomer = async (customer) => {
//     const response = await fetch('http://localhost:8000/customers', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(customer),
//     });
//     const newCustomer = await response.json();
//     setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
//   };

//   return (
//     <CustomerContext.Provider value={{ customers, loading, addCustomer }}>
//       {children}
//     </CustomerContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect } from 'react';

export const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await fetch('http://localhost:8000/customers');
      const data = await response.json();
      setCustomers(data);
      setLoading(false);
    };
    fetchCustomers();
  }, []);

  const addCustomer = async (customer) => {
    const response = await fetch('http://localhost:8000/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer),
    });
    const newCustomer = await response.json();
    setCustomers((prevCustomers) => [...prevCustomers, newCustomer]);
  };

  return (
    <CustomerContext.Provider value={{ customers, loading, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};