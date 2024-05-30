import Animelist from "/anime.png";
import Blog from "/blog.png";
import APIstore from "/store.png";
import tiga from "/3d.png";
import forum from "/Forum.png";
import dnd from "/dnd.png";
import CRUD_IMG from "/crud_image.png";
import video_call from "/video_call.png";
import CodeDemo from "@/component/Demo";
import {PReact, ReactNative, pythonCode} from "./file";

export const Project = [
  {
    id: 1,
    title: "AnimeList",
    desc: "this is my another project i try fullstack beginner next js creating anime list",
    img: Animelist,
    link: "https://anime-list-blue-six.vercel.app/",
  },
  {
    id: 2,
    title: "Blog",
    desc: "i build this web app blog with cms sanity",
    img: Blog,
    link: "https://rafiblog.vercel.app/",
  },
  {
    id: 3,
    title: "Fakestore API",
    desc: " this is my another project build a ecommerce with FakeStore API",
    img: APIstore,
    link: "https://result-belajar-react.vercel.app/",
  },
  {
    id: 4,
    title: "3d portfolio",
    desc: " this is my another portfolio i try and learn a underated library from js this is a three js for your info if my 3d portfolio didnt render this object please refresh i didnt know what happen in this tutor video i watch its not happen in their browser",
    img: tiga,
    link: "https://3d-portfolio-rafis-projects-3c351dc8.vercel.app",
  },
  {
    id: 5,
    title: "Forum",
    desc: " this is my another project i try make website like a forum ",
    img: forum,
    link: "https://forum-jade.vercel.app/",
  },
  {
    id: 6,
    title: "video call app",
    desc: " this is my another project i try make a video call group website using zegocloud",
    img: video_call,
    link: "https://group-call.vercel.app/",
  },
];

export const AnProject = [
  {
    id: 1,
    title: "drag and drop",
    desc: "making drag and drop feature with js library",
    img: dnd,
    link: "",
  },
  {
    id: 2,
    title: "CRUD image",
    desc: "making a crud image with express js",
    img: CRUD_IMG,
    link: "",
  },
];

export const UnDeployWork = [
  {
    id: 1,
    title: "Flask CRUD",
    demo: <CodeDemo demo={pythonCode} />,
    link: "https://github.com/rafiramdhani12/flask-crud",
  },
  {
    id: 2,
    title: "REACT + PYTHON ",
    demo: <CodeDemo demo={PReact} />,
    link: "https://github.com/rafiramdhani12/flask_crud_baru",
  },
  {
    id: 2,
    title: "LEARNING REACT NATIVE",
    demo: <CodeDemo demo={ReactNative} />,
    link: "https://github.com/rafiramdhani12/belajar-react-native",
  },
];
