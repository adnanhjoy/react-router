import './App.css';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Main from './layout/Main';
import Blog from './components/Blog/Blog';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
      { path: '/', element: <Home></Home>},
      { path: 'home', element: <Home></Home>},
      { path: 'about', element: <About></About>},
      { 
        path: 'blog',
        loader: () => {
          return fetch('https://restcountries.com/v3.1/all');
        }, 
        element: <Blog></Blog>
      },
      {
        path: '/blog/:blogId',
        loader: ({params}) => {
            return  fetch(`https://restcountries.com/v3.1/alpha/${params.blogId}`)
        },
        element: <PostDetails></PostDetails>
      }
    ]},
    {path: '*', element: <div>Not Found</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
