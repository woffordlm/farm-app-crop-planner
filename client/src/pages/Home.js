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
<<<<<<< HEAD
            <PageTabs /> 
            <Sidebar />
=======
              <PageTabs/>
              <Sidebar/>
              
>>>>>>> 6ff13eadda31ccffb05dc7763fa58e2966cbb88e
            </div>     
          </header>
        </div>
  );
}

export default Home;
