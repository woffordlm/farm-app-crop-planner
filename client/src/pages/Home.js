import Auth from '../utils/auth';
// import { QUERY_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import {QUERY_CROPREFERENCE} from '../utils/queries'
import {Button} from "react-bootstrap"
function Home() {

<<<<<<< HEAD
  const {data} = useQuery(QUERY_CROPREFERENCE);
  console.log('data:', data)
=======
  const {data, error} = useQuery(QUERY_CROPREFERENCE);
  console.log('data:', data);
 
  // const { data: userData } = useQuery(QUERY_ME);
>>>>>>> 4e2fc38695b52731aa941faafee99df47508cb93



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
