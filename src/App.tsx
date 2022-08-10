import MovieList from "./components/movie-list";
import { UserInput } from "./components/user-input";

const App = () => {
  return (
    <div>
      My application
        <UserInput />
        <MovieList />
    </div>
  );
}

export default App;
