/// <reference types="react-scripts" />

interface Blog {
  id?:number | string;
  add: string;
  title: string;
  data: string;
  description: string;
  img: string;
}

interface Nav {
  name: string;
  id: number | string;
  url: string;
}