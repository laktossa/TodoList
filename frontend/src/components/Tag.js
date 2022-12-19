export default function Tag({ name, color }) {
  return (
    <>
      <div
        className="border px-5 rounded-3xl flex items-center hover:scale-110 duration-500"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-white select-none">{name}</h1>
      </div>
    </>
  );
}
