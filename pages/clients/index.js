import Link from "next/link";

const Clients = () => {
  return (
    <div>
      <h1>ClientsPage</h1>
      <ul>
        <li>
          <Link href="/clients/max">Max</Link>
        </li>
        <li>
          <Link href="/clients/manuel">Manuel</Link>
        </li>
      </ul>
    </div>
  );
};

export default Clients;
