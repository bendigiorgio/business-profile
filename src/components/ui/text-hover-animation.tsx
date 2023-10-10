import React from "react";

type Props = {
  children: React.ReactNode;
};

const TextHoverAnimation = ({ children }: Props) => {
  return (
    <span className="inline-flex gap-x-9 items-center group">
      <span className="relative inline-block overflow-hidden">
        <span className="inline-flex">
          {typeof children === "string" &&
            Array.from(children).map((char, index) => (
              <span
                className="inline-block transition-[transform,opacity] ease-3 duration-700 group-hover:duration-300 text-gray-090 opacity-100 group-hover:-translate-y-full group-hover:opacity-0"
                key={`${char}-${index}-flex`}
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                {char}
              </span>
            ))}
        </span>
        <span className="absolute inline-flex top-0 left-0" aria-hidden>
          {typeof children === "string" &&
            Array.from(children).map((char, index) => (
              <span
                className="inline-block transition-[transform,opacity] ease-3 duration-700 group-hover:duration-300 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100"
                key={`${char}-${index}-flex`}
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                {char}
              </span>
            ))}
        </span>
      </span>
    </span>
  );
};

export default TextHoverAnimation;
