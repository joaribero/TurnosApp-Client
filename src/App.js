import AppRouter from "./routers/AppRouter";
import AuthState from "./context/auth/authState";


function App() {
  return (
    <div>
      <AuthState>
          <AppRouter/>
      </AuthState>    
    </div>
  );
}

export default App;
