import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is properly configured in your project

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-green-100 min-w-max">
      <Header/>
      <Options/>
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-green-900 shadow-md p-4 text-white ">
    <div className="container mx-auto flex flex-col justify-between sm:flex-row items-center">
      <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl xl:text-3xl font-bold mb-2">BẤT ĐỘNG SẢN PPC</h1>
      <div className="flex flex-col sm:flex-row w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-4 sm:mt-0 sm:space-x-2 md:space-y-0 md:space-x-2">
        <input
          type="text"
          className="form-input mt-1 block w-full border border-green-500 py-2 px-3 shadow rounded"
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
  return (
    <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Map through your property data and render PropertyListing components */}
      <PropertyListing />
      <PropertyListing />
      <PropertyListing />
      <PropertyListing />
      <PropertyListing />
      <PropertyListing />
      <PropertyListing />
      <PropertyListing />
      <PropertyListing />
      <PropertyListing />
    
     

      {/* ... other listings */}
    </main>
  );
};

const PropertyListing = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src="/path-to-your/image.jpg" alt="Property" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-green-800">Property Title</div>
        <p className="text-gray-700 text-base">
          Description and details of the property.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2 mb-2">#tag1</span>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2 mb-2">#tag2</span>
      </div>
    </div>
  );
};

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
