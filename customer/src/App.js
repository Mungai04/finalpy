// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CustomerProvider } from './CustomerContext';
// import Home from './components/Home';
// import CustomerList from './components/CustomerList';
// import CustomerForm from './components/CustomerForm';
// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//     return (
//         <CustomerProvider>
//             <Router>
//                 <Header />
//                 <Routes>
//                     <Route path="/" exact component={Home} />
//                     <Route path="/customers" component={CustomerList} />
//                     <Route path="/add-customer" component={CustomerForm} />
//                 </Routes>
//                 <Footer />
//             </Router>
//         </CustomerProvider>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import { CustomerProvider } from './CustomerContext';

const App = () => {
  return (
    <CustomerProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/add-customer" element={<CustomerForm />} />
        </Routes>
        <Footer />
      </Router>
    </CustomerProvider>
  );
};

export default App;