import React, {useState,useEffect} from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly configured in your project
import axios from 'axios';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import ContractManagementPage from './components/AddContract';
import TableContract from './components/TableContract';
const App = () => {

  
  return (
    // <div className="flex flex-col min-h-screen bg-green-100 min-w-max">
   
    //   <Options/>
    //   <MainContent />
    // </div>
    <BrowserRouter>
          <Header/>
      <Routes>

      <Route exact path="/" element={<MainContent/>}/>
      <Route exact path="/add-contract" element={<ContractManagementPage/>}/>
      <Route exact path="/table-contract" element={<TableContract/>}/>
      </Routes>
      <Footer />

    </BrowserRouter>
  );
};

const Header = () => {
  return (
    <header className="bg-green-900 shadow-md p-4 text-white mb-10">
    <div className="container mx-auto flex flex-col justify-between sm:flex-row items-center">
      <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-3xl font-bold mb-2">BẤT ĐỘNG SẢN PPC</h1>
      <div className="flex flex-col sm:flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-4 sm:mt-0 sm:space-x-2 md:space-y-0 md:space-x-2">
        <input
          type="text"
          className="form-input mt-1 block w-full border text-black border-green-500 py-2 px-3 shadow rounded"
          placeholder="Tìm kiếm..."
        />
      </div>
      <button className="border border-white text-white w-full mt-2 sm:mt-auto sm:w-auto px-8 py-2 hover:bg-green-700 focus:outline-none">
  TÌM KIẾM
</button>

    </div>
  </header>
  );
};


const Options = () =>{
  return <div className="options bg-yellow-300 px-3">
    <div className="w-30 flex flex-row gap-7 p-3 container mx-auto">
    <select id="countries" class="bg-green-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>

<select id="countries" class="bg-green-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>


<select id="countries" class="bg-green-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>


<select id="countries" class="bg-green-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose a country</option>
  <option value="US">United States</option>
  <option value="CA">Canada</option>
  <option value="FR">France</option>
  <option value="DE">Germany</option>
</select>
    </div>


  </div>
  
}

const MainContent = () => {
  const propertyData = {
    imageUrl: "https://static1.cafeland.vn/cafelandnew/hinh-anh/2023/05/11/186/image-20230511084932-1.jpeg",
    title: "Dự án De La Sol",
    description: "Quần thể khu căn hộ có tầm nhìn trực diện hướng",
    details: [
      { label: "ID", value: "DGF54SFB23" },
      { label: "Loại", value: "Căn hộ chung cư" },
      // ... thêm các chi tiết khác
    ]
  }
  return (
    <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Map through your property data and render PropertyListing components */}
      {/* <PropertyListing /> */}
      
      <PropertyCard property={propertyData}/>
      <PropertyCard property={propertyData}/><PropertyCard property={propertyData}/><PropertyCard property={propertyData}/><PropertyCard property={propertyData}/><PropertyCard property={propertyData}/><PropertyCard property={propertyData}/><PropertyCard property={propertyData}/><PropertyCard property={propertyData}/><PropertyCard property={propertyData}/><PropertyCard property={propertyData}/>
    
     

      {/* ... other listings */}
    </main>
  );
};

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/fullcontracts'); // Adjust the URL if needed
        setProperties(response.data);
        console.log("success fetch")
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {properties.map(property => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.6435-9/116588276_958993494565169_3419185317640818278_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=uBy06rLkhY0AX8_eC2W&_nc_oc=AQk56IUqPe1f2yjOAHFIcdIvuf5Psamdte793z06XOO380drcdqrD-5DkaMW__7K4Kc&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCV7I_3qy7DQpcTkN57id8Zf8Ukp2MISMlXnQmuYaI89Q&oe=65898C74https://scontent.fsgn19-1.fna.fbcdn.net/v/t1.6435-9/116588276_958993494565169_3419185317640818278_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=uBy06rLkhY0AX8_eC2W&_nc_oc=AQk56IUqPe1f2yjOAHFIcdIvuf5Psamdte793z06XOO380drcdqrD-5DkaMW__7K4Kc&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCV7I_3qy7DQpcTkN57id8Zf8Ukp2MISMlXnQmuYaI89Q&oe=65898C74" alt="Property" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-green-800">{property.customerName}</div>
        <p className="text-gray-700 text-base">
         {}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2 mb-2">#tag1</span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2 mb-2">#tag2</span>
      </div>
    </div>
      ))}
    </>
  );
};

const PropertyCard = ({property}) =>{
  return (
    <Link to="/add-contract" className='no-underline'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={property.imageUrl} alt="Property" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{property.title}</div>
      <p className="text-gray-700 text-base">
        {property.description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      {property.details.map(detail => (
        <span key={detail.label} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {detail.label}: {detail.value}
        </span>
      ))}
    </div>
  </div>
    </Link>
  )
}



const Footer = () => {
  return (
    <footer className="bg-green-900 text-white p-4 text-sm sm:text-base lg:text-lg mt-auto">
     <div className="container mx-auto">
     <p>Designed by Cubist Team Group 9</p>

     </div>
    </footer>
  );
};

export default App;
