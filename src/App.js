import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/home'
// import {DataModalProvider} from './context/index';

function App() {
    return (
        // <DataModalProvider>
            <Router>
                <Switch>
                <Route path="/" component={Home} />
                </Switch>
            </Router>
        // </DataModalProvider>
    );
}

export default App;