import { Injectable } from '@angular/core';
import { DatastoreConfig, JsonApiDatastore, JsonApiDatastoreConfig } from 'angular2-jsonapi';
import { Collaborator } from '../models/collaborator';
import { environment } from '../../../environments/environment';
import { Team } from '../models/team';
import { User } from '../models/user';
import { Retro } from '../models/retro';
import { Component } from '../models/component';
import { Invite } from '../models/invite';

const config: DatastoreConfig = {
  baseUrl: environment.api,
  models: {
    team: Team,
    collaborator: Collaborator,
    user: User,
    retro: Retro,
    component: Component,
    invite: Invite,
  },
};

@Injectable()
@JsonApiDatastoreConfig(config)
export class DatastoreService extends JsonApiDatastore {}
