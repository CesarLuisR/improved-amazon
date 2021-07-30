import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import {
  AppWrapper,
  Auth,
  ImageContainer,
  AuthForm,
  Input,
  SubmitButton,
} from "../styles/index.styles";

const AppContainer = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<object>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("auth", JSON.stringify(formData));
    router.push("/home");
  };

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    isAuth && router.push("/home");
  }, [router]);

  return (
    <AppWrapper>
      <Auth>
        <ImageContainer>
          <Image src="/Logo.png" alt="logo" width={1920} height={1080} />
        </ImageContainer>
        <AuthForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Fake username"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Fake email"
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Fake password"
            onChange={handleChange}
            required
          />
          <SubmitButton value="Register" />
        </AuthForm>
      </Auth>
    </AppWrapper>
  );
};

export default AppContainer;
