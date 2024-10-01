import ZIPATO_URLS from '../../constants/zipatoUrls';
import ZipatoClient from '../../lib/zipatoClient';

interface State {
  uuid: string;
  value: {
    value: string;
    timestamp: string;
  };
}

const getStates = async (): Promise<State[]> => {
  const res = await ZipatoClient.getInstance().getClient().get(ZIPATO_URLS.getAttributeValues);

  const states: State[] = res.data.map((s: State) => ({
    uuid: s.uuid,
    value: {
      value: s.value.value,
      timestamp: s.value.timestamp,
    },
  }));

  return states;
};

export default getStates;
