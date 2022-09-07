import React from "react";

const Home = ({ sick, names }) => {
  const naampie = names[Math.floor(Math.random() * 250)];
  return (
    <div>
      <h2>
        {naampie.name} {naampie.surname}
      </h2>
      <button onClick={sick}>Click</button>
    </div>
  );
};

export default Home;
