import { ImmediateValue } from "./components/ImmediateValue";
import { IntelligenceLayer } from "./components/IntelligenceLayer";
import { Journey } from "./components/Journey";
import { OperationalTask } from "./components/OperationalTask";
import { Projects } from "./components/Projects";
import { Workflow } from "./components/Workflow";
import { Layout } from "../../components/layout";

export const HomePage = () => {
  return (
    <Layout>
      <IntelligenceLayer />
      <OperationalTask />
      <br />
      <br />
      <Workflow />
      <div className="container">
        <hr className="divider" />
      </div>
      <Projects />
      <div className="container">
        <hr className="divider" />
      </div>
      <ImmediateValue />
      <div className="container">
        <hr className="divider" />
      </div>
      <Journey />
    </Layout>
  );
}