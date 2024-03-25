import { Fragment, PureComponent, useState } from "react";
import Message from "./components/message";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import "./App.css";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBing from "./components/EventBing";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NalmeList from "./components/NalmeList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import LifecycleA from "./components/LifecycleA";
import Fragmentdemo from "./components/Fragmentdemo";
import Table from "./components/Table";
import Regularcomponent from "./components/Regularcomponent";
import PureandRegComp from "./components/PureandRegComp";
import RefsDemo from "./components/RefsDemo";
import Focusinput from "./components/Focusinput";
import FRParentinput from "./components/FRParentinput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import Errorboundary from "./components/Errorboundary";
import Clickcounter from "./components/Clickcounter";
import Hovercounter from "./components/Hovercounter";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* < Form /> */}
      {/* <LifecycleA /> */}
      {/* <Fragmentdemo /> */}
      {/* <Table /> */}
      {/* <PureandRegComp /> */}
      {/* <RefsDemo/> */}
      {/* <Focusinput/> */}
      {/* <FRParentinput /> */}
      {/* <PortalDemo /> */}
      {/* <Errorboundary>
        <Hero heroname={"batman"} />
      </Errorboundary>
      <Errorboundary>
        <Hero heroname={"superman"} />
      </Errorboundary>
      <Errorboundary>
        <Hero heroname={"joker"} />
      </Errorboundary> */}
      <Clickcounter name='vishwas' />
      <Hovercounter />
      < User render={(isloggedin) => isloggedin ? 'vishwas' : 'guest'} />
      {/* <h2 className='error'>error</h2>
      <h3 className={styles.success}>success</h3> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <Message />
      <Counter />
      <Greet name="John Cena" heroname="UNOCME" /> */}
      {/* <Welcome name="John Cena" heroname="UNOCME" /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBing /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* < NalmeList /> */}
    </div>
  );
}

export default App;
