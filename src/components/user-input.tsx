import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { actorOneName, actorTwoName } from "../recoil-state/atoms";
import '../styles/user-input.css'

export const UserInput = () => {
  const [actorOne, setActorOne] = useRecoilState(actorOneName)
  const [actorTwo, setActorTwo] = useRecoilState(actorTwoName)
  
  const fetchCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    return response.json();
  }

  const {data, status} = useQuery(["key"], () => fetchCharacters());
  
  const handleSubmit = (event: any) => {
    event?.preventDefault();
    console.log('form submitted!')
  }

  const handleChange = (actorName: string, formSequence: "first" | "second") => {
    console.log({actorName, formSequence})
    formSequence === "first" ? setActorOne(actorName) : setActorTwo(actorName)
  }

  return (
    <div className="both-inputs-container">
      <div className="first-actor-container">
        <form onSubmit={(event) => handleSubmit(event)}>
          <label>
            First actor's name: 
            <input 
              type="text"
              value={actorOne}
              onChange={(e) => handleChange(e?.target.value, "first")}
            />
          </label>
          <input type="submit" />
        </form>
      </div>

      <div className="second-actor-container">
        <form onSubmit={(event) => handleSubmit(event)}>
          <label>
            Second actor's name: 
            <input 
              type="text"
              value={actorTwo}
              onChange={(e) => handleChange(e?.target.value, "second")}
            />
          </label>
          <input type="submit" />
        </form>
      </div>

      <div>
        {data.results.map((character: any) => 
          <div>
            {character.name}
          </div>
        )}
      </div>
    </div>
  )
}
