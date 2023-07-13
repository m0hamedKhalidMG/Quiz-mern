import './styles/App.css';
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom'
import  { useEffect } from 'react';
import { useNavigate ,useLocation } from 'react-router-dom';
import Main from './component/Main'
import   {Quiz} from './component/quiz'
import { DBoard } from './component/DBoard';
import {SQuiz} from './component/admin/SQuiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateObject from './component/admin/CreateObject';
import { Cover } from './component/admin/cover';
import { Up_cover } from './component/admin/Up_cover';
import { ShowQuiz } from './component/admin/ShowQuiz';
import { Updatequestion } from './component/admin/Updatequestion';
import { Login } from './component/login';
import { Adduser } from './component/admin/user';
//import { useAuth } from './component/AuthProvider';
//import { AuthProvider } from './component/AuthProvider'; 
const ProtectedRoute = ({children}) => {
const location=useLocation()
/*const auth = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
console.log(JSON.parse(savedUser))
    if (savedUser) {
      auth.logIn(JSON.parse(savedUser));    }
  }, []);
  useEffect(() => {
    if (!auth.user) {

      navigate('/'); 
    }
  }, [auth, navigate]);

  if (!auth.user) {
 
    return null; 
  }

  return children;*/

  const navigate = useNavigate();
  useEffect(() => {
  const savedUser = localStorage.getItem('user');
console.log(JSON.parse(savedUser))
    if (!savedUser) {
      navigate('/', { state: { path: location.pathname } });
        }
  }, [navigate]);
if(!localStorage.getItem('user'))
return null; 

  return children;

};
const router = createBrowserRouter([
  {
    path : '/',
    element : <Login></Login>
  },
  {
    path : '/home',
    element: <ProtectedRoute>{<Main />}</ProtectedRoute> 
  },
  {
    path : '/quiz/:title',
    element: <ProtectedRoute>{<Quiz />}</ProtectedRoute> 


  },
  {
    path : '/Admin',

    element: <ProtectedRoute>{<DBoard />}</ProtectedRoute> 

  },
  {
    path : '/Admin/Quizzes',
    element: <ProtectedRoute>{<SQuiz />}</ProtectedRoute> 


  },{
    path : '/Admin/addquestion/:title',
    element: <ProtectedRoute>{<CreateObject />}</ProtectedRoute> 


  },{
    path : '/Admin/addcover',
    element: <ProtectedRoute>{<Cover />}</ProtectedRoute> 


  },{
    path : '/Admin/updatecover/:id',
    element: <ProtectedRoute>{<Up_cover />}</ProtectedRoute> 


  },{
    path : '/Admin/ShowQuiz/:id',
    element: <ProtectedRoute>{<ShowQuiz />}</ProtectedRoute> 


  },{
    path : '/Admin/ShowQuiz/update/:_id/:id',
    element: <ProtectedRoute>{<Updatequestion />}</ProtectedRoute> 


  },{
    path : '/Admin/Adduser/',
    element: <ProtectedRoute>{<Adduser />}</ProtectedRoute> 


  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
