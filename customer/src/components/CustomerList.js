import React, { useContext } from 'react';
import { CustomerContext } from '../CustomerContext';
import { Link } from 'react-router-dom';

const CustomerList = () => {
    const { customers, loading } = useContext(CustomerContext);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>Customer List</h2>
            <ul>
                {customers.map(customer => (
                    <li key={customer.id}>
                        {customer.name} - {customer.email} - {customer.phone}
                        <Link to={`/edit-customer/${customer.id}`}>Edit</Link>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;