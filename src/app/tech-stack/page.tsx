import MainWrapper from "@/components/MainWrapper";
import HomeContainer from "@/components/HomeContainer";
import WebTechs from "./components/WebTechs";
import ProgLangs from "./components/ProgLangs";

/* 
const tools = [
  VSCode,
  GitHub,
  Bun,
  NextJS,
  React,
  Redux,
  Sass,
  Svelte,
  Tailwind,
  PostgreSQL,
];


        <GridWrapper>
          <InfoBox title="Various Tools and Infrastructures" icon={Tool}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ea?
            Beatae tempore reprehenderit quis. Sit ducimus sed sapiente
            exercitationem optio porro? Mollitia, cumque aut. At explicabo id
            ratione sit voluptate.
          </InfoBox>

          {/* data 
          <div className="relative order-last lg:order-first overflow-hidden w-full">
            <div className="slider justify-center items-center box-border">
              <div className="slide-track">
                {tools.map((Icon, i) => (
                  <div
                    className="rounded-xl w-[250px] h-full bg-red-200"
                    key={i}
                  >
                    <Icon size={64} key={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GridWrapper>
 */

export default function Page() {
  return (
    <MainWrapper>
      <HomeContainer title="Tech Stack">
        {/* programming languages */}
        <ProgLangs />
        {/* Web Technologies */}
        <WebTechs />
        {/* TODO: Tools */}
      </HomeContainer>
    </MainWrapper>
  );
}
