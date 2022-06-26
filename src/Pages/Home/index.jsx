export function Home() {
  return (
    <div className="grid-cols-2 w-screen flex justify-evenly  items-center">
      <div className="flex flex-col flex-1 max-w-[100px] h-16 gap-8 justify-start items-start">
        <span className="text-3xl font-normal text-bege-100">Wise</span>
        <span className="text-8xl font-bold text-roxo-100">Goat</span>
        <button className="bg-roxo-100 text-white rounded p-5 rounded-2xl w-64 h-24 text-2xl font-bold text-1xl">
          Pedir Conselho
        </button>
      </div>
      <img
        className="img-responsive w-[300px] pt-16"
        src="./src/img/bodezinho.png"
        alt=""
      />
    </div>
  );
}
