import type { DocgenInfo } from '../docgen/types';
import type { TSType } from './typescript';
import { convert as tsConvert } from './typescript';
import type { FlowType } from './flow';
import { convert as flowConvert } from './flow';
import { convert as propTypesConvert } from './proptypes';

export const convert = (docgenInfo: DocgenInfo) => {
  console.log('convert');
  const { type, tsType, flowType } = docgenInfo;
  if (type != null) {
    console.log('type');
    const converted = propTypesConvert(type);
    console.log(converted);
    return converted;
  }
  if (tsType != null) {
    console.log('tsType');
    const converted = tsConvert(tsType as TSType);
    console.log(converted);
    return converted;
  }
  if (flowType != null) {
    console.log('flowType');
    const converted = flowConvert(flowType as FlowType);
    console.log(converted);
    return converted;
  }

  return null;
};
