import Auth from '../utils/auth';
// import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import {QUERY_CROPREFERENCE} from '../utils/queries'
import {Button} from "react-bootstrap"
function Home() {

  const {data} = useQuery(QUERY_CROPREFERENCE);
  console.log('data:', data)



  return (
        <div className="App">
          <header className="App-header">
            <div className= "row" >
            </div>     
          </header>
        </div>
  );
}

export default Home;
