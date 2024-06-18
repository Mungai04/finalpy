// // import React, { useState, useContext } from 'react';
// // import { CustomerContext } from '../CustomerContext';
// // import { useNavigate } from 'react-router-dom';

// // const CustomerForm = () => {
// //     const [name, setName] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [phone, setPhone] = useState('');
// //     const { addCustomer } = useContext(CustomerContext);
// //     const navigate = useNavigate();

// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         const newCustomer = { name, email, phone };
// //         addCustomer(newCustomer).then(() => {
// //             navigate('/customers');
// //         });
// //     };

// //     return (
// //         <div>
// //             <h2>Add Customer</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <label>
// //                     Name:
// //                     <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
// //                 </label>
// //                 <label>
// //                     Email:
// //                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //                 </label>
// //                 <label>
// //                     Phone:
// //                     <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
// //                 </label>
// //                 <button type="submit">Add Customer</button>
// //             </form>
// //         </div>
// //     );
// // };

// // export default CustomerForm;
// import React, { useState, useContext } from 'react';
// import { CustomerContext } from '../CustomerContext';
// import { useNavigate } from 'react-router-dom';

// const CustomerForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const { addCustomer } = useContext(CustomerContext);
//   const history = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newCustomer = { name, email, phone };
//     await addCustomer(newCustomer);
//     history.push('/customers');
//   };

//   return (
//     <div className="container">
//       <h2>Add Customer</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </label>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label>
//         <label>
//           Phone:
//           <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//         </label>
//         <button type="submit">Add Customer</button>
//       </form>
//     </div>
//   );
// };

// export default CustomerForm;
import React, { useState, useContext } from 'react';
import { CustomerContext } from '../CustomerContext';
import { useNavigate } from 'react-router-dom';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { addCustomer } = useContext(CustomerContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCustomer = { name, email, phone };
    await addCustomer(newCustomer);
    navigate('/customers');
  };

  return (
    <div className="container">
      <h2>Add Customer</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;