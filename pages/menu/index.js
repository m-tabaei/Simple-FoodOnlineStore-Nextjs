import MenuPages from "../../components/template/MenuPages";

function Menu({ data }) {
  return <MenuPages data={data} />;
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("https://api-storge-menu.vercel.app/data");
  const data = await res.json();
  console.log(data);
  return {
    props: { data },
    revalidate: 10,
  };
}
