import constants from 'ccConstants';
import rest from 'ccRestClient';

export default class SampleModel {
  importData(self) {
    let input = {};

    let collection_id = [
      '96340c62-0bfd-11ee-be56-0242ac120002',
      '0ea21f72-0bfe-11ee-be56-0242ac120002',
      '2de87660-0bfe-11ee-be56-0242ac120002',
      '6112b0fa-0bfe-11ee-be56-0242ac120002'
    ];

    input[constants.CATEGORY_IDS] = collection_id.join(',');
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
