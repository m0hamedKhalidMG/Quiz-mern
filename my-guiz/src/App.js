import './styles/App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
  },{
    path : '/Admin/addcover',
    element : <Cover></Cover>
  },{
    path : '/Admin/updatecover/:id',
    element : <Up_cover></Up_cover>
  },{
    path : '/Admin/ShowQuiz/:id',
    element : <ShowQuiz></ShowQuiz>
  },{
    path : '/Admin/ShowQuiz/update/:_id/:id',
    element : <Updatequestion></Updatequestion>
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
