/* eslint-disable no-underscore-dangle */

import type { Component } from '../../types';
import { str } from './string';

export function hasDocgen(component: Component): boolean {
  return !!component.__docgenInfo;
}

export function isValidDocgenSection(docgenSection: any) {
  return docgenSection != null && Object.keys(docgenSection).length > 0;
}

export function getDocgenSection(component: Component, section: string): any {
  console.log('component');
  console.log(component);
  console.log('component.__docgenInfo');
  console.log(component.__docgenInfo);
  return hasDocgen(component) ? component.__docgenInfo[section] : null;
}

export function getDocgenDescription(component: Component): string {
  return hasDocgen(component) && str(component.__docgenInfo.description);
}
