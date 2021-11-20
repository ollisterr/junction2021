import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { Sidebar } from "../components/Sidebar";
import { useGetApartmentGet } from "../api/default/default";

const Home: NextPage = () => {
  const { data } = useGetApartmentGet();

  console.debug(data);

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar>
        <Image src="/logo.svg" height={100} width={200} alt="" />

        <LinkList>
          <LinkWrapper>
            <Link href="/apartments">Apartments</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/users">Users</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link href="/settings">Settings</Link>
          </LinkWrapper>
        </LinkList>
      </Sidebar>

      <Main>
        <Title>sup bois</Title>
      </Main>
    </Layout>
  );
};

const Title = styled.h1`
  font-size: 3rem;
`;

const LinkWrapper = styled.li`
  cursor: pointer;
  color: ${(p) => p.theme.colors.primaryDark};

  font-size: ${(p) => p.theme.spacing.medium};
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${(p) => p.theme.spacing.medium};
  padding-top: ${(p) => p.theme.spacing.xxlarge};
`;

export default Home;
