import type { NextPage } from "next";
import axios from "axios";
import { useQuery } from "react-query";

const getGitHubFile = async () => {
  return axios
    .get(
      "https://api.github.com/repos/albingroen/prismabuilder.io/contents/package.json"
    )
    .then((res) => res.data);
};

const Home: NextPage = () => {
  const { refetch } = useQuery("file", getGitHubFile);

  return (
    <button
      onClick={() => {
        refetch();
      }}
    >
      Refetch
    </button>
  );
};

export default Home;
