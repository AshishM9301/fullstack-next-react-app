import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "../components/molecules/Hero/Hero";
import { LandingBody } from "../components/organisms/LandingBody/LandingBody";
import { MenuItem } from "../components/molecules/MenuItems/MenuItem";
import { TopBar } from "../components/organisms/TopBar/TopBar";
import styles from "../styles/Home.module.css";
import { LandingFooter } from "../components/organisms/LandingFooter/LandingFooter";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Super App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <Flex>
        <Hero />
      </Flex>
      <LandingBody />
      <LandingFooter />
    </div>
  );
};

export default Home;
