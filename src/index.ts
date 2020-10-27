/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.*
 */

'use strict';

import { Action } from './action';
import { Adapter } from './adapter';
import { AddonManagerProxy } from './addon-manager-proxy';
import { APIHandler, APIRequest, APIResponse } from './api-handler';
import { DONT_RESTART_EXIT_CODE, MessageType, NotificationLevel } from './constants';
import { Database } from './database';
import { Deferred } from './deferred';
import { Device } from './device';
import { Event } from './event';
import { IpcSocket } from './ipc';
import { Notifier } from './notifier';
import { Outlet } from './outlet';
import { PluginClient } from './plugin-client';
import { Property } from './property';
import { alignCenter, hexStr, padLeft, padRight, printTable, repeatChar, timestamp } from './utils';

export const getVersion = () => require('./package.json').version

export {
  Action,
  Adapter,
  AddonManagerProxy,
  APIHandler,
  APIRequest,
  APIResponse,
  DONT_RESTART_EXIT_CODE,
  MessageType,
  NotificationLevel,
  Database,
  Deferred,
  Device,
  Event,
  IpcSocket,
  Notifier,
  Outlet,
  PluginClient,
  Property,
  alignCenter,
  hexStr,
  padLeft,
  padRight,
  printTable,
  repeatChar,
  timestamp
}
