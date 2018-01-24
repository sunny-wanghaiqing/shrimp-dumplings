import { observable } from 'mobx';
import Rest from 'lib/rest';

export default class Repo extends Rest {
  @observable id = null;
  @observable name = '';
}
