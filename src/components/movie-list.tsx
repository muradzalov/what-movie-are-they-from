import { useRecoilValue } from "recoil";
import { actorOneName, actorTwoName } from "../recoil-state/atoms";

const MovieList = () => {
  const firstActorName = useRecoilValue(actorOneName)
  const secondActorName = useRecoilValue(actorTwoName)

  return (
    <div>
      Movie List
        <div>
          <ul>
            First actor name: {firstActorName}
          </ul>
          <ul>
            Second actor name: {secondActorName}
          </ul>
        </div>
    </div>
  )
}

export default MovieList;