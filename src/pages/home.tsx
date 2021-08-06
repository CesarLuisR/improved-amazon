import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";

import { useDispatch } from "../app/store";
import { productAction } from "../app/actions";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

import { HomeWrapper, MainWrapper } from "../styles/home.styles";

type HomeProps = (props: {
  categories: string[];
  products: object[];
}) => JSX.Element;

const Home: HomeProps = ({ categories, products }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    auth ?? router.push("/");
  }, [router]);

  useEffect(() => {
    dispatch(productAction(products));
  }, [dispatch, products]);

  return (
    <HomeWrapper>
      <Header categories={categories} />
      <MainWrapper>
        <Sidebar categories={categories} />
      </MainWrapper>
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
