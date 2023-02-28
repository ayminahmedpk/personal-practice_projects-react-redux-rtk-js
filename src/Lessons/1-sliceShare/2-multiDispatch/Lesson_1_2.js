

import { Provider } from "react-redux";
import store from "../../../Redux/1-sliceShare/2-multiDispatch/store/store";

import MultiDispatch from "./MultiDispatch";

const Lesson_1_2 = () => {

  return (
    <>
    <Provider store={store}>
      {/* <p>Lesson_1_2</p> */}
      <MultiDispatch/>
    </Provider>
    </>
  )

}


export default Lesson_1_2;