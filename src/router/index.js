import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from '../component/HomePage/HomePage'
export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  }
]
function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}
export default Routes
