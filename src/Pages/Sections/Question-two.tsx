import { useState } from "react";
import { FormatString } from "../../Services/SegundaQuestao";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";

interface Input {
  input: string;
  words: string;
  numbers: string;
}

const QuestionTwo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputs, setInputs] = useState<Input[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { words, number } = FormatString(inputValue.trim());
    const newEntry: Input = {
      input: inputValue,
      words: words.join(", "),
      numbers: number.join(", "),
    };
    setInputs((prevInputs) => [...prevInputs, newEntry]);
    setInputValue(""); // Limpar o input após adicionar
  };

  const handleDelete = (input: string) => {
    setInputs((prevInputs) =>
      prevInputs.filter((entry) => entry.input !== input)
    );
  };

  return (
    <div className="space-y-4 flex flex-col justify-center w-full lg:w-2/3 ">
      <Link
        to={"/"}
        className="rounded-md w-1/2 h-auto self-center  px-4 py-2 bg-orange-500 hover:bg-orange-400  text-center text-gray-100 "
      >
        Clique aqui para retornar
      </Link>
      <h1 className="text-white text-center text-2xl">Questão 2</h1>
      <p className="text-center text-orange-400">
        Exemplo de input: Ana, 89,78, Maria, 45.8, 27, 56, Paula Pereira, 978,
        A, VIVA, 35, 125, 8999,
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-3"
      >
        <label className="text-white" htmlFor="text">
          Insira os valores que deseja separar
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-4 py-2 border rounded-xl outline-none w-1/2"
        />
        <Button>Adicionar</Button>
      </form>
      <div className="flex flex-col items-center justify-center w-full">
        <ul
          className={`w-full ${
            inputs.length > 0 ? "bg-gray-700" : "bg-transparent"
          } text-white rounded-lg space-y-4 p-4`}
        >
          {inputs.map((entry, index) => (
            <li
              key={index}
              className="flex flex-col border-b text-center p-8 space-y-8"
            >
              <div className="flex space-x-4">
                <div className="flex-1 flex flex-col">
                  <span className="font-bold">Strings:</span>
                  <p className="text-center text-md">{entry.words}</p>
                </div>
                <div className="flex-1 flex flex-col">
                  <span className="font-bold">Números:</span>
                  <span>{entry.numbers}</span>
                </div>
              </div>
              <button
                className="w-1/2 self-center p-2 lg:p-1 rounded bg-red-500 text-sm"
                onClick={() => handleDelete(entry.input)}
              >
                Apagar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default QuestionTwo;
