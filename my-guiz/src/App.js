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
import { Users } from './component/admin/Users';
import Showresult from './component/admin/showresult';
//import { useAuth } from './component/AuthProvider';
//import { AuthProvider } from './component/AuthProvider'; 
const ProtectedRoute = ({children}) => {

const location=useLocation()
  const navigate = useNavigate();
  useEffect(() => {
  const savedUser = localStorage.getItem('user');
const user =JSON.parse(savedUser)

    if (!user.phase) {
      navigate('/',  {replace:true});
        }
  }, [navigate]);
if(!localStorage.getItem('user'))
return null; 

  return children;

};
const ProtectedRouteforadmin = ({children}) => {

  const location=useLocation()
    const navigate = useNavigate();
    useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const user=JSON.parse(savedUser)
  console.log(user.role)
      if (user.role===undefined) {

        navigate('/home', { state: { path: location.pathname } });
          }
    }, [navigate]);
    const savedUser = localStorage.getItem('user');

    if (!savedUser.role==='admin') 
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

    element: <ProtectedRouteforadmin>{<DBoard />}</ProtectedRouteforadmin> 

  },
  {
    path : '/Admin/Quizzes',
    element: <ProtectedRouteforadmin>{<SQuiz />}</ProtectedRouteforadmin> 


  },{
    path : '/Admin/addquestion/:title',
    element: <ProtectedRouteforadmin>{<CreateObject />}</ProtectedRouteforadmin> 


  },{
    path : '/Admin/addcover',
    element: <ProtectedRouteforadmin>{<Cover />}</ProtectedRouteforadmin> 


  },{
    path : '/Admin/updatecover/:id',
    element: <ProtectedRouteforadmin>{<Up_cover />}</ProtectedRouteforadmin> 


  },{
    path : '/Admin/ShowQuiz/:id',
    element: <ProtectedRouteforadmin>{<ShowQuiz />}</ProtectedRouteforadmin> 


  },{
    path : '/Admin/ShowQuiz/update/:_id/:id',
    element: <ProtectedRouteforadmin>{<Updatequestion />}</ProtectedRouteforadmin> 


  },{
    path : '/Admin/Adduser/',
    element: <ProtectedRouteforadmin>{<Adduser />}</ProtectedRouteforadmin> 


  },{
    path : '/Admin/users/',
    element: <ProtectedRouteforadmin>{<Users />}</ProtectedRouteforadmin> 


  },{
    path : '/Admin/result/:id',
    element: <ProtectedRouteforadmin>{<Showresult />}</ProtectedRouteforadmin> 


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
