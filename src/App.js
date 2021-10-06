import AppRouter from "./routers/AppRouter";
import AuthState from "./context/auth/authState";
import UserState from "./context/user/userState";


function App() {
  return (
    <div>
      <AuthState>
        <UserState>
          <AppRouter/>
        </UserState>
      </AuthState>    
    </div>
  );
}

export default App;
