import React, { useEffect, useRef, useState } from "react";
import MatrixRain from "./MatrixRain";
import BarrelRoll from "./BarrelRoll";

const facts = (
  <>
    <p className="text-green">Hello! I'm Earl</p>
    <p className="text-amber-400">
      I designed and developed this terminal and website in React purely for the
      enjoyment of it.
    </p>
    <br />
    <p className="text-blue-400">Currently Learning: </p>
    <li className="text-red-400"> Angular</li>
    <li className="text-orange-400"> TypeScript</li>
    <li className="text-yellow">ASP.NET</li>
    <br />
    <p className="text-[#ff74a9]">
      Type "commands" into the terminal window and hit enter to see all commands
    </p>
    <br />
  </>
);

const commands = {
  hello: ({ input, output, setOutput }) => {
    setOutput([...output, { text: `Hello! ${input.join(" ")}` }]);
  },
  info: ({ output, setOutput }) => {
    setOutput([...output, facts]);
  },
  commands: ({ output, setOutput }) => {
    setOutput([
      ...output,
      { text: "Commands available: " },
      ...Object.keys(commands).map((key) => ({ text: key })),
    ]);
  },
  clear: ({ setOutput }) => {
    setOutput([]);
  },
  random_img: ({ output, setOutput }) => {
    setOutput([
      ...output,
      <img
        src={`https://picsum.photos/200/200?random=${(() =>
          Math.floor(Math.random() * 1000))()}`}
        alt="Random Image"
      />,
    ]);
  },
  random_advice: async ({ output, setOutput }) =>
    setOutput([
      ...output,
      {
        text: (await (await fetch("https://api.adviceslip.com/advice")).json())
          .slip.advice,
      },
    ]),
  // api
  random_gif: async ({ input, output, setOutput }) => {
    if (!input[0]) {
      setOutput([...output, { text: `Enter a keyword.` }]);
      return;
    }
    const api_key = import.meta.env.VITE_tenor_api;
    const source = (
      await (
        await fetch(
          `https://tenor.googleapis.com/v2/search?q=${input}&key=${api_key}&client_key=my_test_app&limit=1&media_filter=gif&random=true`
        )
      ).json()
    )?.results[0]?.media_formats?.gif?.url;
    setOutput([
      ...output,
      source ? (
        <img src={source} alt="gif" width={200} height={200} />
      ) : (
        { text: `No Result for ${input[0]} try another keyword.` }
      ),
    ]);
  },
  chat: async ({ input, output, setOutput }) => {
    if (!input[0]) {
      setOutput([...output, { text: `Enter a keyword.` }]);
      return;
    }
    const api_key = import.meta.env.VITE_gemini_api;
    const url =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
      api_key;

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: `${input.join(" ") + " short sentence only"}`,
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 256,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    const text_data = data?.candidates[0]?.content?.parts[0]?.text;
    console.log(text_data);
    console.log(data);
    setOutput([...output, { text: `${text_data}` }]);
  },
  cool: ({ output, setOutput }) => {
    setOutput([...output, <MatrixRain key="matrix-rain" />]);
  },
  cat: ({ input, output, setOutput }) => {
    let source;
    if (input[0] == "nigga") {
      source = `cat${(() => Math.floor(Math.random() * 3))()}.jpg`;
    } else {
      source = `https://cataas.com/cat/gif?v=${(() =>
        Math.floor(Math.random() * 1000))()}`;
    }

    setOutput([...output, <img src={source} width={200} height={200}></img>]);
  },
  barrel_roll: ({ output, setOutput }) => {
    setOutput([...output, <BarrelRoll></BarrelRoll>]);
  },
};

const runCommands = ({ input, output, setOutput }) => {
  // check if input is empty
  if (input === "") {
    setOutput([...output, { text: "" }]);
  }

  const inputs = input.split(" ");
  // check if input is in commands or exist
  if (!inputs[0] || !Object.keys(commands).includes(inputs[0])) {
    // chekc if input exist or empty
    if (!inputs[0] || input[0] == "") {
      setOutput([...output, { text: `❯ ${input}` }]);
      return;
    }

    // output is not found
    setOutput([...output, { text: `command: "${inputs[0]}" not found` }]);
    return;
  }

  // push the command to latest
  output.push({ text: `❯ ${input}`, isCommand: true });
  // run the function using the first item in inputs
  commands[inputs.shift()]({ input: inputs, setOutput, output });
};

const Console = () => {
  const [input, setinput] = useState("");
  const [output, setOutput] = useState([facts, <></>]);

  const inputElement = useRef(null);

  useEffect(() => {
    console.log(output);
  }, [output]);

  return (
    // container
    <div
      className="bg-[#0f0d15] min-h-[100vh] pt-5 w-full"
      id="terminal"
      onClick={() => {
        inputElement.current.focus();
      }}
    >
      <span className="text-[4rem] md:text-[6rem] xl:text-[8rem] text-secondary absolute font-sans font-bold right-0 left-0 text-center translate-y-7">
        Terminal
      </span>
      {/* terminal */}
      <div className="max-w-3xl md:mx-auto mt-10 flex flex-col justify-center items-center min-h-[100vh] z-30 mx-12">
        <div className="hover:scale-[1.01] ease-in-out duration-300 z-30 min-w-full max-w-full">
          <header className="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3  border border-gray-700">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow"></span>
            <span className="w-3 h-3 rounded-full bg-green"></span>
          </header>

          <div className="bg-[#0e0c16] border-t-0  h-[500px] p-5 rounded-b-lg font-normal tracking-widest border border-gray-700">
            <div className="h-[87%] overflow-hidden flex flex-col justify-end">
              {output.map((line, index) =>
                React.isValidElement(line) ? (
                  <>
                    <div key={index}>{line}</div>
                  </>
                ) : (
                  <>
                    <p
                      key={index}
                      className={
                        line.isCommand ? "text-green" : "text-primaryaccent"
                      }
                    >
                      {line.text}
                    </p>
                  </>
                )
              )}
            </div>
            <form
              className=""
              onSubmit={(event) => {
                event.preventDefault();
                runCommands({ input, output, setOutput });
                setinput("");
              }}
            >
              <span className="text-[#ff74a9]">&#126;</span>
              <div className="flex">
                <span className="pr-2 text-[#ff74a9]">❯</span>
                <input
                  onChange={(e) => {
                    const input = e.target.value;
                    const command = input.split(" ").shift();
                    setinput(input);
                  }}
                  type="text"
                  value={input}
                  ref={inputElement}
                  spellCheck="false"
                  className="w-full bg-transparent text-primaryaccent outline-none "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Console;
