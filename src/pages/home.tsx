import { HomeWrapper } from "../styles/home.styles";
import axios from "axios";
import { useEffect } from "react";
import Header from "../components/layout/Header";
import { useDispatch } from "../app/store";
import { productAction } from "../app/actions";

type HomeProps = (props: {
  categories: string[];
  products: object[];
}) => JSX.Element;

const Home: HomeProps = ({ categories, products }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction(products));
  }, [dispatch, products]);

  return (
    <HomeWrapper>
      <Header categories={categories} />
    </HomeWrapper>
  );
};

export const getStaticProps = async () => {
  const categories = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  const products = await axios.get("https://fakestoreapi.com/products");

  return {
    props: {
      categories: categories.data,
      products: products.data,
    },
  };
};

export default Home;
