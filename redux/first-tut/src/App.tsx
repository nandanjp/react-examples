import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { Button } from "./components/ui/button";
import { incremented, ammountAdded } from "./features/count/counter-slice";
import { useFetchBreedsQuery } from "./features/dogs/dogs-api-slice";

const App = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleIncrement() {
    dispatch(incremented());
  }

  function handleAdd() {
    dispatch(ammountAdded(3));
  }

  const [numDogs, setNumDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <>
      <div className="p-12 min-h-screen flex flex-col justify-start items-start gap-8">
        <p className="text-5xl text-blue-500">Hello World</p>
        <p className="text-5xl text-blue-500">Current Count: {count}</p>
        <div className="flex flex-row justify-evenly items-center gap-8">
          <Button onClick={handleIncrement}>Click Me</Button>
          <Button onClick={handleAdd}>Click Also</Button>
        </div>

        <div className="">
          <p>Dogs to fetch:</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        {isFetching ? (
          <p>Fetching Data....</p>
        ) : (
          <div className="">
            <p>Number of dogs fetched: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img
                        src={breed.image.url}
                        alt={breed.name}
                        className="h-72"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
