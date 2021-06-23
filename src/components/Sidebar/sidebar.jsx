import React from "react";
import "./sidebar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MyWallet from "../../pages/MyWallet/myWallet";
import BuyBitcoin from "../../pages/BuyBitcoin/buyBitcoin";
import SellBitcoin from "../../pages/SellBitcoin/sellBitcoin";
import BitcoinPrice from "../../pages/BitcoinPrice/bitcoinPrice";
import Icon from "../../assets/icon.svg";

const routes = [
  {
    path: "/wallet",
    main: () => <MyWallet />,
  },
  {
    path: "/buy",
    main: () => <BuyBitcoin />,
  },
  {
    path: "/sell",
    main: () => <SellBitcoin />,
  },
  {
    path: "/bitcoin",
    main: () => <BitcoinPrice />,
  },
];

function Sidebar() {
  return (
    <Router>
      <div className="sidebar-parent">
        <div className="sidebar">
          <ul className="list-parent">
            <li>
              <img
                src={Icon}
                alt="sidebar-item-icon"
                className="sidebar-item-icon"
              />
              <Link className="sidebar-item" to="/wallet">
                MY WALLET
              </Link>
            </li>
            <li>
              <img
                className="sidebar-item-icon"
                src={Icon}
                alt="sidebar-item-icon"
              />

              <Link className="sidebar-item" to="/buy">
                BUY BITCOIN
              </Link>
            </li>
            <li>
              <img
                className="sidebar-item-icon"
                src={Icon}
                alt="sidebar-item-icon"
              />

              <Link to="/sell" className="sidebar-item">
                SELL BITCOIN
              </Link>
            </li>
            <li>
              <img
                className="sidebar-item-icon"
                src={Icon}
                alt="sidebar-item-icon"
              />

              <Link to="/bitcoin" className="sidebar-item">
                BITCOIN PRICE
              </Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact} />
            ))}
            <Route exact path="/">
              <Redirect to="/wallet" />
            </Route>
          </Switch>
        </div>

        <div style={{ flex: 1 }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default Sidebar;
