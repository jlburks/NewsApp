const router = async () => {
  const routes = [
    { path: "/dashboard", view: () => console.log("Viewing dashboard") },
    { path: "/posts", view: () => console.log("Viewing posts") },
    { path: "/setup", view: () => console.log("Viewing setup") },
  ];
};
