'use strict';

import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/api/tasks.js';

Meteor.startup(() => {
  //Tasks.insert({ text: "Hello world!", createdAt: new Date() });
});
