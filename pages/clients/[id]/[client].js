import { useRouter } from "next/router";

const SelectedClientsProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname)
  console.log(router.query)

  return (
    <div>
      <h1>SelectedClientsProjectPage</h1>
    </div>
  );
};

export default SelectedClientsProjectPage;
