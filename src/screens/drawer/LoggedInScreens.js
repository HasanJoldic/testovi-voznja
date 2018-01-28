import { StackNavigator, DrawerNavigator } from 'react-navigation';
import AccountList from "./AccountList";
import Cards from "./Cards";
import Account from "./Account";
import AccountDetail from "./AccountDetail";
import TransactionDetail from "./TransactionDetail";



import HomeScreen from "../../components/HomeScreen";
import LoginForm from '../../components/LoginForm';

const Accounts = StackNavigator({
    AccountList: {
      screen: AccountList,
      navigationOptions: {
        header: null
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        header: null
      }
    },
    AccountDetail: {
      screen: AccountDetail,
      navigationOptions: {
        header: null
      }
    },
    TransactionDetail: {
      screen: TransactionDetail,
      navigationOptions: {
        header: null
      }
    }
});


const LoggedInScreens = DrawerNavigator({
  Accounts: { screen: Accounts },
  Cards: { screen: Cards },
});

export default LoggedInScreens;