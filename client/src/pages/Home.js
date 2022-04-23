import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
function Home() {

  
  const { data: userData } = useQuery(QUERY_ME);
  // const myData = data?.allplantings || [];
  const loggedIn = Auth.loggedIn();;
  console.log('loggedIn:', loggedIn)



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
