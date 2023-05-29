import { useAppContext } from "@/src/providers/AppContext";
const HistoryUi = () => {
  const { text } = useAppContext();
  return (
    <div className="bg-blue-500 w-full h-full">
      <h1>{text}</h1>
    </div>
  );
};
export default HistoryUi;
