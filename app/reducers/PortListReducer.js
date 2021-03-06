/**
 * Created by ky on 2016/11/25.
 */

import { PORT_LIST_CHANGED, PORT_LIST_SELECT } from '../actions/PortListActions';

const initialState = {
  ports: [],
};

export default function portList(state = initialState, action) {
  switch (action.type) {
    case PORT_LIST_CHANGED: {
      const ports = action.ports.filter(port => true); // TODO: filter available ports
      return (
        {
          ...state,
          ports,
        }
      );
    }
    case PORT_LIST_SELECT: {
      const selected = action.selectedPort;
      return (
        {
          ...state,
          selectedPort: selected,
        }
      );
    }
    default:
      return state;
  }
}
