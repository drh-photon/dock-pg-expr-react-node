import React, { useState, useEffect }from 'react';
import axios from 'axios'

interface ICustomer {
  id: number;
  name: string;
  email: string;
}

export default function Customer() {
  const [customers, setCustomers] = useState<ICustomer[]>([])

  useEffect(() => {
    axios.get<ICustomer[]>('/api/customers')
      .then(({ data }) => {
        setCustomers(data)
      })
  }, [])


  return (
    <div>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.name} - {customer.email}</li>
        ))}
      </ul>
    </div>
  )
}