// // import Proops from './props/Proops'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Demo11 from './Integeration/Demo';
// // import Signups from './ecart/signup/signup/signup';
// // import De from './SatateFunction/Day';
// // import List from './list/List'
// // import One from './props/propwork/One';
// // import Demos from './state/StateD';
// // import Edss from './state/WorkSt'
// import Demo from './props/propwork/Demo'
// // import Listw1 from './list/Listw1'
// // import Ust from "./UState/Ustatee"
// // import Tab from "./UState/DynamicTable"
// // import { BrowserRouter,Routes,Route} from "react-router-dom"
// // import Signins from './ecart/signup/signup/Signin/Signin';
// import { useState } from 'react';
// import Signups from './ecart/Siginup/Siginup';
// import Signins from './ecart/Signin/Sigin';
// import NavbarComponent from './ecart/navbar/navbar';
// import MensItem from './ecart/mens/mens';
// import { LatestItems } from './ecart/latest/latest';


// ====================================================================================================


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Signups from './project/Siginup/Siginup';
import Signins from './project/Signin/Sigin';
import NavbarComponent from './project/navbar/navbar';
import MensItem from './project/mens/mens';
import { LatestItems } from './project/latest/latest';
import WomensItem from './project/womens/womens';
import KidsItems from './project/kids/kids';

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(false)
  const handleSigInSucess=(nameuser)=>{
    console.log(nameuser);
    setIsAuthenticated(true)
    localStorage.setItem('username',nameuser)
    console.log("yes")
    // const a=[1,2,3,4,4,5]
    // a.map(()=>{console})
   }
   

  return (
    <div className='App'>
 <BrowserRouter>
      <NavbarComponent isAuthenticated={isAuthenticated}/>
      {/* <MensItem isAuthenticated={isAuthenticated}/> */}
      </BrowserRouter>
      {/* <Signins /> */}
      {/* <Ust /> */}
      {/* <Tab /> */}

    {/* < BrowserRouter>
    <Routes>
      <Route path='table' element={<Tab />} />
      <Route path='states' element={<Ust />} />
    </Routes>
    </ BrowserRouter> */}
{/* <Demo11 /> */}
<BrowserRouter>
<Routes>
  <Route path='/' element={<Signins handleSignInSuccess={handleSigInSucess}/>}/>
  {/* // <Route path='/in' element={<Signins handleSignInSuccess={handleSigInSucess}/>}/> */}
<Route path='/si' element={<Signups />} />
      {/* <Route path='si' element={<Signups/>} /> */}
      <Route path='/li' element={<NavbarComponent />}/>
      {/* <Route path='li' element={<NavbarComponent />} /> */}
      <Route path='/latest' element={<LatestItems isAuthenticated={isAuthenticated}/>}/>
      {/* <Route path='latest' element={<LatestItems/>} /> */}
      <Route path='/mens' element={<MensItem isAuthenticated={isAuthenticated}/>} />
      {/* <Route path='mens' element={<MensItem/>} /> */}
      <Route path='/womens' element={<WomensItem isAuthenticated={isAuthenticated}/>} />
      <Route path='/kids' element={<KidsItems isAuthenticated={isAuthenticated}/>} />


</Routes>

</BrowserRouter>
       
  
     </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import './Bank/styles.css'; // Import your styles
// import AccountForm from './Bank/AccountForm';
// import AccountBalance from './Bank/AccountBalance';
// import Transaction from './Bank/Transaction';

// function App() {
//     const [account, setAccount] = useState(null);

//     const handleAccountCreation = (data) => {
//         setAccount(data);
//         // Send data to backend here
//     };

//     return (
//         <div>
//             <h1>Bank Application</h1>
//             {!account ? (
//                 <AccountForm onCreateAccount={handleAccountCreation} />
//             ) : (
//                 <>
//                     <AccountBalance accountNumber={account.accountNumber} />
//                     <Transaction accountNumber={account.accountNumber} />
//                 </>
//             )}
//         </div>
//     );
// }

// export default App;


// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleSignInSuccess = (nameuser) => {
//     console.log(nameuser);
//     setIsAuthenticated(true);
//     localStorage.setItem('username', nameuser);
//     console.log("User authenticated");
//   };

//   return (
//     <div className='App'>
//       <BrowserRouter>
//         <NavbarComponent isAuthenticated={isAuthenticated} />
//         <Routes>
//           <Route path='/' element={<Signins handleSignInSuccess={handleSignInSuccess} />} />
//           <Route path='/si' element={<Signups />} />
//           <Route path='/latest' element={<LatestItems />} />
//           <Route path='/mens' element={<MensItem />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
