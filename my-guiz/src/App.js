import './styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './component/Main'
import   {Quiz} from './component/quiz'
import { DBoard } from './component/DBoard';
import {SQuiz} from './component/admin/SQuiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateObject from './component/admin/CreateObject';
/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Main></Main>
  },
  {
    path : '/quiz/:title',
    element : <Quiz></Quiz>
  },
  {
    path : '/Admin',
    element : <DBoard></DBoard>
  },
  {
    path : '/Admin/Quizzes',
    element : <SQuiz></SQuiz>
  },{
    path : '/Admin/addquestion/:title',
    element : <CreateObject></CreateObject>
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
