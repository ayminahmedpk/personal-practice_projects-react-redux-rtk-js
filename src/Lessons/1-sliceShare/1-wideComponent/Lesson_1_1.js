

import { Provider } from "react-redux";
import store from "../../../Redux/1-sliceShare/1-wideComponent/store/store";

import Narrow from "./Narrow";
import Wide from "./Wide";


const Lesson_1_1 = () => {

  return (
    <>
    <Provider store={store}>
      {/* <p>Lesson_1_1</p> */}
      <Narrow/>
      <Wide/>
    </Provider>
    </>
  )

}


export default Lesson_1_1;