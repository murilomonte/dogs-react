import React from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function getData(params) {
      const token = window.localStorage.getItem("token");
      const { url, options } = STATS_GET(token);
      const { response, json } = await request(url, options);
      console.log(json);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title={"Estatísticas"} />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  return null;
};

export default UserStats;
