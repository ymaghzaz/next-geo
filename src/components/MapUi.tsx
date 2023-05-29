import { useAppContext } from "@/src/providers/AppContext";
const MapUi = () => {
  const { setText } = useAppContext();
  return (
    <div className="bg-red-500 w-full h-full">
      <input
        type="text"
        className="w-1/2 h-16"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </div>
  );
};

export default MapUi;
