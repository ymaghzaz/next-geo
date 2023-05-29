import swr from "swr";
import { getUser } from "@/src/services/users";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = (props: any) => {
  return (
    <div>
      <h1>home place {props?.name} </h1>
      <button
        className={
          "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        }
        onClick={() => {}}
      >
        make api call
      </button>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  console.log("context", context);
  const user = await getUser();
  console.log("user", user);

  // cache this data for 1 hour
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=3600"
  );
  return {
    props: user,
  };
}

export default Page;
