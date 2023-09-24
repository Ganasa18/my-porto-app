import {
  ActionPayloadPortofolio,
  ActionTypes,
} from "@/interface/interface-store";

type Dispatch = (action: ActionPayloadPortofolio) => void;

const actionGetAllProject = async (dispatch: Dispatch) => {
  const response = await fetch("/api/v1/project");
  if (response.status !== 200) {
    console.log(`Failed to fetch data. Status code: ${response.status}`);
    alert("Something went wrong");
    return;
  }
  const data = await response.json();
  const typeDispatch: Dispatch = dispatch;

  typeDispatch({ type: ActionTypes.SET_DATA_PORTOFOLIO, action: data.data });
  console.log("FETCHIN DATA");
};

export { actionGetAllProject };
