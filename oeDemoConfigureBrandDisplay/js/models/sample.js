import constants from 'ccConstants';
import rest from 'ccRestClient';

export default class SampleModel {
  importData(self) {
    let input = {};

    input[constants.CATEGORY_IDS] = self.$data.collectionItem();
    let URL = constants.ENDPOINT_LIST_COLLECTIONS;

    rest.request(
      URL,
      input,
      (s) => {
        self.companyName(s);
      },
      (e) => {
        console.log('something wrong just happened', e);
      }
    );
  }
}
