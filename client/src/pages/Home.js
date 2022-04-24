import Auth from '../utils/auth';
// import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import {QUERY_CROPREFERENCE} from '../utils/queries'
import {Button} from "react-bootstrap"
import Sidebar from '../Components/Sidebar';
import PageTabs from '../Components/Tabs';
function Home() {

  const {data, error} = useQuery(QUERY_CROPREFERENCE);
  console.log('data:', data);
 
  // const { data: userData } = useQuery(QUERY_ME);



  return (
        <div className="App">
          <header className="App-header">
            <div className= "row" >
              <PageTabs/>
              <Sidebar/>
              
            </div>     
          </header>
        </div>
  );
}

export default Home;
