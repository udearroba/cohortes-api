import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './cohortesds.datasource.json';

export class CohortesdsDataSource extends juggler.DataSource {
  static dataSourceName = 'cohortesds';

  constructor(
    @inject('datasources.config.cohortesds', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
