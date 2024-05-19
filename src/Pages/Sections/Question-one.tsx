import { useState } from "react";
import { formatName } from "../../Services/PrimeiraQuestao";
import { Link } from "react-router-dom";
import { Button } from "../../Components/Button";

interface Nome {
  nomeCompleto: string;
  nomeCracha: string;
}

const QuestionOne = () => {
  const [names, setNames] = useState<Nome[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleNameAddition = (nome: string) => {
    const formattedName = formatName(nome);
    const newName: Nome = { nomeCompleto: nome, nomeCracha: formattedName };
    setNames((prevNames) => [...prevNames, newName]);
    setInputValue("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNameAddition(inputValue.trim());
  };

  const handleDelete = (nomeCompleto: string) => {
    setNames((prevNames) =>
      prevNames.filter((name) => name.nomeCompleto !== nomeCompleto)
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
      <h1 className="text-white text-center text-2xl">Questão 1</h1>
      <p className="text-center text-orange-400">
        Exemplo de input: Antônio Carlos Pereira da Silva dos Santos e Machado
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-3"
      >
        <label className="text-white" htmlFor="text">
          Insira o nome desejado:
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-4 py-2 border rounded-xl outline-none w-1/2"
        />
        <Button>Adicionar</Button>
      </form>

      <div className="flex flex-col items-center justify-center ">
        <table className="min-w-full bg-gray-700 text-white rounded-lg">
          <thead>
            <tr className="p-10">
              <th className="px-4 py-4">Nome Completo Inserido</th>
              <th className="px-4 py-4">Nome para o Crachá</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {names.map((nameEntry, index) => (
              <tr key={index} className="border-t border-gray-400 ">
                <td className="px-4 py-4">{nameEntry.nomeCompleto}</td>
                <td className="px-4 py-4">{nameEntry.nomeCracha}</td>
                <td className="px-2 py-4">
                  <button
                    className="w-full p-3 lg:p-1 rounded bg-red-400 text-sm"
                    onClick={() => handleDelete(nameEntry.nomeCompleto)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionOne;
