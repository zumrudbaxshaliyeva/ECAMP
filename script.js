const customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    // more customers...
  ];
  
  const orders = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    // more orders...
  ];


  customers.map((customer)=>{console.log(customer.email);})

  const highValueOrders = orders.filter((order) => {
    let totalValue = order.quantity * order.price;
    return totalValue > 1000;
  });
  
  console.log("High-Value Orders:");
  console.log(highValueOrders);


  const aliceCustomer = customers.find((customer) => {
  return customer.name === 'Alice';
});

console.log("Customer named Alice:");
console.log(aliceCustomer);
  

const spesificId=orders.findIndex((order)=>{
    return order.orderId===102
})
console.log(spesificId);

const specificCountry=((custom)=>{
    return custom.location.country==='USA'
})
console.log("USA",specificCountry)

const sortedCustomers = customers.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  
  console.log("Customers sorted by name:",sortedCustomers);