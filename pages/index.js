import NextLink from "next/link";

import Table from "../components/table";

function Home({ items }) {
  //console.log(items);
  return (
    <div className="app">
      <div className="mb-20">
        <NextLink href="/about">О проекте</NextLink>
      </div>
      <Table items={items} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );
  const items = await res.json();

  return {
    props: {
      items
    }
  };
}

export default Home;
