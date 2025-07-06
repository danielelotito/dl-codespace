import React from "react";

const PhD = () => {
  return (
    <section className="padding" id="phd">
      <div style={{ textAlign: "center" }}>
        <h2>PhD Journey</h2>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h3>SUMMARY OF THE RESEARCH</h3>
        <h4>‘Associative Networks Beyond Pattern Retrieval’</h4>
        <p>
          During my PhD, I explored the contributions of statistical mechanics to the field of
          theoretical artificial intelligence. Specifically, I examined artificial neural networks
          equipped with a cost function, referred to as energy or Hamiltonian in physics. My focus
          was on generalizations of the Hopfield model, an associative network designed to store and
          retrieve specific information patterns. In the Hopfield model, each node, called neuron or
          spin, is fully connected to all other nodes via weighted edges, known as couplings or
          synapses. These weights are pre-determined using Hebb&apos;s rule, a mechanism that
          encodes specific spin configurations, termed patterns, as energy minima. The network can
          retrieve a pattern if the number of stored patterns is below a threshold. However,
          artificial intelligence systems aim to do more than pattern retrieval; they should also
          have capabilities such as generalization and learning.
        </p>
        <p>
          In my PhD thesis, I addressed these limitations in the context of associative networks in
          which stored and queried data share the same type. Starting from the traditional Hopfield
          model, I increased its descriptive power by enabling neurons to interact in groups larger
          than pairs. This extension allows the network to store significantly more information
          compared to the traditional model. To describe the generalization capabilities of the
          resulting model, I fed into the network noisy versions of the patterns and analytically
          derived computational phase diagrams, which I corroborated with numerical experiments.
        </p>
        <p>
          Next, I extended the Hopfield model to enable learning from data, an essential capability
          of artificial intelligence systems. The learning dynamics derived from this extension
          converge to a straightforward generalization of Hebb&apos;s rule. I then explored how the
          mathematical structure of the Hopfield cost function can be used to implement an effective
          description of physical systems, even when the elements of the systems do not interact
          instantaneously.
        </p>
        <p>
          Finally, I established a direct connection between the energy of a system and the
          dynamical system governing the evolution of its components. The resulting general
          mathematical framework enables the construction of dynamical systems that describe the
          evolution of associative network components towards the minimization of the energy
          function.
        </p>
        <p>
          To conclude, my primarily theoretical research aims to advance the interdisciplinary
          dialogue between statistical physics and artificial intelligence.
        </p>
      </div>
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "2rem 6rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h4>A poem to Physics</h4>{" "}
        <p style={{ fontStyle: "italic" }}>
          Physics,
          <br />
          the tide pulled me away,
          <br />
          but your current found its way,
          <br />
          and even now, as I let you go,
          <br />
          your waves still shape the depths below.
        </p>
        <p>
          My scientific interests are moving further and further away from physics, but physics
          always has a special meaning for me
        </p>
      </div>
    </section>
  );
};

export default PhD;
