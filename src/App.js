import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
const { default: Topbar } = require("./components/topbar/Topbar");
const { default: Sidebar } = require("./components/sidebar/Sidebar");
const { default: Home } = require("./pages/home/Home");
const { default: User } = require("./pages/user/User");
const { default: NewUser } = require("./pages/newUser/NewUser");
const { default: ProductList } = require("./pages/productList/ProductList");
const { default: Product } = require("./pages/product/Product");
const { default: NewProduct } = require("./pages/newProduct/NewProduct");

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
