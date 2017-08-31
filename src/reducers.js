import {
  SET_VERSION,
  UPDATE_STATUSES,
  SUBMIT_VERSION,
  UPDATE_LATEST_CHANNEL_VERSIONS,
  UPDATE_VERSION_INPUT,
} from './actions';

const initialStatuses = {
  archive: null,
  release_notes: null,
  security_advisories: null,
  download_links: null,
  product_details: null,
};

const initialState = {
  version: '',
  versionInput: '',
  latestChannelVersions: null,
  statuses: initialStatuses,
};

export function deliveryDashboard(state = initialState, action) {
  switch (action.type) {
    case SET_VERSION:
      return Object.assign({}, state, {
        version: action.version,
        versionInput: action.version,
        statuses: initialStatuses,
      });
    case UPDATE_VERSION_INPUT:
      return Object.assign({}, state, {
        versionInput: action.version,
      });
    case SUBMIT_VERSION:
      return Object.assign({}, state, {
        version: state.versionInput,
      });
    case UPDATE_LATEST_CHANNEL_VERSIONS:
      return Object.assign({}, state, {
        latestChannelVersions: action.versions,
      });
    case UPDATE_STATUSES:
      return Object.assign({}, state, {
        statuses: action.statuses,
      });
    default:
      return state;
  }
}