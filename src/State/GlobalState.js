import React, { createContext } from "react";
import { ImagesPath } from "./ImagePath";

const { p1, p2, p3, p4, p5, p6, p7, p8, p9 } = ImagesPath;

const intialState = {
  teamMembers: [
    {
      id: 1,
      name: "John Smith",
      slug: "john-smith",
      depart: "Chief executive officer",
      image: p3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 2,
      name: "Jane Smith",
      slug: "jane smith",
      depart: "Chief people officer",
      image: p1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 3,
      name: "Joe Smith",
      slug: "joe-smith",
      depart: "Chief people officer",
      image: p2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 4,
      name: "Juan Carlos",
      slug: "juan-carlos",
      depart: "Chief people officer",
      image: p4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 5,
      name: "Evans Davis",
      slug: "evans-davis",
      depart: "Chief people officer",
      image: p5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 6,
      name: "Frank Louis",
      slug: "frank-louis",
      depart: "Chief people officer",
      image: p6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 7,
      name: "Irwin",
      slug: "irwin",
      depart: "Chief people officer",
      image: p9,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      id: 8,
      name: "Mike Jones",
      slug: "mike-jones",
      depart: "Chief people officer",
      image: p8,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  ",
    },
    {
      id: 9,
      name: "Sarah David ",
      slug: "sarah-david",
      depart: "Chief people officer",
      image: p7,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
  ],
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({children}) => {
  return (
    <GlobalContext.Provider value={{ team: intialState.teamMembers }}>
      {children}
    </GlobalContext.Provider>
  );
};