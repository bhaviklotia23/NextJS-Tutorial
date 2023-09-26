import { useRouter } from "next/router";

const ClientsProjectPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/clients/max/projecta");
  };

  return (
    <div>
      <h1>ClientsProjectPage</h1>
      <button onClick={handleClick}>Load Project A</button>
    </div>
  );
};

export default ClientsProjectPage;
