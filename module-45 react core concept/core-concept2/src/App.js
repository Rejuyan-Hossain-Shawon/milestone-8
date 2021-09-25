import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: "laptop", price: 2000 },
    { name: "camera", price: 223000 },
    { name: "watch", price: 20300 },
    { name: "desktop", price: 300 },
    { name: "Hard Disk", price: 12200 },
    { name: "Cooling fan", price: 21000 },
    { name: "mobile", price: 20060 },

  ]

  return (
    <div className="App">
      {
        products.map(pd => <Products name={pd.name} price={pd.price}></Products>)
      }

    </div>
  );
}
function Products(props) {
  console.log(props)
  return (
    <div className="product">
      <h2>name:{props.name}</h2>
      <h3>price:{props.price}</h3>
    </div>

  );
}
export default App;
