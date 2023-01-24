import { highLights, para, tagColor } from "./DataUtils";
import HighLighter from "./HighLighter";
import "./styles.css";

export default function App() {

  let paraArr = para.split(" ");
  for (let ele in highLights) {
    if (ele.split(" ").length > 1) {
      paraArr.splice(
        paraArr.indexOf(ele.split(" ")[0]),
        ele.split(" ").length,
        ele
      );
    }
  }

  return (
    <div className="App">
      <div className="para">
        {paraArr.map((word) =>
          word in highLights ? (
            <><HighLighter
              text={word}
              tagName={highLights?.[word]}
              tagColor={tagColor?.[highLights?.[word]]}
            /><span>&nbsp;</span></>
          ) : (
            <span >
              {word}
              <span>&nbsp;</span>
            </span>
          )
        )}
      </div>
    </div>
  );
}
