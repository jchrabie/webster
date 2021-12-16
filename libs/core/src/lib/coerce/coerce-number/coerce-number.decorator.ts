import { coerce } from '../coerce';
import {coerceNumberProperty} from "@angular/cdk/coercion";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const CoerceNumber = coerce((val) => coerceNumberProperty(val, 0));
