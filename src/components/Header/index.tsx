import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/img/logo.png";
import useSWR from "swr";
import * as S from "./styles";
import { getCategories } from "service/category/getCategories";

export const Header = () => {
  const { data } = useSWR("/api/categories", getCategories);

  return (
    <S.Content>
      <S.Wrapper>
        <Image src={logo} alt="" width="72" />

        <S.MenuContent>
          {data?.map((category: any) => (
            <li key={category.name}>
              <Link href={category.slug}>{category.name}</Link>
            </li>
          ))}
        </S.MenuContent>
      </S.Wrapper>
    </S.Content>
  );
};
