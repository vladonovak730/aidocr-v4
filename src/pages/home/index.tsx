import { ImmediateValue } from './components/ImmediateValue';
import { IntelligenceLayer } from './components/IntelligenceLayer';
import { Journey } from './components/Journey';
import { OperationalTask } from './components/OperationalTask';
import { Projects } from './components/Projects';
import { Workflow } from './components/Workflow';
import { Divider } from '../../components/ui/Divider';

export const HomePage = () => {
  return (
    <>
      <IntelligenceLayer />
      <OperationalTask />
      <br />
      <br />
      <Workflow />
      <div className="container">
        <Divider />
      </div>
      <Projects />
      <div className="container">
        <Divider />
      </div>
      <ImmediateValue />
      <div className="container">
        <Divider />
      </div>
      <Journey />
    </>
  );
};
